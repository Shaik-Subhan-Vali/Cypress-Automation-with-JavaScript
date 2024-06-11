/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
describe('Assignment 2 ',()=>{
    it.skip('30 CSS selectors and 30 xpath ',()=>{
        cy.visit('https://www.ebay.com/')
        cy.xpath('(//a[@_sp="p4375194.m1379.l3250"])[1]').click()  //x1
        cy.xpath('//a[contains(@class,"b-textlink b-textlink--parent") and text()="Gadgets"]').click()  //x2
        cy.xpath('(//p[@class="b-guidancecard__title"])[3]').click()  //x3
        cy.xpath('//p[contains(@class,"b-guidancecard__title") and text()="40 mm"]').click() //x4
        cy.xpath('(//h3[@class="textual-display bsig__title__text"])[22]').click()  //x5
        
    })
    it.skip('irctc',()=>{
        cy.visit("https://www.irctc.co.in/nget/train-search")
        cy.xpath('(//input[@role="searchbox"])[1]').type('MANGALURU JN - MAJN (MANGALURU)') //x6
        cy.xpath('(//input[@role="searchbox"])[2]').type('HYDERABAD DECAN - HYB (SECUNDERABAD)').click({force:true})  //x7
        cy.get(".dateText").click()  //x9
        cy.xpath('(//span[@class="DayTiles__CalendarDaysSpan-sc-1xum02u-1 dkWAbH"])[8]').click({force:true}) //x10
        cy.get('#search_button').click() //x11
    })
    
    it('Ikeas',()=>{
        cy.visit("https://www.ikea.com/in/en/")
        cy.xpath('(//span[@class="pub__btn__label" and text()="Beds" ])[1]').click({force:true})
        cy.xpath('//span[@class="plp-pill__label" and text()="Sort"]').click({force:true})
        cy.get('#plp-PRICE_LOW_TO_HIGH').click()
        
    })
    
})