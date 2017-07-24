var Toolbar = function() {

    this.homeBtn = element(by.className('btn home')),
    this.logOutBtn = element(by.className('btn logout')),
    this.logOut = function() {this.logOutBtn.click();},
    this.goHome = function() {this.homeBtn.click();}   
}

module.exports = Toolbar;
