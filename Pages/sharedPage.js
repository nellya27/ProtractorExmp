var Toolbar = require('../Pages/toolbar.js')

var SharedPage = function(){
  
   this.homeBtn = element(by.className('btn home')),
   this.logOutBtn = element(by.className('btn logout')),
   this.logOut = function() {this.logOutBtn.click();},
   this.goHome = function() {this.homeBtn.click();}   
   this.navigate = function(){
   browser.get('/'+ this.url);
  }

}

SharedPage.prototype = new Toolbar();
module.exports = SharedPage;