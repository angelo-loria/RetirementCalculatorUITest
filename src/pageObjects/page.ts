import { AxeResults } from 'axe-core'
import AxeBuilder from '@axe-core/webdriverio'

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
     * Runs accessibility audit on page
     * See https://www.deque.com/axe/core-documentation/api-documentation/#api-notes 
     * @returns Promise<AxeResults>
     */
    async axeAudit (): Promise<AxeResults> {
        const client = browser
        const builder = new AxeBuilder({ client }).withTags('wcag2a');
        return builder.analyze()
    }
}