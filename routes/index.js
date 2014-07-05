var express = require('express')
  , router  = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title : 'React Test'
  });
});

router.get('/comments', function(req, res) {
  res.json({ comments: [
      {'author': 'Bilinda', 'text': 'Show me all your favorite things.'},
      {'author': 'Prescott', 'text': 'Show me all *yours* too?'}
    ]
  });
});

module.exports = router;
