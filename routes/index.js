var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quiz = mongoose.model('Quiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//router.post('/signup', function (req, res) {
//  var abc = req.body.data;
//  console.log(abc);
//  res.send(true);
//  console.log("ok server");
//
//});

module.exports = router;
