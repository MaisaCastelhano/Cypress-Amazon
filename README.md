# Guia de Instalação do Cypress
Este documento contém as instruções para instalar o Cypress em seu projeto. O Cypress é uma ferramenta de teste de ponta a ponta (E2E) para aplicações web, que facilita a execução de testes no navegador.

Pré-requisitos
Node.js (versão 14.x ou superior)
npm (gerenciador de pacotes do Node.js) ou yarn (se preferir)
Você pode verificar se tem o Node.js e o npm instalados executando os seguintes comandos:

bash
Copiar código
node -v
npm -v
Caso não tenha o Node.js instalado, você pode baixá-lo aqui.

Passo 1: Inicializar o projeto (se necessário)
Se o seu projeto ainda não for um projeto Node.js, inicialize-o com o seguinte comando:

bash
Copiar código
npm init -y
Isso criará um arquivo package.json no seu diretório.

Passo 2: Instalar o Cypress
Para instalar o Cypress no seu projeto, execute o seguinte comando no diretório raiz do seu projeto:

Usando npm
bash
Copiar código
npm install cypress --save-dev
Usando yarn
bash
Copiar código
yarn add cypress --dev
O Cypress será instalado como uma dependência de desenvolvimento no seu projeto.

Passo 3: Abrir o Cypress
Após a instalação, você pode abrir a interface do Cypress com o seguinte comando:

Usando npm
bash
Copiar código
npx cypress open
Usando yarn
bash
Copiar código
yarn run cypress open
Isso abrirá a interface do Cypress, onde você pode criar e executar seus testes.

Passo 4: Estrutura de Diretórios
Após a primeira execução, o Cypress criará a seguinte estrutura de diretórios dentro da pasta cypress/:

Copiar código
cypress/
  ├── fixtures/
  ├── integration/
  ├── plugins/
  └── support/
fixtures: Contém dados estáticos usados em testes.
integration: Onde você cria os arquivos de teste.
plugins: Para configuração e extensões do Cypress.
support: Para incluir comandos personalizados e configurações globais.
Passo 5: Escrever um Teste de Exemplo
Dentro da pasta cypress/integration/, crie um arquivo de teste (exemplo: example.spec.js), e escreva um teste simples:

javascript
Copiar código
describe('Teste de exemplo', () => {
  it('Visita a página inicial', () => {
    cy.visit('https://exemplo.com');
    cy.contains('Texto desejado').should('be.visible');
  });
});
Esse exemplo vai visitar a página https://exemplo.com e verificar se o texto "Texto desejado" está visível na página.

Passo 6: Executar os Testes
Para rodar os testes, você pode fazer isso através da interface gráfica ou executando o comando no terminal:

Usando npm
bash
Copiar código
npx cypress run
Usando yarn
bash
Copiar código
yarn run cypress run
Isso executará todos os testes na pasta integration e exibirá os resultados no terminal.

Passo 7: Configurações Adicionais
Você pode configurar o Cypress editando o arquivo cypress.json, que fica na raiz do seu projeto. Por exemplo:

json
Copiar código
{
  "baseUrl": "https://exemplo.com",
  "viewportWidth": 1280,
  "viewportHeight": 720
}
baseUrl: URL base para suas visitas nos testes.
viewportWidth e viewportHeight: Para configurar a resolução da tela.
Passo 8: Limpeza e Remoção
Caso queira desinstalar o Cypress do seu projeto, basta rodar o comando:

Usando npm
bash
Copiar código
npm uninstall cypress --save-dev
Usando yarn
bash
Copiar código
yarn remove cypress
Contribuição
Sinta-se à vontade para contribuir com o projeto, seja corrigindo erros, sugerindo melhorias ou aprimorando a documentação. Se você quiser contribuir, basta fazer um fork deste repositório e criar um pull request.

Links úteis
Documentação oficial do Cypress
Guia de instalação do Cypress
