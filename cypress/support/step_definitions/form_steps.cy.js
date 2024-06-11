import { before, Given, When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('User on simple form web page',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form?')

})
When('User enetered First Name , Last Name ,Email, contact number and message',()=>{

    cy.xpath('//input[@placeholder="First Name"]').type('Masai')
    cy.get("#lastName").type('school')
    cy.get('#email').type("s123@gmail.com")
    cy.get("#number").type('7989335677')
    cy.xpath('//textarea[@rows="2"]').type('11-11-6')

})

And('Clicked on Submit button',()=>{

    cy.xpath('//input[@value="submit"]').click()
    cy.on("window:alert",(msg1)=>{
        expect(msg1).to.contains('Thank You for reaching out to us, Masai school')
        return true;
    })

})

Then('Thank you pop-up should be displayed',()=>{

    cy.on("window:alert",(msg1)=>{
        expect(msg1).to.contains('Thank You for reaching out to us, masai shcool')
        return true;
    })


})

