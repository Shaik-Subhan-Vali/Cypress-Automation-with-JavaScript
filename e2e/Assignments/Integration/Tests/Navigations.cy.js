describe('Navigation', () => {
    it('1st test', () => {
      cy.visit('https://testautomationu.applitools.com/login.html');
      cy.xpath('(//a[@class="nav-link"])[1]').click();
      cy.wait(3000);
      cy.url().should('contain', 'https://testautomationu.applitools.com/ranks.html').then(() => {
        cy.log('Test case if failed');
      });
    });
  });
  