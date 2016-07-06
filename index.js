var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_sample',
});

app.set('view engine', 'pug');
app.set('views', './views');

app.locals.basedir = ( __dirname + '/views/' );
// app.locals.basedir2 = ( __dirname + '/views/' );

app.use(express.static('assets'));

// app.use(express.static('files'));

// app.use = ('/style' __dirname + '/views/' );
// app.use = ( __dirname + '/views/' );

// respond with "hello world" when a GET request is made to the homepage
app.get('/:var(|country)?', function(req, res) {
	connection.query('SELECT * FROM countries', function(err, rows, fields){
		console.log(rows);
		res.render('index', { debug:true, pageTitle: 'Hey', message: 'Hello there!', rows: rows});
    });
  
  // res.send('hello world');
});

app.get('/country/edit/(:num)', function(req, res) {
  res.render('index', { pageTitle: 'Hey', message: 'Hello there!'});
});

app.get('/city/add', function(req, res) {
  res.send('hello world');
});

app.listen(3000);