var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: String
});

var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String,
  comments: [commentSchema]
  }, {collection: 'userdata'});

var UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
