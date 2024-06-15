/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Add to Bag',()=>{

    before(()=>{

        cy.fixture('Bewakoof data').then((x)=>{
            globalThis.x =x;
        })
    })

    it('TC_026',()=>{
        cy.login()
        //cy.wait(3000)
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
    
    })
    it('TC_027',()=>{
        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/product.html').then(() => {
            cy.log('Test case is failed');
          });

    })
    it('TC_028',()=>{
        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('//span[@class="cart-count"]').should('be.visible')


    })
    it('TC_029',()=>{
        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('//span[@class="cart-count"]').should('be.visible')


    })
    it('TC_030',()=>{
        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.get('.remove-cart').click()
        cy.xpath('//span[@class="cart-count"]').should('contain','0 items(s)')


    })
    it('TC_031',()=>{
        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.get('.remove-cart').click()
        cy.xpath('(//p[@class="summary-total"])[1]').should('contain','₹0')

    })
    it('TC_032',()=>{
        cy.login()
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.get('.pd-add-to-bag-text').click()
        cy.go('back')
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('(//p[@class="summary-total"])[1]').should('contain','₹2398')

    })
    it('TC_033',()=>{
        cy.login()
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.xpath('//button[@class="pd-size-s pd-size-btn"]').click()
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath("(//h5[@class='cart-prod-title' and text()=\"Men's Slim-Fit Chinos\"])[1]").should('contain',"Men's Slim-Fit Chinos").then(() => {
            cy.log('Test case is failed');
          });

          

    })
    it('TC_034',()=>{
        cy.login()
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.xpath('//li[@class="pd-guide"]').click()
        cy.url().should('contain','https://bewakoooff.netlify.app/html/product.html').then(() => {
            cy.log('Test case is failed');
          });


    })
})