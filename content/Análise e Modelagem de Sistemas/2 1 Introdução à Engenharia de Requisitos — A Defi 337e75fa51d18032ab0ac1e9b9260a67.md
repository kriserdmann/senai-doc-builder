# 2.1: Introdução à Engenharia de Requisitos — A Definição do Sucesso

## O que é um Requisito?

No contexto de software, um requisito é uma condição ou capacidade que deve ser alcançada pelo sistema ou possuída por um componente do sistema para satisfazer um contrato, padrão, especificação ou outro documento formalmente imposto.

Em termos práticos: Requisito é a descrição de um serviço que o sistema deve fornecer e as restrições sob as quais ele deve operar.

---

## 1. As 5 Dimensões da Engenharia de Requisitos

A Engenharia de Requisitos não é uma tarefa única, mas um processo disciplinado composto por cinco atividades contínuas:

- **Elicitação (Levantamento):**
A fase de "mineração". Consiste em descobrir as necessidades através de técnicas de comunicação. É a busca pelo conhecimento tácito (o que o usuário sabe, mas não consegue expressar facilmente).
- **Análise:**
O processamento do que foi coletado. Aqui os requisitos são refinados, os conflitos são resolvidos (ex: o financeiro quer uma regra que o RH proíbe) e a viabilidade é checada.
- **Especificação:**
A formalização do conhecimento. É a tradução das necessidades em documentos técnicos, modelos UML ou histórias de usuário que servirão de base para o desenvolvimento.
- **Validação:**
A prova real. É o momento de garantir que o que foi especificado é exatamente o que o interessado precisa. Evita o erro de "construir perfeitamente o que não é útil".
- **Gerenciamento:**
O controle de mudanças. Como o negócio é dinâmico, os requisitos mudam. Esta dimensão cuida do versionamento, rastreabilidade e impacto das mudanças ao longo do projeto.

---

## 2. Níveis de Abstração dos Requisitos

Um erro crítico na análise é tratar todos os requisitos com o mesmo nível de detalhe. Eles devem ser organizados em uma hierarquia de valor:

- **Requisitos de Negócio (Business Requirements):**
Representam os objetivos de alto nível da organização. Respondem ao "Por que estamos fazendo este projeto?".

Exemplo: "Reduzir o tempo de espera no checkout em 20%."

- **Requisitos de Usuário (User Requirements):**
Descrevem as tarefas que os usuários devem ser capazes de realizar com o sistema.

Exemplo: "O operador de caixa deve ser capaz de aplicar descontos promocionais via QR Code."

- **Requisitos de Sistema (System Requirements):**
Especificações detalhadas das funções, serviços e restrições operacionais do software. É aqui que entra o detalhamento técnico para os desenvolvedores.

---

## 3. O Requisito como Contrato e Referência

A Engenharia de Requisitos serve como o alicerce para as demais disciplinas da engenharia de software:

- **Para o Desenvolvedor:**
É o manual de instruções do que deve ser codificado.
- **Para o QA (Tester):**
É a base para a criação dos planos de teste (o teste nada mais é do que a verificação se o requisito foi cumprido).
- **Para o Gerente de Projeto:**
É a base para a estimativa de custo, tempo e esforço. Se o requisito muda, o cronograma muda.

---

## 4. Características de um "Bom Requisito"

Para que um requisito seja útil para a equipe técnica, ele deve atender aos critérios de qualidade:

- **Atômico:**
Deve tratar de apenas uma coisa por vez.
- **Não Ambíguo:**
Deve ter apenas uma interpretação possível. Evite palavras como "rápido", "fácil" ou "moderno". Use métricas (ex: "tempo de resposta menor que 2 segundos").
- **Verificável:**
Deve ser possível testar se ele foi atendido.
- **Necessário:**
Deve agregar valor real ao negócio; se não serve ao objetivo, deve ser descartado.

---

## 📋 Resumo Técnico

Engenharia de Requisitos é a ponte entre a necessidade do cliente e a solução técnica.

O processo é cíclico, não linear; mudanças são esperadas e devem ser gerenciadas.

A falha nesta etapa é a causa raiz da maioria dos estouros de orçamento e prazos na indústria de TI.

---

*📚 Este material foi criado por **Kristian Erdmann** e compõe a base técnica da **Unidade Curricular de Análise e Modelagem de Sistemas.***