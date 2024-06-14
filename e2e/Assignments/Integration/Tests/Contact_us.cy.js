/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Mulitple Attri',()=>{
    it('1st test',()=>{
        cy.visit('https://automationteststore.com/')
        cy.xpath('//a[text() ="Contact Us"]').click()
        cy.xpath('//input[@name="first_name"]').type('deku')
        cy.xpath('(//input[@name="email"])[1]').type('deku7781@gmail.com')
        cy.xpath("//textarea[@name='enquiry']").type('I wanted to know more details about Eye Precious cells ! ')
        cy.xpath("(//button[@type='submit'])[1]").click()
      //  Your enquiry has been successfully sent to the store owner!
        cy.xpath('//p[contains(text(),"successfully")]').should('have.text',"Your enquiry has been successfully sent to the store owner!")



    })
}) 