const  clickBtn  = require("../utility/commonFn");

describe("window handles",()=>{
 
    it("open another window",async()=>{
       await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
       await browser.maximizeWindow();
       let parentWindow = await browser.getWindowHandle();
       await browser.pause(5000);
       await browser.$('#openwindow').click();
       await browser.pause(5000);
       let window= await browser.getWindowHandles()
       //await browser.switchToWindow(window);
       for(let i=0; i<window.length; i++){
        if(window[i]!=parentWindow){
            await browser.switchToWindow(window[i]);
            await browser.maximizeWindow();
            break;
        }
    }
        (await browser.$("//a[text()='Videos']")).click();
        await browser.pause(5000);
   
        await browser.switchToWindow(parentWindow);
        await browser.pause(5000);
       })

       it("open another window",async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow();
        await (await browser.$('#opentab')).click();
        await  browser.switchWindow("AutomationPractice/");
        await browser.pause(5000);
         let url =await browser.getUrl();
         console.log(url);
         await  browser.switchWindow("https://www.rahulshettyacademy.com/");
         await browser.pause(5000);

       })
       it.only("Alerts Handling",async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow();
       await (await browser.$('#name')).setValue('Jhon');
       await (await browser.$('#alertbtn')).click();
       await browser.pause(5000);
       // Dismiss Alert
       await browser.getAlertText();
       await browser.acceptAlert();
        // Accept Alert
       await browser.pause(5000);
       await (await browser.$('#name')).setValue('Jhon');
       await (await browser.$('#confirmbtn')).click();
       await browser.pause(5000);
       await browser.getAlertText();
       await browser.dismissAlert();

       })

   
});


