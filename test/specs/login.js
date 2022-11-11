const { By } = require("selenium-webdriver");
const expectChai = require("chai").expect;
const siteUrl = require("../pageobjects/siteUrl");
const loginPage = require("../pageobjects/loginpage");
const logout_Fn = require("../pageobjects/logout_Fn");
const navBar = require("../pageobjects/leftNavigationpanel");
const admin = require("../pageobjects/adminTab");
require("../utility/commonFn");
const { PdfReader } = require("pdfreader");
const fs = require("fs");
const { clickBtn } = require("../utility/commonFn");
const path = require("path");
const PIMtab = require("../pageobjects/leftNavigationpanel");
const leftNavigationpanel = require("../pageobjects/leftNavigationpanel");
let credentials = JSON.parse(fs.readFileSync("test/testData/cred.json"));
const chance = require("chance").Chance();
const nameofuser = chance.name({ length: 5 });
const password = chance.string({
  alpha: true,
  symbols: true,
  length: 8,
  numeric: true,
});



credentials.forEach(({ username, password, invusername, invpassword }) => {

  describe("Login to the Application", () => {
    it.only("Verifiying the Title and Text", async () => {
      await siteUrl.open("auth/login");
      await expect(browser).toHaveTitle("OrangeHRM");
      //let ele=await loginPage.loginVisibleText();
      let ele = await $('//h5[text()="Login"]');
      console.log(ele);
      await expect(ele).toHaveText("Login");
    });

    it("data upload", async () => {

      await siteUrl.open("auth/login");
      await loginPage.login(username, password);
      await clickBtn(await loginPage.submitButton);
      await clickBtn(await leftNavigationpanel.PIMtab);
      await PIMtab.dataImportTab();
      // await PIMtab.FileUpload()

      // await browser.$("//span[text()='PIM']").click();
      // await browser.$("//span[text()='Configuration ']").click();
      // await browser.$("//a[text()='Data Import']").click();
      await browser.pause(10000);
      let inputfile = await $('//input[@type="file"]');
      let filepathName = await path.join('./test/input/importData.csv');
      let fileUploading = await browser.uploadFile(filepathName);
      await inputfile.addValue(fileUploading);
      await browser.pause(10000);
    });



    it("Login with Valid credentials to OrangeHRM", async () => {
      await siteUrl.open("auth/login");
      await loginPage.login(username, password);
      //await clickBtn(' Login ');
      await clickBtn(await loginPage.submitButton);
      //let abc = await $("//h5[text()='Employee Information']");
      let text = await loginPage.empInformationVisibleText();
      console.log(text);
      await expectChai(text).to.equal("Employee Information");
      await navBar.leftNav_Admin();
      await logout_Fn.logout();
     
    });

    it("Login with inValid credentials to OrangeHRM", async () => {
      await siteUrl.open("auth/login");
      await loginPage.login(invusername, invpassword);
      await clickBtn(await loginPage.submitButton);
      let invalidmsg = await loginPage.invalidmessage();
      console.log(invalidmsg);
      await expectChai(invalidmsg).to.equal("Invalid credential");
    });

    it("Adding User in Admin Tab ", async () => {
      await siteUrl.open("auth/login");
      await loginPage.login(username, password);
      await clickBtn(await loginPage.submitButton);
      await navBar.leftNav_Admin();
      await admin.addUser(nameofuser, password);
      await browser.pause(2000);

      let ele = await $("//p[text()='Successfully Saved']");
      let ele2 = await ele.getText();
      console.log(ele2);

      // await admin.searchUser(nameofuser);
    });

    it("Searching User in Admin Tab ", async () => {
      await siteUrl.open("auth/login");
      await loginPage.login(username, password);
      await clickBtn(await loginPage.submitButton);
      await navBar.leftNav_Admin();
      await clickBtn(await loginPage.submitButton)
      await admin.searchUser(nameofuser);
    });

    it("Adding jobtitle in Admin Tab -job section", async () => {
      await siteUrl.open("auth/login");
      await loginPage.login(username, password);
      await navBar.leftNav_Admin();
      await browser.$("//span[text()='Job ']").click();

      await browser.$("//a[text()='Job Titles']").click();
      await browser.$("//button[text()=' Add ']").click();
      browser.pause(10000);
      await browser
        .$("//label[text()='Job Title']/../..//input")
        .waitForDisplayed({ timeout: 5000 });
      await browser
        .$("//label[text()='Job Title']/../..//input")
        .setValue("dev");
      browser.pause(10000);
      browser
        .$("//label[text()='Job Description']/../..//textarea")
        .waitForDisplayed({ timeout: 5000 });
      await browser
        .$("//label[text()='Job Description']/../..//textarea")
        .setValue("tester description");
      browser.pause(10000);
      //path = await $('//div[text()="Browse"]/../..//input');

      // browser.chooseFile('//div[text()="Browse"]/../..//input', '/input/png.png')
      (await browser.$('//textarea[@placeholder="Add note"]')).waitForDisplayed(
        { timeout: 5000 }
      );
      await (
        await browser.$('//textarea[@placeholder="Add note"]')
      ).setValue("write any notes");
      browser.pause(10000);
      await (await browser.$("//button[text()=' Save ']")).click();
      browser.pause(10000);

      // await admin.searchUser(nameofuser);
    });


  });



  //});
});
//});
//});
