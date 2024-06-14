import login from "../../../../support/PageObjects/OrangeHRM/login.cy";
import logout from "../../../../support/PageObjects/OrangeHRM/logout.cy";
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Orange HRM', () => {
    let lgin = new login() //creating obj for login
    let lgout = new logout()   //creating obj for logout

    it('login test case', () => {
        lgin.visit_url()
        lgin.credentials()
        lgin.submit()  //
    })
    it('logout test case', ()=>{
   
        cy.wait(2000)
        lgout.logout_func()
    })

}) 
