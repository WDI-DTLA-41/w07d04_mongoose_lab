var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'userdata'});

var UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
