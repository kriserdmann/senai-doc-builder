# 1.1 Sistemas de Informação. A Ciência por Trás da Tecnologia

---

## 🧠 Introdução. O Software no Mundo Real

Muitos iniciantes confundem **"Software"** com **"Sistema de Informação"**.

Enquanto o software é o conjunto de instruções lógicas, o **Sistema de Informação (SI)** é um organismo muito mais complexo.

Na visão da **Engenharia de Requisitos**, um sistema existe para resolver um problema de negócio ou atender a uma necessidade humana através do processamento de dados.

💡 Se o código é o **motor**, o SI é o **veículo completo**, incluindo:

- ⛽ o combustível (**dados**)
- 🧑‍💻 o motorista (**pessoas**)
- 📜 as leis de trânsito (**processos**)

---

## 🧩 1. O Conceito de Sistema de Informação

Um **Sistema de Informação** é um conjunto de componentes inter-relacionados que coletam (ou recuperam), processam, armazenam e distribuem informações para apoiar a tomada de decisões, a coordenação e o controle em uma organização.

### 🔄 A Visão Sistêmica

Um sistema não opera no vácuo.

Ele recebe:

- **Inputs (Entradas)**
- realiza um **Processamento (Transformação)**
- gera **Outputs (Saídas)**

E mantém um mecanismo de **Feedback (Retroalimentação)** para garantir que o objetivo inicial seja atingido.

---

## 🏗️ 2. Os 5 Pilares Estruturais (Componentes)

Para que um sistema seja robusto e funcional, o analista deve projetar a interação entre estes cinco componentes:

---

### 🖥️ A. Hardware (Infraestrutura Física)

Não se resume ao computador. Inclui toda a camada física:

- **Dispositivos de Entrada/Saída**
    
    Sensores, terminais, leitores biométricos
    
- **Processamento e Armazenamento**
    
    Servidores locais, instâncias em nuvem (AWS, Azure), arquiteturas de borda (Edge Computing)
    
- **Redes e Conectividade**
    
    Protocolos de comunicação, roteamento e latência
    

---

### 💻 B. Software (Lógica e Instrução)

Dividido em camadas de responsabilidade:

- **Software de Sistema**
    
    Sistemas operacionais e drivers que gerenciam o hardware
    
- **Software de Aplicação**
    
    Onde o analista de sistemas foca. São os programas que executam tarefas específicas para o usuário (ERPs, CRMs, Web Apps)
    
- **Middleware**
    
    Camadas que permitem a comunicação entre diferentes sistemas (APIs, mensageria)
    

---

### 🧱 C. Dados (O Ativo Estratégico)

Os dados são a matéria-prima bruta.

O objetivo do sistema é transformá-los em:

- **Informação (dados contextualizados)**
- **Conhecimento (informação aplicada para decisão)**
- **Persistência**
    
    Como os dados são estruturados (Bancos de Dados Relacionais vs. NoSQL)
    
- **Integridade**
    
    Garantir que o dado não seja corrompido durante o processamento
    

---

### ⚙️ D. Processos e Procedimentos (As Regras de Negócio)

Este é o ponto onde muitos sistemas falham.

Processos são as sequências de passos lógicos que definem como o trabalho é feito.

📌 **Exemplo**

Um sistema de e-commerce pode ter o melhor hardware e código, mas se o processo de **"estorno de pagamento"** for mal modelado logicamente, o sistema falha com o cliente.

🧠 O analista deve mapear o **Workflow (fluxo de trabalho)** antes de desenhar a tela.

---

### 👥 E. Peopleware (O Fator Humano)

Sistemas são feitos por pessoas e para pessoas.

- **Stakeholders**
    
    Todos os interessados (usuários finais, gestores, administradores de TI)
    
- **UX/UI**
    
    A interface deve ser projetada considerando a carga cognitiva e o contexto do usuário
    

---

## 📊 3. A Importância Estratégica da Análise

Por que gastar horas modelando em vez de programar imediatamente?

De acordo com os fundamentos da **Engenharia de Requisitos**, o custo de corrigir um erro de entendimento na fase de análise é exponencialmente menor do que corrigi-lo após o software estar pronto.

### 📈 Custo de Correção

| Fase de Correção | Custo Relativo |
| --- | --- |
| Requisitos/Análise | 1x |
| Projeto/Design | 3x a 5x |
| Codificação | 10x |
| Testes | 15x a 40x |
| Operação (Pós-lançamento) | Até 100x |

🏗️ O Analista de Sistemas atua como o **Arquiteto da Obra**.

Ninguém constrói um prédio de 20 andares sem uma planta detalhada.

Da mesma forma, não se constrói um software escalável sem modelagem e análise profunda.

---

## 🚀 Desafio de Reflexão Técnica

Pense no sistema de um **Banco Digital**.

- Qual seria um exemplo de **Dado bruto** e qual seria a **Informação gerada para o usuário**?
- Como uma falha no componente **Processo** (ex: regra de transferência PIX) poderia causar um prejuízo milionário mesmo se o componente **Hardware** estivesse funcionando perfeitamente?

---

*📚 Este material foi criado por **Kristian Erdmann** e compõe a base técnica da **Unidade Curricular de Análise e Modelagem de Sistemas.***