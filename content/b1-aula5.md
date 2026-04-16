---
title: "Acessibilidade e Avaliação 01"
block: "Fundamentos e Interface"
duration: "6h"
description: "Desenvolvendo interfaces inclusivas para usuários que dependem de tecnologias assistivas e consolidando o conhecimento do Bloco 1 através da Certificação Objetiva Final."
---

> [!INFO] ♿ Inclusão Corporativa não é Opcional
> Desenvolver aplicativos inacessíveis cria bloqueios operacionais e processuais severos para funcionários com baixa visão, além de expor as empresas a graves sanções legais do Ministério Público do Trabalho. No ecossistema React Native, você possui a faca e o queijo na mão (APIs diretas) para comunicar suas telas ao núcleo "TalkBack" gerando software verdadeiramente Universal.

## 🎯 Objetivos de Aprendizagem

*   **Compreender o Motor de Assistência:** Entender como o "TalkBack" (Android) intercepta a renderização nativa da React Native UI.
*   **Implementar Labels Dinâmicos:** Utilizar cirurgicamente os atributos `accessible`, `accessibilityLabel` e `accessibilityHint` nas Views.
*   **Dimensionamento Tátil e Visual (Scale):** Preparar o software para os gatilhos globais de "Fonte Grande" ignorando larguras absolutas de texto que esmagam palavras.
*   **Ajuste Fino de Ordem de Leitura:** Controlar nativamente qual informação flui pro leitor de telas usando o foco imperativo no ciclo da vida.
*   **Participar da Avaliação do Módulo 1:** Ao final da aula, realizar a Avaliação Objetiva para comprovação de desempenho tático do nível básico da ferramenta.

* * *

## 📖 Teoria: Desenvolvimento Tátil Assistivo

Ao adentrarmos no final arquitetônico das capacidades fundamentais deste primeiro bloco de treinamento, nos deparamos com o maior abismo técnico deixado por Desenvolvedores Juniores: **A criação de aplicativos silenciosos.** Uma interface onde um botão é representado apenas por um Ícone SVG de Disquete sem texto e sem tag invisível é um artefato "Mudo". Para um operário com deficiência visual severa operando via leitores de tela em chão de fábrica ou usuário corporativo com idade avançada e letramento restrito, o aplicativo simplesmente dirá "Botão, dois toques para ativar", ocultando a ação deletéria que ele possa engatilhar (como apagar ou formatar o banco de dados da operação).

Diferentemente da Web que baseia sua assistência tátil nas antigas e massivas Tags WAI-ARIA da W3C atreladas no HTML puramente estático, a arquitetura móvel baseia-se num serviço sistêmico do Sistema Operacional rodando em Background absoluto. O **TalkBack** (no ecossistema Android simulado que usamos) ou o **VoiceOver** (do iPhone) tomam controle físico sobre os gestos e sobre a placa gráfica da UI. Quando este modo de acessibilidade especial é disparado e invocado aos prantos pelo usuário, tocar passivamente a tela já não ativa cliques na coordenada geométrica: tocar na tela transfere o "Foco Invisível" sobre um retângulo virtual desenhado e isolado em cima de uma \`<View>\` acessível e a engine tradutora emite ordens de fala vocalizadas pelo alto-falante.

Para prover acessibilidade sem reescrever absolutamente nada no projeto estrutural construído na ferramenta, o React Native expõe propriedades nativas diretas. A fundação de tudo pauta-se na _Boolean Prop_ `accessible={true}`. Quando anexada na raiz flexbox de um "Card de Inspeção" com múltiplos parágrafos, o motor agrupa em árvore todos os _Textos Filhos_ internos num bloco acústico só, não fazendo seu operário deficiente arrastar a tela 5 vezes cegas, mas escutar uma sentência fluída como: "Cartão Operacional - Operador João - Status: Ativo".

Todavia, a responsabilidade de "Nomenclatura" (Labeling) impera fortemente sobre componentes estritamente passivos visuais — como, por excelência, imagens e botões iconográficos. A inserção da propriedade contendo atributo `accessibilityLabel="Salvar Relatório de Peças"` comunica audivelmente o nome do componente escondido do olho nu em pixels perante a leitura linear no software cego Android. Somando isso ao guia extra secundário que explica o futuro do evento de toque `accessibilityHint="Substitui o inventário de rede por essa cópia"` blindamos absolutamente nosso usuário de falhas operacionais que incorreriam na Justiça do Trabalho.

Além disso, o quesito acessibilidade visual padece pelo erro humano do front-end que esmaga Fontes limitadas. Os idosos da corporação ajustam seus telefones para Fontes Extragrandes globais (Scaling) num Android na guia de usabilidade base do SO. O React Native reflete isso estourando e super redimensionando nativamente com agressividade os seus componentes \`\`. Se seu estagiário atrelou um Flex \`height: 20\` rigoroso nos parágrafos porque "era igual o Figma feito", essa caixa não cresce, o texto de tamanho Gigante fura por fora do CSS subjacente do Layout Base e destrói visualmente botões de submissão matando o App em produção.

O nível sênior do mercado demanda o fechamento lógico com um balanço perfeito. Nossa engenharia exige componentes que possam fluir sem quebras em Fontes até um Scale 2.0x, ou em emergências perigosas de design crítico a restrição pontual e forçada contra o dispositivo base usando atributos como \`allowFontScaling={false}\` apenas em pontos onde o engessamento tipográfico evite uma pane completa visual insalubre — como na barra de menus principal de 3 ícones apertados onde não tem área de escoamento para uma fonte quadruplicada não colidir vizinho sob vizinho da NavBar.

* * *

## 🛠️ Passo a Passo (Emulando o Motor de Ajuda)

> [!WARNING] Transtorno de Navegação com TalkBack
> Ao ativar o modo para cegos no Emulador Android da sua máquina isolada, ATENÇÃO: a interface ignora o mouse ou cliques comuns. Para avançar, são necessários "Dois Clicles" furiosos. Para escrolar, é obrigatório clicar fixamente e usar dois dedos, senão ele apenas lê os itens focados sem deslizar.

**1º Passo: Ativando a Acessibilidade no AVD**  
Abra seu Virtual Device padrão do seu laboratório. Vá no Android nativo em "Settings > Accessibility > TalkBack". Clique na chave principal pra ligar ("Use TalkBack"). Confirme na popup de proteção modal.

**2º Passo: Testar Blocos Mudos Atuais**  
Navegue para o "Primeiro Projeto" e passe o mouse no Emulador clicando lentamente sobre os textos simples da UI construída sem etiquetas especiais. Note como ele fala roboticamente os conteúdos ou apenas diz "Tocou fora do item".

**3º Passo: Agrupamento Restrito Parentesco (Acessible=True)**  
No arquivo JSX/App Local insira em um card superior sua marcação limitador contendo `<View accessible={true}>` englobando três tag \`Text\` e tente arrastar ou clicar nos Textos individualizados do emulador Talkback na atualização rápida do bundler. Perceba como agora a engine lê a View PAI agrupando de cima abaixo os três filhos de modo interligável.

**4º Passo: Nomeando Botões Fantasmas Iconográficos**  
Toda tag abstrata do tipo `<TouchableOpacity>` que contém SVG isolado sem Text sofrerá no simulador, recebendo um leitura vazia de "Unlabeled. Botão.". Atribua brutalmente a propriedade restrita `accessibilityLabel="Engrenagem de configurações base"` no TouchPai.

**5º Passo: Delimite o papel na UI do Componente Android**  
Em tags customizadas injete um `accessibilityRole="button"`. Isso avisa pro cérebro Android qual é que aquele bloco colorido criado com View+touch comporta-se mentalmente para quem ouve (Ele dirá ao cego: isso é um BOTÃO, duplo toque oprimirá suas funções).

## 💻 Exemplos Analisados (O Código Acessível)

**Exemplo 1: O "Card" ERP Acessível de Nível Corporação Internacional**

Imagine um formulário gigante lido linha por linha travando o usuário deficiente visual. Ele precisa saltar por "Notificações de Manutenção" num bloco auditável direto e isolado:

    
    import React from 'react';
    import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
    
    const EmpregadoAlertaAssistivo = () => (
        // Agrupamento Vital Auditivo.
        // Agora o foco do cursor verde não pulará pro Nome, depois Cargo, depois ID separadamente com demoras severas!
        <View 
          style{styles.card}
          accessible={true}
          accessibilityLabel="Informações do Motor Extrusor Linha Verde. Falha grave identificada no Setor Y."
          accessibilityHint="Deslize adiante se desejar ver os botões de ação e bypass."
        >
           <Text style{styles.titulo}>Motor Extrusor LV</Text>
           <Text style{styles.valor}>Falha Grave Setor Y</Text>
        </View>
    );
    
    const styles = StyleSheet.create({
      card: { padding: 18, backgroundColor: '#fee2e2', borderRadius: 8 },
      titulo: { fontSize: 18, color: '#991b1b', fontWeight: 'bold' },
      valor: { fontSize: 14, color: '#dc2626' }
    });
    
    export default EmpregadoAlertaAssistivo;
          

**Discussão:** Utilizar Labels substitutivos no agrupamento total da raiz do card limpa e otimiza o fluxo de escuta. A pessoa sabe que ali tem informações restritas sobre 1 item único do banco do ERP logístico.

**Exemplo 2: Botões Ícones Mortos Acessíveis vs Falhos**

    
    import React from 'react';
    import { View, TouchableOpacity, Text } from 'react-native';
    
    const PainelNavegacional = () => {
    
      const excluirRegistro = () => console.log('Apagado');
    
      return (
        <View style{{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
          
          {/* 
            ERRO GROTESCO: Se houvesse um Ícone SVG ou Imagem (Ex: Lixinho) aqui dentro...
            O leitor de tela do emulador pronunciaria "BOTÃO. DOIS TOQUES". Ele mata a clareza! 
          */}
          <TouchableOpacity onPress={excluirRegistro}>
             <Text>🗑️</Text>
          </TouchableOpacity>
    
          {/* 
            ✅ FORMA PROFISSIONAL:
            Avisa o SO o nome do objeto, sua função secundária e como ele se comporta estritamente.
          */}
          <TouchableOpacity 
            onPress={excluirRegistro}
            accessibilityLabel="Excluir o relatório semanal arquivado em cache"
            accessibilityHint="Toque contínuo de dois tempos para confirmar e remover para o lixo irreversivelmente"
            accessibilityRole="button"
          >
             <Text>🗑️</Text>
          </TouchableOpacity>
    
        </View>
      )
    }
    export default PainelNavegacional;
          

**Exemplo 3: Engessamento Inseguro de Fontes Visuais (Scaling)**

    
    import React from 'react';
    import { View, Text } from 'react-native';
    
    const SubHeaderStatus = () => {
      return (
        <View style{{flexDirection: 'row', height: 40}}>
           {/* 
              Se o idoso na fábrica mudou no Android a fonte global base nativa pra "GIGANTE". 
              Ele precisa ler "Ativo" nessa tag, mas a Height da box pai acima travará com 40px vazando pixels absurdos na engine!
           */}
           
           <Text 
             style{{fontSize: 12}} 
             allowFontScaling={false} // PROIBE ESTE TEXTO DE ESCALAR pra previnir vazamento numa view vital não vazada flexível!
           >
               STATUS DE MÁQUINA PENDENTE CONSTANTE 100% ONLINE E O TIPO DE VIGA INJETORA
           </Text>
        </View>
      )
    }
    export default SubHeaderStatus;
          

**Explicado:** Rejeitar puramente o Escalonamento (\`allowFontScaling={false}\`) é uma técnica agressiva corporativa (Anti-Pattern) mas exigida em locais absolutos limpos engessados por UI como menus nav-bars fechados sem readequamento que causaria a colisão da própria hierarquia imposta visual nativa local.

## 🌟 5 Boas Práticas Profissionais (Engenharia Inclusiva)

*   **Frequência de "Hints" Curiosidades:** O atributo `accessibilityHint` NÃO serve para falar "clique em mim agora". A pessoa cega já sabe que deve tocar ali. O hint baseia-se em relatar o \*\*efeito\*\* causador na interface invisível e secundária após o gatilho, ex: "Redireciona e encerra sua sessão de login para home central principal."
*   **Auditoria pelo Console de Inspeção:** Antes do release build pro GitHub para o avaliador da Squad revisar seu pull request laboratorial ativo, abra o Inspector nativo do React Developer Toggle no emulador e ative a visão "Accessibility". O mapa destacará caixas cegas amarelas não mapeáveis do seu DOM subjacente.
*   **Omitir Poluição (Important For Accessibility Cego/Android):** Em imagens meramente decorativas logomarcas, ative agressivamente flags para mascará-la contra o algoritmo injetando na Tag da `Image` o poderoso método Android-Only paramétrico \`importantForAccessibility="no"\`. Isso impede que ele leia "Logo SENAI imagem .png fundo azul". Agiliza a escuta dos formulários que antecedem o rodapé secundário base visual injetado nela.
*   **Formatação de Inputs Assumidos Livres:** Ao acoplar um \`TextInput\` pra senha de catraca logística na engenharia industrial, o atributo placeholder vira a fala default base tida se você esquecer as labels, preveja repasso auditivo no AccessibilityLabel se houver "Icon" invisível interno que esconde senhas aos passantes atrás do cara na fábrica.
*   **Uso Responsável da Fuga de Layout Limitador:** Para a acessibilidade com fontes crescentes do Scale Factor na engine React, sempre garanta \`ScrollView\` abarcando suas views baseadas se não for puramente formatação centralizada ou fixa como o Menu Inferior. Em Telas fixas longas bloqueadas de height solto o Texto gigante transbordará pra fora do emulador pro vazio do éter (Overflow), impossível de escrolar local e visualizá-lo!

## 🚧 5 Erros Comuns e Frequentes da Malha Assistiva Inclusiva

### Tópicos

### Tópicos

### Tópicos

### Tópicos

### Tópicos

## 📝 Lista de Exercícios de Verificação

> [!INFO] Nível Básico
> Exercício 1: Qual é o sistema raiz subjacente no Android OS ativado pelo controle de usabilidade base responsável por interpelar os toques isolados cegos interceptando a Interface local UI do React produzida repassando pro barramento acústico focado?

> [!INFO] Nível Intermediário
> Exercício 4: Utilizando o seu Emulador, force a restrição em settings pra "Talkback Ativado". Edite e escreva a implementação do Botão nativo puro injetando os atributos completos (Hints e Labels e Roles restritas) na plataforma central da UI. Tente rodar o Emulador provando audivelmente a escuta sintética acurada do comportamento e a interrupção da manipulação pura tátil natural por double-click no SO.

* * *

## 🎓 Avaliação Objetiva 01 (Encerramento do Bloco 1)

> [!WARNING] Atenção: Validação de Conhecimentos
> Esta finalização de bloco destina-se a aplicar a Avaliação Objetiva do Módulo 1 de nossa trilha formal e institucional da Capacitação de Programadores.

## 📍 Resumo Direto ao Ponto (Encerramento de Módulo)

*   **Criação Universal Base:** Tornar a raiz acústica faladora não fere de modo algum os estilos aplicacionais limpos injetados e protege contra sanção em lei e bloqueio operacional de trabalho nos aplicativos vitais da indústria em painéis corporativos.
*   **Foco Sistêmico Operado pelo OS:** É o Android OS subjacente (via TalkBack) rodopiando acima nativamente quem domina todo gesto cruzado em tela cega — os comandos React (Accessible=True) apenas indicam taticamente a zona delimitadora a ele ser ouvida sem toque impuro natural tátil na área.
*   **Atributos Mandatórios de Blindagem Sonora:** `accessibilityLabel` nomeia botões passivos invisíveis iconográficos do SVGs perfeitivos limpos ocultos num emulador e `accessibilityHint` delineia perigos táticos e causas da transição do pressionar num formulário base nativo celular antes de destruírem dados alados da navegação ativa perante API.
*   **Fator de Resiliência no Dimensionar Fontes Visuais Expandidas FontScales:** Os Layouts puramente engessados do \`Pixel\` racham, sendo `allowFontScaling={false}` usado somente em desastres táticos ou o isolamento puro encapsulador usando painéis rolantes `ScrollView` injetados flexiveis no React Native Container.
*   **Avaliação Formativa e Fim de Etapa Base Inicial:** Finalização do entendimento elementar do ambiente com o CheckPoint Acadêmico Final onde consolidamos todos as ramificações antes do progresso contínuo rumo às intersecções massivas dos Bancos e Persistência contida de APIs web restritas nas sessões vindouras front-end híbridas locais testadas à fundo perante as aulas subjacentes no Bloco 2 institucional SENAI arquitetônico!