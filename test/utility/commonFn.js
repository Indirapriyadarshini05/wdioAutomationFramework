class commonFn {

  async clickBtn(selector) {
    try{
      await browser.$(selector).click();
    }
    catch(err){
      console.log(err+" "+"selector is not found");
    }
    
  }

  async setvalueTextbox(selector, value) {
    try{
      await browser.$(selector).setValue(value);
    }
    catch(error){
      console.log(error+" "+ "selector is not found");
    }
    
  }

  async waitTime(time) {
    try{
      await this.waitForDisplayed({timeout:time});
    }
    catch(error){
      console.log(error+" "+ "selector is not found");
    }
    
  }
}

module.exports = new commonFn();
