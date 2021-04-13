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
    get btnCalculate () { return $('=Calculate') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        // this.inputUsername.setValue(username);
        // this.inputPassword.setValue(password);
        // this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementSavingsCalculator();
