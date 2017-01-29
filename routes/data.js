var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('localhost:27017/w7d4crudlab');

// mongoose.Promise = global.Promise;

var UserData = require('../models/user.js');

// /data- gets all the data

router.get('/', (req, res, next) => {
  UserData.find({})
  .then( data => {
    res.render('data', {items: data});
  })
})

module.exports = router;
