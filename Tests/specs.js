var HomePage = require('../Pages/homePage.js')
var LoginPage = require('../Pages/loginPage.js')
var AccountPage = require('../Pages/accountPage.js')

describe('Chacking Table', function() {
    
    var logPage;
    var accountPage;
    var homePage;

beforeEach(function() {
    
    logPage = new LoginPage();
    homePage = new HomePage();
    accountPage = new AccountPage();

});
  
it('testing header in table', function() {
    
     homePage.navigate();
     homePage.chooseLoginType('customer');
     browser.sleep(1000);
     logPage.login('Hermoine Granger');
     accountPage.chooseAccountNumber('1001');    
});  

    
});
    
    




    
