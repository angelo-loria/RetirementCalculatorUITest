import AxeBuilder from '@axe-core/webdriverjs'
import AxeCore from 'axe-core'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page, appended to baseUrl 'https://www.securian.com'
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path: string): Promise<void> {
        await browser.url(browser.config.baseUrl + path)
    }

    /**
     * Runs axe accessibility audit
     * @returns AxeCore.AxeResults results of AxeBuilder analysis
     */
    async axeAudit(): Promise<AxeCore.AxeResults>{
        const client: WebdriverIO.Browser = browser
        const builder: AxeBuilder = new AxeBuilder(browser).withTags(['wcag21aa'])

        return builder.analyze()

        // return await builder.analyze((err, results) => {
        //     if (err) {
        //       console.log(err)
        //     }
        //     console.log(results);
        // })
    }
}