describe('Fb login',()=> {
    it('username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin') 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

        })

})