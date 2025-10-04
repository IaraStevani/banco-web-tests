describe('Login', () => {
  beforeEach(() => {
    // Arrange - preparação para o teste
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act - ação do teste
    cy.fazerLoginComCredenciaisValidas()

    // Assert - verificação do teste
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act - ação do teste
    cy.fazerLoginComCredenciaisInvalidas()

    // Assert - verificação do teste
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
}) 