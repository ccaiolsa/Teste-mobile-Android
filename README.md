# 📱 Testes Mobile com WebdriverIO (Native Demo App)

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Allure](https://img.shields.io/badge/Allure_Report-FF6F61?style=for-the-badge&logo=qameta&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)

> Testes automatizados assíncronos de aplicativo mobile com **WebdriverIO**, **Page Object Model**, relatórios **Allure** e pipeline **CI/CD** no GitHub Actions.

---

## 📋 Sobre o projeto

Este projeto implementa testes automatizados em um aplicativo nativo, o [**Native Demo App**](https://github.com/webdriverio/native-demo-app/releases), disponibilizado pela equipe do WebdriverIO.

O foco é construir uma suíte organizada, com boas práticas de design e execução contínua em pipeline.

## 🎯 Objetivos

**Principal**
- Implementar testes automatizados com pipeline CI/CD

**Secundários**
- Aplicar o **Page Object Model (POM)** como padrão de projeto
- Configurar um gerador de relatórios
- Criar a pipeline CI/CD no GitHub Actions

## ✅ Funcionalidades testadas

| Funcionalidade | O que é validado |
|---|---|
| 📝 Formulário | Preenchimento dos campos e envio |
| 🔐 Login | Realização de login |
| 📜 Scroll | Rolagem de tela até elementos fora da área visível |

## 🛠️ Ferramentas

| Categoria | Ferramenta |
|---|---|
| Framework de testes | [WebdriverIO](https://webdriver.io/docs/gettingstarted) |
| Relatórios | [Allure Reporter](https://webdriver.io/docs/allure-reporter) |
| Padrão de projeto | Page Object Model (POM) |
| CI/CD | GitHub Actions |

## 🌿 Organização das branches

| Branch | Função |
|---|---|
| `main` | Raiz do projeto: specs e relatórios gerados em execuções locais |
| `ci` | Versão do projeto com o workflow da pipeline CI/CD configurado |
| `report` | Armazena os relatórios gerados pelo GitHub Actions após cada execução |

## 🗂️ Estrutura do projeto

> Ajuste conforme as pastas reais do seu repositório.

```
.
├── test/
│   ├── pageobjects/     # Page Objects (POM)
│   └── specs/           # Specs dos testes
├── wdio.conf.js         # Configuração do WebdriverIO
└── package.json
```

## ▶️ Como executar

**Pré-requisitos**
- Node.js [versão]
- Android Studio com emulador configurado (ou dispositivo físico)
- Appium [confirme se está na sua stack]
- APK do [Native Demo App](https://github.com/webdriverio/native-demo-app/releases) baixado em `[pasta do APK]`

**Passos**

```bash
git clone https://github.com/ccaiolsa/Teste-mobile-Android.git
cd Teste-mobile-Android
npm install
npx wdio run wdio.conf.js   # ajuste se usar um script no package.json
```

**Gerar e abrir o relatório Allure**

```bash
npx allure generate allure-results --clean
npx allure open
```

## 🔄 Pipeline CI/CD

A pipeline, definida na branch `ci`, executa os testes no GitHub Actions e publica os relatórios resultantes na branch `report`.

[Descreva em 1 ou 2 linhas o gatilho: push, pull request, agendamento...]

## 📸 Evidências

> Adicione aqui um print do relatório Allure ou um GIF da execução no emulador.

---

<p align="center">Feito por <a href="https://github.com/ccaiolsa">Caio Araújo</a> • <a href="https://www.linkedin.com/in/ccaiolsa-qa">LinkedIn</a></p>
