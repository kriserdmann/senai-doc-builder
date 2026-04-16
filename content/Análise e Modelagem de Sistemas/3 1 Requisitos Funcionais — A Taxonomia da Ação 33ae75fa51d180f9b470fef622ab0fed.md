# 3.1: Requisitos Funcionais — A Taxonomia da Ação

### Introdução: O Filtro da Especificação

Na Engenharia de Requisitos orientada ao negócio, o Requisito Funcional é a descrição de um serviço que o sistema deve fornecer ou de como ele deve reagir a entradas específicas. Enquanto a elicitação nos traz o "problema", a especificação funcional define a "solução lógica".

Um erro comum é confundir o Processo de Negócio com a Funcionalidade.

- **Processo:** "O cliente paga a conta." (Ocorre no mundo real).
- **Funcionalidade (RF):** "O sistema deve registrar a transação financeira e atualizar o saldo do cliente." (Ocorre no software).

---

### 1. A Sintaxe da Escrita Profissional

Para evitar ambiguidades que custam caro na fase de testes, especialistas como Vazquez & Simões sugerem uma estrutura rígida para a redação de um RF. Um requisito bem escrito deve seguir a fórmula:

**[Sujeito/Ator] + [Verbo de Ação] + [Objeto] + [Condição/Restrição]**

- **Exemplo Amador:** "Fazer o login do usuário." (Vago, sem ator definido).
- **Exemplo Profissional:** "O Sistema de Autenticação deve validar as credenciais do Usuário através de protocolo OAuth 2.0."

### Atributos de um RF de Alta Qualidade:

- **Atômico:** Trata de apenas uma função. Se você usar a conjunção "e" no meio da frase, provavelmente tem dois requisitos que devem ser separados.
- **Não Ambíguo:** Não usa termos como "rápido", "intuitivo" ou "se possível".
- **Testável:** Um desenvolvedor ou QA deve conseguir criar um teste de "Passou/Falhou" para essa frase.

---

### 2. Taxonomia: Classificação das Funcionalidades

Nem todos os requisitos funcionais têm a mesma natureza. Para organizar o backlog, classificamos os RFs em categorias de operação:

| Categoria | Descrição | Exemplo Técnico |
| --- | --- | --- |
| Entrada (Input) | Captura de dados externos para o sistema. | "O sistema deve permitir a importação de arquivos .CSV contendo a lista de produtos." |
| Saída (Output) | Dados processados enviados para o exterior. | "O sistema deve emitir o comprovante de venda em formato PDF após a confirmação." |
| Consulta (Query) | Recuperação de dados sem alteração de estado. | "O sistema deve exibir o histórico de pedidos dos últimos 6 meses para o Cliente." |
| Processamento | Transformações lógicas ou cálculos internos. | "O sistema deve calcular o valor do ICMS com base na UF de destino do pedido." |
| Manutenção (CRUD) | Inclusão, Alteração e Exclusão de dados. | "O sistema deve permitir a alteração dos dados cadastrais do fornecedor." |

---

### 3. Requisitos de Sistema vs. Requisitos de Software

É vital distinguir o escopo:

- **Requisitos de Sistema:** Envolvem o hardware, o software e as pessoas (ex: "O terminal de autoatendimento deve imprimir um ticket térmico").
- **Requisitos de Software:** Focam exclusivamente no que o código deve executar (ex: "O módulo de impressão deve enviar os dados brutos para o spooler da impressora").

---

### 4. A Ponte com a Modelagem (UML)

Nesta etapa, o RF serve como o "input" para os diagramas que veremos no Módulo 4.

- Um Requisito Funcional muitas vezes se torna um Caso de Uso.
- A lógica interna do requisito (os passos para executá-lo) será detalhada posteriormente nos Diagramas de Sequência e Atividades.

---

### 🛠️ Laboratório Prático: Refatoração de Requisitos

Abaixo estão requisitos extraídos de uma entrevista real com um dono de livraria. Sua missão é entender como transformá-los em RFs técnicos:

- "Quero que o sistema avise quando o livro estiver acabando."
    
    **Refatoração Técnica (RF):**
    
    "O sistema deve emitir uma notificação automática para o Gerente de Compras sempre que o nível de estoque de um título for inferior a 5 unidades."
    
- "O cliente pode devolver o livro se não gostar, mas tem que ser em 7 dias."
    
    **Refatoração Técnica (RF):**
    
    "O sistema deve permitir o estorno de vendas de livros."
    
    (A parte dos 7 dias será tratada em Regras de Negócio na próxima página).
    

---

### 📝 Checkpoint de Qualidade

Antes de postar no Notion, verifique se o requisito responde:

- [ ]  Quem executa? (Ator)
- [ ]  O que é executado? (Ação)
- [ ]  Onde termina a ação? (Resultado)
- [ ]  É possível testar isso? (Verificabilidade)