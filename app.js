var express      = require('express')
  , app          = express()
  , path         = require('path')
  , mongoose     = require('mongoose')
  , logger       = require('morgan')
  , bodyParser   = require('body-parser')
  , cookieParser = require('cookie-parser');

// config
var configDB     = require('./config/database');
mongoose.connect(configDB.url);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded())
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')));

// assign routes
var routes   = require('./routes/index')
  , comments = require('./routes/comments');
app
  .use('/', routes)
  .use('/comments', comments);

module.exports = app;
