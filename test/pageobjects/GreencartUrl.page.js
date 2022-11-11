module.exports = class GCUrlPage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://rahulshettyacademy.com/seleniumPractise/${path}`)
    }
}