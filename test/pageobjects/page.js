/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page, appended to baseUrl 'https://www.securian.com'
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(baseUrl + path)
    }

    selectBoolByValue(boolGroup, value) {
        boolGroup.forEach(element => {
            if(element.getValue() == value) {
                browser.execute('arguments[0].click();', element);
            }
        });
    }
}