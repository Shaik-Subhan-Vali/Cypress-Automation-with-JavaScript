describe('Fb login',()=> {
    it('uname',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin') 
        //class="oxd-input oxd-input--active"
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()


        })

})