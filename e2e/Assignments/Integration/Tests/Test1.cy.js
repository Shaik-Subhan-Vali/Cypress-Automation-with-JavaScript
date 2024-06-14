describe ('MyfirsttestCase',()=>{

    it('tc1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    
    })
})
//j pratik
//npx cypress run --spec "cypress\e2enpx \Assignments\Integration\Tests\Test1.cy.js" --headed --browser chrome //new
//npx cypress run --spec "cypress\e2e\Assignments\Integration\Tests\Test1.cy.js" --browser chrome

//node_modules/.bin/cypress run --headed
