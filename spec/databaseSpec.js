describe('database', function() {
  var database
  beforeEach(function () {
     database = new Database();
  });

  it('has an empty array', function(){
    expect(database.collection).toEqual([])
  });

  it('adds a hash to the array', function(){
    database.pull
    expect(database.collection.length).toEqual(1)
  });

});
