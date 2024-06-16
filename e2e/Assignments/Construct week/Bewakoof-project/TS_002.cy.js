/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import { faker} from "@faker-js/faker";

describe('Login',()=>{

    before(()=>{

        cy.fixture('Bewakoof data').then((x)=>{
            globalThis.x =x;
        })
    })

    it('TC_016',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.get('#user').click()
        cy.get("div[class='signup-container'] h1").invoke('text').should('include', 'Sign up').then((text) => {
            cy.log('Test case is failed');
        });

    })
    it('TC_017',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type(x.username).should('have.value',x.username)
        cy.get('.login-password').type(x.password).should('have.value',x.password)

    })
    it('TC_018',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-password').type(x.password)
        cy.get('.login-btn').click()
        const alertMessages = [];

        cy.on("window:alert", (msg) => {
            alertMessages.push(msg);
        });

        cy.wait(1000).then(() => {
        
            expect(alertMessages).to.include("Fill in all the Fields!");
            expect(alertMessages).to.include("Wrong Credentials!");
        });
    })
    it('TC_019',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type(x.username)
        cy.get('.login-btn').click()
        const alertMessages = [];

        cy.on("window:alert", (msg) => {
            alertMessages.push(msg);
        });

        cy.wait(1000).then(() => {
        
            expect(alertMessages).to.include("Fill in all the Fields!");
            expect(alertMessages).to.include("Wrong Credentials!");
        });

    })
    it('TC_020',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type('IzukuMi') 
        cy.get('.login-password').type('Hero@7')
        cy.get('.login-btn').click()

        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Wrong Credentials!");
        });

    })
    it('TC_021',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type('IzukuMidoriya') 
        cy.get('.login-password').type('Hero@777!')
        cy.get('.login-btn').click()
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });

    })
    it('TC_022',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type('IzukuMidoriya') 
        cy.get('.login-password').type('Hero@777!')
        cy.get('.login-btn').click()
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
        cy.url().should('contain', 'https://bewakoooff.netlify.app/html/index.html');



    })
    it('TC_023',()=>{
        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.login-link').click()
        cy.get('.login-username').type('IzukuMidoriya') 
        cy.get('.login-password').type('Hero@777!')
        cy.get('.login-btn').click()
        cy.on("window:alert", (msg) => {
            expect(msg).to.include("Logged In");
        });
        cy.get('#user').should('contain', 'Izuku');


    })

})