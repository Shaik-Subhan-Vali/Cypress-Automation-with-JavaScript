describe('Fb login',()=> {
 it('uname',()=>{
  cy.visit('https://www.facebook.com/')
  cy.get("input[data-testid='royal_email']").type('subhanshaik')
  cy.get('#pass').type('123456')
  cy.get('[type="submit"]').click()
  //cy.get('[data-testid="royal_login_button"]').click()


 })

})