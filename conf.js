exports.config ={
   
   framework: 'jasmine',
   seleniumAdress: 'http://localhost:4444/wd/hub',   
   
   specs:['Tests/specs.js'],
   
   capabilities:{
       browserName:'chrome'
   },
   onPrepare:function(){  
    
     browser.baseUrl='http://www.way2automation.com/'
     var width = 1600;
     var height = 1200;
     browser.driver.manage().window().setSize(width, height);
   }

};