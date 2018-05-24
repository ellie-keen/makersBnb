module.exports = {
'Test listings page' : function (client) {
  client
    .url("http://localhost:3000/listings/view")
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', 'MakersBnB Listings!')
    .assert.containsText('body', 'Ellie\'s space')
    .assert.containsText('body', 'Charly\'s space')
    .assert.containsText('body', 'A small hole in the ground')
    .end()
  }
}
