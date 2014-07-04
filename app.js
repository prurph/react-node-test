var express      = require('express')
  , app          = express()
  , path         = require('path')
  , logger       = require('morgan')
  , bodyParser   = require('body-parser')
  , cookieParser = require('cookie-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use('/', routes);

module.exports = app;
