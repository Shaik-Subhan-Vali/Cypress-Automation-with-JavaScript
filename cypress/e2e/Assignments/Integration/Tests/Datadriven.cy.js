describe('Data driven ',()=> {

    before(()=>{

        cy.fixture('example').then((data)=>{
            globalThis.data =data;
        })
    })
    it('using example.json -valid',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type(data.username1) 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type(data.password1)
        cy.xpath('//button[@type="submit"]').click()

        })   

    it('using example.json - invalid ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type(data.username) 
        cy.xpath('//input[@class="oxd-input oxd-input--active"]').type(data.password)
        cy.xpath('//button[@type="submit"]').click()

        })
    })
 
