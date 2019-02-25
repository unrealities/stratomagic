context('Page', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8080/')
  })
  describe('Player Cards', function() {
    it('Displays 25 Cards', function() {
      cy.get('.playerCard')
        .its('length')
        .should('eq', 25)
    })
    it('Displays 4 Starting Pitchers', function() {
      cy.get('.pos')
        .filter('div:contains(SP+0)')
        .its('length')
        .should('eq', 4)
    })
  })
})
