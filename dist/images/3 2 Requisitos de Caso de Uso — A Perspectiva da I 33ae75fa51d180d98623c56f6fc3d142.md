# 3.2: Requisitos de Caso de Uso — A Perspectiva da Interação

### Introdução: Para além da funcionalidade

Um erro comum em análise de sistemas é acreditar que uma lista de Requisitos Funcionais é suficiente para o desenvolvedor. No entanto, um requisito como "O sistema deve permitir o saque de dinheiro" não explica o que acontece se a senha estiver errada ou se o papel da impressora acabar.

O Caso de Uso resolve isso ao descrever uma sequência de interações entre um Ator (usuário ou outro sistema) e o Software, com o objetivo de entregar um resultado de valor observável. O foco aqui não é o código interno, mas o diálogo entre o mundo externo e o sistema.

---

### 1. Elementos Fundamentais de um Caso de Uso

Para especificar um caso de uso, precisamos definir três componentes básicos:

- **Ator:** Qualquer entidade externa que interage com o sistema (Pessoas, Dispositivos de Hardware ou outros Sistemas).
- **Cenário:** Uma sequência específica de passos que representa uma execução do caso de uso.
- **Objetivo (Goal):** O resultado final que o Ator deseja alcançar (ex: "Efetuar Compra").

---

### 2. A Estrutura da Narrativa (Documentação Textual)

Diferente do diagrama (que veremos no Módulo 5), o requisito de caso de uso é um documento textual. Ele deve conter:

### A. Pré-condições e Pós-condições

- **Pré-condição:** O que deve ser verdade antes do caso de uso começar (ex: "O usuário deve estar autenticado").
- **Pós-condição:** O estado do sistema após a conclusão bem-sucedida (ex: "O estoque foi atualizado e o pagamento registrado").

---

### B. Fluxo Principal (O "Caminho Feliz")

É a sequência de passos onde tudo corre como esperado, sem erros ou desvios:

1. O Ator solicita a operação.
2. O Sistema valida os dados.
3. O Sistema processa a informação.
4. O Sistema exibe a confirmação.

---

### C. Fluxos Alternativos e de Exceção

- **Fluxo Alternativo:** Caminhos diferentes que ainda levam ao sucesso (ex: "Pagar com cartão" em vez de "Pagar com boleto").
- **Fluxo de Exceção:** Caminhos que tratam erros e impedem a conclusão do objetivo (ex: "Saldo insuficiente" ou "Cartão Bloqueado").

---

### 3. Diferença entre Requisito Funcional e Caso de Uso

Muitos analistas utilizam os termos como sinónimos, mas na engenharia profissional:

- **Requisito Funcional (RF):** É uma declaração discreta de capacidade (ex: "O sistema deve persistir logs de erro").
- **Caso de Uso:** É um agrupamento de requisitos funcionais que formam uma unidade de sentido para o usuário. Um único caso de uso (ex: "Manter Cliente") pode englobar vários RFs (incluir, alterar, excluir, consultar).

---

### 4. Granularidade: Quando parar de detalhar?

Um caso de uso deve representar uma tarefa completa:

- **Certo:** "Realizar Matrícula".
- **Errado (muito pequeno):** "Clicar no botão salvar" (isso é um passo, não um caso de uso).
- **Errado (muito grande):** "Gerir a Universidade" (isso é um processo de negócio inteiro).

---

### 🛠️ Exemplo Prático: Caso de Uso "Realizar Saque"

- **Ator:** Cliente do Banco.
- **Pré-condição:** Cartão inserido e lido com sucesso.

### Fluxo Principal:

1. O sistema solicita o valor do saque.
2. O cliente insere o valor.
3. O sistema valida se o valor é múltiplo das notas disponíveis.
4. O sistema comunica com o Banco Central para autorização.
5. O sistema entrega as notas e imprime o comprovativo.

### Fluxo de Exceção:

- **(Passo 3):** Se o valor não for múltiplo das notas, o sistema exibe mensagem de erro e solicita novo valor.
- **(Passo 4):** Se não houver saldo, o sistema informa "Saldo Insuficiente" e encerra a operação.

---

### 📝 Resumo de Validação

Para garantir que o seu Requisito de Caso de Uso está pronto:

- [ ]  O título foca no objetivo do ator (Verbo + Substantivo).
- [ ]  Os fluxos de exceção cobrem todas as falhas lógicas previstas.
- [ ]  As pré e pós-condições estão claramente definidas.
- [ ]  A linguagem é neutra (não diz "o botão azul", mas sim "a opção de confirmação").