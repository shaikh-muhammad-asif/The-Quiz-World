/**
 * Created by asif on 9/14/2015.
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quiz = mongoose.model('Quiz');
//var Report = mongoose.model('Report');
//router.get('/login', function (req, res) {
//
//});
var data = {admin:"asif@asif",pass:"admin"};
router.post('/', function (req, res) {
    if(data.admin == req.body.email && data.pass == req.body.password){
        res.send('admin');
    }else{
        User.findOne({email: req.body.email, password: req.body.password})
            .exec(function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    res.json(data);
                }

            });
    }

    //var x = req.body;
    //console.log(x);
    //res.send(x);

});
router.get('/abc', function (req, res) {
    res.send("Hello World")
});
module.exports = router;