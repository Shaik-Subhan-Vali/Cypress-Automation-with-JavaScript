/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Switching ',()=>{
    it.skip('between tabs',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click()
        //instead of clicking link directly , remove the target attribute and then click.
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses')
            cy.log(cy.title())
        })
        cy.log(cy.title())
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#confirmbtn").click()

    })
    it.skip('between tabs- method 2',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//a[@id="opentab"]').then((e)=>{
            let url =e.prop('href');
            cy.visit(url);
        })
        
        //instead of remove the target attribute and then click, capture the href link and visit on the same tab
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses')
            cy.log(cy.title())
        })
        cy.log(cy.title())
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#confirmbtn").click()

    })
    it.skip('between windows ',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click()
        cy.origin('https://www.qaclickacademy.com/',()=>{
          
        cy.visit('/')
        cy.contains('Access all our Courses')
        cy.log(cy.title())
        })
       

    })

})
