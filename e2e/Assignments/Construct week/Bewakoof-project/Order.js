/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Order',()=>{

    before(()=>{

        cy.fixture('Bewakoof data').then((x)=>{
            globalThis.x =x;
        })
    })
    it('TC_038',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type('IzukuMidoriya') 
        cy.get('.login-password').type('Hero@777!')
        cy.get('.login-btn').click()
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
        //cy.wait(3000)
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        

    })

})