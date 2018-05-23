// module.exports = {
//   'Demo test Google' : function (client) {
//     client
//       .url('https://www.google.co.uk/')
//       .waitForElementVisible('body', 1000000)
//       .assert.title('Google')
//       .assert.visible('#lst-ib')
//       .setValue('#lst-ib', 'Wikipedia')
//       .waitForElementVisible('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)', 10000)
//       .click('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')
//       .pause(1000)
//       .assert.containsText('#rso > div:nth-child(1) > div > div > div > div > h3 > a', 'Wikipedia')
//       .end()
//   }
// }
