/// <reference types="cypress" />

describe('Basic site navigation flow', () => {
  it('visit home page', () => {
    cy.visit('/')
    cy.contains('Home')
    cy.contains('Portfolio').click()
  })
})