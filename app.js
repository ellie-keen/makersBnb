var express = require('express');
var app = express();
var spacesDB = require('./server/models').spaces;
var collection = [];
app.set('view engine', 'ejs');
// adds all spaces in the collection variable
spacesDB.findAll( {}
).then(function(spaces){
  spaces.forEach(function(space){
  collection.push({id: space.get('id'), title: space.get('title'), description: space.get('description'), nightPrice: space.get('nightPrice')})
  })
})

// create method for form if needed
// spacesDB.create({ title: 'ellie space', description: 'very nice', nightPrice: '4'})


app.get('/', function(req, res){
  res.render('index');
});

app.get('/listings/view', function(req, res){
  res.render('listings');
});

app.get('listings/add', function(req, res){
  res.render('addlisting');
});

app.post('listings/add', function(req, res){
  res.redirect('listings/add')
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
