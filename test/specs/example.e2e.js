const RetirementSavingsCalculator = require('../pageobjects/retirementSavingsCalculator.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('Retirement Savings Calculator', () => {
    it('allows submit form with all required fields filled in', () => {
        RetirementSavingsCalculator.open();        
        RetirementSavingsCalculator.inputCurrentAge("30");
        browser.debug();
        // LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


