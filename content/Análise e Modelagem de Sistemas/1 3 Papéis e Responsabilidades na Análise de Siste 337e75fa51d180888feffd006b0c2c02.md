# 1.3: Papéis e Responsabilidades na Análise de Sistemas

## Introdução: O Ecossistema de Desenvolvimento

O desenvolvimento de um Sistema de Informação é um esporte de equipe. Na Engenharia de Software moderna, o sucesso de um projeto não depende apenas da habilidade de codificação, mas da clareza com que as responsabilidades são distribuídas. O Analista de Sistemas atua como o ponto central (o hub) que conecta os objetivos de negócio às capacidades técnicas.

---

## 1. O Analista de Sistemas (Engenheiro de Requisitos)

Conforme Vazquez & Simões, o analista é o profissional responsável por adquirir, processar e disseminar o conhecimento do sistema. Ele não é apenas um "escritor de documentos", mas um investigador e mediador.

### Principais Responsabilidades:

- Descoberta (Elicitação): Identificar as reais necessidades, muitas vezes ocultas, dos stakeholders.
- Mediação de Conflitos: Resolver impasses quando dois departamentos pedem funcionalidades contraditórias.
- Modelagem: Traduzir necessidades de negócio em diagramas técnicos (UML) que os desenvolvedores consigam implementar sem ambiguidade (Baseado em Gilleanes Guedes).
- Garantia da Regra de Negócio: Assegurar que o software final respeite as leis, normas e processos da empresa.

### Habilidades Requeridas:

**Hard Skills:**

Domínio de UML, técnicas de entrevista, prototipagem e compreensão de arquitetura de dados.

**Soft Skills:**

Escuta ativa, empatia (para entender a dor do usuário) e capacidade de síntese.

---

## 2. Stakeholders: Os Interessados

Um erro comum de iniciantes é achar que o "cliente" é uma pessoa única. Na Engenharia de Requisitos, trabalhamos com o conceito de Stakeholders (Partes Interessadas).

- Patrocinador (Sponsor): É quem detém o orçamento. Sua preocupação é o ROI (Retorno sobre Investimento) e o prazo.
- Usuários Finais: Aqueles que operarão o sistema diariamente. Focam na usabilidade e na eficiência das tarefas.
- Clientes: Aqueles que compram o produto (podem ou não ser os usuários).
- Especialistas no Domínio (SME): Pessoas que detêm o conhecimento profundo sobre o negócio (ex: um contador em um sistema fiscal). O analista "bebe" da fonte dessas pessoas.

---

## 3. O Time Técnico (A Ponte para a Execução)

O analista entrega o seu trabalho para outros profissionais que dependem da precisão da sua análise.

### A. O Desenvolvedor (Programador)

**Responsabilidade:**

Transformar os modelos (Diagramas de Classe, Sequência, etc.) em código funcional.

**Relação com o Analista:**

O desenvolvedor é o "cliente interno" do analista. Se o diagrama está mal feito, o código será mal escrito.

---

### B. O Arquiteto de Software

**Responsabilidade:**

Definir a estrutura de alto nível (infraestrutura, segurança, escalabilidade).

**Relação com o Analista:**

Define as restrições técnicas que o analista deve respeitar ao levantar os requisitos não funcionais.

---

### C. O Analista de Qualidade (QA/Tester)

**Responsabilidade:**

Criar cenários de teste baseados nos requisitos levantados.

**Relação com o Analista:**

O QA usa a especificação de requisitos do analista para dizer se o software "passou" ou "falhou".

---

*📚 Este material foi criado por **Kristian Erdmann** e compõe a base técnica da **Unidade Curricular de Análise e Modelagem de Sistemas.***