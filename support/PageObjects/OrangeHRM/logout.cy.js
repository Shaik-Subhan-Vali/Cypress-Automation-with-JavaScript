class logout{
    logout_func(){

        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()
        
        cy.xpath('(//a[@class="oxd-userdropdown-link"])[4]').click()
    }
}
export default logout;