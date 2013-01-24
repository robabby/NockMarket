var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "admin";
var password = "admin";
var address = '@ds037827.mongolab.com:37827/nockmarket';
connect();

// Connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}