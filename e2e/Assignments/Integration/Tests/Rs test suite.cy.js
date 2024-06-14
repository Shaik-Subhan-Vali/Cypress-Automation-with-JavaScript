const cypress = require("cypress")

describe('Mulitple Attri',()=>{
    it.skip('1st test',()=>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption2').check().should('have.value','option2').and('have.','name','checkBoxOption2')
        cy.get('#checkBoxOption1').check().should('have.value','option1').and('have.','name','checkBoxOption1')
    })

    it('2nd test',()=>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //check anedhi explicit ga type mention cheyakrle , its automatically finds
        cy.xpath('//input[@type="checkbox"]').check(['option1','option2','option3']).should('be.checked')
        cy.xpath('//input[@type="checkbox"]').uncheck(['option1','option3']).should('not.be.checked')
        
     })

})