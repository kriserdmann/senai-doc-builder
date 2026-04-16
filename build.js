const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const yaml = require('js-yaml');
const hljs = require('highlight.js');

marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs language-'
});

function processMarkdownHTML(html) {
  // Safe Callout parsing
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    const calloutMatch = inner.match(/^\s*<p>\[!(INFO|WARNING)\](.*?)((<br>|<\/p>|\r?\n)[\s\S]*)$/i);
    if (calloutMatch) {
      const type = calloutMatch[1].toLowerCase();
      const title = calloutMatch[2].trim();
      let rest = calloutMatch[3];
      
      const h4 = title ? `<h4>${title}</h4>\n` : '';
      
      if (rest.startsWith('</p>')) {
        rest = rest.substring(4);
      } else if (rest.startsWith('<br>')) {
        rest = '<p>' + rest.substring(4);
      } else {
        rest = '<p>' + rest.replace(/^\s+/, '');
      }
      
      return `<div class="callout ${type}">\n${h4}${rest}\n</div>`;
    }
    return match;
  });

  // Cards parsing matches h2 or h3 followed by ol/ul
  html = html.replace(/<(h[23])(.*?)>(.*?)<\/\1>\s*<(ul|ol)>([\s\S]*?)<\/\4>/g, (match, hTag, hAttrs, hText, listTag, listContent) => {
    const listClass = listTag === 'ul' ? ' class="capabilities-list"' : '';
    return `<div class="card">\n<h3 class="card-title"${hAttrs}>${hText}</h3>\n<${listTag}${listClass}>\n${listContent}\n</${listTag}>\n</div>`;
  });

  // Images
  html = html.replace(/<img(.*?)alt="(.*?)"(.*?)>/gi, (match, prefix, alt, suffix) => {
    return `<figure class="image-wrapper">\n<img${prefix}alt="${alt}"${suffix}>\n` +
           (alt ? `<figcaption>${alt}</figcaption>\n` : '') +
           `</figure>`;
  });

  // Callout detection for pure Notion Emojis (💡, ⚠️, 🚨, ℹ️) mapped to callouts
  html = html.replace(/<p>([💡ℹ️])\s*([\s\S]*?)<\/p>/gi, '<div class="callout info">\n<p>$2</p>\n</div>');
  html = html.replace(/<p>([⚠️🚨])\s*([\s\S]*?)<\/p>/gi, '<div class="callout warning">\n<p>$2</p>\n</div>');

  return html;
}

function processTemplate(templateStr, data) {
  let result = templateStr;
  result = result.replace(/\{\{id\}\}/g, data.id || '');
  result = result.replace(/\{\{title\}\}/g, data.title || '');
  result = result.replace(/\{\{duration\}\}/g, data.duration || '');
  result = result.replace(/\{\{description\}\}/g, data.description || '');
  
  if (data.duration) {
    result = result.replace(/\{\{#if duration\}\}([\s\S]*?)\{\{\/if\}\}/gd, '$1');
  } else {
    result = result.replace(/\{\{#if duration\}\}[\s\S]*?\{\{\/if\}\}/gd, '');
  }
  
  if (data.description) {
    result = result.replace(/\{\{#if description\}\}([\s\S]*?)\{\{\/if\}\}/gd, '$1');
  } else {
    result = result.replace(/\{\{#if description\}\}[\s\S]*?\{\{\/if\}\}/gd, '');
  }
  
  result = result.replace(/\{\{content\}\}/g, data.content || '');
  return result;
}

async function build() {
  const contentDir = path.join(__dirname, 'content');
  const distDir = path.join(__dirname, 'dist');
  const publicDir = path.join(__dirname, 'public');
  const templatesDir = path.join(__dirname, 'templates');

  await fs.ensureDir(contentDir);
  await fs.emptyDir(distDir);
  await fs.copy(publicDir, distDir);

  const contentImagesDir = path.join(contentDir, 'images');
  if (await fs.pathExists(contentImagesDir)) {
    await fs.copy(contentImagesDir, path.join(distDir, 'images'));
  }

  const layoutTemplate = await fs.readFile(path.join(templatesDir, 'layout.html'), 'utf-8');
  const indexTemplate = await fs.readFile(path.join(templatesDir, 'index.html'), 'utf-8');

  const files = await fs.readdir(contentDir);
  const mdFiles = files.filter(f => f.endsWith('.md'));

  let syllabus = [];

  for (const file of mdFiles) {
    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Frontmatter extraction
    const match = fileContent.match(/^(?:---)\n([\s\S]+?)\n(?:---)\n([\s\S]*)$/);
    
    let meta = {};
    let markdownContent = fileContent;

    if (match) {
      try {
        meta = yaml.load(match[1]);
        markdownContent = match[2];
      } catch (e) {
        console.error(`Invalid yaml in ${file}:`, e);
      }
    }

    const { title = '', block = 'Aulas', duration = '', description = '' } = meta;
    const baseName = path.basename(file, '.md');
    
    // Notion Export Compatibility
    markdownContent = markdownContent.replace(/!\[(.*?)\]\(attachment:[^:)]+:(.*?)\)/g, '![$1](images/$2)');
    
    let htmlContent = marked.parse(markdownContent);
    htmlContent = processMarkdownHTML(htmlContent);

    const template = baseName === 'index' ? indexTemplate : layoutTemplate;
    const finalHtml = processTemplate(template, {
      id: baseName,
      title,
      duration,
      description,
      content: htmlContent
    });

    await fs.writeFile(path.join(distDir, `${baseName}.html`), finalHtml);
    
    if (baseName !== 'index') {
      syllabus.push({
        id: baseName,
        title: title || baseName,
        block: block,
        duration: duration,
        file: file
      });
    }
  }
  
  // Sort or structure syllabus later if needed
  
  const dataJsContent = `const syllabus = ${JSON.stringify(syllabus, null, 2)};`;
  await fs.ensureDir(path.join(distDir, 'js'));
  await fs.writeFile(path.join(distDir, 'js', 'data.js'), dataJsContent);

  console.log('Build OK. Gerados ' + mdFiles.length + ' arquivos HTML em /dist');
}

build().catch(console.error);
