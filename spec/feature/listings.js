module.exports = {
'Test listings page' : function (client) {
  client
    .url("http://localhost:3000/listings")
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', 'MakersBnB Listings!')
    .end()
  }
}
