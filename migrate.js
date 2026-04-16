const fs = require('fs-extra');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const TurndownService = require('turndown');

const turndownService = new TurndownService({
  headingStyle: 'atx'
});

turndownService.addRule('callout', {
  filter: function (node) {
    return node.nodeName === 'DIV' && node.classList.contains('callout');
  },
  replacement: function (content, node) {
    const isWarning = node.classList.contains('warning');
    const type = isWarning ? 'WARNING' : 'INFO';
    let title = '';
    const h4 = node.querySelector('h4');
    if (h4) {
      title = h4.textContent.replace('⚠️', '').replace('ℹ️', '').trim();
    }
    const p = node.querySelector('p');
    const text = p ? p.textContent : '';
    return `\n> [!${type}] ${title}\n> ${text}\n\n`;
  }
});

turndownService.addRule('cards', {
  filter: function(node) {
    return node.nodeName === 'DIV' && node.classList.contains('card');
  },
  replacement: function (content, node) {
    const title = node.querySelector('.card-title');
    const ul = node.querySelector('ul');
    let md = `\n### ${title ? title.textContent : 'Tópicos'}\n\n`;
    if (ul) {
      const lis = ul.querySelectorAll('li');
      lis.forEach(li => {
        md += `- ${li.textContent.trim()}\n`;
      });
    }
    return md + '\n';
  }
});

async function run() {
  const exampleDir = path.join(__dirname, 'example');
  const contentDir = path.join(__dirname, 'content');
  
  const files = await fs.readdir(exampleDir);
  const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'layout.html');
  
  const appJsStr = await fs.readFile(path.join(exampleDir, 'js', 'app.js'), 'utf-8');
  let syllabusData = [];
  const syllabusMatch = appJsStr.match(/const syllabus = \[([\s\S]*?)\];/);
  if (syllabusMatch) {
    try {
      syllabusData = eval(`[${syllabusMatch[1]}]`);
    } catch(e) {}
  }

  for (const file of htmlFiles) {
    const slug = path.basename(file, '.html');
    const htmlObj = await fs.readFile(path.join(exampleDir, file), 'utf-8');
    
    const dom = new JSDOM(htmlObj);
    const document = dom.window.document;
    
    const metaInfo = syllabusData.find(s => s.id === slug) || { title: slug, block: "Aulas", duration: "6h" };
    
    let description = '';
    const hero = document.querySelector('.hero');
    if (hero) {
      const p = hero.querySelector('p');
      if (p) description = p.textContent.replace(/"/g, '\\"');
      hero.remove();
    }
    
    const prog = document.querySelector('.progress-section');
    if (prog) prog.remove();

    const mainContent = document.querySelector('main.main-content');
    if (!mainContent) continue;

    const htmlToParse = mainContent.innerHTML;
    let markdownStr = turndownService.turndown(htmlToParse);
    
    let frontmatter = `---\ntitle: "${metaInfo.title.replace(/"/g, '\\"')}"\nblock: "${metaInfo.block}"\nduration: "${metaInfo.duration}"\ndescription: "${description}"\n---\n\n`;
    
    // Add our test image to b1-aula1
    if (slug === 'b1-aula1') {
      markdownStr += `\n\n![Logo do React Native](images/react-native.svg)\n\n`;
    }

    await fs.writeFile(path.join(contentDir, `${slug}.md`), frontmatter + markdownStr);
    console.log(`Migrated ${slug}`);
  }
}

run().catch(console.error);
