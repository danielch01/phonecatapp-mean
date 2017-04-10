var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var schema = new Schema({
	age: Number,
	id: String,
	imageUrl: String,
	name: String,
	snippet: String
}, {collection: 'phones'});

module.exports = mongoose.model('Phones', schema);