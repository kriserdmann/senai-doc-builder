# 2.5: Técnica de Elicitação — Observação (Etnografia)

### Introdução: O Analista como Observador

A observação consiste em acompanhar o usuário em seu ambiente real de trabalho para entender o fluxo de tarefas, as interações com ferramentas e os desafios operacionais. É uma técnica de imersão que permite capturar o conhecimento tácito que não surge em conversas formais.

Muitas vezes, o manual de procedimentos de uma empresa diz que um processo deve seguir os passos A ➔ B ➔ C, mas a observação revela que, na prática, os usuários fazem A ➔ D ➔ C porque o passo "B" está quebrado ou é ineficiente.

![observacao.jpg](2%205%20T%C3%A9cnica%20de%20Elicita%C3%A7%C3%A3o%20%E2%80%94%20Observa%C3%A7%C3%A3o%20(Etnografia/observacao.jpg)

---

### 1. Tipos de Observação

Existem duas abordagens principais, dependendo do nível de interação do analista:

- **Observação Passiva (Shadowing):** O analista atua como uma "sombra". Ele observa o usuário sem interromper, fazendo anotações sobre o tempo gasto em cada tarefa, as dificuldades encontradas e as ferramentas utilizadas.**Vantagem:** Não interfere no ritmo natural de trabalho.
- **Observação Ativa (Aprendizado):** O analista interage com o usuário, fazendo perguntas sobre o porquê de certas ações enquanto elas ocorrem. Em alguns casos, o analista tenta executar a tarefa sob supervisão para sentir as dificuldades "na pele".**Vantagem:** Esclarece dúvidas imediatamente e valida o entendimento do processo.

---

### 2. O que observar? (Checklist do Analista)

Durante a sessão de observação, o foco deve estar em identificar:

- **Gargalos Lógicos:** Onde o usuário perde mais tempo?
- **Gambiarras (Workarounds):** O usuário usa planilhas paralelas ou anotações em papel para suprir falhas do sistema atual?
- **Interrupções:** Com que frequência o usuário precisa parar o que está fazendo por falha de informação ou sistema?
- **Ambiente Físico:** Ruído, iluminação ou falta de espaço influenciam a forma como o software será usado? (Importante para Requisitos Não Funcionais de Usabilidade).

---

### 3. Protocolo de Execução

Para que a observação seja produtiva e ética, deve seguir este fluxo:

- **Preparação:** Obter autorização das chefias e explicar ao usuário que o objetivo não é avaliar o desempenho dele, mas entender o processo para melhorar a ferramenta.
- **Sessão de Observação:** O analista deve registrar não apenas o que é feito, mas as condições em que é feito. Utilize fotos (se permitido) de formulários em papel ou telas de sistemas antigos.
- **Debriefing (Entrevista de Fechamento):** Após a observação, o analista deve sentar com o usuário para esclarecer pontos específicos que foram anotados.
- **Análise de Dados:** Traduzir os comportamentos observados em Requisitos Funcionais (o que o sistema deve automatizar) e Requisitos Não Funcionais (ex: o sistema deve permitir operação com apenas uma mão, caso o usuário precise segurar um scanner).

---

### 4. Vantagens e Limitações

| Vantagem | Limitação |
| --- | --- |
| Fidelidade à Realidade: Mostra como o trabalho é executado de fato, ignorando processos ideais que não funcionam. | Efeito Hawthorne: As pessoas tendem a agir de forma diferente (mais rápida ou seguindo mais as regras) quando sabem que estão sendo observadas. |
| Identificação de "Óbvios": Captura detalhes que o usuário esquece de contar em entrevistas por considerar triviais. | Custo Elevado: Exige muito tempo do analista (horas ou dias de acompanhamento). |
| Contexto de Uso: Ajuda a definir requisitos de hardware e interface baseados no ambiente real (ex: chão de fábrica vs. escritório). | Visão Local: O analista observa apenas uma pessoa ou um turno, podendo perder variações do processo que ocorrem em outros horários. |

---

### 5. Boas Práticas Técnicas

- **Não julgue:** O objetivo não é dizer que o usuário está fazendo "errado", mas entender por que ele faz daquela forma.
- **Registre as ferramentas de apoio:** Se o usuário consulta uma tabela colada na parede para inserir um código no sistema, o novo sistema deve ter essa tabela integrada ou automatizada.
- **Mantenha a discrição:** Na observação passiva, evite comentários que possam deixar o usuário desconfortável ou ansioso.

---

### 📝 Resumo

- **Conceito:** Estudo in loco do comportamento e fluxo de trabalho do usuário.
- **Foco Principal:** Descobrir a diferença entre o processo oficial e a prática real.
- **Resultado:** Requisitos de alta fidelidade e redução de erros de projeto por falta de contexto.