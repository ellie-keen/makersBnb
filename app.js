var express = require('express');
var app = express();
var spacesDB = require('./server/models').spaces;

app.set('view engine', 'ejs');
// var title;
//
// spacesDB.findAll( {}
// ).then(function(spaces){
//   spaces.forEach(function(space){
//   title = space.get('title'))
//   })
// })

app.get('/', function(req, res){
  res.render('index');
});

app.get('/listings', function(req, res){
  res.render('listings');
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
