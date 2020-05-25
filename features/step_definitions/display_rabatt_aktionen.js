const puppeteer = require('puppeteer')
const { Given, When, Then } = require('cucumber')
const assert = require('assert')

Given('we are on {string}', async function (url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    this.browser = browser
    this.page = page
})

Then('the websites states {string}', async function (expectedStatement) {
    const htmlHandle = await this.page.$("#rabattangebote")
    const result = await this.page.evaluate(element => element.innerHTML, htmlHandle)
    assert.equal(result, expectedStatement)

    await this.browser.close();
});

When('we have Rabattangebote', function () {
   return true
});

Then('there is a list', async function () {
    const htmlHandle = await this.page.$("#rabattangebote")
    const result = await this.page.evaluate(element => element.innerHTML, htmlHandle)

    const expected = '<ul><li><a href="/angebot1">Angebot 1</a></li><li><a href="/angebot2">Angebot 2</a></li></ul>';

    assert.equal(result, expected)

    await this.browser.close()
});
