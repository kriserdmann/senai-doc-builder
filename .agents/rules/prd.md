---
trigger: always_on
---

# PRD - Gerador de Documentação Estática (SENAI/CentroWEG)

## 1. Visão Geral

O **Static Doc Generator** é uma ferramenta de linha de comando (**CLI**) projetada para automatizar a criação de materiais didáticos digitais para cursos de aprendizagem industrial. O sistema transforma arquivos Markdown em uma plataforma de ensino multi-página (**MPA**) com a identidade visual do **SENAI**.

## 2. Objetivos

- **Automação Pedagógica**: Converter ementas e roteiros de aula em documentação interativa sem codificação **HTML** manual.
- **Experiência Estilo Notion**: Oferecer uma interface limpa, organizada por blocos, com navegação lateral fluida.
- **Distribuição Offline**: Gerar um pacote estático (**HTML**/**CSS**/JS) para uso em laboratórios sem internet.

## 3. Requisitos Funcionais (RF)

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF01** | **Parser de Markdown** | Converter sintaxe Markdown para componentes HTML específicos (`.card`, `.callout.info`, `.callout.warning`). |
| **RF02** | **Páginas Adicionais** | Permitir a criação de arquivos MD arbitrários (ex: `criterios.md`) convertidos em HTML. |
| **RF03** | **Front-matter Dinâmico** | Processar metadados YAML (título, bloco, duração) para definir o tipo de página. |
| **RF04** | **Sidebar Autogerada** | Atualizar o menu lateral automaticamente a cada build com todas as aulas e páginas. |
| **RF05** | **Gestão de Progresso** | Persistir o status de *concluído* no `localStorage` do navegador. |
| **RF06** | **Renderização de Código** | Aplicar Syntax Highlighting para React Native, JavaScript e C++. |

## 4. Requisitos Não Funcionais (RNF)

- ****RNF01** (Identidade Visual)**: O design deve seguir rigorosamente o Azul **SENAI** (`#**164194**`).
- ****RNF02** (Performance)**: Carregamento rápido em dispositivos mobile e emuladores Android (**AVD**).
- ****RNF03** (Zero Dependência)**: O resultado final deve ser estático (Static Only), sem necessidade de servidores ativos.

## 5. Estrutura do Projeto (Arquitetura na IDE)

```text /generator-project ├── /content       # Arquivos .md (Aulas, Orientações, Bibliografia) ├── /templates     # Arquivos base (layout.html, index.html) ├── /public        # Assets (style.css, app.js, logos) ├── /dist          # Pasta de saída (O que será entregue ao aluno) ├── build.js       # Script Node.js responsável pela conversão └── package.json   # Dependências (ex: marked, js-yaml, fs-extra) ```

## 6. Mapeamento de Componentes UI

O sistema deve mapear as marcações Markdown para os estilos do `style.css`:
- **Alertas Informativos**: `> [!**INFO**]` → `<div class=*callout info*>`.
- **Alertas de Atenção**: `> [!**WARNING**]` → `<div class=*callout warning*>`.
- **Cards de Tópicos**: Estrutura de h3 e lista → `<div class=*card*>`.
- **Pílulas de Status**: Metadado `duration` → `<span class=*status-pill*>`.

## 7. Critérios de Aceite

- Gerar um arquivo **HTML** para cada arquivo MD na pasta `/content`.
- Novas páginas aparecerem automaticamente na sidebar sem edição manual do `app.js`.
- O bundle final na pasta `/dist` deve abrir corretamente via protocolo `file://`.