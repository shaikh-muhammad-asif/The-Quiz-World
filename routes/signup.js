/**
 * Created by asif on 9/14/2015.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quiz = mongoose.model('Quiz');

router.get('/', function(req, res) {
    User.find(function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(data);
        }
    })
});

router.post('/', function (req, res) {
   var abc = req.body.name;
    console.log(abc);
    //res.send(abc);
    console.log("ok server ok");

    var user = new User({
        email   : req.body.email,
        password: req.body.password,
        name    : req.body.name
    });
    user.save(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log(data);
            console.log("server data");
        }
    })
});
module.exports = router;