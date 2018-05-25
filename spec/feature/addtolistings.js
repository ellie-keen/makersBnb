module.exports = {
  'go to listings from add page' : function (client) {
    client
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'BaconBnB')
      .waitForElementVisible('#addListings', 5000)
      .click('#addListings')
      .pause(1000)
      .assert.containsText('body', 'Add a Rasher')
      .click('#toListings')
      .pause(1000)
      .assert.containsText('body', 'MakersBnB Listings!')
      .end()
  }
}
