var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello, MakersBnB!');
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
