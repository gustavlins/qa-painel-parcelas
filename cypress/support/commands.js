
Cypress.Commands.add('login', () => {
  cy.fixture('usuario').then((u) => {
    cy.visit('/login')
    cy.get('[data-cy=email]').type(u.email)
    cy.get('[data-cy=senha]').type(u.senha)
    cy.get('[data-cy=btn-login]').click()
    cy.url().should('include', '/parcelas')
  })
})
// cy.login() para ser chamado em qualquer teste