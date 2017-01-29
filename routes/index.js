var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

// Schema to enter information on main page
var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
},
  {collection: 'userdata'});

var UserData = mongoose.model('UserData', userDataSchema);

// Schema to gather information
var collectDataSchema = new Schema({

  title: {type: String, required: true},
  content: String,
  author: String
},
  {collection: 'collectdata'});


var CollectData = mongoose.model('CollectData', collectDataSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  // using mongoose here
  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
    .then(function(doc) {
      res.render('index', {items: doc});
    });
});

module.exports = router;
