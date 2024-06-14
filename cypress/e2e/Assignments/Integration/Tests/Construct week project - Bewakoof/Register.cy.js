/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Alerts',()=>{

    before(()=>{

        cy.fixture('Bewakoof').then((x)=>{
            globalThis.x =x;
        })
    it('1st test',()=>{

        cy.visit("https://bewakoooff.netlify.app/html/login")
        cy.get('.signup-name').type(x.name)
    

    })

})
})