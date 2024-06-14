/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class login_Page{

    visit_URL()
    {

        cy.visit('https://the-internet.herokuapp.com/login')
    }

    login()
    {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.xpath('//i[@class="fa fa-2x fa-sign-in"]').click()

    }


}

export default login_Page;