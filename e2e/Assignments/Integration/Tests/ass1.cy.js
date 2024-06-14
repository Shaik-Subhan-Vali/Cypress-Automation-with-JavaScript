describe('Assignment',()=>{
    it('1st test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin') 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()  
        cy.xpath("//span[text()='Admin']").click()
        // cy.url().should('include','admin')
        // cy.go('back')
        // cy.go('forward') //yes
        // cy.reload()
       cy.xpath('//input[@placeholder="Type for hints..."]').type('sav')
     //   1st way
         cy.xpath("//span[text()='savi N g']").click()

        //2nd way
        // cy.get(".oxd-autocomplete-option").each(($el, index, $list)=>{
        //         if($el.text() =="Naruto Uzumaki ."){
        //             cy.wrap($el).check()
        //         }
        //     })
     })

})