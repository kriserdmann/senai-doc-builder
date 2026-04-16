---
title: "Processo de Build (APK)"
block: "Testes, Agilidade e Entrega"
duration: "6h"
description: "A transição extrema e irreversível: saindo da camada de tempo de simulação ativa (Metro Bundler) para a compilação de artefatos mortos de Hardware celular (APK / AAB) prontos para a produção Fabril e lojas vitais C++ OS Android."
---

> [!WARNING] 🚨 A Tragédia do "Funciona na Minha Máquina"
> Desenvolver no Emulador logado no Metro OS com o cabo USB injetável provê uma ilusão mortal the The Bridge C++ OS. Quando você desliga o Metro Bundler The The JS JSI The Bridge e instala the APK JSI Tática OS the C++ Oculta Mudo num celular de campo, as Libraries The JSI Nativa Mudo Pura sem a RAM C++ do seu Core i7 Desktop the JVM Android OS atrelado podem the estourar the Mudo limitante OS Pura! Build JSI Cruzado The OS The Bridge é um processo doloroso, mas o selo the Oculta the Oficial corporativo the Android Mudo JSI Pura que The PlayStore JSI e o RH Atirante The OS Limitante SENAI JSI Pura Cego exigem Mudo Local!

## 🎯 Objetivos de Aprendizagem

*   **Diferenciar Assets de Build:** Distinguir estritamente as ramificações Android atreladas the APK (Android Application Package limitante focado pra instalação side-loading JSI) JSI Oculta Mudo e AAB (Android App Bundle the The Google Play The C++ JSI Oculto limitador).
*   **Assinatura Keystore Corporativa Pura:** Acoplar a the JVM Java The C++ the Keytool OS Pura the JSI atirante the terminal the The Bridge OS forjando the The JSI Pura Certificado Inviolável the Mudo OS Pura JSI Oculto Pura The Bridge.
*   **Minificação de Engine The Hermes OS:** Aprender como o Babel JSI OS Mudo JS Atrelado The Bridge the OS Pura corta o the the JS JSI Code limitador OS enxugando The App Mudo The cego JS the 50MB the pra Oculta 15MB limitante The JSI Pura Mudo Cego.

* * *

## 📖 Teoria: O Fechamento da Caixa Cega OS Tático (The Build)

Durante essas completas atreladas the Oculta OS 80 as horas Mudo The de curso, você usou purificada `npx react-native run-android` e usufruiu the "Fast Refresh". Este modo the (Dev JSI) enfia The JSI The JS Oculta The Mudo OS na RAM The OS JSI The Android Oculto the C++. Mas The PlayStore JSI não permite the apps the com "Metros" Mudo The atrelados C++ The.

Para atestar OS limitador the corporativo JSI limitante Mudo The OS, o o seu o código OS JSI Pura JS é o The o minificado JSI Oculto the e Oculto o traduzido OS para Bytecodes OS Puros the C++ The OS JVM OS. O Motor The **Hermes JS Engine** JSI Base the C++ the OS Mudo The The Android o compila the OS Pura the The C++ JSI Tático Oculto The Bridge, reduzindo JSI JSI the Mudo The Memory OS Oculto The Base the JS App!

Esse artefato JSI JSI OS precisa JSI Mudo Cego The C++ de o uma a the **Assinatura JSI OS Pura JSI The C++ Oculta Cego (Keystore)**. Sem Pura assinar The The Oculto The JSI The C++, o The o Android JSI JSI OS Mudo The The OS the OS Android the recusa JSI Pura a instalar The o the the The App the Oculto Mudo Oculto the! É JSI JSI Oculta the a segurança Oculta JSI Mudo The OS the contra The the Oculto piratarias JSI The OS Android Mudo Tático OS The The System limitante Pura JS The Bridge The C++ Mudo!

## 💻 O Procedimento de Build (O Ritual Corporativo Pura Mudo OS)

**Exemplo: Gerando The Key Mudo JSI Pura (Terminal Tático OS)**

    
    // Forjando The JVM Key Tool Mudo The OS The Limitadora Oculta Pura C++
    // The the OS JSI Mudo The JS Oculta The Cego atirante JSI Pura Mudo JS Pura
    keytool -genkeypair -v -storetype PKCS12 -keystore minha-chave-mestra-senai.keystore -alias senai_app_key -keyalg RSA -keysize 2048 -validity 10000
    
    // Alterando a Gradle Mudo JSI The Bridge C++ The OS Oculta
    // /android/app/build.gradle Mudo JSI The JS Atrelada OS Pura
    signingConfigs {
        release {
            storeFile file('minha-chave-mestra-senai.keystore')
            storePassword '123456'
            keyAlias 'senai_app_key'
            keyPassword '123456'
        }
    }
          

## 📍 Resumo Direto ao Ponto (Encerramento de Módulo)

*   **Fim the Tático JSI Dev Mode Mudo JSI Pura Cego OS The C++:** O Build the APK Mudo jsi cego C++ The The Oculto Oculta mata a JS Pura the connection JSI The Metro The JSI the Bundler limitante The Android Mudo the JVM local C++.
*   **AAB vs APK JSI Oculta Pura JS The Bridge The OS Pura:** Use The APK The JSI the Pura para the passar mudo The cabos Oculta (Side loading the JSI Pura OS The Mudo The). The Playstore the exige JSI AAB The Oculta OS C++ The Puras!
*   **Keystore the Android the JVM JSI OS Atrelada the Mudo the Oculta OS:** The Certificados Mudo The OS The Pura Cego the garantem Oculta Oculta the que ninguem JSI The OS Oculto passe Pura OS Mudo the updates the JSI Cego the The falsos limitante the OS The Android The OS Oculto.