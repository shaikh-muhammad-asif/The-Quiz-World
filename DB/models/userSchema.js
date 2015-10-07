/**
 * Created by asif on 9/14/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

   var UserSchema = new Schema({
       name     : String,
       email    : {type : String, unique : true},
       password : {type : String, select : false},
       results  : [{course : String, date :{type :Date,default: Date.now}, default: []}]
       //date: { type: Date, default:  }
   });

var User = mongoose.model('User',UserSchema);