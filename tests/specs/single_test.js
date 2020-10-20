const assert = require('assert');

describe('Google Search Function', () => {
  it('can find search results', () => {
   // browser.url('https://www.aajtak.in/');
    //waitforTimeout: 10000,
    browser.url('https://www.rbauction.com/');
    const input = $("#signInBtn");
    input.click();

    const title = browser.getTitle();
    //assert.equal(title, 'Google');
    //browser.url('https://www.aajtak.in/');
    // browser.url('http://localhost.lambdatest.com/');
  });
});
