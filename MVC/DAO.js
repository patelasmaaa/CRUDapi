let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true}
});

module.exports = mongoose.model('Users', userSchema);
