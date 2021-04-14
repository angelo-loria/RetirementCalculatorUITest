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
        return browser.url(baseUrl + path);
    }

    /**
     * Selects a radio button from a group by its value attribute via browser.execute
     * @param radioGroup parent element containing radio buttons
     * @param value value attribute of radio button to select
     */
    selectRadioByValue(radioGroup, value) {
        radioGroup.forEach(element => {
            if(element.getValue() == value) {
                browser.execute('arguments[0].click();', element);
            }
        });
    }
}