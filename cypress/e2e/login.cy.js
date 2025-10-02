describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Arrange - preparação para o teste
    cy.visit('http://localhost:4000') 

    // Act - ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456') 
    cy.contains('button','Entrar').click()

    // Assert - verificação do teste
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Arrange - preparação para o teste
    cy.visit('http://localhost:4000') 

    // Act - ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('54321') 
    cy.contains('button','Entrar').click()

    // Assert - verificação do teste
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })

}) 