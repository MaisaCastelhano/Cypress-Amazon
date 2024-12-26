# Automação de Testes com Cypress 🚀

Bem-vindo ao meu repositório de automação de testes usando **Cypress**! 🎉

Aqui você encontrará tudo o que precisa para entender como utilizar Cypress para automatizar testes de front-end de forma rápida, eficiente e divertida! Com Cypress, é possível fazer testes de integração, de interface, testes de regressão e muito mais, tudo dentro do seu navegador.

## 💻 O que é o Cypress?

Cypress é uma poderosa ferramenta para automação de testes end-to-end (E2E) que facilita a escrita de testes para aplicações web. Ele roda diretamente no navegador, permitindo uma execução de testes rápida e confiável. Além disso, sua interface é amigável e seus relatórios são extremamente detalhados.

## 🔧 Como começar?

Para começar a usar este repositório, siga os passos abaixo:

1. **Instale as dependências**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   
2. **Clone o repositório**:

Este repositório utiliza o Node.js e o npm. Se você não tiver o Node instalado, faça o download aqui.

Depois, instale as dependências do projeto com o seguinte comando:
```npm install```

3. **Abra o Cypress**:

Para rodar o Cypress e começar a testar, basta rodar:
```npx cypress open```

Isso abrirá a interface gráfica do Cypress onde você poderá ver todos os testes e até mesmo rodá-los manualmente.


## 📝 Estrutura do Projeto
Aqui está um overview da estrutura do projeto:


```bash
/cypress
  /integration  # Arquivos de teste
  /fixtures     # Dados de exemplo para testes
  /support      # Comandos e hooks de suporte
/package.json   # Dependências e scripts
/README.md      # Este arquivo maravilhoso ;)


/integration: Contém os testes escritos em Cypress.
/fixtures: Armazena dados de teste que podem ser usados nos testes de integração.
/support: Contém os arquivos de configuração e comandos reutilizáveis que são usados nos testes.
```


## 🚀 Scripts Úteis
Aqui estão alguns scripts úteis que você pode usar:

```
npm run test: Executa os testes no Cypress.
npm run test:headless: Executa os testes em modo headless (sem interface gráfica).
npm run lint: Verifica e corrige problemas de formatação no código.
```
## 🤖 Exemplos de Testes:

**Teste de Login**
```
describe('Teste de Login', () => {
  it('Deve permitir login com sucesso', () => {
    cy.visit('https://minhaaplicacao.com/login')
    cy.get('input[name="username"]').type('usuario')
    cy.get('input[name="password"]').type('senhaSecreta')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

**Teste de Responsividade**

```
describe('Teste de Responsividade', () => {
  it('Deve exibir o menu de navegação corretamente em telas pequenas', () => {
    cy.viewport('iphone-6')
    cy.visit('https://minhaaplicacao.com')
    cy.get('.navbar').should('be.visible')
  })
})
```

## 💡 Dicas e Truques
Use comandos personalizados: Crie funções reutilizáveis em cypress/support/commands.js para simplificar seus testes e evitar repetição.

Visualize os testes: Use 
```cy.screenshot() para capturar imagens durante a execução dos testes.```

Debug: Utilize
```cy.debug() e cy.pause() para inspecionar o comportamento do teste durante a execução. ```

## 📖 Referências
- [Documentação Oficial do Cypress](https://www.cypress.io/docs/)
- [Exemplos de Testes no Cypress](https://github.com/cypress-io/cypress-example-kitchensink)

Agora, prepare-se para rodar esses testes como um verdadeiro mestre do Cypress! 🔥

**Divirta-se testando!** 🎯✨
