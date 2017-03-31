var express    = require('express'),
	mongoose   = require('mongoose'),
	ejs        = require('ejs'),
	bodyParser = require('body-parser'),
	path       = require('path'),
	Schema     = mongoose.Schema;

var app = express();

mongoose.connect('mongodb://localhost/test');

var schema = new Schema({
	age: Number,
	id: String,
	imageUrl: String,
	name: String,
	snippet: String
}, {collection: 'phones'});

var Phones = mongoose.model('Phones', schema);

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app
.get('/', function(req, res){
	res.render('index', {
		title: "Welcome to the Phone Store"
	});
})
.get('/api/phones', function(req, res){
	Phones.find({}, function(err, doc){
		if(err) console.log(err);
		res.json(doc);
	});
	return;
});

app.listen(8000, function(){
	console.log("Server listening on http://localhost:8000/");
});