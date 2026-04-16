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
  // Safe Callout parsing for > [!INFO] / > [!WARNING]
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/gi, (match, inner) => {
    const calloutMatch = inner.match(/^\s*<p>\[!(INFO|WARNING)\](.*?)((<br>|<\/p>|\r?\n)[\s\S]*)$/i);
    if (calloutMatch) {
      const type = calloutMatch[1].toLowerCase();
      const title = calloutMatch[2].trim();
      let rest = calloutMatch[3];
      const h4 = title ? `<h4>${title}</h4>\n` : '';
      if (rest.startsWith('</p>')) rest = rest.substring(4);
      else if (rest.startsWith('<br>')) rest = '<p>' + rest.substring(4);
      else rest = '<p>' + rest.replace(/^\s+/, '');
      return `<div class="callout ${type}">\n${h4}${rest}\n</div>`;
    }
    return match;
  });

  // Cards parsing: h2 or h3 followed by ol/ul
  html = html.replace(/<(h[23])(.*?)>(.*?)<\/\1>\s*<(ul|ol)>([\s\S]*?)<\/\4>/g, (match, hTag, hAttrs, hText, listTag, listContent) => {
    const listClass = listTag === 'ul' ? ' class="capabilities-list"' : '';
    return `<div class="card">\n<h3 class="card-title"${hAttrs}>${hText}</h3>\n<${listTag}${listClass}>\n${listContent}\n</${listTag}>\n</div>`;
  });

  // Images → figure with figcaption
  html = html.replace(/<img(.*?)alt="(.*?)"(.*?)>/gi, (match, prefix, alt, suffix) => {
    return `<figure class="image-wrapper">\n<img${prefix}alt="${alt}"${suffix}>\n` +
           (alt ? `<figcaption>${alt}</figcaption>\n` : '') +
           `</figure>`;
  });

  // Callout detection for Notion emojis
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

/**
 * Strips the Notion UUID suffix from a filename.
 * e.g. "2 6 Técnica de Elicitação — Prototipagem 339e75fa51d180dbb998c189f81c6bad"
 *   → "2 6 Técnica de Elicitação — Prototipagem"
 */
function stripNotionUUID(name) {
  return name.replace(/\s+[0-9a-f]{32}$/, '').trim();
}

/**
 * Converts a Notion page name to a slug suitable for HTML filenames.
 * e.g. "2 6 Técnica de Elicitação — Prototipagem" → "2-6-tecnica-de-elicitacao-prototipagem"
 */
function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // remove accents
    .replace(/[–—]/g, '-')             // em/en dashes
    .replace(/[^a-zA-Z0-9\s-]/g, '')  // remove special chars
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/**
 * Recursively collects all .md files from a directory tree.
 * Returns array of { filePath, relDir } where relDir is relative to contentDir.
 */
async function collectMdFiles(dir, contentDir) {
  const results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await collectMdFiles(fullPath, contentDir);
      results.push(...sub);
    } else if (entry.name.endsWith('.md')) {
      results.push({ filePath: fullPath, relDir: path.relative(contentDir, dir) });
    }
  }
  return results;
}

/**
 * Parses the page number prefix from a Notion file name (without UUID and extension).
 * e.g. "1 2 O Ciclo de Vida" → { block: "1", lesson: "2" }  → sortKey: "01.02"
 * e.g. "1 1 Sistemas" → sortKey: "01.01"
 */
function parseSortKey(cleanName) {
  const m = cleanName.match(/^(\d+)\s+(\d+)/);
  if (m) {
    return `${m[1].padStart(2,'0')}.${m[2].padStart(2,'0')}`;
  }
  return cleanName;
}

/**
 * Given a clean page name like "1 2 O Ciclo de Vida..." 
 * extracts the block number (first digit group) and returns a label.
 */
function extractBlockFromName(cleanName) {
  const m = cleanName.match(/^(\d+)\s+(\d+)\s+(.+)/);
  if (m) {
    return `Bloco ${m[1]}`;
  }
  return 'Aulas';
}

async function build() {
  const contentDir = path.join(__dirname, 'content');
  const distDir = path.join(__dirname, 'dist');
  const publicDir = path.join(__dirname, 'public');
  const templatesDir = path.join(__dirname, 'templates');

  await fs.ensureDir(contentDir);
  await fs.emptyDir(distDir);
  await fs.copy(publicDir, distDir);

  // Copy legacy /content/images if present
  const legacyImages = path.join(contentDir, 'images');
  if (await fs.pathExists(legacyImages)) {
    await fs.copy(legacyImages, path.join(distDir, 'images'));
  }

  const layoutTemplate = await fs.readFile(path.join(templatesDir, 'layout.html'), 'utf-8');
  const indexTemplate = await fs.readFile(path.join(templatesDir, 'index.html'), 'utf-8');

  // Collect ALL .md files recursively
  const allMdFiles = await collectMdFiles(contentDir, contentDir);
  
  let syllabus = [];
  let generatedCount = 0;

  for (const { filePath, relDir } of allMdFiles) {
    const fileName = path.basename(filePath, '.md');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // --- Determine if it's a Notion export (has UUID in name) or legacy (has frontmatter) ---
    const isNotionExport = /[0-9a-f]{32}$/.test(fileName);

    let meta = {};
    let markdownContent = fileContent;

    if (!isNotionExport) {
      // Legacy: try to parse frontmatter
      const match = fileContent.match(/^(?:---)\n([\s\S]+?)\n(?:---)\n([\s\S]*)$/);
      if (match) {
        try { meta = yaml.load(match[1]); markdownContent = match[2]; } catch (e) { console.error('YAML error:', e); }
      }
    }

    // --- Derive title, block, slug ---
    let title = meta.title || '';
    let block = meta.block || 'Aulas';
    let duration = meta.duration || '';
    let description = meta.description || '';
    let baseName = path.basename(filePath, '.md');

    if (isNotionExport) {
      const cleanName = stripNotionUUID(fileName);
      block = extractBlockFromName(cleanName);
      baseName = slugify(cleanName);
    }

    // Strip the FIRST H1 across all pages so it only appears in the Hero block
    const h1Match = markdownContent.match(/^(?:#\s+)(.+)$/m);
    if (h1Match) {
      if (!title || isNotionExport) {
        title = h1Match[1].trim();
      }
      markdownContent = markdownContent.replace(h1Match[0], '').replace(/^\s+/, '');
    } else if (isNotionExport && !title) {
       title = stripNotionUUID(fileName);
    }

    // --- Copy Notion image subfolders to dist/images ---
    // In Notion exports, images live in a subfolder named after the page (without UUID)
    const cleanPageName = stripNotionUUID(fileName);
    const notionImgSubfolder = path.join(path.dirname(filePath), cleanPageName);
    if (await fs.pathExists(notionImgSubfolder)) {
      // Copy everything to dist/images/
      await fs.copy(notionImgSubfolder, path.join(distDir, 'images'), { overwrite: true });
    }

    // --- Fix image paths in markdown ---
    // Notion uses relative paths like: 2%206%20T%C3%A9cnica.../image.jpg
    // We flatten to: images/image.jpg
    markdownContent = markdownContent
      // Fix attachment:uuid: syntax (old)
      .replace(/!\[(.*?)\]\(attachment:[^:)]+:(.*?)\)/g, '![$1](images/$2)')
      // Fix Notion relative subfolder paths: ![alt](SubFolder%20Name/image.ext) → ![alt](images/image.ext)
      .replace(/!\[(.*?)\]\(([^)]+?)\/([\w%.-]+\.(jpg|jpeg|png|gif|svg|webp))\)/gi, '![$1](images/$3)')
      // Fix URL-encoded image names at root: ![alt](image%20name.jpg) → decode and wrap
      .replace(/!\[(.*?)\]\(([^)]+%[0-9A-F]{2}[^)]*\.(jpg|jpeg|png|gif|svg|webp))\)/gi, (m, alt, encoded) => {
        const decoded = decodeURIComponent(path.basename(encoded));
        return `![${alt}](images/${decoded})`;
      });

    let htmlContent = marked.parse(markdownContent);
    htmlContent = processMarkdownHTML(htmlContent);

    const isIndex = baseName === 'index';
    const template = isIndex ? indexTemplate : layoutTemplate;
    const finalHtml = processTemplate(template, { id: baseName, title, duration, description, content: htmlContent });

    await fs.writeFile(path.join(distDir, `${baseName}.html`), finalHtml);
    generatedCount++;

    if (!isIndex) {
      syllabus.push({ id: baseName, title: title || baseName, block, duration, sortKey: isNotionExport ? parseSortKey(cleanPageName) : baseName });
    }
  }

  // Sort syllabus by sortKey for correct sidebar order
  syllabus.sort((a, b) => a.sortKey.localeCompare(b.sortKey));

  const dataJsContent = `const syllabus = ${JSON.stringify(syllabus, null, 2)};`;
  await fs.ensureDir(path.join(distDir, 'js'));
  await fs.writeFile(path.join(distDir, 'js', 'data.js'), dataJsContent);

  console.log(`Build OK. Gerados ${generatedCount} arquivos HTML em /dist`);
}

build().catch(console.error);
