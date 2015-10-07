/**
 * Created by asif on 9/14/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://mongoose leb');
var db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1/test');
db.on('connected',function(){
    console.log('Connect Mongo DB');
});
db.on('error',function(){
    console.log('Error Mongo DB');
});
db.on('disconnected',function(){
    console.log('Disconnected Mongo DB');
});