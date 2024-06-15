/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import { faker} from "@faker-js/faker";

describe('Register',()=>{

    before(()=>{

        cy.fixture('Bewakoof data').then((x)=>{
            globalThis.x =x;
        })
    })

    it('TC_001',()=>{

        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.signup-name').type(x.name).should('have.value', x.name);
        cy.get('.signup-username').type(x.username).should('have.value', x.username);
        cy.get('.signup-password').type(x.password).should('have.value', x.password);
        cy.get('.signup-email').type(x.email).should('have.value', x.email);
        cy.get('.signup-number').type(x.phone).should('have.value', x.phone);
    })
    it('TC_002',()=>{

        cy.visit('https://bewakoooff.netlify.app/html/login')
        cy.get('.signup-btn').click()
        cy.on("window:alert",(msg1)=>{
            expect(msg1).to.eq("Fill in all the fields!")
            return true;
        })      
    })
    it('TC_003', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    
    it('TC_004', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    
    it('TC_005', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    
    it('TC_006', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    
    it('TC_007', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    
    it('TC_008', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type('Hero');
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Password must be 5 characters or more!");
            return true;
        });
    });
    it('TC_009', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(faker.random.numeric());
        cy.get('.signup-username').type(faker.name.firstName());
        cy.get('.signup-password').type(faker.name.lastName());
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone);
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).not.to.eq("User Registered Successfuly!");
        });
    });
    it('TC_010', () => {
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(faker.name.firstName());
        cy.get('.signup-password').type(faker.name.lastName());
        cy.get('.signup-email').type('543215');
        cy.get('.signup-number').type(faker.random.numeric());
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).not.to.eq("User Registered Successfuly!");
        });
    });
    it('TC_011', () => {

        
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(faker.name.firstName());
        cy.get('.signup-password').type(faker.name.lastName());
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type('hello').should('have.value','');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("Fill in all the fields!");
            return true;
        });
    });
    it('TC_012', () => {

        
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(faker.name.firstName());
        cy.get('.signup-password').type(faker.name.lastName());
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(faker.random.numeric())
        cy.get('.signup-btn').click();//develop
        cy.on("window:alert", (msg1) => {
            expect(msg1).not.to.eq("User Registered Successfuly!");
        });
    });
    it('TC_013', () => {

        
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone)
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("User Registered Successfuly!");
            return true;
        });
    });
    it('TC_014', () => {

        
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(x.username);
        cy.get('.signup-password').type(x.password);
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type(x.phone)
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("User is already registered. Please Log in");
            return true;
        });
    });
    it('TC_015', () => {

        
        cy.visit('https://bewakoooff.netlify.app/html/login');
        cy.get('.signup-name').type(x.name);
        cy.get('.signup-username').type(faker.name.firstName());
        cy.get('.signup-password').type(faker.name.lastName());
        cy.get('.signup-email').type(x.email);
        cy.get('.signup-number').type('9876543210987')
        cy.get('.signup-btn').click();//develop
        if(cy.on("window:alert", (msg1) => {
            expect(msg1).to.eq("User Registered Successfuly!");
           
        }) )
        {
            cy.log('Test Case failed')
        }
        
    });
    
     
})
