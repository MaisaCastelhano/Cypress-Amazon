// <reference types= 'cypress' />

describe('Amazon pesquisa', () => {
  beforeEach(() => {
    cy.viewport(1920,1080)
    cy.visit('https://www.mercadolivre.com.br/') 
  
  })
    it('Pesquisa de Produto', () => {
      cy.get('#cb1-edit') .click() .type("Cama")
      cy.get('.nav-icon-search') .click() .wait(500)

  })

})