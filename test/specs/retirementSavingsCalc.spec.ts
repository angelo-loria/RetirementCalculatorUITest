import RetirementSavingsCalc from '../pageobjects/retirementSavingsCalc.page'
import * as testData from '../resources/retirementSavingsCalcData.json'

describe('Retirement Savings Calculator should calculate minimum required fields', () => {
    it('open retirement calculator', async () => {
        await RetirementSavingsCalc.open()
    })
    it('set current age', async () =>  {
        const input = await RetirementSavingsCalc.inputCurrentAge
        await input.setValue(testData.CurrentAge)
    })
    it('set retirement age', async () => {
        const input = await RetirementSavingsCalc.inputRetirementAge
        await input.setValue(testData.RetirementAge)
    })
    it('set current annual income', async () => {
        const input = await RetirementSavingsCalc.inputCurrentAnnualIncome
        await input.setValue(testData.CurrentAnnualIncome)
    })
    it('set current retirement savings', async () => {
        const input = await RetirementSavingsCalc.inputCurrentTotalSavings
        await input.setValue(testData.CurrentRetirementSavings)
    })
    it('set current annual savings', async () => {
        const input = await RetirementSavingsCalc.inputCurrentAnnualSavings
        await input.setValue(testData.CurrentRetirementContribution)
    })
    it('set current savings increase rate', async () => {
        const input = await RetirementSavingsCalc.inputCurrentSavingsIncreaseRate
        await input.setValue(testData.AnnualRetirementContribution)
    })
    it('click Calculate button', async () => {
        const btn = await RetirementSavingsCalc.btnCalculate
        await btn.click()
    })
    it('verifies results container displayed', async () => {
        const calcResults = await RetirementSavingsCalc.imageResultsChart
        await expectAsync(calcResults).toBeDisplayed()
    })
})

describe('Retirement Savings Calculator should display_hide additional SS fields based on SS benefits toggle', () => {
    it('open retirement calculator', async () => {
        await RetirementSavingsCalc.open()
    })
    it('SS benefits toggle yes', async () => {
        const btn = await RetirementSavingsCalc.radioBtnYesSocialBenefits
        browser.execute('arguments[0].click();', btn)
    })
    it('verify display additional SS fields', async () => {
        const maritalStatus = await RetirementSavingsCalc.radioBtnGroupMaritalStatus
        await expectAsync(maritalStatus).toBeDisplayed()
    })
    it('SS benefits toggle no', async () => {
        const btn = await RetirementSavingsCalc.radioBtnNoSocialBenefits
        browser.execute('arguments[0].click();', btn)
        })
    it('verify not display additional SS fields', async () => {
        const maritalStatus = await RetirementSavingsCalc.radioBtnGroupMaritalStatus
        await expectAsync(maritalStatus).not.toBeDisplayed() 
    })
})