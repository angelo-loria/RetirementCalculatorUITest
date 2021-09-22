import RetirementSavingsCalc from '../pageObjects/retirementSavingsCalc.page'
import * as testData from '../resources/retirementSavingsCalcData.json'
import { AxeResults } from 'axe-core'

describe('Retirement Savings Calculator should calculate minimum required fields', () => {
    it('open retirement calculator', async () => {
        await RetirementSavingsCalc.open()
    })
    it('set current age', async () =>  {
        await RetirementSavingsCalc.inputCurrentAge.setValue(testData.CurrentAge)
    })
    it('set retirement age', async () => {
        await RetirementSavingsCalc.inputRetirementAge.setValue(testData.RetirementAge)
    })
    it('set current annual income', async () => {
        await RetirementSavingsCalc.inputCurrentAnnualIncome.setValue(testData.CurrentAnnualIncome)
    })
    it('set current retirement savings', async () => {
        await RetirementSavingsCalc.inputCurrentTotalSavings.setValue(testData.CurrentRetirementSavings)
    })
    it('set current annual savings', async () => {
        await RetirementSavingsCalc.inputCurrentAnnualSavings.setValue(testData.CurrentRetirementContribution)
    })
    it('set current savings increase rate', async () => {
        await RetirementSavingsCalc.inputCurrentSavingsIncreaseRate.setValue(testData.AnnualRetirementContribution)
    })
    it('click Calculate button', async () => {
        await RetirementSavingsCalc.btnCalculate.click()
    })
    it('verifies results container displayed', async () => {
        await expect(RetirementSavingsCalc.imageResultsChart).toBeDisplayed()
    })
    it('executes accessibiilty audit', async () => {
        const results: AxeResults = await RetirementSavingsCalc.axeAudit()
        expect(results.violations.length).toBeLessThanOrEqual(3)
    })
})

describe('Retirement Savings Calculator should display_hide additional SS fields based on SS benefits toggle', () => {
    it('open retirement calculator', async () => {
        await RetirementSavingsCalc.open()
    })
    it('SS benefits toggle yes', async () => {
        browser.execute('arguments[0].click();', await RetirementSavingsCalc.radioBtnYesSocialBenefits)
    })
    it('verify display additional SS fields', async () => {
        await expectAsync(RetirementSavingsCalc.radioBtnGroupMaritalStatus).toBeDisplayed()
    })
    it('SS benefits toggle no', async () => {
        browser.execute('arguments[0].click();', await RetirementSavingsCalc.radioBtnNoSocialBenefits)
        })
    it('verify not display additional SS fields', async () => {
        await expectAsync(RetirementSavingsCalc.radioBtnGroupMaritalStatus).not.toBeDisplayed() 
    })
})