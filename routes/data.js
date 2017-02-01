var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/user.js');

// gets all data
router.get('/', (req, res, next) => {
  UserData.find({})
  .then( data => {
    res.render('data', { items: data } );
  })
})

module.exports = router;
