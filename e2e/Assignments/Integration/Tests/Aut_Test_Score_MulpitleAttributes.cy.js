
describe('Mulitple Attri',()=>{
    it('1st test',()=>{

        cy.visit('https://automationteststore.com/')
       // cy.xpath('//input[@type="text" and @autocomplete ="off"]').click() //search
       // cy.xpath('//input[@type="text" and @placeholder="Subscribe to Newsletter"]').click() //subscribe
       // cy.xpath("//a[text()='Fragrance']").click({force: true});
       cy.xpath("(//a[contains(text(),'Skinsheen Bronzer Stick')])[1]").click()
      
         })

})