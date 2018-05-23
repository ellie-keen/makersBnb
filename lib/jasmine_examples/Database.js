function Database(){
  this.data = require('../../server/models').spaces
  this.collection = [];
}
Database.prototype.pull = function(){
  this.data.findAll( {}
  ).then(function(spaces){
    spaces.forEach(function(space){
    this.collection.push("hi")
    })
  })
};

module.exports = Database;
