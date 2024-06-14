describe('Radio btns',()=>{
    it('1st test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//input[@value="radio2"]').check().should("be.checked")
        cy.xpath('//input[@value="radio3"]').check().should("be.checked")

    })
    
    it('2nd test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[for="bmw"]>#checkBoxOption1').check() //diff approach to write the path
        cy.xpath("//label[@for='benz']/input[@value='option2']").check()
        
    })
    it('Dropdown test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        
    })
    it('Dropdown test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@name="dropdown-class-example"]').select('option3').should('have.value','option3')
    })
    it('Dropdown test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@name="dropdown-class-example"]').select(1).should('have.value','option1')
        cy.xpath('//select[@name="dropdown-class-example"]').select(0).should('have.value','')
    })
    it('Select by text',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@name="dropdown-class-example"]').select('Option1').should('have.value','option1')
        cy.xpath('//select[@name="dropdown-class-example"]').select('Option2').should('have.value','option2')
        cy.xpath('//select[@name="dropdown-class-example"]').select('Option3').should('have.value','option3')
        cy.xpath('//select[@name="dropdown-class-example"]').select('Select').should('have.value','')
      
    })
    it('Select by index',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@name="dropdown-class-example"]').select(1).should('have.value','option1')
        cy.xpath('//select[@name="dropdown-class-example"]').select(2).should('have.value','option2')
        cy.xpath('//select[@name="dropdown-class-example"]').select(3).should('have.value','option3')
        cy.xpath('//select[@name="dropdown-class-example"]').select(0).should('have.value','')
      
    })
    it('Select by value',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//select[@name="dropdown-class-example"]').select("option1").should('have.value','option1')
        cy.xpath('//select[@name="dropdown-class-example"]').select("option2").should('have.value','option2')
        cy.xpath('//select[@name="dropdown-class-example"]').select("option3").should('have.value','option3')
        cy.xpath('//select[@name="dropdown-class-example"]').select("").should('have.value','')
    
      
    })
    it('Dynamic drop 2',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//input[@placeholder="Type to Select Countries"]').type('us')
        cy.xpath("(//div[text()='Brunei Darussalam'])[1]").click()
            
    })
    
    it.only('Dynamic drop',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//input[@placeholder="Type to Select Countries"]').type('us')
        cy.get(".ui-menu-item-wrapper").each(($el, index, $list)=>{
            if($el.text() =="United States (USA)"){
                cy.wrap($el).click()   
            }
        })

    })
    
})
