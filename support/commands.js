// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('getIframe', (iframe) => {
    cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
    })

Cypress.Commands.add('login', () => {
   cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.login-link').click();
        cy.get('.login-username').type('IzukuMidoriya');
        cy.get('.login-password').type('Hero@777!');
        cy.get('.login-btn').click();

        cy.on('window:alert', (msg) => {
            if (msg.includes("Logged In")) {
                expect(msg).to.include("Logged In");
                return true;
            }
        });
})

Cypress.Commands.add('adress', ()=>{

    cy.xpath('//input[@placeholder="Full Name"]').type('izuku')
    cy.xpath('//input[@placeholder="Mobile Number"]').type('9876543210')
    cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('Hyderabad')
    cy.xpath('//input[@placeholder="City"]').type('Telangana')
    cy.xpath('//input[@placeholder="State"]').type('block 4')
    cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
    cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
    
})
