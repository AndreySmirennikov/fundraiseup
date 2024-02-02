// @ts-check
const { test, expect } = require('@playwright/test');
const { name } = require('../playwright.config');
const { HomePage } = require('../pages/HomePage');
const { testConfig } = require('../testconfig');
const { currencies } = require('../testData/currencies');
const { ccData } = require('../testData/creditCardData');
const { personalData } = require('../testData/personalData');
const { textConstants } = require('../testData/textConstants');
const { DonationPage } = require('../pages/DonationPage');
const { allure } = require("allure-playwright");


test.beforeEach(async ({ page }, testInfo) => {
  const homePage = new HomePage(page);
  await homePage.navigateToUrl(testConfig.qa)
  await homePage.clickGiveNowBtn()
});

test('creditCardDeclinedTest1', async ({ page }) => {
  const donationPage = new DonationPage(page);
  const donationAmount = '100'

  await donationPage.selectMonthlyPayment()
  await donationPage.selectCurrency(currencies.usd)
  await donationPage.checkCurrency(currencies.usd)
  await donationPage.fillAmount(donationAmount)
  await donationPage.clickDonateBtn()

  await donationPage.clickCoverFeeCheckBox()
  await donationPage.checkCoverFeeCheckBoxIsUnchecked()
  await donationPage.clickCreditCard()

  await donationPage.fillCreditCard(ccData.cardNumber, ccData.expDate , ccData.cvc)
  await donationPage.clickCreditCardContinue()

  await donationPage.fillFirstName(personalData.firstName)
  await donationPage.fillLastName(personalData.lastName)
  await donationPage.fillEmail(personalData.email)
  await donationPage.clickPrivacyContinueBtn()

  await donationPage.checkErorrTitle(textConstants.ccErrorTitle)
  await donationPage.checkErorrMsg(textConstants.ccErrorMsg)
});

test('creditCardDeclinedTest2', async ({ page }) => {
  const donationPage = new DonationPage(page);
  const donationAmount = '100'

  await donationPage.selectMonthlyPayment()
  await donationPage.selectCurrency(currencies.usd)
  await donationPage.checkCurrency(currencies.usd)
  await donationPage.fillAmount(donationAmount)
  await donationPage.clickDonateBtn()

  await donationPage.clickCoverFeeCheckBox()
  await donationPage.checkCoverFeeCheckBoxIsUnchecked()
  await donationPage.clickCreditCard()

  await donationPage.fillCreditCard(ccData.cardNumber, ccData.expDate , ccData.cvc)
  await donationPage.clickCreditCardContinue()

  await donationPage.fillFirstName(personalData.firstName)
  await donationPage.fillLastName(personalData.lastName)
  await donationPage.fillEmail(personalData.email)
  await donationPage.clickPrivacyContinueBtn()

  await donationPage.checkErorrTitle(textConstants.ccErrorTitle)
  await donationPage.checkErorrMsg(textConstants.ccErrorMsg)
});
