// @ts-check
const { expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

class HomePage {
  constructor(page) {
    this.page = page;
    this.giveNowBtn = page
      .frameLocator("#XBGSFAMB")
      .getByTestId("donate-button-label");

    this.emailField = page.locator("input[data-qa='login-email']");
    this.password = page.locator("input[type='password']");
    this.clickLogin = page.locator("button[data-qa='login-button']");
    this.loginUserName = page.locator("//ul[@class='nav navbar-nav']//b[1]");
    this.logoutbtn = page.getByRole("link", { name: " Logout" });
    this.logo = page.locator("img[alt='Website for automation practice']");
  }
  async navigateToUrl(url) {
    await allure.step("Go to " + url, async () => {
      await this.page.goto(url);
    });
  }

  async clickGiveNowBtn() {
    await allure.step("Click Give Now", async () => {
      await this.giveNowBtn.click();
    });
  }

  // async validateLogo() { expect(await this.logo.screenshot()).toMatchSnapshot('test_practice_logo.png'); }

  // async waitForSomeTime(timeInSeconds) {
  //     console.log('Additional Wait for ' + timeInSeconds + ' seconds.');
  //     await new Promise(resolve => setTimeout(resolve, (timeInSeconds * 1000)));
  // }
}
module.exports = { HomePage };
