var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserAgent = require('user-agents');
const userAgent = new UserAgent();

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
	userAgent: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;