const { Browser } = require("selenium-webdriver");

class logout_Fn{

get userDropdown(){
    return $('.oxd-userdropdown-name');
}


get about(){
    return $("//a[text()='About']");
}

get  changePassword(){
    return $("//a[text()='Change Password']");
}

get logoutbtn(){
    return $("//a[text()='Logout']");
}

async logout(){
   // await this.userDropdown.waitForDisplayed()
    await this.userDropdown.click();
    await this.logoutbtn.click();
}


}
module.exports=new logout_Fn();