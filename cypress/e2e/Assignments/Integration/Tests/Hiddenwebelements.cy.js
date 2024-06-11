/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Hidden elements',()=>{
    it('1st test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#displayed-text").type('hello')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible') //assert

        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')

    })
}) 
