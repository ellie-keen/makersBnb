module.exports = {
  'Demo test MakersBnB' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'Hello, MakersBnB!')
      .end()
  }
}
