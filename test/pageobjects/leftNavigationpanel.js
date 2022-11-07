
class leftNavigationpanel{

    get Admintab(){
        return $("//span[text()='Admin']");
    }
    get PIMtab(){
        return $("//span[text()='PIM']");
    }
    

    async leftNav_Admin(){
        await this.Admintab.waitForDisplayed({timeout:10000});
        await this.Admintab.click();
    }

    async leftNav_PIM(){
        await this.PIMtab.waitForDisplayed({timeout:10000});
        await this.PIMtab.click();
    }

}
module.exports =new leftNavigationpanel();