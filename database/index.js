var mongoose = require('mongoose');

//mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`);

// mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`);

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