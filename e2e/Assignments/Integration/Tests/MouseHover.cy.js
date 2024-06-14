/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Mouse Hover ',()=>{
    it.skip('using invoke',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true});
        cy.url().should('include','top')

    })
    it.skip('using trigger for top',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force: true});
        cy.url().should('include','top')

    })
    it.skip('using trigger for reload',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Reload').click({force: true});
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')

    })
    //right click
    it.skip('Right click',()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick()


    })
    it.skip('Double click',()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//button[@ondblclick="myFunction()"]').dblclick()

    })
    it.skip('Drag and drop',()=>{
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown',{ which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force : true})

    })
    it('Drag and drop 2',()=>{
        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        cy.get('#draggable').trigger('mousedown',{ which : 3})
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force : true})

    })
})
