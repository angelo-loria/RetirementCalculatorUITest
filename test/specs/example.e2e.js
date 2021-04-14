const RetirementSavingsCalculator = require('../pageobjects/retirementSavingsCalculator.page');
// const SecurePage = require('../pageobjects/secure.page');

var fieldDataEnum = {
    CurrentAge: 40,
    RetirementAge: 48,
    CurrentAnnualIncome: 100000,
    SpouseAnnualIncome: 75000,
    CurrentRetirementSavings: 500000,
    CurrentRetirementContribution: 10,
    AnnualRetirementContribution: .25,
    RelationshipStatus: 'Married',
    SocialSecurityOverride: 4000,
    AdditionalOtherIncome: 500,
    NumberYearsRetirement: 20,
    PostRetirementIncomeIncrease: 'Yes',
    PercentFinalAnnualIncomeDesired: 75,
    PreRetirementInvestmentReturn: 8,
    PostRetirementInvestmentReturn: 5,
    ValueYes: 'Y',
    ValueNo: 'N'
};

describe('Retirement Savings Calculator', () => {
    it('should allow form submission with all required fields filled in', () => {
        RetirementSavingsCalculator.open();
        RetirementSavingsCalculator
            .inputCurrentAge
            .setValue(fieldDataEnum.CurrentAge);
        RetirementSavingsCalculator
            .inputRetirementAge
            .setValue(fieldDataEnum.RetirementAge);
        RetirementSavingsCalculator
            .inputCurrentAnnualIncome
            .setValue(fieldDataEnum.CurrentAnnualIncome);
        RetirementSavingsCalculator
            .inputSpouseAnnualIncome
            .setValue(fieldDataEnum.SpouseAnnualIncome);
        RetirementSavingsCalculator
            .inputCurrentTotalSavings
            .setValue(fieldDataEnum.CurrentRetirementSavings);
        RetirementSavingsCalculator
            .inputCurrentAnnualSavings
            .setValue(fieldDataEnum.CurrentRetirementContribution);
        RetirementSavingsCalculator
            .inputCurrentSavingsIncreaseRate
            .setValue(fieldDataEnum.AnnualRetirementContribution);

        RetirementSavingsCalculator.selectBoolByValue(
                RetirementSavingsCalculator.socialSecurityBenefitsRadioBtns, 
                fieldDataEnum.ValueYes);

        

        browser.debug();

        // browser.debug();
        // LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


