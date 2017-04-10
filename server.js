var express    = require('express'),
	mongoose   = require('mongoose'),
	ejs        = require('ejs'),
	bodyParser = require('body-parser'),
	path       = require('path'),
	favicon	   = require('serve-favicon'),
	routes     = require('./app/routes.js');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(path.join(__dirname, '/public/img/favicon.ico')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);


app.listen(8000, function(){
	console.log("Server listening on http://localhost:8000/");
});