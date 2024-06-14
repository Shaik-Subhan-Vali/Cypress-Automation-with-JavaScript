/// < reference types ="ypress" />
//// < reference types= "cypress-xpath" />

describe('OrangeHRM Automation',()=>{

    it('Test cases',()=>{
      
        //Automate the Login  by Navigating to url (Application under test)-AUT
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Entering credentials in username and password input box fields
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')

        //Clicking on submit btn
        cy.xpath('//button[@type="submit"]').click()

        //Clicking on admin feature
        cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name" and text()="Admin"]').click()

        //Entering data in username input box field
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('abcdy')

        //Selecting specific value in user role drop down field
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').click()
        cy.xpath("(//span[text()='Admin'])[2]").click({force : true})

        //Selecting specific value in Employee name drop down 
        cy.xpath('//input[@placeholder="Type for hints..."]').type('Ranga Akunuri')
        cy.xpath('//span[text()="Ranga  Akunuri"]').click({force : true})

        //Selecting specific value in status drop down field
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[2]').click()
        cy.xpath('//span[text()="Enabled"]').click({force : true})

        //clicking on search button
        cy.xpath('//button[@type="submit"]').click()

        //refresh the page
        cy.reload()
        
        //iterating through web table to find our specific text in the employee colun
        //And verifying the status and priniting in the log
        cy.xpath('//div[@role="table"]/div[2]/div/div[1]/div[4]').each(($el,index,$list)=>
        {
            let t =$el.text()
            if(t.includes('manda user'))         //'james butler' - since it is not in record instead used 'mand user' availble employee name
            {
                cy.wrap($el).next().then((msg)=>
                {
                    cy.log(msg.text())
                })
            }    
        })

        //clicking on user drop down
        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()

        //clicking on logout field
        cy.xpath('(//a[@class="oxd-userdropdown-link"])[4]').click()

    })
})
