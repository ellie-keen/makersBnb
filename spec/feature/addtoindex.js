module.exports = {
  'return to index from add page' : function (client) {
    client
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'BaconBnB')
      .waitForElementVisible('#addListings', 5000)
      .click('#addListings')
      .pause(1000)
      .assert.containsText('body', 'Add a listing')
      .click('#backHome')
      .pause(1000)
      .assert.containsText('body', 'BaconBnB')
      .end()
  }
}
