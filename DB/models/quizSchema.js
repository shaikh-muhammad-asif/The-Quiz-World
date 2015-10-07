/**
 * Created by asif on 9/14/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    Title : String,
    Course  : [{
        ques : String,
        opt  : [{op:String,value:String},
                {op:String,value:String},
                {op:String,value:String},
                {op:String,value:String}
        ]
    }]



});

var Quiz = mongoose.model('Quiz',QuizSchema);