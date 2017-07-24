var SharedPage = require('../Pages/sharedPage.js')

var LoginPage = function(){

    this.url ='angularjs-protractor/banking/#/customer'
    this.loginBtn = element(by.buttonText('Login'));
    this.userNameField = element(by.id('userSelect'));
    
    this.chooseUser = function(userName) {  
    this.userNameField.click();
    this.userNameField.element(by.xpath('./option[contains(text(),"'+ userName +'")]')).click();
    this.userNameField.click();
    ;}
    
    this.login = function(userName){   
         this.chooseUser(userName);
         this.loginBtn.click();        
    };
}

LoginPage.prototype = new SharedPage();
module.exports = LoginPage;

