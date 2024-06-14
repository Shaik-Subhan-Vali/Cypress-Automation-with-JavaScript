import login_Page from "../../../../support/PageObjects/Heroku/login.cy";


describe('Heroku Tests', () => {

    let l = new login_Page();

    it('1st test', () => {

        l.visit_URL()
        l.login()
        
    });
});

