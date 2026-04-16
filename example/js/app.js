/**
 * Aplicação Central (Motor MPA)
 * Controle de navegação dinâmico via JavaScript mantendo o conteúdo independente por HTML.
 */

const state = {
  ucName: "Programação de Aplicativos Mobile",
  workload: "90h (15 aulas)",
  semester: "Atual",
  framework: "React Native",
  constraints: "Uso exclusivo de emuladores (sem uso de celulares físicos)",
  completedLessons: JSON.parse(localStorage.getItem('completedLessons') || '[]')
};

const syllabus = [
  // Bloco 1
  { id: "b1-aula1", title: "Ecossistema mobile e configuração do ambiente (React Native)", block: "Fundamentos e Interface", duration: "6h" },
  { id: "b1-aula2", title: "Componentes básicos e tela de Login", block: "Fundamentos e Interface", duration: "6h" },
  { id: "b1-aula3", title: "Layout responsivo com Flexbox", block: "Fundamentos e Interface", duration: "6h" },
  { id: "b1-aula4", title: "Navegação (Stack, Tabs, Drawer)", block: "Fundamentos e Interface", duration: "6h" },
  { id: "b1-aula5", title: "Acessibilidade e Avaliação 01", block: "Fundamentos e Interface", duration: "6h" },
  // Bloco 2
  { id: "b2-aula1", title: "Consumo de APIs RESTful", block: "Dados e Recursos Nativos", duration: "6h" },
  { id: "b2-aula2", title: "Persistência local e cache offline", block: "Dados e Recursos Nativos", duration: "6h" },
  { id: "b2-aula3", title: "Integração com GPS e Câmera (Emulada)", block: "Dados e Recursos Nativos", duration: "6h" },
  { id: "b2-aula4", title: "Segurança e autenticação JWT", block: "Dados e Recursos Nativos", duration: "6h" },
  { id: "b2-aula5", title: "Push Notifications e Avaliação 02", block: "Dados e Recursos Nativos", duration: "6h" },
  // Bloco 3
  { id: "b3-aula1", title: "Planejamento de testes", block: "Testes, Agilidade e Entrega", duration: "6h" },
  { id: "b3-aula2", title: "Execução de testes e debugging", block: "Testes, Agilidade e Entrega", duration: "6h" },
  { id: "b3-aula3", title: "Refatoração e Code Review (Kanban)", block: "Testes, Agilidade e Entrega", duration: "6h" },
  { id: "b3-aula4", title: "Processo de Build (APK)", block: "Testes, Agilidade e Entrega", duration: "6h" },
  { id: "b3-aula5", title: "Entrega Final (Pitch) e Prática", block: "Testes, Agilidade e Entrega", duration: "6h" }
];

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();

  // Se estivermos na dashboard (index), chama a função de render de cards
  if (document.body.dataset.page === 'dashboard') {
    renderHomeCards();
  }
});

function renderSidebar() {
  const sidebarContainer = document.getElementById('sidebar-menu');
  if(!sidebarContainer) return;

  let currentBlock = "";
  let html = "";

  const currentPageId = document.body.dataset.id || "dashboard";

  // Dashboard link
  html += `
    <div class="menu-block">
      <a href="index.html" class="menu-item ${currentPageId === 'dashboard' ? 'active' : ''}">
        🏠 Dashboard Curricular
      </a>
    </div>
  `;

  syllabus.forEach(lesson => {
    // Se mudou de bloco, desenha o header do bloco
    if (lesson.block !== currentBlock) {
      currentBlock = lesson.block;
      html += `
        <div class="menu-block">
          <div class="menu-block-title">${currentBlock}</div>
      `;
    }

    html += `
      <a href="${lesson.id}.html" class="menu-item ${currentPageId === lesson.id ? 'active' : ''}">
        ${lesson.title}
      </a>
    `;

    // Se a próxima aula mudar de bloco ou for a última, fecha a div
    const nextLesson = syllabus[syllabus.indexOf(lesson) + 1];
    if (!nextLesson || nextLesson.block !== currentBlock) {
      html += `</div>`;
    }
  });

  sidebarContainer.innerHTML = html;
}

function renderHomeCards() {
  const container = document.getElementById('syllabus-cards-container');
  if(!container) return;

  let currentBlock = "";
  let blockLessonsHtml = "";
  let html = "";

  syllabus.forEach((lesson, index) => {
    if (lesson.block !== currentBlock) {
      // Se já temos um bloco anterior renderizado, fecha a listagem dele
      if (currentBlock !== "") {
        html += `
          <div class="card">
            <h3 class="card-title">📚 ${currentBlock}</h3>
            <ul class="capabilities-list">
              ${blockLessonsHtml}
            </ul>
          </div>
        `;
        blockLessonsHtml = "";
      }
      currentBlock = lesson.block;
    }

    blockLessonsHtml += `<li><strong>${lesson.id.toUpperCase().replace('-', ' ')}:</strong> ${lesson.title}</li>`;

    // Fechar o último bloco
    if (index === syllabus.length - 1) {
      html += `
        <div class="card">
          <h3 class="card-title">📚 ${currentBlock}</h3>
          <ul class="capabilities-list">
            ${blockLessonsHtml}
          </ul>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}
