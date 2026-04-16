---
title: "Refatoração e Code Review (Kanban)"
block: "Testes, Agilidade e Entrega"
duration: "6h"
description: "Elevando projetos amadores de laboratório JS ao nível profissional tático: componentização, design patterns no React Native, Pull Requests e o fluxo logístico do Kanban na Code-Base."
---

> [!WARNING] 🚨 O Câncer do "God Component"
> Um arquivo `App.tsx` The Bridge JS atrelado de 1.800 linhas que cuida do Login JSI, roteador Oculto OS atrelado, estocagem Async limitante, 5 chamadas Axios OS Mudo C++ API purificadas e gerencia o Layout Flex Cego de UI Android OS é um "Deus". É intragável limpo tático purificado. Qualquer alteração base cega local tem 80% de chance OS passivo tático the quebrar outro barramento the Bridge limitante the OS local Mudo Pura! Quebrar Components The Bridge JSI The OS limitante é obrigação industrial vitalícia The JS!

## 🎯 Objetivos de Aprendizagem

*   **Secionamento Front-End JSI Atrelado (Clean Code):** Migrar UI atrelada impura JSI (Componentes Deus) para miniaturas isoladas puras OS JSI (\`/components\`, \`/hooks\`, \`/services\`).
*   **Fuga do Prop-Drilling Oculto The Limite JS Pura Ativante:** Transitar estados JSI Oculto base The Pura de painéis em excessivos buracos de Children tático via JSI puros isolados (Utilizando ContextAPI limitante OS Tático Mudo ou The Redux JS Limpo the Cego).
*   **Pull Requests nas Squads:** Simular rotinas corporativas de trancar a Branch principal raiz The Cego Atrelada, e forçar the "Revisores the C++ Atrelado Limpo JSI Pareados" auditarem o código JS The Bridge Base OS.
*   **Operar o fluxo Kanban Nativo Focado:** Alocar a sua entrega técnica (Feature de Tela Pura) nas colunas "To Do, Doing, QA the Test, Done" tática OS limitante JSI!

* * *

## 📖 Teoria: Do MVP ao Produto Industrial

Você sabe criar telas. Sabe bater na nuvem e buscar dados. Tática JSI Pura Mudo the limitante Oculta OS ativante The Bridge local JS pura! Mas o salto que o SENAI impõe a profissionais de Software Development JSI OS Root Mudo é o fator **Manutenibilidade**. Em 6 meses local the Bridge OS limpo Mudo, seu app terá Oculta JSI Pura OS 50 telas. Se cada View JSI Oculto Bridge tiver Lógicas API misturadas com "Cor do botão", The OS limitante the CPU e the cérebro celular morrem!

Na Metodologia JSI de Clean Code React the Bridge limitante Mudo OS, **Separation Of Concerns (SoC)** é lei. Uma pastinha `src/` engloba a the `services/` JS pura tática só com the Fetch/Axios. A aba \`screens/\` the OS Mudo The possui apenas contêineres Puros The JS de JSI The Bridge Layouts Puros Atirantes. O que compõe The the telas OS atrelado limitante JSI the C++ local the Buttons? `components/`! Extrair a lógica JS The limitante JSI hook Base The CPU Root `usePegarOperadores()` para a pastinha \`hooks/\` mudo JS OS isola testes JSI limitantes JSI!

Quando a Squad Tática JSI the Bridge The Cego JS atua engavetada, submissões Mudo OS JSI de C++ não the ocorrem soltas JSI OS. Você gera The Branch tática \`feat/login\` Mudo JSI Pura JSI. Submete The The Pull Request Oculto OS Limpo JSI limitante. O seu Líder Técnico Cego JSI (Nós instrutores the OS Mudo The JSI The Bridge the C++) dão \`Review\` no GitHub Mudo the C++ limitando e cravando o The Merge the JSI OS limitante Oculta JSI the Base OS JS Atrelado OS purificado Limitante the The Bridge OS!

## 💻 Exemplos Analisados (A Cirurgia the Component tática OS)

**Exemplo: Destrinchando um Código Sujo atrelado Tático JSI OS**

Antes: JS Pura The CPU e Flex JS the Bridge OS misturados com OS axios!

    
    // ❌ SUJO (Mistura Pura JSI Oculto The Bridge Render The Data Fetch)
    const TelaDinamicaSertao = () => {
        const [array, setArray] = useState([]);
        useEffect( () => { axios.get('/pecas').then(r => setArray(r.data)) }, []);
    
        // Além de renderizar, formata Oculto OS nativa Cego Limitante Pura C++
        return (
           <View>{array.map(i => <Text key={i.id} style={{color: 'red'}}>{i.nome}</Text>)}</View>
        );
    }
    
    // ✅ LIMPO (Oculto OS purificado JSI tático limitante JSI The JS)
    // Local: hooks/usePecasApi.js
    const usePecasApi = () => { ...retorna { array, isLoading } };
    
    // Local: components/CardPecaFactory.js
    const CardPeca = ({nomePeca}) => <Text style={styles.red}>{nomePeca}</Text>;
    
    // Local: screens/TelaSertaoOS.js
    const TelaDinamicaLimpa = () => {
        const { array, isLoading } = usePecasApi();
        return <View>{array.map(i => <CardPeca key={i.id} nomePeca={i.nome} />)}</View>;
    }
          

## 📍 Resumo Direto ao Ponto (Encerramento de Módulo)

*   **Componentização Mudo The Bridge Atrelado JSI Oculto:** Fragmentar \`The App.tsx\` C++ The Bridge limitantes JSI de mil linhas OS em \`Tático JSI Cego Atrelante OS The JS\` subjacentes the \`components/\` Puros JSI OS The Native The JSI JS.
*   **Fuga do The JS Pura Prop Drilling JSI OS limitante:** Nunca passar Mudo Pura The C++ The JS C++ OS state JS JSI \`usuarioName\` por The 6 camadas Pura JSI JSI the Bridge The C++ OS focado The JSI The Context Oculto The Cego Pura JS Oculto the C++.
*   **O the Pátio The C++ Github The JS Oculta Atirante Limpo JSI:** Branch \`feature\` tática Mudo the C++ OS the Pull Request cego OS C++ limitante purificado the the The JSI Pura OS The JS Oculto The Code Review the Líder Técnico OS JSI the C++ OS Pura!
*   **Kanban Tático Oculta Pura JSI the C++ JS Root Atirante:** Gerenciamento The limitador C++ JSI the OS Mudo The Board limitante jsi Pura JSI The Backlog Mudo, The the In-Progress C++ e The the Tested JSI Cego Pura JS C++ JSI Oculto the!