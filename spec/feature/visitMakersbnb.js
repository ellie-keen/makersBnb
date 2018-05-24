module.exports = {
  'Demo test MakersBnB' : function (client) {
    client
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'Hello, MakersBnB!')
      .waitForElementVisible('#viewListings', 5000)
      .click('#viewListings')
      .pause(1000)
      .assert.containsText('body', 'MakersBnB Listings!')
      .end()
  }
}
