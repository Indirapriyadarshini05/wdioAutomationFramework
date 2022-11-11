const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
const { Veggies } = require('../pageobjects/Gcmain.Page');
const GC = require('../pageobjects/Gcmain.Page');
const { setvalueTextbox, clickBtn } = require('../utility/commonFn');
require('../utility/commonFn')

describe("Green Cart", () => {

    it("Validating URL and Title", async () => {
        await GC.open();
        let url = await browser.getUrl();
        console.log(url);
        await expect(url).toEqual("https://rahulshettyacademy.com/seleniumPractise/#/");
        let title = await browser.getTitle()
        console.log(title);
        await expect(title).toEqual("GreenKart - veg and fruits kart");
        await expect(browser).toHaveTitleContaining('GreenKart - veg and fruits kart')

    })

    it.only("verify url", async () => {
        await GC.open();
        await setvalueTextbox(await GC.Searchpath, 'To');
        await Veggies('Tomato - 1 Kg');
        await Veggies('Potato - 1 Kg');
        await clickBtn(await GC.Cart);
        await browser.pause(5000);
    //    let itemText= await GC.items.getText();
    //    let itemNumber =await GC.itemnum.getText();
    //    let itemsValue=console.log(itemText+":"+itemNumber);
    //     await expect(itemsValue).toEqual('Items:2');
    //     // let priceNumber =await GC.pricenum.getText();
        // let priceText =await GC.price.getText();
        // let PriceValue=console.log(priceText+":"+priceNumber);
        // await expect(PriceValue).toEqual('Price:38');

    })

})