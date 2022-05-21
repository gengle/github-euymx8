// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

const PORT = process.env.PORT || 3000

describe('Pinia demo with counters', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:${PORT}`)
    })

    it('works', () => {
        
        cy.get('[data-testid="increment"]')
        .should('contain.text', '+')
        .wait(200)
        .click()
        .wait(200)
        .click()
        .get('[data-testid="counter-values"]')
        .should('contain.text', 'Counter: 22. Double: 44')
    })
})
