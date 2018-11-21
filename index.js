const puppeteer = require('puppeteer');
const login = require('./app/login');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800
  })

  function handleClose(msg) {
    console.log(msg);
    // page.close();
    // browser.close();
    // process.exit(1);
  }

  process.on("uncaughtException", () => {
    handleClose(`I crashed`);
  });

  process.on("unhandledRejection", (e) => {
    handleClose('I was rejected' + e);
  });

  login.login(page);

})();