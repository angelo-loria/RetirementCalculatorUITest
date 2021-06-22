/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page, appended to baseUrl 'https://www.securian.com'
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path: string): Promise<String> {
        return await browser.url(browser.config.baseUrl + path)
    }
}