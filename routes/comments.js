var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/user.js');

router.post('/view/:postID', (req, res, next) => {
  var id = req.params.postID;
  UserData.findById(id, (err, data) =>{
    // console.log(data.comments);
    var comments = data.comments;
    console.log(comments);
    res.render('comments', {comments: comments})
  })
})

router.post('/:postID', (req, res, next) => {
  var id = req.params.postID;
  var comment = req.body.comment;
  console.log(comment);
  UserData.findById(id, (err, data) => {
    console.log(data);
    // console.log(data.comments);
    data.comments.push(
      {
        content: comment
      }
    )
    console.log(data);
    data.save();
  })
  res.redirect('/data');
  // res.redirect('/data');
})

module.exports = router;
