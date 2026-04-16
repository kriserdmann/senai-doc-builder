# 2.4: Técnica de Elicitação — Questionário

### Introdução: Escalabilidade na Descoberta

O questionário (ou survey) é uma técnica de elicitação quantitativa e qualitativa que permite coletar informações de dezenas, centenas ou até milhares de pessoas simultaneamente. Na Engenharia de Requisitos, ele é frequentemente utilizado para validar se uma percepção colhida em uma entrevista individual é compartilhada pelo restante da organização.

![questionário.jpg](2%204%20T%C3%A9cnica%20de%20Elicita%C3%A7%C3%A3o%20%E2%80%94%20Question%C3%A1rio/questionrio.jpg)

---

### 1. Quando utilizar o Questionário?

O questionário deve ser aplicado em cenários específicos:

- **Stakeholders Dispersos:** Quando os usuários estão em diferentes filiais ou cidades.
- **Validação Estatística:** Quando você precisa de números para justificar uma decisão (ex: "85% dos usuários consideram a função de busca ineficiente").
- **Anonimato Necessário:** Em situações onde os usuários podem se sentir intimidados em criticar processos atuais pessoalmente.
- **Levantamento de Perfil:** Para entender o nível de alfabetização digital do público que usará o sistema.

---

### 2. Estrutura das Perguntas

Um questionário eficaz equilibra dois tipos de perguntas para obter dados precisos:

### A. Perguntas Fechadas (Quantitativas)

Oferecem opções pré-determinadas de resposta.

- **Múltipla Escolha:** "Qual funcionalidade você usa mais?"
- **Escala de Likert:** "De 1 a 5, quão satisfeito você está com a velocidade do sistema atual?"

**Vantagem:** Fáceis de tabular e geram gráficos claros.

---

### B. Perguntas Abertas (Qualitativas)

Permitem que o respondente escreva livremente.

- **Exemplo:** "Descreva um problema frequente que você enfrenta no processo de faturamento."

**Vantagem:** Revelam problemas que o analista não previu.

**Desvantagem:** Difíceis de analisar em larga escala (exigem leitura manual).

---

### 3. O Design do Questionário

Um questionário mal projetado gera dados inúteis (Garbage In, Garbage Out). Siga este roteiro técnico de construção:

- **Objetivo Claro:** Defina exatamente o que você quer descobrir. Não faça perguntas "por curiosidade".
- **Instruções Precisas:** Explique o propósito da pesquisa e garanta o anonimato (se for o caso).
- **Fluxo Lógico:** Comece com perguntas simples e demográficas (nome, cargo, setor) e avance para as questões técnicas de negócio.
- **Vocabulário Adequado:** Evite termos técnicos da TI (como "API", "Backend", "Deploy") se os respondentes forem da área administrativa ou operacional.
- **Teste Piloto:** Antes de enviar para 500 pessoas, envie para 2 ou 3 colegas para verificar se as perguntas estão claras e sem ambiguidades.

---

### 4. Vantagens e Limitações

| Vantagem | Limitação |
| --- | --- |
| Baixo Custo: Uma vez criado, o custo de envio para 1 ou 1.000 pessoas é o mesmo. | Falta de Aprofundamento: Não é possível perguntar "por que" após uma resposta interessante. |
| Conveniência: O usuário responde quando tiver tempo. | Baixa Taxa de Resposta: Muitos usuários ignoram o convite ou respondem sem atenção. |
| Padronização: Todos recebem exatamente a mesma pergunta, sem viés de entonação do analista. | Inflexibilidade: Se o usuário não entender a pergunta, ele responderá de qualquer jeito ou deixará em branco. |

---

### 5. Análise de Resultados

O trabalho do analista de sistemas após o questionário é a triangulação de dados:

- Transforme as respostas fechadas em requisitos de desempenho ou funcionalidade.
- Agrupe as respostas abertas por "temas" ou "dores comuns".
- Utilize os resultados para pautar a próxima rodada de entrevistas (agora muito mais focada nos problemas reais detectados).

---

### ⚠️ Boas Práticas Técnicas

- Evite perguntas duplas: "O sistema é rápido e fácil de usar?". Se o usuário achar rápido, mas difícil, ele não saberá como responder. Separe em duas perguntas.
- Não induza a resposta: Em vez de "Quanto você gosta da nova interface?", use "Qual sua opinião sobre a nova interface?".
- Seja breve: Questionários que levam mais de 10 minutos para serem respondidos têm taxas de desistência altíssimas.

---

*📚 Este material foi criado por **Kristian Erdmann** e compõe a base técnica da **Unidade Curricular de Análise e Modelagem de Sistemas.***