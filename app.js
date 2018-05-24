var express = require('express');
var session = require('express-session');
var flash = require('connect-flash');
var app = express();
var spacesDB = require('./server/models').spaces;
var bodyParser = require('body-parser')
var spacetitle = ''
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var collection = [];
app.set('view engine', 'ejs');
// adds all spaces in the collection variable
spacesDB.findAll( {}
).then(function(spaces){
  spaces.forEach(function(space){
  collection.push({id: space.get('id'), title: space.get('title'), description: space.get('description'), nightPrice: space.get('nightPrice')})
  })
})

//Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//Connect flash
app.use(flash());

//Global vars


app.get('/', function(req, res){
  res.render('index');
});

app.get('/listings/view', function(req, res){
  res.render('listings');
});

app.get('/listings/add', function(req, res){
  res.render('addlisting', {flash: {add: req.flash('add')}});
  console.log(req.flash('add'))
});

app.post('/listings/add', function(req, res){
  spacesDB.create({ title: req.body.title, description: req.body.description, nightPrice: req.body.price})
  req.flash('add', 'Listing added!')
  res.redirect('/listings/add')
});

app.listen(3000, function(){
  console.log('MakersBnB up and running on port 3000')
});
