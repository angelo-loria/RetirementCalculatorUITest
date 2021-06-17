/**
 * 04/14/2021 securian case study by Angelo Loria https://github.com/angelo-loria/SecurianCaseStudy
**/

const RetirementSavingsCalc = require('../pageobjects/retirementSavingsCalc.page');
const testData = require('../resources/retirementSavingsCalcData.json');

// var dataEnum = {
//     CurrentAge: 40,
//     RetirementAge: 48,
//     CurrentAnnualIncome: 100000,
//     SpouseAnnualIncome: 75000,
//     CurrentRetirementSavings: 500000,
//     CurrentRetirementContribution: 10,
//     AnnualRetirementContribution: .25,
//     SocialSecurityOverride: 4000,
//     AdditionalOtherIncome: 500,
//     RetirementDuration: 20,
//     ExpectedInflationRate: 5,
//     PercentFinalAnnualIncomeDesired: 75,
//     PreRetirementInvestmentReturn: 8,
//     PostRetirementInvestmentReturn: 5,
//     ValueYes: 'Y',
//     ValueNo: 'N',
//     ValueSingle: 'S',
//     ValueMarried: 'M'
// };

describe('Retirement Savings Calculator should calculate minimum required fields', () => {
    it('open retirement calculator', () => {
        RetirementSavingsCalc.open();
    });
    it('set current age', () =>  {
        RetirementSavingsCalc.inputCurrentAge.setValue(testData.CurrentAge);
    });
    it('set retirement age', () => {
        RetirementSavingsCalc.inputRetirementAge.setValue(testData.RetirementAge);
    });
    it('set current annual income', () => {
        RetirementSavingsCalc.inputCurrentAnnualIncome.setValue(testData.CurrentAnnualIncome);
    });
    it('set current retirement savings', () => {
        RetirementSavingsCalc.inputCurrentTotalSavings.setValue(testData.CurrentRetirementSavings);
    });
    it('set current annual savings', () => {
        RetirementSavingsCalc.inputCurrentAnnualSavings.setValue(testData.CurrentRetirementContribution);
    });
    it('set current savings increase rate', () => {
        RetirementSavingsCalc.inputCurrentSavingsIncreaseRate.setValue(testData.AnnualRetirementContribution);
    });
    it('click Calculate button', () => {
        RetirementSavingsCalc.btnCalculate.click();
    });
    it('verifies results container displayed', () => {
        expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
        expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
    });       
});

describe('Retirement Savings Calculator should display_hide additional SS fields based on SS benefits toggle', () => {
    it('open retirement calculator', () => {
        RetirementSavingsCalc.open();
    });  
    it('SS benefits toggle', () => {
    RetirementSavingsCalc.selectRadioByValue(
        RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, testData.ValueYes);
    });
    it('verify display additional SS fields', () => {
        expect(RetirementSavingsCalc.radioBtnsMaritalStatus).toBeDisplayed()
    });
    it('SS benefits toggle', () => {
        RetirementSavingsCalc.selectRadioByValue(
            RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, testData.ValueNo);
    });
    it('verify not display additional SS fields', () => {
        expect(RetirementSavingsCalc.radioBtnsMaritalStatus).not.toBeDisplayed()
    });
});

//     it('should allow form submission with all fields filled in', () => {
//         RetirementSavingsCalc.open();

//         // input fields
//         RetirementSavingsCalc
//             .inputCurrentAge
//             .setValue(dataEnum.CurrentAge);

//         RetirementSavingsCalc
//             .inputRetirementAge
//             .setValue(dataEnum.RetirementAge);

//         RetirementSavingsCalc
//             .inputCurrentAnnualIncome
//             .setValue(dataEnum.CurrentAnnualIncome);

//         RetirementSavingsCalc
//             .inputSpouseAnnualIncome
//             .setValue(dataEnum.SpouseAnnualIncome);

//         RetirementSavingsCalc
//             .inputCurrentTotalSavings
//             .setValue(dataEnum.CurrentRetirementSavings);

//         RetirementSavingsCalc
//             .inputCurrentAnnualSavings
//             .setValue(dataEnum.CurrentRetirementContribution);

//         RetirementSavingsCalc
//             .inputCurrentSavingsIncreaseRate
//             .setValue(dataEnum.AnnualRetirementContribution);

//         RetirementSavingsCalc.selectRadioByValue(
//             RetirementSavingsCalc.radioBtnsSocialSecurityBenefits, 
//             dataEnum.ValueYes);

//         expect(RetirementSavingsCalc.radioBtnsMaritalStatus).toBeDisplayed()
    
//         RetirementSavingsCalc.selectRadioByValue(
//             RetirementSavingsCalc.radioBtnsMaritalStatus,
//             dataEnum.ValueMarried);
    
//         RetirementSavingsCalc.inputSocialSecurityOverride.waitForClickable();

//         RetirementSavingsCalc
//             .inputSocialSecurityOverride
//             .setValue(dataEnum.SocialSecurityOverride)

//         // calculate
//         RetirementSavingsCalc.btnCalculate.click();

//         // verify results container displayed
//         expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
//         expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
//     });



//     it('should allow default values to be adjusted', () => {
//         RetirementSavingsCalc.open();

//         // open default values modal
//         RetirementSavingsCalc.linkAdjustDefaultValues.click();
        
//         // input fields on modal
//         RetirementSavingsCalc.inputAdditionalIncome.waitForClickable();
//         RetirementSavingsCalc
//             .inputAdditionalIncome
//             .setValue(dataEnum.AdditionalOtherIncome);
        
//         RetirementSavingsCalc
//             .inputRetirementDuration
//             .setValue(dataEnum.RetirementDuration);

//         RetirementSavingsCalc.selectRadioByValue(
//             RetirementSavingsCalc.radioBtnsInflationInclusion,
//             dataEnum.ValueYes);
            
//         RetirementSavingsCalc.inputExpectedInflationRate.waitForClickable();            
//         RetirementSavingsCalc
//             .inputExpectedInflationRate
//             .setValue(dataEnum.ExpectedInflationRate);
        
//         RetirementSavingsCalc
//             .inputRetirementAnnualIncome
//             .setValue(dataEnum.PercentFinalAnnualIncomeDesired);

//         RetirementSavingsCalc
//             .inputPreRetirementRoi
//             .setValue(dataEnum.PreRetirementInvestmentReturn);

//         RetirementSavingsCalc
//             .inputPostRetirementRoi
//             .setValue(dataEnum.PostRetirementInvestmentReturn);
        
//         // save changes
//         RetirementSavingsCalc.btnSaveChanges.click();

//         // input fields
//         RetirementSavingsCalc.open();

//         RetirementSavingsCalc
//             .inputCurrentAge
//             .setValue(dataEnum.CurrentAge);

//         RetirementSavingsCalc
//             .inputRetirementAge
//             .setValue(dataEnum.RetirementAge);

//         RetirementSavingsCalc
//             .inputCurrentAnnualIncome
//             .setValue(dataEnum.CurrentAnnualIncome);

//         RetirementSavingsCalc
//             .inputCurrentTotalSavings
//             .setValue(dataEnum.CurrentRetirementSavings);

//         RetirementSavingsCalc
//             .inputCurrentAnnualSavings
//             .setValue(dataEnum.CurrentRetirementContribution);

//         RetirementSavingsCalc
//             .inputCurrentSavingsIncreaseRate
//             .setValue(dataEnum.AnnualRetirementContribution);

//         // calculate
//         RetirementSavingsCalc.btnCalculate.click();

//         // verify results container displayed
//         expect(RetirementSavingsCalc.containerCalculatorResults).toBeDisplayed();
//         expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed();
//     });
// });