Exercício de implementação de CI em automação de testes Android

- Ferramentas: 
Mocha no WebdriverIo - criação de suites de testes
Alluere report - Geração de relatórios

- Aplicativo utilizado
Foi testado o aplicativo demo do wdio: https://github.com/webdriverio/native-demo-app/releases

- Arquitetura
A pasta padrão wdio.conf.js foi desmembrada e alocada no diretório config/ localizado no root
no wdio.conf.js deste diretório fará a chamada dependendo da configuração do arquivo .env
Caso o ENVIRONMENT seja "local", o wdio.conf.js irá executar os testes localmente utilizando como base o aparelho nightwatch-android-11
Caso o ENVIRONMENT seja "sauceLabs" o wdio.conf.js irá executar os testes pelo sauceLabs, dessa vez o aparelho Android 13 com tela 6 pixels
Pode-se decidir se quer ou não gerar relatórios
Pode-se decidir, no futuro, se quer executar testes de outros SO (como iOS, por exemplo), basta configurar o PLATFORM e as capabilities em outro arquivo .conf.js

- Método utilizado
Foi implementado Page Objects para tornar as suites mais limpa e de fácil manutenção.

- Estratégia de teste
Como o aplicativo é para testes, decidi apenas testar algumas funcionalidades como:
    - Fluxo de login e cadastro de novo usuário
    - Acesso a aba swipe para testar o método scrollIntoView() nativo do WebdriverIo
    - E o preenchimento de formulário e validação de sua mensagem de sucesso

- Comandos

appium - para executar o appium e assim conectar as capabilities com o Aparelho digital
wdio run ./config/wdio.conf.js - para executar os specs que o arquivo wdio.conf.js aponta
wdio run ./config/wdio.conf.js --suite login - caso queira executar uma suite específica
allure generate allure-results --clean -o allure-report - gera um relatório dos arquivos gerados na pasta allure-results na pasta allure-report
wdio run ./config/wdio.conf.js --suite login && allure generate allure-results --clean o allure-report - para gerar automaticamente o relatório após executar o teste da spec login