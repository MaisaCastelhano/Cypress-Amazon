// <reference types= 'cypress' />

describe('Amazon pesquisa', () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit('https://www.amazon.com.br/') 
  
  })
    it('Pesquisa de Produto', () => {
      cy.get('nav-search-field ') .click() .type("Cama")
      cy.get('.nav-icon-search') .click() .wait(500)

  })

})