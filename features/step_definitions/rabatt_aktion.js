const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const { weHaveRabattAngebote } = require('../../api')

Given('we do not have a Rabatt Aktion', function () {
    this.isRabattAktion = "no";
});

When('we ask if we have a Rabatt Aktion', function () {
    this.answer = weHaveRabattAngebote("no");
});

Then('we are told {string}', function (expectedResult) {
    assert.equal(this.answer, expectedResult);
});
