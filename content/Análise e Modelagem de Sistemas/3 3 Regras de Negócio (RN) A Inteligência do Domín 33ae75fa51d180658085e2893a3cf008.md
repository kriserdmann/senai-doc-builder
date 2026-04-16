# 3.3: Regras de Negócio (RN). A Inteligência do Domínio

### Introdução. O Cérebro da Operação

Uma Regra de Negócio é uma declaração formal que define ou restringe algum aspecto do negócio. Segundo Vazquez & Simões, a grande distinção técnica é que a Regra de Negócio existe independentemente de haver um sistema computacional.

Se uma empresa decide que "não vende para clientes negativados", essa é uma diretriz estratégica (negócio). O software apenas automatiza a verificação dessa diretriz. Tratar regras de negócio como simples "linhas de código" é um erro que gera sistemas rígidos e de difícil manutenção.

---

### 1. Taxonomia das Regras de Negócio

Para uma especificação profissional, as RNs devem ser classificadas de acordo com a sua natureza. Isso ajuda o desenvolvedor a decidir se a regra será implementada em uma validação de interface, em um cálculo no backend ou em uma constraint no banco de dados.

| Categoria | Descrição | Exemplo Técnico |
| --- | --- | --- |
| Fato | Uma verdade absoluta sobre o negócio que não muda. | "O período de garantia padrão para eletrônicos é de 12 meses." |
| Restrição | Impede uma ação ou limita as opções do usuário. | "Um pedido de venda não pode ser faturado se o cliente tiver débitos pendentes." |
| Derivação (Cálculo) | Define como um dado é transformado ou gerado. | "O valor do frete é calculado multiplicando-se o peso (kg) pela tarifa da zona postal." |
| Ação / Gatilho | Define uma consequência automática de um evento. | "Sempre que um item atingir o estoque mínimo, um alerta deve ser enviado ao compras." |

---

### 2. O Desacoplamento. RF vs. RN

O segredo de uma arquitetura limpa é manter o Requisito Funcional (Ação) separado da Regra de Negócio (Condição).

O Requisito Funcional (RF). É estável. Ex: "O sistema deve emitir nota fiscal".

A Regra de Negócio (RN). É volátil. Ex: "A alíquota de imposto para serviços é de 5%".

Se a prefeitura mudar a alíquota para 6%, você não muda a funcionalidade de emitir nota. Você apenas atualiza a regra de negócio. Em sistemas modernos, essas regras são frequentemente armazenadas em tabelas de configuração ou em Motores de Regras (Rule Engines), permitindo mudanças sem necessidade de novos deploys de código.

---

### 3. Como Especificar uma Regra de Negócio

No Notion, as RNs não devem ser escritas de forma narrativa longa, mas como declarações atômicas e declarativas.

**Template sugerido:**

- Código: RN001
- Nome: Validação de Idade para Venda de Álcool.
- Descrição: O sistema não deve permitir a conclusão de vendas de itens da categoria "Bebidas Alcoólicas" para clientes com data de nascimento superior a 18 anos da data atual.
- Referência: Estatuto da Criança e do Adolescente (Lei Federal).

---

### 4. Regras de Negócio e a UML

Na modelagem visual (Gilleanes Guedes), as regras de negócio costumam aparecer em dois lugares principais:

- Notas de Diagramas. Textos anexados a classes ou casos de uso.
- OCL (Object Constraint Language). Uma linguagem formal da UML para descrever restrições que não podem ser expressas apenas por linhas e símbolos (ex: {idade >= 18}).

---

### 🛠️ Estudo de Caso. Sistema de Estacionamento

Analise as sentenças abaixo e classifique-as para o seu material:

- "O cliente tem que pagar 10 reais por hora." ➔ RN (Cálculo/Derivação).
- "O sistema deve emitir um ticket na entrada." ➔ RF (Funcionalidade).
- "Veículos de idosos não pagam nas primeiras 2 horas." ➔ RN (Restrição/Exceção).
- "A tolerância para saída sem cobrança após o pagamento é de 15 minutos." ➔ RN (Fato/Política).

---

### 📝 Critérios de Excelência

Para garantir que a Regra de Negócio está bem definida:

- [ ]  Ela é independente da interface (não cita botões ou telas).
- [ ]  Ela é atômica (trata de uma única política).
- [ ]  Ela possui uma fonte de autoridade (quem definiu essa regra?).
- [ ]  Ela é clara o suficiente para ser traduzida em uma condicional if/else ou consulta SQL.