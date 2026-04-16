# 3.5: Gerenciamento, Priorização e Rastreabilidade

### Introdução: O Requisito como um Ativo Vivo

Muitos analistas cometem o erro de tratar o documento de requisitos como algo estático que, uma vez assinado, nunca mais muda. Na realidade, requisitos são dinâmicos. O **Gerenciamento de Requisitos** é o conjunto de atividades que ajuda a equipe de projeto a identificar, controlar e rastrear requisitos e suas modificações a qualquer momento.

---

### 1. Técnicas de Priorização

Em um cenário ideal, todos os requisitos seriam implementados. Na realidade de mercado, há restrições de tempo e orçamento. Priorizar é o ato de decidir a ordem de execução com base no valor de negócio.

### A. Método MoSCoW

É a técnica mais utilizada para alinhar expectativas entre o analista e os stakeholders:

- **M - Must Have (Tenho que fazer):** Requisitos críticos. Sem eles, o sistema não entra no ar (ex: Processamento de pagamento em um E-commerce).
- **S - Should Have (Devo fazer):** Importantes, mas não vitais para a primeira versão. Podem ter soluções temporárias manuais.
- **C - Could Have (Poderia fazer):** Desejáveis. São os "mimos" que aumentam a satisfação do usuário, mas são os primeiros a serem cortados se o prazo apertar.
- **W - Won't Have (Não farei agora):** Requisitos que o grupo concorda que são importantes, mas ficarão para versões futuras (procedimento de descarte).

### B. Matriz Custo vs. Valor

O analista avalia cada requisito sob duas óticas:

1. **Valor para o Negócio:** O quanto isso traz de lucro ou economia?
2. **Custo/Esforço de Implementação:** O quanto de horas de desenvolvimento isso consome?
- **Prioridade Máxima:** Alto Valor e Baixo Custo.

---

### 2. Rastreabilidade de Requisitos (Traceability)

A rastreabilidade é a capacidade de seguir a vida de um requisito, tanto para frente quanto para trás. Ela é o que permite realizar uma **Análise de Impacto** eficiente.

Existem dois eixos principais:

- **Rastreabilidade para Trás (Backward):** Conecta o requisito à sua origem. (Ex: "O RF01 existe porque o Diretor Financeiro solicitou na Entrevista do dia 10/05").
- **Rastreabilidade para Frente (Forward):** Conecta o requisito aos seus produtos derivados. (Ex: "O RF01 deu origem ao Caso de Uso UC04, que foi implementado na Classe `Pagamento.js` e validado pelo Teste T08").

### Matriz de Rastreabilidade (RTM)

No Notion, isso é estruturado através de relações entre bancos de dados. Se o cliente pedir para alterar a regra de cálculo de frete, o analista consulta a matriz e sabe instantaneamente quais telas, diagramas e códigos precisam ser revisados.

[Requirements Traceability Matrix, gerada com IA](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQAeMlEIsr0jBtcgbEVpWnV3AlPKBlWz2yoHa5p75AWW-b2ujY3faNc3CG-WdZr39CJRQ5gT6oDsVoV427b1ro2aIPsuccr9-n_35rOzDt3WAxOwJ4)

---

### 3. Gestão de Mudanças e Impacto

Mudanças de requisitos são inevitáveis, mas devem ser controladas. O fluxo técnico recomendado é:

1. **Solicitação de Mudança:** O stakeholder propõe a alteração.
2. **Análise de Impacto:** O analista avalia o que a mudança altera na arquitetura, no custo e no cronograma.
3. **Aprovação/Rejeição:** O Comitê de Controle de Mudanças decide se a alteração será aceita.
4. **Atualização da Linha de Base (Baseline):** Uma vez aprovada, a mudança é documentada e todos os modelos (UML, Protótipos) são atualizados.

---

### 4. Atributos de Gerenciamento no Notion

Para que o material de apoio seja prático, cada requisito deve ter metadados claros no banco de dados do sistema:

- **Versão:** (ex: v1.0, v1.1).
- **Estabilidade:** (Alta, Média, Baixa - indica o risco do requisito mudar).
- **Responsável:** (Quem é o "dono" daquela regra no lado do cliente).
- **Esforço Estimado:** (Medido em Pontos de Função ou Horas).

---

### 🛠️ Exercício de Fixação Técnica

Considere o seguinte cenário: O projeto está a 80% da conclusão e o cliente solicita a inclusão de um "Login por Biometria Facial".

1. Aplique a técnica **MoSCoW**: Esse requisito é M, S, C ou W para um sistema que já possui login por senha?
2. Realize a **Análise de Impacto**: Quais RNFs (Requisitos Não Funcionais) de Segurança e Desempenho seriam afetados por essa mudança?
3. Utilize a **Rastreabilidade**: Se decidirmos implementar, quais outros requisitos funcionais de "Manter Usuário" precisariam ser editados?

---

### 📝 Resumo do Módulo 3

- **Elicitação** descobre; **Especificação** formaliza; **Gerenciamento** controla.
- Priorizar é gerenciar expectativas e recursos limitados.
- Rastrear é garantir que nenhuma linha de código seja escrita sem um propósito de negócio.