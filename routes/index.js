var router = require('express').Router();
var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('index', {
    user: req.session.user
  });
});

router.get('/login', function(req, res) {
  res.render('login', {});
});

router.post('/login', function(req, res) {
  var phoneNumber = req.body.username;
  var password = req.body.password;
  User.checkLogin(phoneNumber, password, function(err, user) {
    if (user) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.end("Login failed.");
    }
  })
});

module.exports = router;