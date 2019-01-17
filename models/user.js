let mongoose = require('mongoose');

let schema = mongoose.Schema;
let userschema = new schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true}
});

module.exports = mongoose.model('Users', userschema);
