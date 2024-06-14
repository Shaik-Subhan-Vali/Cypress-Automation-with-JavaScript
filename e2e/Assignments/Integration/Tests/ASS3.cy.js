/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Facebook sign up assignment ',()=>{
    it('Automate sign up page',()=>{
        cy.visit('https://www.facebook.com/')
        cy.xpath('(//a[@role="button"])[2]').click()
        cy.get('.pam > ._42ft').click()
        cy.get('.fcb > a').click()
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.xpath('//input[@name="firstname"]').type('Deku')
        cy.xpath('//input[@name="lastname"]').type('All might')
        cy.xpath('//input[@name="reg_email__"]').type('Myheroacademy@gmail.com')
        cy.xpath('//input[@aria-label="Re-enter email address"]').type('Myheroacademy@gmail.com')
        cy.xpath('//input[@placeholder="Password"]').type('myherodeku@123')
        cy.get("#day").select('7')
        cy.get('#month').select('7')
        cy.get('#year').select('1981')
        cy.xpath('(//input[@class="_8esa"])[2]').click()
        cy.xpath('(//button[@type="submit"])[2]').click()

    })
})