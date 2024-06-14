/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
/// <reference types="Cypress-iframe" />
describe('Frames ',()=>{
    it('i frame',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')  //just loads the frame

        cy.iframe().contains('Blog').click()  //switches to frame and interacts

    })
    it('i frame -1st approach',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe')

      let iframe=  cy.get('#courses-iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

    })
    it('appraoch2 by using custom command', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")
        cy.getIframe('#mce_0_ifr').clear().type("Welcome (cmd+a}") //commands folder, resuable
        //cmd+a -> for addiotional operations
        cy.get("[aria-label='Bold']").click()
        })

    
})