module.exports = {
'Test return home from listings page' : function (client) {
  client
    .url("http://localhost:3000/listings/view")
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', 'GET A LOAD OF THAT BACON')
    .waitForElementVisible('#returnHome', 5000)
    .click('#returnHome')
    .pause(1000)
    .assert.containsText('body', 'BaconBnB')
    .end()
  }
}
