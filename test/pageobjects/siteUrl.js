class siteUrl {
  
   async open (path) {
    
    await browser.maximizeWindow();
      await browser.url(`https://opensource-demo.orangehrmlive.com/web/index.php/${path}`);
     
        
    }
}

module.exports = new siteUrl();