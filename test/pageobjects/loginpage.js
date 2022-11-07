

class loginPage {
    
    get username () {
        return $('//input[@name="username"]');
    }

    get password () {
        return $('//input[@name="password"]');
    }

    get submitButton () {
        return $('button[type="submit"]');
    }

    get loginText(){
        return $("//h5[text()='Login']");
    }

    get inavlidcred(){
        return $("//p[text()='Invalid credentials']");
    }

    get empInformation(){
        return $("//h5[text()='Employee Information']");
    }
    async login (username, password) {
        //await this.loginText.waitForDisplayed({timeout:10000})
        await this.username.waitForDisplayed({timeout:10000});
        await this.username.setValue(username);
        await this.password.setValue(password);
       // await this.submitButton.click();

    }

    async invalidmessage(){
        await this.inavlidcred.waitForDisplayed({timeout:10000});
        return await this.inavlidcred.getText();
          
    }
    async loginVisibleText(){
        await this.loginText.waitForDisplayed({timeout:10000})
        return await this.loginText.getText();

    }
    async empInformationVisibleText(){
        await this.empInformation.waitForDisplayed({timeout:10000})
        return await this.empInformation.getText();

    }

    

}

module.exports = new loginPage();