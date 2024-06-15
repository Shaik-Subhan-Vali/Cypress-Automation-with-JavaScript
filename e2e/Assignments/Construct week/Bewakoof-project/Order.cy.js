/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Order', () => {

    before(() => {
        cy.fixture('Bewakoof data').then((x) => {
            globalThis.x = x;
        });
    });

    it('TC_038', () => {
        cy.login()
     

        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();
        cy.xpath('//button[@class="place-order"]').click();
    });
    it.only('TC_039', () => {

        cy.login()
    
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.adress()

        cy.xpath('//button[@class="place-order"]').click();

    });
    

});
