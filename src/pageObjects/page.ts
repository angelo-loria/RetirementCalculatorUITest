/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page, appended to baseUrl 'https://www.securian.com'
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path: string): Promise<void> {
        await browser.url(browser.config.baseUrl + path)
    }
}