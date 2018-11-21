const linkedin = require('../constants/linkedin');

(function () {
  async function login(page) {
    var linkedinConstants = linkedin.getLinkedinConstants();
    await page.goto(linkedinConstants.linkedin_homepage, {
        waitUntil: 'networkidle0'
      }),
      await page.waitForSelector(linkedinConstants.usernamekey);
    await page.focus(linkedinConstants.usernamekey);
    await page.keyboard.type(linkedinConstants.linkedin_username);
    await page.waitForSelector(linkedinConstants.passwordkey);
    await page.focus(linkedinConstants.passwordkey);
    await page.keyboard.type(linkedinConstants.linkedin_password);
    await Promise.all([
      page.click(linkedinConstants.signinkey)
    ]);
    // await page.screenshot({
    //   path: 'linkedin.png',
    //   fullPage: true
    // });
  };
  module.exports = {
    login: login
  };
})();