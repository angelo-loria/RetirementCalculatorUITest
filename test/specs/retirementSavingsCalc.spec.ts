/**
 * 04/14/2021 securian case study by Angelo Loria https://github.com/angelo-loria/SecurianCaseStudy
**/

const RetirementSavingsCalc = require('../pageobjects/retirementSavingsCalc.page');
import * as testData from '../resources/retirementSavingsCalcData.json';

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