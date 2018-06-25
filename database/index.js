
var mongoose = require('mongoose');

try {
  var config = require('../config.js')
}

catch(e) {
  var config = {
    DBHOST: process.env.DBHOST,
    DBUSER: process.env.DBUSER,
    DBPASS: process.env.DBPASS,
    DBPORT: process.env.DBPORT,
    DBNAME: process.env.DBNAME
  }
}


// mongoose.connect(`mongodb://${config.DBHOST}/${config.DBPORT}`);

// mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`);

mongoose.connect(`mongodb://${config.DBUSER}:${config.DBPASS}@${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// creating schema
var addSchema = mongoose.Schema({
  mathFunc: String,
  query: String,
  result: String,
  count: Number
})


// Creating a model out of schema
var Add = mongoose.model('Add', addSchema)


module.exports.Add = Add