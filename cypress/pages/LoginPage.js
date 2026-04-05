class LoginPage {
  visitar() {
    cy.visit('/login')
  }
  preencherEmail(email) {
    cy.get('[data-cy=email]').type(email)
  }
  preencherSenha(senha) {
    cy.get('[data-cy=senha]').type(senha)
  }
  clicarEntrar() {
    cy.get('[data-cy=btn-login]').click()
  }
}
export default LoginPage