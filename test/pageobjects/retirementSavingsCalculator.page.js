const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementSavingsCalculator extends Page {
    /**
     * define selectors using getter methods, 
     * these are evaluated when you access the property
     */
    get inputCurrentAge () { return $('#current-age') }
    get inputRetirementAge () { return $('#retirement-age') }
    get inputCurrentAnnualIncome () { return $('#current-income') }
    get inputSpouseAnnualIncome () { return $('#spouse-income') }
    get inputCurrentTotalSavings () { return $('#current-total-savings') }
    get inputCurrentAnnualSavings () { return $('#current-annual-savings') }
    get inputCurrentSavingsIncreaseRate () { return $('#savings-increase-rate') }
    get socialSecurityBenefitsRadioBtns () { return $$('[name="social-security-benefits"]')}
    get maritalStatusRadioBtns () { return $$('[name="marital-status"]')}
    get btnCalculate () { return $('=Calculate') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/insights-tools/retirement-calculator.html')
    }
}

module.exports = new RetirementSavingsCalculator();