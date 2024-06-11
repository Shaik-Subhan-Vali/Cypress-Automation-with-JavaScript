describe('Fb login',()=> {
    it('username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('(html/body/div/div/div/div/div/div[2]/div[2]/form/div/div/div[2]/input)[1]').type('Admin') 
        cy.xpath('(html/body/div/div/div/div/div/div[2]/div[2]/form/div/div/div[2]/input)[2]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

        })
})