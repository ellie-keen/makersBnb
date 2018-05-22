module.exports = {
  'Demo test MakersBnB' : function (client) {
    client
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Hello, MakersBnB!')
      .end()
  }
}
