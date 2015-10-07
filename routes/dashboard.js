/**
 * Created by asif on 9/14/2015.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quiz = mongoose.model('Quiz');

router.get('/addCourse', function(req, res) {
    Quiz.find(function(err,data){
        if(err){
            console.log(err);
        }else{
            res.json(data);
        }
    })
});

router.post('/addCourse', function (req, res) {
    var data = req.body;
    var quiz = new Quiz({
        Title  : data.name,
        Course : [{
            ques : data.ques,
            opt  : [{op:data.opt[0].q1,value:data.opt[0].value1},
                    {op:data.opt[1].q2,value:data.opt[1].value2},
                    {op:data.opt[2].q3,value:data.opt[2].value3},
                    {op:data.opt[3].q4,value:data.opt[3].value4}
            ]
        }]
    });
    quiz.save(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
            console.log(data);
            console.log(" quiz server data");
            console.log(data.Course[0].opt);
        }
    });
});

router.post('/addQuiz', function (req, res) {
    var x = req.body._id;
    console.log(x);
    var data = req.body;
    //res.send(x);
    Quiz.findByIdAndUpdate(
        x,
        { $push: {"Course":
            {
                ques : data.ques,
                opt  : [{op:data.opt[0].q1,value:data.opt[0].value1},
                        {op:data.opt[1].q2,value:data.opt[1].value2},
                        {op:data.opt[2].q3,value:data.opt[2].value3},
                        {op:data.opt[3].q4,value:data.opt[3].value4}
            ]}
        }},
        {  safe: true, upsert: true, new : true},
        function(err, data) {
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.send(data);
            }
        });

});

router.post('/delete_C',function(req, res){
    var c = req.body;
    console.log(c);
    Quiz.findByIdAndRemove(c, function(err, data) {
        if(err){
            console.log(err);
        }else{
            console.log('User deleted!');
            console.log(data);
            res.send(true);
        }
    });
});
router.post('/delete_Q',function(req, res){
    var article_id = req.body._id;
    var x = req.body._id1;
    console.log(x);
    console.log(article_id);
    Quiz.findByIdAndUpdate(
        article_id,
        { $pull: { "Course":{_id:x } } },function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.send(true)
            }

        });
    //Quiz.findByIdAndRemove(x, function(err, data) {
    //    if(err){
    //        console.log(err);
    //    }else{
    //        console.log('quiz deleted!');
    //        console.log(data);
    //        res.send(true);
    //    }
    //});

});
module.exports = router;