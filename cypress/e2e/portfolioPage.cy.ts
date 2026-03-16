/// <reference types="cypress" />

describe('Portfolio page', () => {
    it('project tiles render correctly', () => {
        cy.visit('/portfolio')
        cy.get('[data-cy="projectTile"]').should('have.length', 3).should('be.visible')
        cy.get('[data-cy="projectName"]').should('have.length', 3).should('be.visible')
        cy.get('[data-cy="projectDescription"]').should('have.length', 3).should('be.visible')
        cy.get('[data-cy="projectImage"]').should('have.length', 3).should('be.visible')
        cy.get('[data-cy="button"]').should('have.length', 5).should('be.visible')
    })

    it('buttons', () => {
        cy.visit('/portfolio')
        cy.get('[data-cy="button"]').filter(':contains("GitHub")').should('have.length', 3).should('have.attr', 'href').and('include', 'github.com')
        cy.get('[data-cy="button"]').filter(':contains("Figma")').should('have.length', 2).should('have.attr', 'href').and('include', 'figma.com')
    })
})