---
title: "Navegação (Stack, Tabs, Drawer)"
block: "Fundamentos e Interface"
duration: "6h"
description: "Gerenciando a alternância entre interfaces utilizando as bibliotecas fundamentais do ecossistema e estruturando uma arquitetura de rotas escalável para aplicações de grande porte."
---

> [!WARNING] Prática no Emulador
> A percepção da navegação no Android ocorre de maneira física. Teste exaustivamente o botão de **"Voltar" nativo de hardware** presente no rodapé do simulador AVD e repare como o React Navigation empilha e destroi organicamente as instâncias de tela capturando esses gestos do Sistema Operacional.

## 🎯 Objetivos de Aprendizagem

*   **Instalar o React Navigation Core:** Compreender a configuração complexa obrigatória de pacotes nativos para C++ (Screens, SafeArea).
*   **Mapear o conceito de Pilha (Stack):** Criar rotas autônomas que guardam o estado em profundidade, como um usuário navegando de "Home" para "Detalhes do Produto".
*   **Gerenciar Roteamento em Guias (Tabs e Drawer):** Implementar uma navegação paralela no rodapé ou pelo menu sanduíche lateral altamente usada em software corporativo.
*   **Repassar Parâmetros Dinâmicos nas Rotas:** Trafegar strings, IDs e objetos complexos via `route.params` para a tela subsequente sem acoplar lógicas em banco.
*   **Configurar Arquitetura Refatorada de Rotas:** Limpar o "App.js" utilizando arquivos estruturais independentes que concentram unicamente a central de controle logístico (\`/routes\`).

* * *

## 📖 Teoria: Além da Única Tela

Até a fase atual de nosso laboratório, desenvolvemos estruturas estáticas magníficas contidas unicamente no ecossistema delimitado de uma tela frontal. Contudo, emuladores e aplicativos móveis não se comportam como o navegador Google Chrome. No browser, nós temos uma barra de URL persistente; as páginas viajam, se atualizam, recarregam os recursos inteiros, constroem arquivos HTTP em abas flutuantes e permitem favoritos isolados. Quando o usuário toca para transitar em um Mobile, tudo ocorre dentro do que chamamos de _Single Page Context_ atrelado ao registro matriz Android (Activity).

Para solucionar a necessidade absoluta da sensação espacial de progressão para trás e para frente no telefone, o Facebook delegou o problema histórico da navegação para a comunidade _Open Source_ madura, o que gerou a ferramenta de adoção monopolista chamada de **React Navigation**. Trata-se de muito mais do que um condutor de cliques: é um orquestrador complexo que escuta ordens em JavaScript, mas delega inteiramente a mecânica de transição contínua fluída via 60 Frames por Segundo (FPS) para funções C++ enraizadas nativamente pelo pacote `react-native-screens`.

O conceito fundacional morador do Roteamento em telefones trata-se primeiramente da Estrutura de \*\*Stack (Pilha)\*\*. Aja da mesma forma que imaginaria com um baralho de cartas de jogar em uma mesa. Se o usuário abre a aplicação e visualiza a Interface "Login", essa é a primeira placa da base da mesa. Quando ele autentica e clica rumo a "Dashboard", a placa do "Dashboard" cai sobre o "Login" ocultando-o inteiramente. Ele não desapareceu e não foi apagado da RAM de antemão: continua lá fixo respirando inativo debaixo da camada recém chegada. Ao pressionar o botão físico de voltar do Android, o React Navigation empurra a carta do "Dashboard" ralo abaixo da lixeira destrutivamente em procedimento de unmount (Limpando o lixo da RAM ou _Garbage Collection_) e o usuário visualiza instantaneamente o Login ressurrecto perante seus olhos no milissegundo exato sem "Time to Loading".

Contudo, certos fluxos de software — visivelmente perceptivos na gigantesca esmagadora maioria de painéis logísticos industriais — baseiam-se numa progressão paralela. O mecânico da frota não quer ter que arrastar dezenas de telas para a esquerda infinitamente a fim desvincular a ordem de caminhão para inspecionar um reboque. Ele demanda acesso veloz a ambos. Surge a necessidade massiva dos modelos **Tabs Navigation (Abas inferiores)** e **Drawer Navigation (Gaveta lateral sanduíche)**.

As _Tab Navigators_ diferem brutalmente da mecânica atrelada ao baralho supracitado (Pilha). Numa Tab de rodapé da página (Módulos Base como: Início, Configurações, Relatórios), clicar sobre a segunda Aba de Configurações fará o gerador suspender a operação da página corrente no congelamento de background paralelo e invocar a outra ao lado. Se ele estivesse no topo da lista "Relatórios", mudou de Tab para o "Início", após retornar para sua aba prévia dos "Relatórios" ele se encontrará na posicação escrolada milimetricamente de onde tinha partido do zero sem quebra. São universos distantes vizinhos de hardware.

Numa complexa operação de _Squad Ágil empresarial_, o roteamento costuma atingir o nível hierárquico misto ou aninhamento cruzado. É estritamente normatizado, por exemplo, que para obtermos um app sem amadorismos, nós precisaremos inserir a matriz de \`Tab\` como sendo uma carta debaixo de um pacote Master do tipo \`Stack\`. Ou seja, o usuário precisa passar de uma Barreira Pilha base (Stack Login) para se depositar sobre o interior gigantesco (Tab Dashboard), permitindo a ele não visualizar o rodapé de Menu Operacional sem antes passar do porteiro-base autenticado e de ser validado sem volta acoplada.

Nesta arquitetura moderna do ecossistema e emulação local, não se usa banco de dados ou Redux para dizer de um View ao outro uma String minúscula "Bem-vindo Eduardo". Para transições ativas e diretas é usado tráfego da carga de parâmetros inseridos num pacote anexado via JSON na função \`navigation.navigate()\`. A View recebedora retira agressivamente do evento chamado \`route.params\` os itens passados pelo originador num fluxo reativo limpo.

Por fim, preparar o React Navigation exige uma cautela fenomenal ligada diretamente no core da compilação. Diferente de uma lib de botão cosmética isolada com corzinha agradável, instalá-la altera o AndroidManifest, os arquivos C++, e as proteções de gesture-handler (detecção sensível de dedos arrastando). Conflitos graves no _Build Gradle_ surgem por descuidos mínimos nesta primeira configuração que ensina a plataforma base a repassar dados de tela fluidamente.

* * *

## 🛠️ Passo a Passo (O Setup Crítico de Rotas)

> [!WARNING] Feche o Servidor do Metro OBRIGATORIAMENTE
> A arquitetura de navegação traz dependências e links com funções C++ puras. Executar a instalação descrita sem desligar de antemão o Terminal do seu Node.JS causará falha crassa permanente resultando em instabilidade do bundler ao recarregar arquivos compilados de maneira espúria.

**1º Passo: Instalação do Pacote Central Lógico**  
Localize seu terminal da pasta base (com o servidor Metro desligado estritamente através do CRTL+C repetidas vezes) e instale o empacotador de estrutura global do React Navigation:

    npm install @react-navigation/native

**2º Passo: Instalação das Exigências Nativas em cascata Android**  
As engrenagens de gestos interativos que conectam o React dom aos pixels nativos precisam de processamento brutal garantido em tela e nas safe areas.

    npm install react-native-screens react-native-safe-area-context

**3º Passo: Ajuste Mandatório das Telas do O.S.**  
Invasão de projeto: o módulo de pacotes `react-native-screens` cracha violentamente telefones Android e emuladores num restart se a Main Activity for engessada. Navegue pela pasta nativa em `android/app/src/main/java/com/nomeprojeto/MainActivity.kt` (ou .java). Adicione um import novo perto dos do topo:

    import android.os.Bundle;

E sobrescreva a classe injetando esse fragmento antes do final da chave:

    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      // Passa null instruindo o motor para evadir conflitos de state restaurado em mortes de tela velhas.
      super.onCreate(null); 
    }
          

**4º Passo: Instalação do Modulo Especifico de Arquitetura Pilha**  
Para o "Stack" que simula esse jogo de cartas, você deve instalá-lo individualmente por otimização de payload.

    npm install @react-navigation/native-stack

**5º Passo: O Pacote Matriz no App Central**  
Dentro do `App.tsx/App.js` supremo que detém raiz total, nós envelopamos tudo irreversivelmente em um grande bloco de provedor, ativando sua escuta inata do contexto.  

    
    // Dentro de App.jsx base
    import { NavigationContainer } from '@react-navigation/native';
    // Retorno Global do Motor
    export default function App() {
      return (
        <NavigationContainer>
          {/* Aqui inserimos o Arquivo com Suas Rotas! */}
        </NavigationContainer>
      )
    }
          

## 💻 Exemplos Analisados (O Código da Arquitetura)

**Exemplo 1: Isolação Comercial de Rotas**

Em Squads empresariais nós OBIAMOS arquivos gigantescos em "App.tsx". Criamos pastas arquitetônicas: `/src/routes/app.routes.tsx` com dedicação exclusiva logitudinal contendo apenas as diretrizes de navegação dos construtores.

    
    // Arquivo contido em: /src/routes/app.routes.tsx
    import React from 'react';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    
    // Consistindo importaçoes isoladas das abas do painel que criamos antes!
    import LoginScreen from '../screens/LoginScreen';
    import DashboardOperador from '../screens/DashboardOperador';
    
    // Chamada ativadora gerando classe e propriedades nativas do objeto
    const Stack = createNativeStackNavigator();
    
    export function AppRoutes() {
      return (
        <Stack.Navigator 
          initialRouteName="LoginInterno" // Forçando o ponto de origem inicial a proteger sua base
          screenOptions={{ headerShown: false }} // Essa config apaga barbaramente o cabeçalho azul nativo incontrolável do Android
        >
          {/* 
            A rota possui um "Nome" indexado para nós coders ("LoginInterno") 
            Ela injetará visualmente a Interface do componente importável = {LoginScreen} 
          */}
          <Stack.Screen name="LoginInterno" component={LoginScreen} />
          <Stack.Screen name="PainelMaster" component={DashboardOperador} />
        </Stack.Navigator>
      );
    }
          

**Explicação linha a linha:** O "Stack Navigator" é um super-componente que tem uma memória (Heap) de ordenação. O \`screenOptions={{ headerShown: false }}\` é crucial no design atual. Se você não embutir ele, toda aplicação sua passará a expor uma barra superior esquisita com botõezinhos finos padrão dos anos 2018; o desenvolvedor moderno customiza e recria uma cabeça do site limpa usando as ferramentas de layout vistas de FlexBox.

**Exemplo 2: Efetuando o Tráfego Transacional e o 'GoBack'**

Compreenda como, depois da arquitetura armada, a interface invoca a passagem dos dados via botões de formulário local usando hook de \`useNavigation\` originado pela propriedade repassadora injetada intrinsecamente na tela.

    
    // Arquivo contido em: /src/screens/LoginScreen.tsx (Resumido para aprofundamento específico)
    import { useNavigation } from '@react-navigation/native';
    import { View, Text, TouchableOpacity, TextInput } from 'react-native';
    
    const LoginScreen = () => {
      // Destilação do Controle Nativo do Pacote Principal para o Botão operar.
      const routeController = useNavigation();
    
      const autenticarViaBancoSimulado = () => {
         // Após garantir a segurança dos campos...
         // Executar a transposição da carta-pilha indicando o nome indexado exato
         // E o segundo parâmetro remete pacote JSON de Payload
         routeController.navigate('PainelMaster', {
             userId: "BR-9281-OPER",
             statusGeral: "Autorizado no Pátio 1"
         });
      };
    
      return (
        <View style{{flex: 1, padding: 50}}>
             {/* Campos simulados aqui */}
             <TouchableOpacity onPress={autenticarViaBancoSimulado}>
                 <Text>ENTRAR AGORA NA REDE</Text>
             </TouchableOpacity>
        </View>
      );
    };
    export default LoginScreen;
          

**Exemplo 3: Receptor Analítico Extraindo Valores Trocados**

O que acontece após o push ser dado para a nossa área da Dashboard Master? A tela recém forjada puxa a importação do gancho oposto vital responsável pela dissecção da memória paralela (O hook \`useRoute\`).

    
    // Arquivo contido em: /src/screens/DashboardOperador.tsx 
    import { useRoute, useNavigation } from '@react-navigation/native';
    import { View, Text, TouchableOpacity } from 'react-native';
    
    const DashboardOperador = () => {
      // Puxar as propriedades do pacote injetado dinamicamente no Roteamento
      const recebedorNativo = useRoute();
      const volanteNavigation = useNavigation();
    
      // A interrogação avisa o JS limpo que se a pessoa entrou forçando 
      // via código e os 'params' não existirem, não lance Exception mortal!
      const usuarioInfo = recebedorNativo.params?.userId || "Usuário não processado";
      const estacaoInfo = recebedorNativo.params?.statusGeral || "Inativa";
    
      const rotinaVoltar = () => {
        // Destróe massivamente a carta logada de nossa rota, varrendo ela e expondo sua pré-requisita subjacente.
        volanteNavigation.goBack(); 
      };
    
      return (
        <View style{{flex: 1, justifyContent: "center"}}>
            <Text>Bem-Vindo de volta: {usuarioInfo}</Text>
            <Text>Ambiente Identificado: {estacaoInfo}</Text>
    
             <TouchableOpacity onPress={rotinaVoltar} style{{marginTop: 40}}>
                 <Text>Fazer Logout e Retornar pra Raiz</Text>
             </TouchableOpacity>
        </View>
      )
    }
    export default DashboardOperador;
          

**Explicado:** Esse sistema é limpo de qualquer gambiarra em bancos do Redux e Storage persistente em cenários temporais descartáveis. Porém se nós atualizarmos toda a página principal violentamente e deslogularmos o cache e o motor por acidente, a \`DashBoardOperador\` voltará e será pintada declarando sua string vazia secundária porque o repasse base \`params\` foi desmanchado da memória.

## 🌟 5 Boas Práticas Profissionais (Rotas Escaláveis e Organização)

*   **Fuga Completa de Telas Fantasmas (GoBack vs Navigate Absoluto):** Desenvolvedores imaturos fazem botões de NavBar como "Ir pra Login" usando `navigate('LoginScreen')`. Com isso, ao invés do usuário destruir a tela dele, ele põe a carta do Login \*sobre\* sua Dashboard e o app começa inflar de lixo acumulável sem teto. Use sempre métodos como \`goBack()\` para desfazer trâmite de empilhamento de base.
*   **Roteamento em Diretórios Separados:** Todo projeto maduro condensa um folder na base `src/routes` para arquivos centrais operacionais. Dentro, cria subrotinas contendo \`auth.routes\` (sombras livres pro usuário sem verificação de token) e \`app.routes\` (arquivos pesados e restritos). No core do app raiz, apenas condicional baseada na memória decide engatar e importar dinamicamente num só bloco os painéis da área auth e área logada.
*   **Gestão Extrema de Dados Transportados:** Usar \`route.params\` para repassar objetos inteiros contendo fotos de 4MB de base64 colada explodirá a engine de the Bridge JSON. Transmita apenas metadados curtos primitivos essenciais (Id, Código, Bool) e reabasteça a nova tela em um UseEffect disparando fetch limpo, caso demande reidratação visual de blocos enormes de objetos.
*   **Comandos Centralizados Nomenclaturais:** Utilize tipagem estrita com TypeScript debaixo dos caminhos base de sua rotas para evitar perdas ortográficas (ex. errar \`PanelMaster\` por \`PnlMaster\` resultando em crachê do aplicativo via Null Reference).
*   **Gestão Paralela Segregada de Contexto e Provedores:** Todo framework paralelo como provedores Redux e Themas nativos devem circundar (abraçar graficamente externalizados) o bloco do \`<NavigationContainer>\`, ou sua injeção de controle em UI base de telas restritas falhará a capturar fluxos isolados no subjacente da memória da rota.

## 🚧 5 Erros Comuns e Frequentes de Arquiteturas Navegacionais

### Tópicos

### Tópicos

### Tópicos

### Tópicos

### Tópicos

## 📝 Lista de Exercícios de Verificação

> [!INFO] Nível Básico
> Exercício 1: Qual é o formato que rege integralmente o comportamento sistêmico e natural da operação Stack Navigation (em termos empilhamentos hierarquicos entre as classes e métodos passivos no fundo vs lixo descartado ao clicar retroativamente)?

> [!INFO] Nível Intermediário
> Exercício 4: Adicione pelo NPM em seu terminal base o pacote relacional avançado das `Tabs` (`npm install @react-navigation/bottom-tabs`). Construa no seu Emulador um ambiente de gavetas inferiores acopladas (Menu Bar contendo Tela Operario e Tela Configurações) acoplados na interface gráfica raiz `App.js`, excluindo todos usos prévios estáticos provindos e referidos ao tipo Stack Navigacional.

> [!WARNING] Nível Avançado
> Exercício 7: Programe uma arquitetura mista híbrida empresarial rigorosa na qual o "Root Master Navigator" abrigue centralmente e unicamente as portas autênticas de base Auth, engrenando componentes da gaveta de navegação lateral livre da empresa em suas opções (Install `drawer-navigator`), a qual por sua vez abrirá acesso integral pra Telas Subordinadas Stack em fileiras individuais. Discuta sua observação sistêmica a partir dos comportamentos nativos gestuais que desliza pelo celular à extrema diagonal contida aos toques do Drawer na UI secundariamente blindada contra quebras.

* * *

## 📍 Resumo Direto ao Ponto (Encerramento de Módulo)

*   **Infraestrutura Nativa de Rotas:** A obrigatoriedade do C++ subjacente (react-native-screens) exigido e alocado para uma transação reativa com desempenho.
*   **Pilha (Stacks) na Raiz:** Tratamento ordenado de rota baseado no consumo destrutivo pelo `goBack()` para manter um cache minúsculo.
*   **Aba Paralela e Menus (Tabs/Drawers):** Transposições inativas de memória que mantêm o estado dos contêineres perante a navegação ativa paralela na tela.
*   **Comunicação Restrita de Telas:** Transmissão simplificada enviando metadados isolados no formato JSON acessível pelo `useRoute().params` local sem consultar bancos persistentemente.
*   **Diretrizes Isoladoras de Roteamento Corporativo:** Encapsular o motor raiz no \`NavigationContainer\` e dividir todo o mapeamento por blocos em uma pasta central para modularização (routes/app.tsx).