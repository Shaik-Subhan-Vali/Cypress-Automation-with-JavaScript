describe('orange hrm',()=> {
    it.skip('admin test',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin') 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
          //(//a[@class="oxd-main-menu-item"])[1]
        //<span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Admin</span>

        })
    it("log out test",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin') 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
        cy.get(".oxd-userdropdown-name").click()
        cy.xpath('//a[@href="/web/index.php/auth/logout"]').click()

    }) 

})
