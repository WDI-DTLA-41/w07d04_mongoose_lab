var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// /delete - deletes the specific entry selected

var UserData = require('../models/user.js');

router.delete('/', (req, res, next) => {
  var id = req.body.id;
  UserData.remove(
    {_id: id},
    (err, result) => {
      console.log(result);
    },
    res.redirect('/data')
  )
})

module.exports = router;
