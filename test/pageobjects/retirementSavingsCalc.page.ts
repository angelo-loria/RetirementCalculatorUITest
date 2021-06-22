const Page = require('./page');

class RetirementSavingsCalc extends Page {
    /**
     * define selectors using getter methods, 
     * these are evaluated when you access the property
     */
    get btnCalculate (): Promise<WebdriverIO.Element> { return $('[data-tag-id=submit]')}
    get inputCurrentAge (): Promise<WebdriverIO.Element> { return $('#current-age') }
    get inputRetirementAge (): Promise<WebdriverIO.Element> { return $('#retirement-age') }
    get inputCurrentAnnualIncome (): Promise<WebdriverIO.Element> { return $('#current-income') }
    get inputSpouseAnnualIncome (): Promise<WebdriverIO.Element> { return $('#spouse-income') }
    get inputCurrentTotalSavings (): Promise<WebdriverIO.Element> { return $('#current-total-savings') }
    get inputCurrentAnnualSavings (): Promise<WebdriverIO.Element> { return $('#current-annual-savings') }
    get inputCurrentSavingsIncreaseRate (): Promise<WebdriverIO.Element> { return $('#savings-increase-rate') }
    get inputSocialSecurityOverride (): Promise<WebdriverIO.Element> { return $('#social-security-override') }
    get linkAdjustDefaultValues (): Promise<WebdriverIO.Element> { return $('=Adjust default values') }
    get radioBtnGroupMaritalStatus (): Promise<WebdriverIO.Element> { return $('#marital-status-toggle-group') }
    get radioBtnNoSocialBenefits (): Promise<WebdriverIO.Element> { return $('#no-social-benefits')}
    get radioBtnYesSocialBenefits (): Promise<WebdriverIO.Element> { return $('#yes-social-benefits')}

    // adjust default values modal
    // TODO: modal page object
    get inputAdditionalIncome (): Promise<WebdriverIO.Element> { return $('#additional-income') };
    get inputRetirementDuration (): Promise<WebdriverIO.Element> { return $('#retirement-duration') };
    get inputExpectedInflationRate (): Promise<WebdriverIO.Element> { return $('#expected-inflation-rate' ) };
    get inputRetirementAnnualIncome (): Promise<WebdriverIO.Element> { return $('#retirement-annual-income') };
    get inputPreRetirementRoi (): Promise<WebdriverIO.Element> { return $('#pre-retirement-roi') };
    get inputPostRetirementRoi (): Promise<WebdriverIO.Element> { return $('#post-retirement-roi') };
    get modalDefaultValues (): Promise<WebdriverIO.Element> { return $('#default-values-modal')};
    get btnSaveChanges (): Promise<WebdriverIO.Element> { return $('[value="Save changes"]') };

    // results display
    // TODO: results page object
    get containerCalculatorResults (): Promise<WebdriverIO.Element> { return $('#calculator-results-container') };
    get imageResultsChart (): Promise<WebdriverIO.Element> { return $('#results-chart') };

    async open (): Promise<void> {
        return await super.open('/insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementSavingsCalc();