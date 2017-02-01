var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/w7d4crudlab');

mongoose.Promise = global.Promise;

var UserData = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

// /comments - gets all the comments for a specific entry
// /comments/:addcomment - adds a comment to a specific entry

module.exports = router;
