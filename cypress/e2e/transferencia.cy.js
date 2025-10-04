describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act - ação do teste
        cy.realizarTransferencia('João', 'Maria', '11')

        // Assert - verificação do teste
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it.only('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act - ação do teste
        cy.realizarTransferencia('João', 'Maria', '5000.01')

        // Assert - verificação do teste
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})