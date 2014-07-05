var express = require('express')
  , router  = express.Router()
  , Comment = require('../models/comment');

router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    res.json({ comments : comments });
  });
});

module.exports = router;
