var express = require('express')
  , router  = express.Router()
  , Comment = require('../models/comment');

router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    res.json({ comments : comments });
  });
});

router.post('/', function(req, res){
  var newComment = new Comment();
  newComment.author = req.body.author;
  newComment.text   = req.body.text;

  newComment.save(function(err) {
    if (err)
      throw new Error(err);
    Comment.find({}, function(err, comments) {
      res.json({ comments : comments });
    });
  });
});

module.exports = router;
