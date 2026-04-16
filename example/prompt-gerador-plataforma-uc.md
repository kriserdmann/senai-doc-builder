# Prompt Base para Geração de Plataformas de UC (Identidade SENAI)

> **Como usar:** Copie integralmente o texto abaixo (que está formatado como uma instrução para a IA) e cole no chat de um novo projeto, logo após ajustar os dados do final do prompt com as normativas da sua nova Unidade Curricular.

---

## 🤖 INÍCIO DO PROMPT PARA O ASSISTENTE

**Atue como:** Um programador Full-Stack Sênior e um Designer Instrucional especializado em plataformas educacionais dinâmicas.

**Objetivo:** Quero que você crie a arquitetura de uma Plataforma de Ensino (um Mini-SaaS Estático) em arquitetura **Multi-Page Application (MPA)** baseada puramente em HTML5, CSS3 (Vanilla) e JavaScript, voltada para entregar os materiais de base (Apostilas Interativas) de uma Unidade Curricular. **Você deve seguir RIGOROSAMENTE a identidade visual do SENAI (azul clássico `#164194`) e mapear detalhadamente a Ementa.**

### 📐 Regras de Arquitetura de Arquivos
Você deverá gerar os seguintes arquivos, isolando as responsabilidades:

1. **`style.css`:** Deve conter o design system moderno (`font-family: 'Inter'`), adotando primariamente a cor institucional do SENAI em `--accent-color: #164194;`. 
   - **IMPORTANTE:** Para evitar barras de rolagem horizontal indevidas, aplique obrigatoriamente `min-width: 0` nos containers de layout principal com `flex: 1` (`.main-content`), `max-width: 100%` nas caixas escuras `<pre>` e force `overflow-x: hidden` no `body`. 
   - Crie as classes vitais como `.card`, `.status-pill`, e caixas de alerta didático `.callout.info` e `.callout.warning`.

2. **`js/app.js`:** Deve conter:
   - Objeto `state` (Nome da UC, Carga Horária, Semestre, Array de Aulas Concluídas rodando no `localStorage`).
   - Objeto `lessons` (Array com `id`, `title`, `duration`, `block` [categoria formativa]).
   - Função `renderSidebar()` capaz de grupar HTML (`<a>`) na tela. Se `lesson.block` for detectado como novo, ele desenha o cabeçalho do bloco na Sidebar automaticamente e a classe `.active` lendo de qual `data-page` estamos através do `document.body`.
   - Modos de renderização extra: `renderHomeCards()`.

3. **Arquivos HTML (Visões):**
   - **`index.html` (Dashboard Curricular):** Cabeçalho descritivo contendo gradiente voltado para `#164194`. Ele deve exibir grandes quadros em grid com o detalhamento das **👨‍💻 Capacidades Técnicas** e do catálogo de **🤝 Conhecimentos** (este último DEVE ser inteligentemente agrupado e nomeado em macros sub-tópicos via Grid de 2 colunas para manter a elegância estética, sem despejar centenas de itens brutos em linha). O título da sidebar em todas as páginas deve conter apenas `SENAI`.
   - **Páginas das Aulas (`b[BLOCO]-aula[X].html`):** Uma página isolada contendo a view de cada aula seguindo as lógicas de padronização nominal da root (ex: `b1-aula1.html`, `b2-aula4.html`). 

### ✍️ Regras de Redação Pedagógica (Profundidade Extrema)

A cada aula solicitada, aplique OBRIGATORIAMENTE o seguinte rigor estrutural:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ REGRAS CRÍTICAS (OBRIGATÓRIO)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Gere um arquivo HTML independente por Módulo/Aula.
  - A arquitetura da Plataforma (MPA) já está pronta no projeto (com style.css e js/app.js).
  - Cada nova aula gerada deverá consumir os estilos já definidos na plataforma MPA SENAI da raiz.
- NÃO corte conteúdo na página de aula
- NÃO resuma conteúdo
- NÃO simplifique explicações
- NÃO divida UMA aula em múltiplos arquivos (entregue a view inteira daquela aula)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 REGRA MAIS IMPORTANTE: PROFUNDIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cada aula DEVE ser tratada como uma aula real de 6 HORAS.
Isso significa obrigatoriamente:
- Explicações LONGAS e detalhadas (mínimo 8 a 12 parágrafos na teoria)
- Múltiplos exemplos (mínimo 3 a 5 por aula)
- Explicação linha a linha dos códigos
- Explicação do PORQUÊ das decisões
- Analogias para facilitar entendimento
Se o conteúdo estiver curto → está ERRADO.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 PROBLEMA CRÍTICO A EVITAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Os últimos módulos NÃO podem ser mais curtos que os primeiros.
Cada aula deve ter o MESMO nível de profundidade e quantidade de conteúdo.
Se houver queda de qualidade nas últimas aulas → a resposta está ERRADA.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📏 REGRA DE BALANCEAMENTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Para CADA aula, gerar no mínimo:
- 8 a 12 parágrafos na teoria
- 3 a 5 exemplos completos
- 8 exercícios (básico, intermediário e avançado)
- 5 boas práticas (explicadas)
- 5 erros comuns (com correção)
🚨 NÃO reduzir conteúdo nos módulos finais.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 ESTRATÉGIA DE GERAÇÃO (OBRIGATÓRIA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Antes de escrever o HTML:
1. Planeje a aula com alto nível de profundidade
2. Não priorize e economize texto
4. Gere tudo de forma equilibrada

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 ESTILO VISUAL DA PLATAFORMA MPA SENAI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- A integração baseia-se em adotar os padrões da plataforma atual: `<div class="card">`, marcações CSS prontas como `var(--accent-color)` do SENAI.
- Callouts: use `<div class="callout info">` para estratégias pedagógicas e `<div class="callout warning">` para pontos de atenção.
- Uso extensivo de tabelas claras para comparações.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 ESTRUTURA DE CADA AULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cada módulo DEVE conter na view HTML as seguintes tags semânticas e ordem:
1. Título da aula (Header/H1)
2. Descrição geral e callout info com foco educacional.
3. Objetivos de aprendizagem (mínimo 5 itens explicados em H2/Ul).
4. Explicação teórica COMPLETA (Contexto, conceito, detalhamento):
   - O quê, por quê e como funciona.
5. Exemplos práticos (mínimo 3 cenários de caso real/código comentado):
   - Código completo
   - Explicação linha a linha
6. Passo a passo (tutorial diagnóstico)
7. H2 com 5 boas práticas 
8. H2 com 5 erros comuns 
9. H2 com ao menos 8 Exercícios variados.
10. Resumo Direto ao Ponto (use *bullet-points*/lista contendo no máximo 5 tópicos densos da essência da aula. PROIBIDO gerar parágrafos massivos longos).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 DIDÁTICA E TOM DE VOZ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Linguagem clara de instrutor técnico experiente.
- Evite termos não justificados em sala.
- Aplique analogias corriqueiras da engenharia industrial.
- Ensine o "porquê tecnológico histórico", e não apenas "como apertar botões".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 CONTROLE DE QUALIDADE FINAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Validou que tem exercícios variados? Parágrafos são extensos e completos? Resumo está presente? Se sim, entregue o HTML base. Prefira O EXCESSO DE INFORMAÇÃO do que a falta (pode estender 15 mil tokens se necessário para gerar uma super aula).

### 📥 DADOS DE ENTRADA (UNIDADE CURRICULAR)

Abaixo estão os dados reais do projeto atual que você deve absorver para a aplicação MPA:

*   **Nome da UC:** [NOME DA UC AQUI - Ex: Análise de Dados]
*   **Carga Horária:** [Ex: 60h]

*   **Capacidades Técnicas:**
[COLE A LISTA DE CAPACIDADES DA EMENTA AQUI]

*   **Conhecimentos:**
[COLE A ESTRUTURA DE CONHECIMENTOS OFICIAIS AQUI]


Por favor, entenda essas instruções e proceda com a separação de todos os arquivos.
