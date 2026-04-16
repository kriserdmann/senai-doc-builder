# 3.4: Requisitos Não Funcionais. Atributos de Qualidade

### Introdução. O Software Além da Função

Se um sistema de banco permite transferir dinheiro (RF), mas demora 30 minutos para concluir a operação ou vaza os dados do cliente, ele falhou nos seus Requisitos Não Funcionais. Os RNFs são restrições aos serviços ou funções oferecidos pelo sistema. Eles definem as propriedades emergentes do software.

Para padronizar essa análise, a Engenharia de Software utiliza a norma ISO/IEC 25010, que organiza os atributos de qualidade em categorias específicas.

---

### 1. As 6 Categorias Principais da ISO/IEC 25010

### A. Eficiência de Desempenho (Performance)

Refere-se ao comportamento do sistema em relação ao tempo e aos recursos utilizados.

- Tempo de Resposta. Quanto tempo o sistema leva para processar uma requisição.
- Capacidade. Quantos usuários ou transações o sistema suporta simultaneamente.

**Exemplo Técnico:**

"O sistema deve processar a consulta de saldo em no máximo 2 segundos para até 1.000 conexões simultâneas."

---

### B. Segurança

Proteção de informações e dados para que pessoas ou sistemas não autorizados não possam lê-los ou modificá-los.

- Confidencialidade. Apenas pessoas autorizadas acessam os dados.
- Integridade. Os dados não são alterados indevidamente.
- Não-repúdio. Prova de que uma ação ocorreu (ex: assinatura digital).

**Exemplo Técnico:**

"Toda comunicação entre o cliente e o servidor deve ser criptografada utilizando o protocolo TLS 1.3."

---

### C. Usabilidade (Operabilidade)

O grau em que o produto pode ser usado por usuários específicos para atingir objetivos com eficácia e satisfação.

- Estética. A interface deve ser agradável.
- Aprendizado. Quão fácil é aprender a usar o sistema.

**Exemplo Técnico:**

"Um usuário leigo deve ser capaz de realizar o primeiro acesso e troca de senha sem auxílio de manuais em menos de 5 minutos."

---

### D. Confiabilidade

A capacidade do sistema de manter seu nível de desempenho sob condições estabelecidas por um período de tempo.

- Disponibilidade. O sistema deve estar "no ar" quando necessário **(99,9% do tempo)**.
- Recuperabilidade. Capacidade de recuperar dados após uma falha.

**Exemplo Técnico:**

"O sistema deve possuir um tempo médio de recuperação (MTTR) de no máximo **1 hora** em caso de falha crítica no banco de dados."

---

### E. Manutenibilidade

A facilidade com que o software pode ser modificado para corrigir defeitos ou adaptar-se a novos requisitos.

- Modularidade. O código é dividido em partes independentes?
- Analisabilidade. É fácil diagnosticar a causa de uma falha?

**Exemplo Técnico:**

"O sistema deve ser desenvolvido seguindo os princípios SOLID para permitir a troca do banco de dados sem alteração na lógica de negócio."

---

### F. Portabilidade

A facilidade com que o sistema pode ser transferido de um ambiente para outro (Hardware ou Software).

- Adaptabilidade. Funciona em diferentes navegadores ou sistemas operacionais?
- Instalabilidade. É fácil de instalar?

**Exemplo Técnico:**

"A aplicação front-end deve ser compatível com as versões mais recentes dos navegadores Chrome, Firefox e Safari."

---

### 2. Como Quantificar um RNF (O fim do "adjetivo")

Um erro fatal de analistas iniciantes é usar termos subjetivos como "rápido", "seguro" ou "fácil". Requisitos Não Funcionais devem ser mensuráveis.

| Errado (Subjetivo) | Correto (Mensurável/Técnico) |
| --- | --- |
| "O sistema deve ser rápido." | "O tempo de carregamento da página inicial não deve exceder **1,5** segundos em conexões 4G." |
| "O sistema deve ser seguro." | "As senhas devem ser armazenadas utilizando o algoritmo de hash Argon2id com salting." |
| "O sistema deve ser fácil de usar." | "A taxa de erro de usuários na tarefa de fechamento de caixa deve ser inferior a **5%.**" |

---

### 3. Conflitos entre Requisitos (Trade-offs)

Como analista, você descobrirá que os RNFs muitas vezes entram em conflito.

- Segurança vs. Usabilidade. Exigir autenticação de 2 fatores em cada clique torna o sistema seguro, mas irrita o usuário.
- Desempenho vs. Custo. Ter um sistema que responde em 10ms exige servidores caríssimos.

O papel da Análise de Sistemas é encontrar o ponto de equilíbrio (Trade-off) baseado no orçamento e na necessidade do negócio.

---

### 4. A Relação com a Arquitetura

Enquanto os Requisitos Funcionais guiam a lógica do código, os Requisitos Não Funcionais guiam a Arquitetura. Se o sistema precisa ser altamente escalável, a arquitetura deve ser de Microsserviços. Se a segurança é o foco, a arquitetura deve priorizar camadas de isolamento.

---

### 🛠️ Prática de Especificação

Converta os desejos do cliente em RNFs técnicos:

"Não quero que o site caia na Black Friday."

**RNF de Escalabilidade:** "O sistema deve suportar escalonamento horizontal automático para atender a picos de até 50.000 usuários simultâneos."

"Quero que meus dados de saúde fiquem protegidos."

**RNF de Segurança/Privacidade:** "O sistema deve garantir a anonimização de dados sensíveis em conformidade com a LGPD e criptografia de repouso (At-rest)."

---

### 📝 Resumo de Validação

- [ ]  O RNF está associado a uma métrica numérica?
- [ ]  O RNF é viável dentro do orçamento do projeto?
- [ ]  O RNF está classificado conforme a norma ISO?