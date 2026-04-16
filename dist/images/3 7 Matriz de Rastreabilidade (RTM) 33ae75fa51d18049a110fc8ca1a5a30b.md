# 3.7: Matriz de Rastreabilidade (RTM)

### Introdução. O Elo Perdido da Engenharia

É comum que, em projetos longos, a equipe se pergunte: "Por que estamos desenvolvendo esta funcionalidade?" ou "Se eu mudar esta regra de cálculo, o que mais no sistema vai quebrar?". A Matriz de Rastreabilidade responde a essas perguntas.

A rastreabilidade é a capacidade de descrever e seguir a vida de um requisito em ambas as direções (origem e destino). Ela é um componente essencial da gerência de configuração e garantia de qualidade.

---

### 1. Tipos de Rastreabilidade

Para um controle total, o analista deve considerar três dimensões de rastreio:

**Rastreabilidade para Trás (Backward-from).**

Conecta o requisito à sua origem. Pode ser uma ata de reunião, um e-mail do cliente, uma legislação ou uma observação de campo.

**Pergunta:** "Quem pediu isso e onde está registrado?"

**Rastreabilidade para Frente (Forward-to).**

Conecta o requisito aos seus subprodutos. Isso inclui diagramas UML, protótipos, módulos de código e casos de teste.

**Pergunta:** "Este requisito já foi modelado, codificado e testado?"

**Rastreabilidade Horizontal.**

Conecta requisitos relacionados entre si. Por exemplo, um Requisito Funcional que depende de um Requisito Não Funcional de segurança.

---

### 2. Anatomia de uma Matriz (RTM) no Notion

No Notion, a RTM não deve ser apenas um texto, mas uma Base de Dados Relacional. Cada linha representa um requisito e as colunas mostram suas conexões.

| ID | Requisito | Origem (Stakeholder/Doc) | Caso de Uso (UML) | Código/Módulo | Caso de Teste | Status |
| --- | --- | --- | --- | --- | --- | --- |
| RF01 | Realizar Saque | Ata Reunião #04 | UC08 - Saque | finance/withdraw.js | CT-01, CT-02 | Validado |
| RF02 | Consultar Saldo | E-mail Diretor (12/03) | UC09 - Saldo | finance/balance.js | CT-05 | Em Dev |
| RNF01 | Criptografia SSL | Política Seg. Empresa | N/A (Arquitetura) | config/security.py | CT-10 | Aprovado |

---

### 3. A Importância da Análise de Impacto

A RTM é a ferramenta principal para realizar a Análise de Impacto. Quando o cliente solicita uma mudança, o analista não diz "sim" ou "não" imediatamente. Ele consulta a matriz:

- **Identifica o Requisito.** O cliente quer mudar a regra de juros (RN05).
- **Rastreia as Conexões.** A matriz mostra que a RN05 afeta o RF08 (Cálculo de Parcela), a UC12 (Diagrama de Sequência) e os Testes CT-20 a CT-25.
- **Mede o Esforço.** Com base nessas conexões, o analista informa: "Essa mudança afetará 1 diagrama, 2 módulos de código e exigirá refazer 5 testes. O impacto no cronograma é de 3 dias."

---

### 4. Benefícios Práticos para o Projeto

- **Evita o "Gold Plating".** Impede que desenvolvedores criem funcionalidades que não foram solicitadas (se não está na matriz, não deve ser codificado).
- **Garante a Cobertura de Testes.** Se um requisito na matriz não tem um "Caso de Teste" associado, o sistema corre o risco de ser entregue com falhas.
- **Facilita Auditorias.** Em sistemas críticos (saúde, financeiro), a RTM prova que todos os requisitos legais foram implementados.

---

### 📝 Resumo de Validação

- [ ]  Todo requisito tem uma origem clara?
- [ ]  Todo requisito está vinculado a pelo menos um caso de teste?
- [ ]  Existe um responsável técnico para cada item da matriz?