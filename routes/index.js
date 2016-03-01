var express = require('express');
var http = require('http');
var https = require('https');

var router = express.Router();

/* GET home page. */
router.get('/:user', function(req, res, next) {

  res.render('index', { title: req.params.user });

});

module.exports = router;
