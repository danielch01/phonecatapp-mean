var express = require('express');
var router = express.Router();

var Phones = require('./models/phones.model.js')

router.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

router.get('/api/phones', function(req, res){
	Phones.find({}, function(err, doc){
		if(err) console.log(err);
		res.json(doc);
	});
	return;
});

module.exports = router;