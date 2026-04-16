---
title: "Persistência local e cache offline"
block: "Dados e Recursos Nativos"
duration: "6h"
description: "Gerenciando caches duráveis na infraestrutura móvel com AsyncStorage e MMKV, capacitando as frentes industriais a funcionarem sem a dependência contínua de malhas conectivas 4G."
---

> [!WARNING] Não é Banco SQL e nem Relacional Criptográfico
> O AsyncStorage puro nativo atua exclusivamente pautado em pares de "Chaves-Valores" no formato primitivo de String isoladas brutas. Utilizar este arcabouço para depositar tokens sensíveis ou 25 mil linhas JSON de usuários inteiros trancará seriamente o motor ou será vazado em hard-reset. Para grandes lógicas cruzadas de campos relacionais offline na infra exigem-se bibliotecas avançadas (WatermelonDB / SQlite).

## 🎯 Objetivos de Aprendizagem

*   **Sobrevivência Sem Internet (Offline First):** Adotar arquiteturas que estocam as lógicas processadas e enviam requisições de maneira proteladas assimétricas.
*   **Implementar a Manteção do Cache Local (AsyncStorage):** Baixar o pacote comutador externo base do ecossistema matriz, setar pares indexados locais brutos na infra sem apagar com atualizações lógicas do App em background.
*   **Realizar Cópia de Tráfegos do Estado Eficiente:** Gerenciar parsing serializadores de blocos em Objetos via pacote JSON restrito injetando em hooks nativos baseados na recuperação na montagem base do app no Emulador cruzado.
*   **Orquestrar "Auto-Lembrar" Baseado em Tokens:** Desempenhar fluxo de reentrada tática autêntico: o root app checando invisível a string de persistência se login existia pulando passivamente telas inteiras puras de Stack pro Dashboard Master.

* * *

## 📖 Teoria: O Mito do App Constantemente Online

Quando aprendemos a criar projetos na Web, assumimos que se a página carregou, o PC do usuário tem internet. Na fronteira dos aplicativos empresariais móveis, essa presunção rui horrivelmente. Caminhões que trafegam nas estradas rurais, trabalhadores em subsolos forjados de metal pesado onde nenhum sinal via 5G escapa e almoxarifados longínquos padecem do que costumamos chamar "Oscilações Permanentes".

As lógicas primárias atreladas a variáveis que os estagiários forjam com extrema paixão nos arquivos App.tsx atrelados no State da visualização evaporam na "Morte Celular" ininterruptas do Kernel e das instâncias recriadas subjacentes brutas. Se seu aparelho fechar por memória ou se o App recarregá do zero os módulos compilados do pacote (Garbage process nativo OS base Android System limits), até o login da sua conta sumirá no vento da RAM volátil nativa processual local de componentes puros isolados restritos ao Front-end em exibição do DOM.

Buscando superar e resolver essas demandas sem explodir os aplicativos requerendo de cara 100 megabytes de SQL, os desenvolvedores confiam vastamente em estratégias de **Cache Offline Local Storage Nativo**. Historicamente centralizado e acoplado ao core puro do pacote React base, porém hoje extraído e abraçado inteiramente subjacente num repositório mantido assiduamente na comunidade chamado de \`@react-native-async-storage/async-storage\`. Essa arquitetura permite que scripts simples acessem pastas e arquivos textuais protegidos pelo sistema de Arquivos encriptados da instalação padrão Android App Sandbox, estocando chaves ("IsLogado") contendo valores ("Sim").

Com essa tecnologia as transações fluem nos ciclos: Aquele enorme Fetch REST que aprendemos a forjar no bloco 1 traz o JSON logístico? Então nós primeiramente nós espetamos local usando os comandos táticos Stringificadores em string JSON puro restrito e guardamos num buraco do SO em \`setItem("@listaDePainel", "\[{id: 1}\]")\`. Amanhã de manhã, no escuro do subsolo fabril remoto sem WiFi, o componente executa o Effect, enxerga sem conectividade ao catch que a Request da API base quebrou, mas reabre o bloco de lixo persistido usando comando puramente recuperador `await AsyncStorage.getItem('@listaDePainel')` ressuscitando a reidratação (Hydration) inteira em 5ms subjacentes do banco isolador passivo!

No entanto a adoção deste padrão gera dilemas colossais. A AsyncStorage não detém bloqueios tipados ou limpeza lógica, a engrenagem e a string não tem índices. Se você colocar um laço que a salva no bloco 12 milhões de vezes perante atualizações constantes (como salvar GPS em tempo massivo contínuo do fundo), as threads de barramento atolarão num limite de travamento catastrófico por assincronismo na Bridge engasgado em requisições subjacentes de escrita. Surgiu no alto-fórum corporativo nativo local ecossistema as lógicas concorrentes que o time sênior requer de inovações como biblioteca "MMKV", utilizando engenharia avançada ligada a memória cruzada do ponteiro do aparelho (Mmap c++) sendo infinitamente limpa, rápida na escrita direta e não assíncrona nas leituras síncronas bloqueáveis de retornos brutais. Iremos neste foco de Fundamentos basearmos nossos fluxos essenciais de Auth e Offlines práticos na clássica robusta padrão persistência e dominar seu ciclo.

* * *

## 🛠️ Passo a Passo (Mão na Massa - Montando as Bases Estáticas)

**1º Passo: Retirar Dependências Oficiais em C++ e Node**  
Localize seu terminal externo bloqueando estritamente todo serviço vivo do "Metro Bundler base", feche os logs pra acoplar o arquivo ao binário central gerado nativo da arquitetura do pacote e rode via Yarn ou Npm explícito.

    npm install @react-native-async-storage/async-storage

**2º Passo: Instalação e Escrita Puritana de Dados Básicos Restritos**  
Importe AsyncStorage na subrotina subjacente JSX (na cabeça do arquivo limpo). Através do Evento de algum toque num painel, gere função atrelando comandos acoplados a blocos async estritamente para cravar valores via `setItem` na pasta do sistema cega.

**3º Passo: Extração de Objeto via Parsing Lógico Limitado**  
Bancos nativos isolam somente formato STRING puros baseados na API. Ao persistir seus Arrays maciços lógicos, engavete com câmara JSON atrelada `JSON.stringify(listaObjeto)` e para desfazer esse cofre puxe o valor string extraindo em Javascript via bloco de ordem nativa reacionária em `JSON.parse(stringRecusadaLocal)`.

**4º Passo: Hidratação Oculta na Visualização Base Inicial**  
Onde a transação ganha relevância é que você, dev da Squad local, fará via hook puramente local \`useEffect \[\]\` injetável a ordem isolada de ler do cofre assíncrono (um loadData async isolador) sem botão base e popular de pronto seus States com antigas memórias na interface, fingindo pro usuário estar incrivelmente limpo rápido do banco API matriz REST.

## 💻 Exemplos Analisados (O Código Perene da Persistência)

**Exemplo 1: Escrita Isolada Cruzada de Parâmetros Básicos na Raiz**

Isolamento imperativo no registro das rotinas subjacentes no OS baseadas puramente salvando tema noturno num formulário.

    
    import React, { useState } from 'react';
    import { View, Switch, Alert, Text } from 'react-native';
    // Módulo empacotador de injeções persistentes puras nativo
    import AsyncStorage from '@react-native-async-storage/async-storage';
    
    const PainelTemaPersistido = () => {
        const [temaEscuroHabilitado, setTemaAtivo] = useState(false);
    
        const despacharNoOSBaseadoBotao = async (novoStatusVisual) => {
            setTemaAtivo(novoStatusVisual);
            try {
                // Repare fortemente na sintaxe obrigatória "@chave" e o dado "STRING" limpo isolado 
                // e nunca booleano primitivo passivo puro (novoStatusVisual seria boolean que quebra o parâmetro injetável limpo C++)
                await AsyncStorage.setItem('@chave_cfg_visual_tema', novoStatusVisual ? 'DARK_MODE' : 'LIGHT_MODE');
                console.log("Configurações cravadas a fundo no OS.");
            } catch(pane) {
                Alert.alert("Sistema bloqueado de manter persistência limpa");
            }
        }
    
        return (
           <View style={{flex: 1, padding: 50, backgroundColor: temaEscuroHabilitado ? '#111' : '#fff' }}>
               <Text style={{color: temaEscuroHabilitado ? '#fff' : '#000'}}>Modo Noturno Local</Text>
               <Switch value={temaEscuroHabilitado} onValueChange={despacharNoOSBaseadoBotao}/>
           </View>
        )
    };
          

**Exemplo 2: O Carregador Assíncrono com Auto-Login Bypass de Navegação**

Numa complexa operação Root de App base (arquitetado no React Navigation base em Arquivo `AuthRoutes`), impedimos que a Stack injete Painel de Login e pisamos na tela raiz indo pra Dashboard direto se houver vestígio duradouro nos bancos locais simulando persistências.

    
    import React, { useState, useEffect } from 'react';
    import { View, ActivityIndicator } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    
    const RootRotasEscudoController = () => {
      // Flag condicional 3 fases: Buscando na memória Cega? Nao achei? Achei achei limpo?
      const [validandoSessaoVelha, setValidacaoEmAndamento] = useState(true);
      const [autenticadoNoToken, setAtreladoAuth] = useState(false);
    
      useEffect(() => {
         // Isola numa função para não forjar Promises cracháveis no callback useEffect principal raiz 
         const procurarBaixarSessaoNoBancoSilencioso = async () => {
            try {
               const idTokenMortoLocal = await AsyncStorage.getItem('@sessao_TokenAuthAcesso');
               
               if(idTokenMortoLocal !== null) {
                  // Se há algo cravado ele joga o state positivo contornando barreiras em tela restrita pura
                  setAtreladoAuth(true);
               }
            } catch(error) {
               console.log("Disco travado injetável limpo", error);
            } finally {
               setValidacaoEmAndamento(false);
            }
         };
    
         procurarBaixarSessaoNoBancoSilencioso();
      }, []); // Executado em milissegundos limpos após injetar na árvore UI App() Master Global System Base.
    
      // Fase 1: Emulador e CPU ainda lendo buraco do Android persistido de lentidão pesada
      if (validandoSessaoVelha) {
         return <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large" /></View>;
      }
    
      // Fase 2 e 3: Decisão baseada na memória raiz interceptora injetando painéis complexos já aprendidos na Aula de rotas
      // return autenticadoNoToken ? <RoutesOperacaoLogadaDasTabs /> : <RoutesStackSomenteAutenticarLogin />
    };
          

## 🌟 5 Boas Práticas Profissionais (Lógicas Persistentes)

*   **Agregação das Constantes de Chave:** Ao invés de o código da Squad de 4 pessoas injetar Strings soltas espalhadas magicamente como \`'@sessao1'\`, \`'@sess\_token'\` espalhados criando panes de typos e duplicadas nulos isolantes, mantenha arquivos \`src/utils/storageKeys.js\` que armazenem centralizados `export const TOKEN_KEY = '@senai_erp:token;'` padronizando limpo.
*   **Fuga da Lentidão Desastrosa Massiva por Iteração (MultiGet):** Não crie 10 acionamentos independentes sequencias repetitivos de "GetItem('1'), GetItem('2')" trancando thread CPU Bridge celular. Use a ferramenta otimizada em lote \`AsyncStorage.multiGet(\[\])\` e deite em paralelo todas aquisições num repouso rápido e veloz e destrua carga engasgada base de overhead.
*   **Tática Híbrida Sync/Async:** A infra nunca confia unicamente na base local isoladora. Implemente um revalidador de token JWT limpo no back! Você acessa, pega token isolado local persistido, vai de Bypass e acessa dashboard offline com array do banco e no useEffect silencioso fundo faz "Fetch(JWT)". Se erro 401 Expirado voltar do Backend ele executa o Logout Forçado na tela mandando \`AsyncStorage.removeItem\` jogando pro Login brutal.
*   **Limitações do SQLite x Async (Sizing):** Para 10 mb nativos AsyncStorage é viável. Se sua arquitetura mobile demandar salvamentos relacionamentos intensos robustos entre "Usuario Pertence a Empresa Pertence a Galpão" (Complex Table Relationships cru), abrace de vez bibliotecas SQL Wrapper como \`expo-sqlite\` nativa de base e engrenagens como TypeORM em react abandonando a String crua.
*   **Invalidação Total Roteadora Segura:** Ao produzir botões absolutos "Finalizar Sessão", deve-se rodar limpezas em batch limpa \`AsyncStorage.clear()\` ou remover estrita pontuais chaves críticas do funcionário e disparar State de redirecionamento. Não limpe toda \`clear()\` restritamente se você usa banco local cego para guardar logs crash anônimos vitais paralelos que persistiriam para submissão amanhã desobedecendo limpeza restrita relacional focada em exclusão do Token isolado.

## 📍 Resumo Direto ao Ponto (Encerramento de Módulo)

*   **Engrenagem de Memória Não-Volátil (AsyncStorage):** Ferramenta isolada da raiz do cache volátil que permite gravar e puxar dados persistentes cravados dentro do SO do telefone blindados que sobrevivem à tela morta e restart restrito de energia.
*   **Formato Crítico Padrão Textual:** Todo bloco injetável gravado será puramente do tipo String base primitiva. Objetos React, Arrays gigantes e booleanos quebram caso não sofram rigoroso encapsulamento restrito por via `JSON.stringify` e retomadas via `JSON.parse`.
*   **Uso Central de Bypass (Sessões):** Lógicas estendidas de acessibilidade primária auto-login (evitar repetir digitações de e-mail ao reabrir programa) habitam vitalmente no check atrelado subjacente invisível no Hook de montagem do construtor de rotas Master cruzado.
*   **Off-Line First em Operações Invasivas e Isoladas na RAM:** Previne paralisia quando falha da infra em galpão intercepta as promises "catch", mantendo Arrays gigantes de dados salvos antigos visíveis na UI enquanto as reedições processuais sincronizadas com as frentes externas de nuvem atrasam.
*   **Limites da Arquitetura Cega Local Associada Relacional:** Persistências de Chave-Valor limitadas tornam engarrafamentos constantes lerdos em buscas; para frentes agressivas pesadas de leitura indexada real corporativa de tabelas restritas, abordamos nos sistemas complexos o nativo SQL Mobile nativo.