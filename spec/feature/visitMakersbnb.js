module.exports = {
  'Demo test MakersBnB' : function (client) {
    client
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'Hello, MakersBnB!')
      .waitForElementVisible('body > a', 1000)
      .click('body > a')
      .pause(1000)
      .assert.containsText('body', 'MakersBnB Listings!')
      .end()
  }
}
