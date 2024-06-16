/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('In accessible', () => {
    it('TC_057', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navTop"]/div/div[1]/p[1]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_058', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navTop"]/div/div[1]/p[2]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_059', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navTop"]/div/div[1]/p[3]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_060', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navTop"]/div/div[1]/p[4]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 

    it('TC_061', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('(//button[@class="dropbtn"])[1]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    })  
    it('TC_062', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('(//button[@class="dropbtn"])[2]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_063', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navEnd"]/span[4]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/category.html')
    }) 
    it('TC_064', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navEnd"]/span[5]').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/category.html')
    })  
    it('TC_065', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.get('#bestPicks').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_066', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="navEnd"]/span[5]').click({force : true})
        cy.xpath('//*[@id="navMid"]/div[1]/img').click({force : true})
        cy.wait(4000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/category.html').then(() => {
            cy.log('Test case is failed');
          });
    }) 
    it('TC_067', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="footer-item"]/ul[1]/li[2]').click({force : true})
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    })
    it('TC_068', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="footer-item"]/ul[1]/li[3]').click({force : true})
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    })
    it('TC_069', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="footer-item"]/ul[1]/li[4]').click({force : true})
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    })
    it('TC_070', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//*[@id="footer-item"]/ul[1]/li[5]').click({force : true})
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case is failed');
          });
    })
    it('TC_071', () => {
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.get('#f-subscribe-btn').click()
        cy.get('#f-subscribe-btn').invoke('text').should('include', 'subscribed').then((text) => {
            cy.log('Test case is failed');
        });
    
    }) 
    it('TC_080', () => {

        cy.login()
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.url().should('contain','https://bewakoooff.netlify.app/html/cart').then(() => {
            cy.log('Navigation back is successful');
          });
        cy.go('back') 
        cy.url().should('contain','https://bewakoooff.netlify.app/html/product.html').then(() => {
            cy.log('Navigation back is successful');
          });
        cy.go('back') 
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Navigation back is successful');
            });  
        cy.go('back') 
        cy.url().should('contain','https://bewakoooff.netlify.app/html/login').then(() => {
            cy.log('Navigation back is successful');
            });      

    });


})