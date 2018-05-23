describe('database', function() {
  var Database = require('../../lib/jasmine_examples/Database.js');
  var database
  beforeEach(function () {
     database = new Database();
  });

  it('has an empty array', function(){
    expect(database.collection).toEqual([])
  });

  it('adds a hash to the array', function(){
    database.pull()
    console.log(database.collection)
    expect(database.collection.length).toEqual(1)
  });

});
