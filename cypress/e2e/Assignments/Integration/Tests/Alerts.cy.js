/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Alerts',()=>{
    it('1st test',()=>{
//
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.xpath('//input[@placeholder="Enter Your Name"]').type('abc')
    //cy.xpath('//input[@onclick="displayAlert()"]').click()
    cy.xpath('//input[@onclick="displayConfirm()"]').click()
    cy.on("window:confirm",(msg1)=>{
        expect(msg1).to.eq("Hello abc, Are you sure you want to confirm?")
        return true;
    })

    })
    })
