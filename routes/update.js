var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/user.js');

// /update - updates the specific entry selected

router.post('/', (req, res, next) => {
  var updatePost = {
    content: req.body.content,
    author: req.body.author
  }
  var id = req.body.id;

  UserData.update(
    {_id: id},
    {
      $set: updatePost
    }, (err, result) => {
      console.log(result);
    }
  )
  res.redirect('/data');
})

module.exports = router;
