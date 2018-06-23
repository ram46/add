var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/add');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// creating schema
var addSchema = mongoose.Schema({
  mathFunc: String,
  query: String,
  result: String,
})


// Creating a model out of schema
var Add = mongoose.model('Add', addSchema)


module.exports.Add = Add