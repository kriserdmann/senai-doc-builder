# 1.4: Matriz de Responsabilidades (RACI)

## Introdução: O Fim do "Achei que Fulano ia Fazer"

Em projetos complexos, a falha mais comum não é a falta de habilidade técnica, mas a falta de clareza sobre quem deve tomar uma decisão ou executar uma tarefa. A Matriz RACI (também conhecida como Matriz de Atribuição de Responsabilidades) é uma ferramenta que mapeia os papéis do projeto em relação às atividades do ciclo de vida do software.

---

## 1. A Anatomia do RACI

A sigla representa os quatro níveis de envolvimento que um profissional pode ter em uma atividade:

![PT-RACI-2.jpg](1%204%20Matriz%20de%20Responsabilidades%20(RACI)/PT-RACI-2.jpg)

- **R - Responsible (Responsável):**
É quem efetivamente "mão na massa". É a pessoa (ou equipe) que executa a tarefa para que ela seja concluída.
- **A - Accountable (Autoridade/Dono):**
É quem responde pelo sucesso ou fracasso da tarefa. Regra de Ouro: Só pode haver um "A" por atividade. Se houver dois, ninguém é dono da decisão final.
- **C - Consulted (Consultado):**
São os especialistas que fornecem informações para a tarefa. A comunicação é de duas vias (o responsável pergunta e o consultado responde).
- **I - Informed (Informado):**
São as pessoas que precisam saber que a tarefa foi concluída ou que uma decisão foi tomada, mas não precisam opinar. A comunicação é de uma via (apenas notificação).

### Exemplo:

![MATRIZ_RACI-1024x602.jpg](1%204%20Matriz%20de%20Responsabilidades%20(RACI)/MATRIZ_RACI-1024x602.jpg)

---

## 2. Aplicabilidade no Ciclo de Vida de Software

Ao cruzar as 7 fases do ciclo de vida com os papéis do time, o analista cria um mapa de navegação para o projeto:

| Atividade / Fase | Analista de Sistemas | Desenvolvedor | Stakeholder (Cliente) | QA (Tester) |
| --- | --- | --- | --- | --- |
| Elicitação de Requisitos | A / R | I | C | I |
| Definição de Arquitetura | C | R | I | C |
| Modelagem de Banco de Dados | A / R | I | I | C |
| Codificação de Funcionalidade | C | A / R | I | I |
| Testes de Integração | I | C | I | A / R |
| Homologação (Aceite) | C | I | A / R | C |

---

## 3. Regras para uma Matriz Saudável

Um analista de sistemas utiliza a matriz para identificar "gargalos" no projeto:

- Muitos "R" para uma pessoa: Sobrecarga. Esta pessoa será o gargalo do projeto.
- Nenhum "R" em uma tarefa: A tarefa nunca será concluída, pois não há executor.
- Muitos "C": Excesso de reuniões e consultas. O projeto ficará lento pela necessidade de ouvir muitas pessoas.
- Falta de "A": Ninguém toma a decisão final. O projeto fica "andando em círculos".

---

*📚 Este material foi criado por **Kristian Erdmann** e compõe a base técnica da **Unidade Curricular de Análise e Modelagem de Sistemas.***