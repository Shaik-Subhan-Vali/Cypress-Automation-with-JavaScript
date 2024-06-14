describe('Fb login',()=> {
    it('uname',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('myid') 
        cy.get('#password').type('mypwd')
        cy.get('.fa').click()
       // <input type="text" name="username" id="username">
       //<input type="password" name="password" id="password">
      //<i class="fa fa-2x fa-sign-in"> Login</i>
    })

})