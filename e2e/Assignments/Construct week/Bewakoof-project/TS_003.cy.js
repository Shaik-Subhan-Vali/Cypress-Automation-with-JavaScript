/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Search',()=>{

    it('TC_024',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//input[@placeholder="search"]').type('Joggers').should('have.value','Joggers')
    })
    
    it('TC_025', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html');
        cy.xpath('//input[@placeholder="search"]').type('HEAVY DUTY').type('{enter}');
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case failed');
        });
    });
      
})