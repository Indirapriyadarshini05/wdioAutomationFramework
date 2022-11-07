const { assert } = require("chai");
const expectChai = require("chai").expect;


class adminTab {
  
  get systemUsersText() {
    return $("//h5[text()='System Users']");
  }
  get userName() {
    return $("//label[text()='Username']/../..//input");
  }

  
  get userRole() {
    return $(
      "//label[text()='User Role' ]/../..//div[@class='oxd-select-text-input']"
    );
  }
  get userRoleddValue() {
    return $("//label[text()='User Role']/../..//span[text()='Admin']");
  }
  get empName() {
    return $("//label[text()='Employee Name' ]/../..//input");
  }
  get empNameValue(){
    return $("//span[text()='Peter Mac Anderson']");
  }
  get status() {
    return $(
      "//label[text()='Status' ]/../..//div[@class='oxd-select-text-input']"
    );
  }

  get statusddValue() {
    return $("//label[text()='Status']/../..//span[text()='Enabled']");
  }
  get reset() {
    return $("//button[text()=' Reset ']");
  }
  get search() {
    return $("//button[text()=' Search ']");
  }
  get addBtn() {
    return $("//button[text()=' Add ']");
  }
  get addUserText() {
    return $("//h6[text()='Add User']");
  }
  get password() {
    return $("//label[text()='Password' ]/../..//input");
  }

  get confirmPassword() {
    return $("//label[text()='Confirm Password' ]/../..//input");
  }

  get cancelBtn() {
    return $("//button[text()=' Cancel ']");
  }
  get cancelBtn1() {
    return $("//button[text()=' Save ']");
  }
  get saveBtn() {
    return $("//button[@type='submit']");
  }
 get jobdd(){
  return $("//span[text()='Job ']");
 }
get jobtitle(){
  return $("//a[text()='Job Titles']");
}  
get jobTitleName(){
  return $("//label[text()='Job Title']/../..//input");
}
get description(){
  return $("//label[text()='Job Description']/../..//textarea");
}
get browse(){
  return $('//div[text()="Browse"]');
}
get addNote(){
  return $('//textarea[@placeholder="Add note"]');
}

async addJobTitle(){
 await this.addJobTitle.setValue('Tester');
 await (await this.description).setValue("tester description");

}





  async addUser(uname) {
    await this.addBtn.click();
    await this.addUserText.waitForDisplayed({ timeout: 10000 });
     let text = await this.addUserText.getText();
     console.log(text);
    await this.userRole.click();
    await this.userRoleddValue.click();
    await this.empName.setValue("pe");
    await this. empNameValue.click();
    await this.status.click();
    await this.statusddValue.click();
    await this.userName.setValue(uname);
    await this.password.setValue("Admin@123");
    await this.confirmPassword.setValue("Admin@123");
     await (await this.cancelBtn1).click();
     
    // await this.cancelBtn.click();
   //  await (await this.systemUsersText).waitForDisplayed({timeout:5000});

 
      
  }

  async searchUser(uname) {
    await this.userName.waitForDisplayed({ timeout: 10000 });
    await this.userName.setValue(uname);
    await this.userRole.click();
    await this.userRoleddValue.click();
    await this.empName.setValue(uname);
    await this.status.click();
    await this.statusddValue.click();
    await this.search.click();
    let a= $("//p[text()='No Records Found']");
    expectChai(await a.getText()).to.include('No Records Found');
    
  }
}
module.exports = new adminTab();
