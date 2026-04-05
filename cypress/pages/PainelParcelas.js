class PainelParcelas {
  blocoVencidas() {
    return cy.get('[data-cy=parcelas-vencidas]')
  }
  itensBlocoVencidas() {
    return cy.get('[data-cy=parcelas-vencidas] [data-cy=parcela-item]')
  }
}
export default new PainelParcelas()