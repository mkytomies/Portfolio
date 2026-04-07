describe('Accessibility', () => {
    it('navigation using keyboard', () => {
        cy.visit('/')
        cy.get('[data-cy="navHomeLink"]').focus()
        cy.press(Cypress.Keyboard.Keys.TAB)
        cy.get('[data-cy="navPortfolioLink"]').should('have.focus')
        cy.press(Cypress.Keyboard.Keys.ENTER)
        cy.url().should('contain', '/projects')
    })
})