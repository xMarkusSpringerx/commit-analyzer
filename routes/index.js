var express = require('express');
var http = require('http');
var GitHubApi = require("github");

var router = express.Router();

/* GET home page. */
router.get('/:user', function(req, res, next) {
  var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    timeout: 5000,
    headers: {
      "user-agent": "Commit-Analyzer" // GitHub is happy with a unique user agent
    }
  });

  var result;
  github.events.getFromUser({
    user: req.params.user
  }, function(err, res) {
    result = res;
  });


  res.render('user', {user:res});

});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('default')
});

module.exports = router;
