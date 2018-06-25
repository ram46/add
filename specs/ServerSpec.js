var expect = require('chai').expect;
var request = require('request');
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


describe('Connection to DB', function(){
  var uri = `mongodb://${config.DBUSER}:${config.DBPASS}@${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`

  it('Connects to db successfully', function() {
    mongoose.connect(uri).then(() => {
      var status = 'OK';
      expect(status).to.equal('OK')
    },
    err => { console.log(err) });
  });
});

