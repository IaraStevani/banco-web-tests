describe('Login', () => {
  it('Login com dados válidos edve permitir entrada no sistema', () => {
    // Arrange - preparação para o teste
    cy.visit('http://localhost:4000') 

    // Act - ação do teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456') 
    cy.get('#login-section > .btn').click()

    // Assert - verificação do teste
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })
}) 