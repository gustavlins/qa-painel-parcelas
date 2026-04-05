describe('Painel de parcelas', () => {

  beforeEach(() => {
    // Faço o login antes de cada teste para já começar com o gestor no painel
    cy.fixture('usuario').then((u) => {
      cy.visit('/login')
      cy.get('[data-cy=email]').type(u.email)
      cy.get('[data-cy=senha]').type(u.senha)
      cy.get('[data-cy=btn-login]').click()
      // Valida o redirecionamento ao painel de parcelas
      cy.url().should('include', '/parcelas')
    })
  })
  context('Validação da listagem de parcelas vencidas', () => {
    it('bloco de parcelas vencidas deve ter ao menos uma parcela', () => {
      cy.get('[data-cy=parcelas-vencidas] [data-cy=parcela-item]').its('length')
        .should('be.greaterThan', 0)
    })
    it('deve exibir parcelas com status "Vencida" dentro do bloco de vencidas', () => {
      cy.get('[data-cy=parcelas-vencidas] [data-status="Vencida"]').should('exist')
    })
  })
})
