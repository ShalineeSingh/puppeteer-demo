(function () {
  async function takeSS(page) {
    await page.goto('https://example.com');
    await page.screenshot({
      path: 'example.png'
    });
  };
  module.exports = {
    takeSS: takeSS
  };
})();