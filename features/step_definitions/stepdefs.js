const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const { isIsFridayYet } = require('../../api')

Given('today is Sunday', function () {
    this.today = 'sunday'
})

When('I ask whether it\'s Friday yet', function () {
    this.response = isIsFridayYet(this.today)
})

Then('I should be told {string}', function (string) {
    assert.equal(this.response, string)
})