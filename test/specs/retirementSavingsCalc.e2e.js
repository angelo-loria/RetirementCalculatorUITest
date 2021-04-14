/**
 * 04/14/2021 securian case study by Angelo Loria https://github.com/angelo-loria/SecurianCaseStudy
**/

const RetirementSavingsCalc = require('../pageobjects/retirementSavingsCalc.page');

var dataEnum = {
    CurrentAge: 40,
    RetirementAge: 48,
    CurrentAnnualIncome: 100000,
    SpouseAnnualIncome: 75000,
    CurrentRetirementSavings: 500000,
    CurrentRetirementContribution: 10,
    AnnualRetirementContribution: .25,
    SocialSecurityOverride: 4000,
    AdditionalOtherIncome: 500,
    RetirementDuration: 20,
    ExpectedInflationRate: 5,
    PercentFinalAnnualIncomeDesired: 75,
    PreRetirementInvestmentReturn: 8,
    PostRetirementInvestmentReturn: 5,
    ValueYes: 'Y',
    ValueNo: 'N',
    ValueSingle: 'S',
    ValueMarried: 'M'
};

describe('Retirement Savings Calculator', () => {
    it('should allow form submission with only required fields filled in', () => {
        // input fields
        RetirementSavingsCalc.open();

        RetirementSavingsCalc
            .inputCurrentAge
            .setValue(dataEnum.CurrentAge);

        RetirementSavingsCalc
            .inputRetirementAge
            .setValue(dataEnum.RetirementAge);

        RetirementSavingsCalc
            .inputCurrentAnnualIncome
            .setValue(dataEnum.CurrentAnnualIncome);

        RetirementSavingsCalc
            .inputCurrentTotalSavings
            .setValue(dataEnum.CurrentRetirementSavings);

        RetirementSavingsCalc
            .inputCurrentAnnualSavings
            .setValue(dataEnum.CurrentRetirementContribution);

        RetirementSavingsCalc
            .inputCurrentSavingsIncreaseRate
            .setValue(dataEnum.AnnualRetirementContribution);

        // calculate
        RetirementSavingsCalc.btnCalculate.click();

        // verify results container displayed
        expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
        expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
    });

    it('should allow form submission with all fields filled in', () => {
        RetirementSavingsCalc.open();

        // input fields
        RetirementSavingsCalc
            .inputCurrentAge
            .setValue(dataEnum.CurrentAge);

        RetirementSavingsCalc
            .inputRetirementAge
            .setValue(dataEnum.RetirementAge);

        RetirementSavingsCalc
            .inputCurrentAnnualIncome
            .setValue(dataEnum.CurrentAnnualIncome);

        RetirementSavingsCalc
            .inputSpouseAnnualIncome
            .setValue(dataEnum.SpouseAnnualIncome);

        RetirementSavingsCalc
            .inputCurrentTotalSavings
            .setValue(dataEnum.CurrentRetirementSavings);

        RetirementSavingsCalc
            .inputCurrentAnnualSavings
            .setValue(dataEnum.CurrentRetirementContribution);

        RetirementSavingsCalc
            .inputCurrentSavingsIncreaseRate
            .setValue(dataEnum.AnnualRetirementContribution);

        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, 
            dataEnum.ValueYes);

        expect(RetirementSavingsCalc.radioBtnsMaritalStatus).toBeDisplayed()
    
        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsMaritalStatus,
            dataEnum.ValueMarried);
    
        RetirementSavingsCalc.inputSocialSecurityOverride.waitForClickable();

        RetirementSavingsCalc
            .inputSocialSecurityOverride
            .setValue(dataEnum.SocialSecurityOverride)

        // calculate
        RetirementSavingsCalc.btnCalculate.click();

        // verify results container displayed
        expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
        expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
    });

    it('should display_hide additional Social Security fields based on Social Security benefits toggle', () => {
        RetirementSavingsCalc.open();
        
        // select yes to expand marital status option
        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, 
            dataEnum.ValueYes);

        expect(RetirementSavingsCalc.radioBtnsMaritalStatus).toBeDisplayed()

        // select no to hide marital status option
        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, 
            dataEnum.ValueNo);

        expect(RetirementSavingsCalc.radioBtnsMaritalStatus).not.toBeDisplayed()
    });

    it('should allow default values to be adjusted', () => {
        RetirementSavingsCalc.open();

        // open default values modal
        RetirementSavingsCalc.linkAdjustDefaultValues.click();
        
        // input fields on modal
        RetirementSavingsCalc.inputAdditionalIncome.waitForClickable();
        RetirementSavingsCalc
            .inputAdditionalIncome
            .setValue(dataEnum.AdditionalOtherIncome);
        
        RetirementSavingsCalc
            .inputRetirementDuration
            .setValue(dataEnum.RetirementDuration);

        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsInflationInclusion,
            dataEnum.ValueYes);
            
        RetirementSavingsCalc.inputExpectedInflationRate.waitForClickable();            
        RetirementSavingsCalc
            .inputExpectedInflationRate
            .setValue(dataEnum.ExpectedInflationRate);
        
        RetirementSavingsCalc
            .inputRetirementAnnualIncome
            .setValue(dataEnum.PercentFinalAnnualIncomeDesired);

        RetirementSavingsCalc
            .inputPreRetirementRoi
            .setValue(dataEnum.PreRetirementInvestmentReturn);

        RetirementSavingsCalc
            .inputPostRetirementRoi
            .setValue(dataEnum.PostRetirementInvestmentReturn);
        
        // save changes
        RetirementSavingsCalc.btnSaveChanges.click();

        // input fields
        RetirementSavingsCalc.open();

        RetirementSavingsCalc
            .inputCurrentAge
            .setValue(dataEnum.CurrentAge);

        RetirementSavingsCalc
            .inputRetirementAge
            .setValue(dataEnum.RetirementAge);

        RetirementSavingsCalc
            .inputCurrentAnnualIncome
            .setValue(dataEnum.CurrentAnnualIncome);

        RetirementSavingsCalc
            .inputCurrentTotalSavings
            .setValue(dataEnum.CurrentRetirementSavings);

        RetirementSavingsCalc
            .inputCurrentAnnualSavings
            .setValue(dataEnum.CurrentRetirementContribution);

        RetirementSavingsCalc
            .inputCurrentSavingsIncreaseRate
            .setValue(dataEnum.AnnualRetirementContribution);

        // calculate
        RetirementSavingsCalc.btnCalculate.click();

        // verify results container displayed
        expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
        expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
    });
});