/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Wish list',()=>{

    before(()=>{

        cy.fixture('Bewakoof data').then((x)=>{
            globalThis.x =x;
        })
    })

    it('TC_035',()=>{
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
        cy.get('.pd-wishlist-text').click({force: true})
        cy.xpath('(//img[@class="nav-icon"])[1]').click()
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible')


    })
    it('TC_036',()=>{
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
        cy.get('.pd-wishlist-text').click({force: true})
        cy.get('.pd-wishlist-text').click({force: true})
        cy.get('span.pd-wishlist-text').invoke('text').then((text) => {
        if(expect(text.trim()).to.equal('WISHLISTED'))
            {
                cy.log('Test case failed')
            }
   
  });

    })
    it.only('TC_037',()=>{
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
        cy.get('.pd-wishlist-text').click({force: true})
        cy.xpath('(//img[@class="nav-icon"])[1]').click()
        cy.xpath('(//i[@class="fa-regular fa-circle-xmark fa-lg"])[1]').click()

    })
})