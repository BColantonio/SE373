var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'form' });
});



module.exports = router;


/**
 * Module dependencies.
 */