const { expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

class DonationPage {
  constructor(page) {
    this.page = page;
    const donationFrame = page.frameLocator("#__checkout2");

    this.giveNowBtn = page
      .frameLocator("#XBGSFAMB")
      .getByTestId("donate-button-label");
    this.monthlyDonationBtn = donationFrame.getByTestId("more-frequent-button");
    this.currencySelector = donationFrame.getByTestId("currency-selector");
    this.amountFld = donationFrame.getByTestId("amount");
    this.donateBtn = donationFrame.getByTestId("donate-button");
    this.coverFeeCheckbox = donationFrame.getByTestId("cover-fee-checkbox");
    this.credictCardBtn = donationFrame.getByTestId("cc-button");
    this.cardNumber = donationFrame
      .frameLocator('iframe[title*="card number"]')
      .locator("[name=cardnumber]");
    this.expDate = donationFrame
      .frameLocator("iframe[title*='expiration date']")
      .locator("[name=exp-date]");
    this.cvc = donationFrame
      .frameLocator("iframe[title*='CVC input']")
      .locator("[name=cvc]");
    this.cardContinueBtn = donationFrame.getByTestId("card-continue");
    this.firstName = donationFrame.getByTestId("personal-first-name");
    this.lastName = donationFrame.getByTestId("personal-last-name");
    this.email = donationFrame.getByTestId("personal-email");
    this.privacyContinueBtn = donationFrame.getByTestId("privacy-continue");
    this.creditCardTitle = donationFrame.locator(
      "[data-qa=active-screen-credit-card] h2",
    );
    this.errorTitle = donationFrame.getByTestId("card-continue-error-title");
    this.errorMsg = donationFrame.getByTestId("card-continue-error-message");
  }

  async navigateToUrl(url) {
    await this.page.goto(url);
  }

  async clickGiveNowBtn() {
    await this.giveNowBtn.click();
  }

  async selectMonthlyPayment() {
    await allure.step("Select Monthly donation", async () => {
      await this.monthlyDonationBtn.click();
    });
  }

  async selectCurrency(currency) {
    await allure.step("Select currency", async () => {
      await this.currencySelector.selectOption(currency);
    });
  }

  async checkCurrency(currency) {
    await allure.step("Check currency selected is " + currency, async () => {
      await expect(this.currencySelector).toHaveValue(currency);
    });
  }

  async fillAmount(amount) {
    await allure.step("Fill amount field", async () => {
      await this.amountFld.fill(amount);
    });
  }

  async clickDonateBtn() {
    await allure.step("Click donate btn", async () => {
      await this.donateBtn.click();
    });
  }

  async clickCoverFeeCheckBox() {
    await allure.step("Click cover Fee Checkbox", async () => {
      await this.coverFeeCheckbox.click();
    });
  }

  async checkCoverFeeCheckBoxIsUnchecked() {
    await allure.step("Check Fee Checkbox is unchecked", async () => {
      await expect(await this.coverFeeCheckbox.isChecked()).toBeFalsy();
    });
  }

  async clickCreditCard() {
    await allure.step("Click credit card", async () => {
      await this.credictCardBtn.click();
    });
  }

  async fillCreditCard(cardNumber_, expDate_, cvc_) {
    await allure.step("Fill credit card data", async () => {
      await this.cardNumber.fill(cardNumber_);
      await this.expDate.fill(expDate_);
      await this.cvc.fill(cvc_);
    });
  }

  async clickCreditCardContinue() {
    await allure.step("Click credit card continue btn", async () => {
      await this.cardContinueBtn.click();
    });
  }

  async fillFirstName(firstName_) {
    await allure.step("Fill first name", async () => {
      await this.firstName.fill(firstName_);
    });
  }

  async fillLastName(lastNameName_) {
    await allure.step("Fill last name", async () => {
      await this.lastName.fill(lastNameName_);
    });
  }

  async fillEmail(email_) {
    await allure.step("Fill email", async () => {
      await this.email.fill(email_);
    });
  }

  async clickPrivacyContinueBtn() {
    await allure.step(
      "Click continue after fill out personal data",
      async () => {
        await this.privacyContinueBtn.click();
      },
    );
  }

  async checkErorrTitle(title) {
    await allure.step("Check error title", async () => {
      await expect(this.errorTitle).toHaveText(title);
    });
  }

  async checkErorrMsg(msg) {
    await allure.step("Check error msg", async () => {
      await expect(this.errorMsg).toHaveText(msg);
    });
  }
}
module.exports = { DonationPage };
