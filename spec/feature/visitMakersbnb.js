module.exports = {
  'Demo test MakersBnB' : function (client) {
    client
      .url("http://localhost:3000/")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'Hello, MakersBnB!')
      .assert.visible('body', 'View Listings')
      // .waitForElementVisible('button[name=View Listings]', 1000)
      // .click('button[name=View Listings]')
      // .pause(1000)
      // .assert.containsText('body', 'MakersBnB Listings!')
      .end()
  }
}
