context('Page', () => {
  beforeEach(() => {
    cy.visit('http://0.0.0.0:8080/')
  })
  describe('Player Cards', function() {
    it('Displays 25 Cards', function() {
      cy.get('.playerCardWrapper')
        .find('.playerCard')
        .its('length')
        .should('eq', 25)
    })
  })
})
