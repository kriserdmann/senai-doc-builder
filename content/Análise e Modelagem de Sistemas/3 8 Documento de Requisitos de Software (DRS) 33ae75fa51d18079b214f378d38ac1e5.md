# 3.8: Documento de Requisitos de Software (DRS)

### Introdução. O Contrato Técnico do Projeto

O DRS é o repositório oficial de todo o conhecimento minerado durante a elicitação e formalizado durante a análise. Ele não é apenas um "arquivo de texto", mas sim a Linha de Base (Baseline) do projeto. Isso significa que qualquer funcionalidade desenvolvida deve estar prevista neste documento, e qualquer teste realizado deve validar o que foi escrito aqui.

O DRS serve como um acordo entre o cliente (que valida o que será entregue) e a equipe de desenvolvimento (que utiliza o documento como guia de construção).

---

### 1. Estrutura Padrão de um DRS

Utilizando como base o modelo do SiamExpress (Sistema de Delivery), um DRS profissional deve ser organizado em capítulos que facilitam a leitura por diferentes perfis (gestores e desenvolvedores).

[Modelo Requisitos.pdf](3%208%20Documento%20de%20Requisitos%20de%20Software%20(DRS)/Modelo_Requisitos.pdf)

### A. Identificação e Ficha Técnica

Todo documento deve começar com o controle de versões e a identificação das partes interessadas.

- Público-alvo. Define para quem o documento foi escrito (Devs, QAs, Designers).
- Histórico de Revisões. Essencial para a Gestão de Mudanças. Registra quem alterou o quê e quando.

### B. Descrição Geral do Sistema

Nesta seção, o analista contextualiza o software sem entrar em detalhes técnicos profundos.

- Abrangência. Define os limites do sistema (o que ele faz e o que ele não faz).
- Tipos de Usuários. Mapeia os perfis que interagirão com o sistema (ex: Cliente, Entregador, Administrador).

### C. Especificação dos Requisitos (O Coração do DRS)

É aqui que listamos todos os itens trabalhados nas páginas anteriores:

- Requisitos Funcionais (RF). Identificados por códigos (ex: [RF001]) e priorizados (MoSCoW).
- Requisitos Não Funcionais (NF). Agrupados por categorias como Desempenho, Segurança e Hardware/Software necessário.
- Regras de Negócio (RN). As leis que o sistema deve seguir (ex: políticas de cancelamento ou taxas de entrega).

### D. Descrição de Interface e Protótipos

Uma seção opcional, mas recomendada, que contém rascunhos ou capturas de tela das telas principais. Isso ajuda a esclarecer fluxos de exceção e críticas de interface (tamanho de campos, máscaras, etc.).

---

### 2. Por que o DRS é indispensável?

Sem um DRS formalizado, o projeto fica vulnerável a três problemas graves:

- Scope Creep (Aumento de Escopo). O cliente pede "só mais uma coisinha" toda semana. Com o DRS, o analista pode dizer: "Isso não está na linha de base; precisamos de uma análise de impacto e orçamento".
- Ambiguidade. O desenvolvedor entende "A" e o cliente queria "B". O DRS é o "juiz" que resolve conflitos de interpretação.
- Perda de Conhecimento. Se o analista principal sair do projeto, o DRS garante que a inteligência do negócio permaneça na empresa.

---

### 3. Exemplo Prático. Detalhando um Item no DRS

No modelo do SiamExpress, a descrição de um requisito não é apenas uma frase. Ela segue um rigor técnico:

**[RF005] Realizar Pedido**

- Descrição. O sistema deve permitir que o cliente selecione itens, adicione ao carrinho e finalize a compra.
- Prioridade. Essencial (Must Have).
- Entradas. Lista de produtos, forma de pagamento, endereço.
- Saídas. Confirmação de pedido e número de rastreio.
- Regras Relacionadas. RN02 (Taxa de Entrega), RN08 (Estoque Mínimo).

---

### 4. Boas Práticas na Elaboração

- Seja Conciso. Evite textos literários. Use listas e tabelas.
- Mantenha a Rastreabilidade. Sempre use IDs (RF01, RN02) para que o desenvolvedor possa referenciar o requisito no código.
- Valide com o Cliente. O DRS só tem valor após o "aceite" (assinatura ou aprovação formal) do stakeholder principal.

---

### 📝 Checkpoint de Entrega

Um DRS só está pronto para o Módulo de Desenvolvimento se:

- [ ]  Todos os requisitos possuem um ID único.
- [ ]  As regras de negócio estão separadas das funcionalidades.
- [ ]  O glossário define termos técnicos ou de negócio (ex: o que é "Split de Pagamento").
- [ ]  Os requisitos não funcionais são mensuráveis (não use "o sistema deve ser rápido").

[Modelo Requisitos](3%208%20Documento%20de%20Requisitos%20de%20Software%20(DRS)/Modelo%20Requisitos%2033ae75fa51d180ca854ff7180bba9e82.md)