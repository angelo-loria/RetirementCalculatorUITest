const Page = require('./page');

class RetirementSavingsCalc extends Page {
    /**
     * define selectors using getter methods, 
     * these are evaluated when you access the property
     */
    get btnCalculate () { return $('=Calculate') }
    get inputCurrentAge () { return $('#current-age') }
    get inputRetirementAge () { return $('#retirement-age') }
    get inputCurrentAnnualIncome () { return $('#current-income') }
    get inputSpouseAnnualIncome () { return $('#spouse-income') }
    get inputCurrentTotalSavings () { return $('#current-total-savings') }
    get inputCurrentAnnualSavings () { return $('#current-annual-savings') }
    get inputCurrentSavingsIncreaseRate () { return $('#savings-increase-rate') }
    get inputSocialSecurityOverride() { return $('#social-security-override') }
    get linkAdjustDefaultValues () { return $('=Adjust default values') }
    get radioBtnsSocialSecurityBenefits () { return $$('[name="social-security-benefits"]') }
    get radioBtnsMaritalStatus () { return $$('[name="marital-status"]') }

    // adjust default values modal
    // TODO: modal page object
    get inputAdditionalIncome () { return $('#additional-income') };
    get inputRetirementDuration () { return $('#retirement-duration') };
    get inputExpectedInflationRate () { return $('#expected-inflation-rate' ) };
    get inputRetirementAnnualIncome () { return $('#retirement-annual-income') };
    get inputPreRetirementRoi () { return $('#pre-retirement-roi') };
    get inputPostRetirementRoi () { return $('#post-retirement-roi') };
    get modalDefaultValues () { return $('#default-values-modal')};
    get radioBtnsInflationInclusion () { return $$('[name="inflation-inclusion"') };
    get btnSaveChanges () { return $('[value="Save changes"]') };

    // results display
    // TODO: results page object
    get containerCalculatorResults() { return $('#calculator-results-container') };

    open () {
        return super.open('/insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementSavingsCalc();