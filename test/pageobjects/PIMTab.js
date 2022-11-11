class PIMTab {

    get configDd() {
        return $("//span[text()='Configuration ']");
    }
    get Dataimport() {
        return $("//a[text()='Data Import']");
    }
    get uploadbtn() {
        return $("//button[text()=' Upload ']");
    }
    async dataImportTab() {
        await this.configDd.click();
        await this.Dataimport.click();


    }

}

module.exports = new PIMTab();