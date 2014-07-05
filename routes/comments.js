var express = require('express')
  , router  = express.Router()
  , Comment = require('../models/comment');

var returnComments = function(res) {
  Comment.find({}, function(err, comments) {
    if (err)
      throw new Error(err);
    res.json(200, { comments : comments });
  });
};

router.get('/', function(req, res) {
  returnComments(res);
});

router.post('/', function(req, res){
  var newComment = new Comment();
  newComment.author = req.body.author;
  newComment.text   = req.body.text;

  newComment.save(function(err) {
    if (err)
      res.send(500, err);
    // TODO: just update the collection if success instead of returning whole thing
    returnComments(res);
  });
});

router.route('/:comment_id')
  .delete(function(req, res) {
    Comment.remove({
      _id : req.params.comment_id
    }, function(err, comment) {
      if (err)
        res.send(500, err);
      // TODO: just update the collection if success instead of returning whole thing
      returnComments(res);
    });
  });

module.exports = router;
