describe('Login', () => {
  beforeEach(() => {
    // Arrange - preparação para o teste
    cy.visit('/')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act - ação do teste
    // circundar o código com dados que acessam a fixture
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.screenshot('login-efetuado')

    // Assert - verificação do teste
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  // .only roda apenas esse teste
  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act - ação do teste
    // circundar o código com dados que acessam a fixture
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()
    cy.screenshot('login-nao-efetuado')

    // Assert - verificação do teste
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
}) 