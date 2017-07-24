var SharedPage = require('../Pages/sharedPage.js')

var HomePage = function() {

    this.url='angularjs-protractor/banking/#/login';
    this.customerBtn = element(by.buttonText('Customer Login'));
    this.bankManagerBtn = element(by.buttonText('Bank Manager Login'));
    this.logBtn = element(by.buttonText('Login'));
    
    this.chooseLoginType = function(type){
      
          if(type ==='customer')
          {
             this.customerBtn.click();
          }
          else
          {
             this.bankManagerBtn.click();
          }

    };
    

}

HomePage.prototype = new SharedPage();
module.exports = HomePage;