import Page from './page';
import { ChainablePromiseElement } from 'webdriverio'

class RetirementSavingsCalc extends Page {
    // const calcUrl: string = '/insights-tools/retirement-calculator.html'

    /**
     * define selectors using getter methods, 
     * these are evaluated when you access the property
     */
    get btnCalculate (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('[data-tag-id=submit]')}
    get inputCurrentAge (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#current-age') }
    get inputRetirementAge (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#retirement-age') }
    get inputCurrentAnnualIncome (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#current-income') }
    get inputSpouseAnnualIncome (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#spouse-income') }
    get inputCurrentTotalSavings (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#current-total-savings') }
    get inputCurrentAnnualSavings (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#current-annual-savings') }
    get inputCurrentSavingsIncreaseRate (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#savings-increase-rate') }
    get inputSocialSecurityOverride (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#social-security-override') }
    get linkAdjustDefaultValues (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('=Adjust default values') }
    get radioBtnGroupMaritalStatus (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#marital-status-toggle-group') }
    get radioBtnNoSocialBenefits (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#no-social-benefits') }
    get radioBtnYesSocialBenefits (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#yes-social-benefits') }

    // adjust default values modal
    get inputAdditionalIncome (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#additional-income') }
    get inputRetirementDuration (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#retirement-duration') }
    get inputExpectedInflationRate (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#expected-inflation-rate' ) }
    get inputRetirementAnnualIncome (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#retirement-annual-income') }
    get inputPreRetirementRoi (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#pre-retirement-roi') }
    get inputPostRetirementRoi (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#post-retirement-roi') }
    get modalDefaultValues (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#default-values-modal') }
    get btnSaveChanges (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('[value="Save changes"]') }

    // results display
    get containerCalculatorResults (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#calculator-results-container') }
    get imageResultsChart (): ChainablePromiseElement<Promise<WebDriverIO.Element>> { return $('#results-chart') }

    async open (): Promise<void> {
        var caclUrl: string = '/insights-tools/retirement-calculator.html'
        await super.open(caclUrl)
    }
}

export default new RetirementSavingsCalc()