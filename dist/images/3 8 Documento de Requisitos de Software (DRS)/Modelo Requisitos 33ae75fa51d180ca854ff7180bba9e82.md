# Modelo Requisitos

# Documento de Requisitos  SiamExpress - Sistema de Delivery e Gestão de Pedidos

## Ficha Técnica

## Equipe Responsável pela Elaboração

João Silva - Análise de Requisitos
Maria Santos - Arquiteta de Software
Carlos Oliveira - Gerente de Produto

## Público Alvo

Este manual destina-se a desenvolvedores, designers, equipe de QA (Quality Assurance), gerentes de projeto e demais partes interessadas no desenvolvimento do sistema SiamExpress

## Versão 1.0 - Lisboa, agosto de 2025

Dúvidas, críticas e sugestões devem ser encaminhadas por escrito para o seguinte endereço postal:
Rua de S. Paulo, 100, 1200-429 Lisboa, Portugal
Ou para o seguinte endereço eletrônico:
contato@siam.express

## Sumário

INTRODUÇÃO
$\_\_\_\_$
Visão geral deste documento
$\_\_\_\_$
Convenções, termos e abreviações
$\_\_\_\_$
1.Identificação dos Requisitos
$\_\_\_\_$
2.Prioridades dos Requisitos
$\_\_\_\_$
Referências
CAPÍTULO 1 - DESCRIÇÃO GERAL DO SISTEMA ….. C1.P
Abrangência e sistemas relacionados ….. C1.P
Descrição dos usuários ….. C1.P
1. ….. C1.P
2. ….. C1.P
3 ….. C1.P
CAPÍTULO 2 - REQUISITOS FUNCIONAIS (CASOS DE USO) ….. C2.P
 ….. C2.P
[RF001]  ….. C2.P
Fluxo de eventos principal ….. C2.P
 Fluxos secundários (alternativos e de exceção) ….. C2.P
[RF…]  ….. C2.P

$\_\_\_\_$ ….. P2
… ….. C2.P
CAPÍTULO 3 - REQUISITOS NÃO FUNCIONAIS ….. C3.P
Usabilidade ….. C3.P
[NF001]  ….. C3.P
[NF…]  ….. C3.P
Confiabilidade ….. C3.P
[NF…]  ….. C3.P
Desempenho ….. C3.P
[NF…]  ….. C3.P
Segurança ….. C3.P
[NF…]  ….. C3.P
Distribuição ….. C3.P
[NF…]  ….. C3.P
Padrões ….. C3.P
[NF…]  ….. C3.
Hardware e software ….. C3.
[NF…]  ….. C3.P
CAPÍTULO 4 -  DESCRIÇÃO DA INTERFACE COM O USUÁRIO ….. C4.P
 ….. C4.P
1. Críticas da interface ….. C4.P
 ….. C4.P
… ….. C4.P

## Introdução

Este documento especifica o sistema SiamExpress , fornecendo aos desenvolvedores as informações necessárias para o projeto e implementação, assim como para a realização dos testes e homologação do sistema. Ele tem como objetivo descrever os requisitos funcionais e não funcionais para o aplicativo de delivery de um restaurante tailandês em Lisboa.

## Visão geral deste documento

Esta introdução fornece as informações necessárias para fazer um bom uso deste documento, explicitando seus objetivos e as convenções que foram adotadas no texto. As demais seções apresentam a especificação do sistema SiamExpress e estão organizadas como descrito abaixo:

- Capítulo 1 - Descrição geral do sistema: apresenta uma visão geral do sistema, caracterizando qual é o seu escopo e descrevendo seus usuários.
- Capítulo 2 - Requisitos funcionais (casos de uso): especifica todos os requisitos funcionais do sistema, descrevendo os fluxos de eventos, prioridades, atores, entradas e saídas de cada caso de uso a ser implementado.
- Capítulo 3 - Requisitos não funcionais: especifica todos os requisitos não funcionais do sistema, divididos em requisitos de usabilidade, confiabilidade, desempenho, segurança, distribuição, adequação a padrões e requisitos de hardware e software.
- Capítulo 4 - Descrição da interface com o usuário: apresenta desenhos, figuras ou rascunhos de telas do sistema.

## Convenções, termos e abreviações

A correta interpretação deste documento exige o conhecimento de algumas convenções e termos específicos, que são descritos a seguir.

## . 1 Identificação dos Requisitos

Por convenção, a referência a requisitos é feita através do nome da subseção onde eles estão descritos, seguido do identificador do requisito, de acordo com o esquema abaixo:
[nome da subseção.identificador do requisito]
Por exemplo, o requisito [Recuperação de dados.RF016] está descrito em uma subseção chamada “Recuperação de dados”, em um bloco identificado pelo número [RF016]. Já o requisito não funcional [Confiabilidade.NF008] está descrito na seção de requisitos não funcionais de Confiabilidade, em um bloco identificado por [NF008].

## . 2 Prioridades dos Requisitos

Para estabelecer a prioridade dos requisitos foram adotadas as denominações “essencial”, “importante” e “desejável”.

- Essencial é o requisito sem o qual o sistema não entra em funcionamento.

Requisitos essenciais são requisitos imprescindíveis, que têm que ser implementados impreterivelmente.

- Importante é o requisito sem o qual o sistema entra em funcionamento, mas de forma não satisfatória. Requisitos importantes devem ser implementados, mas, se não forem, o sistema poderá ser implantado e usado mesmo assim.
- Desejável é o requisito que não compromete as funcionalidades básicas do sistema, isto é, o sistema pode funcionar de forma satisfatória sem ele. Requisitos desejáveis são requisitos que podem ser deixados para versões posteriores do sistema, caso não haja tempo hábil para implementá-los na versão que está sendo especificada.

## Referências

Documentos relacionados ao SiamExpress e/ou mencionados nas seções a seguir:

1. Título; Número (se aplicável); Data; Instituição, divisão ou equipe responsável pelo documento; Link para o documento (se aplicável);
2. Título; Número (se aplicável); Data; Instituição, divisão ou equipe responsável pelo documento; Link para o documento (se aplicável);
3. …

## Capítulo

## Descrição geral do sistema

### Abstract

O SiamExpress é um sistema de software composto por uma aplicação móvel para clientes e uma plataforma web para o restaurante. O objetivo principal é facilitar o processo de pedido e entrega de pratos tailandeses, do cliente até o restaurante e do restaurante até o cliente, de forma eficiente e segura.

## Abrangência e sistemas relacionados

O sistema irá permitir aos clientes: visualizar o menu, fazer pedidos para entrega ou retirada, pagar eletronicamente e acompanhar o status do pedido em tempo real.

O sistema irá permitir ao restaurante: receber e gerir pedidos, atualizar o status e gerir o cardápio e preços.
O escopo negativo (o que o sistema não fará) inclui: gerenciamento de estoque, sistema de reserva de mesas e sistema de ponto de venda (POS) para clientes no local.

O sistema é independente, mas interage com sistemas externos de pagamento eletrônico, como Stripe ou MB WAY.

## Descrição dos usuários

O sistema tem quatro tipos de usuários:

1. Cliente: Usuário final do aplicativo móvel, que busca facilidade em fazer pedidos e rastreá-los.
2. Gerente do Restaurante: Usuário da plataforma web, responsável pela gestão do negócio.
3. Cozinheiro: Usuário da plataforma web, que visualiza e gerencia os pedidos em preparação.
4. Entregador: Usuário da plataforma web, que recebe e conclui as entregas

## Requisitos funcionais (casos de uso)

## Gestão de Pedidos do Cliente

Esta seção descreve os casos de uso relacionados às funcionalidades do cliente, desde o login até a finalização do pedido. O ator principal para todos os casos de uso nesta subseção é o Cliente.

## [RF001] Fazer Login/Cadastro

Descrição: O sistema deve permitir que o cliente se autentique ou crie uma nova conta de usuário para acessar as funcionalidades do aplicativo.

Ator: Cliente
Prioridade: Essencial
Entradas e pré condições: O usuário não está logado. O usuário deve fornecer e-mail e senha para login, ou nome, e-mail e senha para cadastro.

Saídas e pós condições: O sistema autentica o usuário e o redireciona para a tela inicial do aplicativo, ou retorna uma mensagem de erro.

## Fluxo de eventos principal:

1. O Cliente abre o aplicativo.
2. O sistema exibe a tela de login/cadastro.
3. O Cliente preenche os campos e submete o formulário.
4. O sistema valida os dados.
5. O sistema autentica o Cliente e o redireciona para a tela inicial.

## [RF002] Efetuar Pedido

Ator: Cliente
Prioridade: Essencial
Entradas e pré condições: O Cliente está logado e tem itens no carrinho.
Saídas e pós condições: Um pedido é criado no sistema do restaurante. Uma notificação de pedido é exibida para o Gerente.

## Fluxo de eventos principal:

1. O Cliente navega para a tela do carrinho e clica em “Finalizar Pedido”.
2. O sistema exibe o resumo do pedido e as opções de pagamento.
3. O Cliente seleciona a forma de pagamento e clica em “Pagar”.
4. O sistema processa o pagamento e cria um novo pedido.
5. O sistema exibe uma tela de confirmação do pedido para o Cliente.

## [RF003] Selecionar Tipo de Pedido

Descrição: O sistema deve permitir que o cliente escolha entre “Delivery” e “Takeaway” no

Ator: Cliente

Prioridade: Essencial

Entradas e pré condições: O cliente está na tela inicial ou no carrinho de compras.
Saídas e pós condições: O sistema define o tipo de pedido como “Delivery” ou “Takeaway”, afetando as opções subsequentes de pagamento e endereço.

Fluxo de eventos principal:

1. O Cliente navega pelo menu.
2. Ao adicionar itens ao carrinho ou ao clicar em “Finalizar Pedido”, o sistema apresenta as opções de “Delivery” ou “Takeaway”.
3. O Cliente seleciona o tipo de pedido desejado.
4. O sistema armazena a preferência para o processamento do pedido.

## [RF004] Gerenciar Disponibilidade de Pedidos

Descrição: O sistema deve validar o horário de funcionamento do restaurante e desativar a funcionalidade de pedido quando estiver fechado.

Ator: Cliente
Prioridade: Essencial
Entradas e pré condições: O Cliente abre o aplicativo.
Saídas e pós condições: O sistema exibe um status de funcionamento e habilita/desabilita a funcionalidade de pedido.

## Fluxo de eventos principal:

1. O Cliente abre o aplicativo.
2. O sistema verifica o dia da semana e a hora local atual.
3. Se a hora estiver dentro dos horários de funcionamento, o sistema exibe o menu completo e permite o pedido.
4. Se for fora do horário, o sistema exibe uma mensagem informando que o restaurante está fechado.

## [RF005] Selecionar Forma de Pagamento

- Descrição: O sistema deve permitir que o cliente escolha entre as formas de pagamento disponíveis, que variam de acordo com o tipo de pedido (“Delivery” ou “Takeaway”).
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## [RF006] Visualizar e Aplicar Promoções

- Descrição: O sistema deve exibir as promoções ativas e permitir que o cliente as aplique ao seu pedido, resultando em um desconto no valor final.
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## [RF007] Gerenciar Programa de Fidelidade

- Descrição: O sistema deve rastrear e exibir o progresso do cliente no programa de fidelidade e permitir o resgate de um prêmio quando o objetivo for alcançado.
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## Gestão Interna do Restaurante

## [RF008] Gerenciar Pedidos Recebidos

- Descrição:
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## [RF009] Gerir o Cardápio (CRUD)

- Descrição: Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## Rastreamento e Conclusão da Entrega

## [RF010] Rastrear o Pedido

- Descrição: O sistema deve permitir que o cliente visualize a situação atual de seu pedido em tempo real.
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal: 1.

## [RF011] Alterar Status do Pedido (Cozinheiro)

- Descrição: .
- Ator:
- Prioridade:
- Entradas e pré condições:
- Saídas e pós condições:
- Fluxo de eventos principal:
1. 

## [RF012] Concluir a Entrega

- Descrição:
- Ator:
- Prioridade:
- Entradas e pré condições: O Entregador está logado, com um pedido atribuído e chegou ao endereço de entrega.
- Saídas e pós condições: O pedido é marcado como “Entregue” no sistema, e o ciclo de vida do pedido é finalizado.
- Fluxo de eventos principal:
1. O Entregador chega ao local da entrega.
2. O Entregador encontra a opção “Marcar como Entregue” em seu aplicativo.
3. O Entregador clica na opção.
4. O sistema valida a ação e atualiza o status do pedido para “Entregue”.
5. Uma notificação é enviada ao Cliente confirmando a entrega do pedido.

## Requisitos não funcionais

## Usabilidade

Esta seção descreve os requisitos não funcionais associados à facilidade de uso do sistema.

## [NF001] Facilidade de Navegação

Descrição: A interface do aplicativo móvel deve ser intuitiva e fácil de usar.
Prioridade: Essencial
Requisito: O cliente deve ser capaz de encontrar e fazer um pedido em no máximo 5 cliques, a partir da tela inicial.

## [NF002] Feedback Visual

Descrição: O sistema deve fornecer feedback visual imediato ao usuário para ações importantes.
Prioridade: Essencial
Requisito: Ao adicionar um item ao carrinho, o ícone do carrinho deve ser atualizado com um indicador visual em menos de 1 segundo.

## Confiabilidade

Esta seção descreve os requisitos não funcionais associados à confiabilidade do sistema.

## [NF003] Recuperação de Falhas

Descrição: O sistema deve ser capaz de se recuperar de falhas sem perda de dados do pedido.

## Prioridade:

## Requisito:.

## [NF004] Disponibilidade do Sistema

Descrição: O sistema deve estar disponível para uso nos horários de funcionamento do restaurante.

## Prioridade:

## Requisito:

## Desempenho

Esta seção descreve os requisitos não funcionais relacionados ao desempenho e eficiência do sistema.

## [NF005] Tempo de Resposta

Descrição: O sistema deve carregar as informações do menu e de outros conteúdos rapidamente para proporcionar uma boa experiência ao usuário.

## Prioridade:

## Requisito:

## [NF006] Processamento de Pedido

Descrição: O sistema deve processar os pedidos de forma rápida para que a equipe do restaurante possa começar a preparação sem atrasos.

## Prioridade:

## Requisito:

## [NF007] Suporte a Usuários Simultâneos

Descrição: O sistema deve ser capaz de suportar um grande número de usuários e pedidos simultâneos sem perda de desempenho.

## Prioridade:

## Requisito:

## Segurança

Esta seção descreve os requisitos não funcionais relacionados à segurança e proteção do sistema.

## [NF008] Proteção de Dados

Descrição: O sistema deve proteger os dados pessoais e de pagamento dos clientes de acesso não autorizado.

## Prioridade:

## Requisito:

## [NF009] Autenticação Segura

## Descrição:

## Prioridade:

## Requisito:

## [NF010] Acesso Restrito

## Descrição:

Requisito:

## Distribuição

Esta seção descreve os requisitos não funcionais associados à distribuição da versão executável do sistema.

## [NF…]

<Utilize os mesmos campos mostrados na seção 4.1 para descrever este e os demais requisitos não funcionais de distribuição.>

## Padrões

Esta seção descreve os requisitos não funcionais associados a padrões ou normas que devem ser seguidos pelo sistema ou pelo seu processo de desenvolvimento.
<Se você mencionar documentos relacionados, não esqueça de listá-los na seção 1.3.>

## [NF…]

<Utilize os mesmos campos mostrados na seção 4.1 para descrever este e os demais requisitos não funcionais de adequação a padrões.>

## Hardware e software

Esta seção descreve os requisitos não funcionais associados ao hardware e software usados para desenvolver ou para executar o sistema.

## [NF…]

<Utilize os mesmos campos mostrados na seção 4.1 para descrever este e os demais requisitos não funcionais de hardware e software.>

## Capítulo

## Descrição da interface com o

## usuário

<Esta seção deve conter desenhos ou rascunhos das telas do sistema que forem necessários ou convenientes para esclarecer algum dos requisitos do sistema. Para sistemas que possuem protótipos ou versões já desenvolvidas é possível capturar as telas e apresentar figuras das mesmas.

Use nomes e/ou números para identificar cada interface e descreva-as em seções independentes.>

## 

<Descreva a interface em questão, através de figuras, diagramas e/ou texto.

## . 1  Críticas da interface

<Você pode fazer aqui a descrição de críticas simples de interface, como o tamanho e máscara de campos, simplificando assim a descrição dos fluxos de exceção.>

## 

<Prossiga no detalhamento das interfaces do sistema, descrevendo todas que for necessário, cada uma em uma subseção.>