/// <reference types="cypress" />

describe('Navigation', () => {
  it('navigate from home page to portfolio page and back', () => {
    cy.visit('#/')
    cy.get('[data-cy="headerDiv"]').should('be.visible')
    cy.contains('Projects').should('exist').click()
    cy.url().should('contain', Cypress.config().baseUrl + '#/projects')
    cy.get('h1').should('contain', 'Projects')

    cy.contains('Home').should('exist').click()
    cy.url().should('contain', Cypress.config().baseUrl + '#/')
    cy.get('h1').should('contain', 'Moona Kytömies')
  })

  it('mobile menu visible on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('#/')
    cy.get('nav').should('not.be.visible')
    cy.get('[data-cy="hamburger"]').should('have.attr', 'src', '/Portfolio/src/assets/hamburger.png').click()
    cy.get('nav').should('be.visible')
    cy.get('[data-cy="hamburger"]').should('have.attr', 'src', '/Portfolio/src/assets/close.png')
    cy.contains('Projects').click()
    cy.get('nav').should('not.be.visible')
  })

  it('should display error page and user can navigate back home', () => {
    cy.visit('#/porrtfolio')
    cy.contains('Oops page not found!')
    cy.contains('Back to Home').click()
    cy.url().should('contain', Cypress.config().baseUrl + '#/')
  })
})