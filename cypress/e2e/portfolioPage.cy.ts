/// <reference types="cypress" />

describe('Projects page', () => {
    it('project tiles render correctly', () => {
        cy.visit('/projects')
        cy.get('[data-cy="projectTile"]').should('have.length', 4).should('be.visible')
        cy.get('[data-cy="projectName"]').should('have.length', 4).should('be.visible')
        cy.get('[data-cy="projectDescription"]').should('have.length', 4).should('be.visible')
        cy.get('[data-cy="projectImage"]').should('have.length', 4).should('be.visible')
        cy.get('[data-cy="button"]').should('have.length', 7).should('be.visible')
    })

    it('buttons are rendered correctly', () => {
        cy.visit('/projects')
        cy.get('[data-cy="button"]').filter(':contains("GitHub")').should('have.length', 4).should('have.attr', 'href').and('include', 'github.com')
        cy.get('[data-cy="button"]').filter(':contains("Figma")').should('have.length', 3).should('have.attr', 'href').and('include', 'figma.com')
    })
})