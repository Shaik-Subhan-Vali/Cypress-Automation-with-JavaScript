class login{

    visit_url(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    credentials(){
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
    }
    submit(){
        cy.xpath('//button[@type="submit"]').click()
    }

}

export default login