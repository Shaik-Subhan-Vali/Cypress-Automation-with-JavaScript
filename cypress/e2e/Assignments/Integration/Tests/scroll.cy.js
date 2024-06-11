/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
//scrolling
describe('Scrolling ',()=>{
    it('1st test',()=>{
        cy.visit('https://www.google.co.in/')
        cy.xpath('//textarea[@title="Search"]').type("Ap Elections{enter}")
        cy.wait(3000)
        cy.scrollTo(0,2000)
        cy.wait(2000)
        // cy.scrollTo(0,-2000)
       // cy.contains("TDP's Big Andhra Comeback, BJP Races Ahead In Odisha").scrollIntoView()
       cy.xpath('(//span[text()="More results"])[1]').scrollIntoView
    })
})
