var SharedPage = require('../Pages/sharedPage.js');

var AccountPage =  function(){ 
    
    this.url='angularjs-protractor/banking/#/account/';
    this.transactionBtn = element(by.buttonText('Transactions'));
    this.header = element(by.claasName('fontBig ng-binding')).getText(); 
    this.depositBtn = element(by.buttonText('Deposit'));
    this.withdrawBtn = element(by.buttonText('Withdrawl'));
    this.accountNumberField = element(by.id('accountSelect'));
    this.getAccountNumber = function(){return accountNumberField.getText();};
    this.chooseAccountNumber = function(accountNumber) {
    this.accountNumberField.click();
    this.accountNumberField.element(by.xpath('./option[@label="'+accountNumber+'"]')).click();
    this.accountNumberField.click();
     
    };
    
 
}

AccountPage.prototype = new SharedPage();
module.exports = AccountPage;
