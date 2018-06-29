var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var helper = require('../helpers/calc.js');
var request = require('request')

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json())


var SERVER_PORT =  process.env.PORT || 3000;


app.listen(SERVER_PORT, function() {
  console.log(`listening on port ${SERVER_PORT}!`);
});


// ##########

app.get('/login', function(req, res) {
  res.redirect('https://github.com/login/oauth/authorize?client_id=1a87845988b42de82d4c&redirect_uri=https://mvpadd.herokuapp.com/auth');
})


app.get('/auth', function(req, res) {
  console.log('HELLLOOOO', req.query.code)
  var code = req.query.code;

  request.post({url:'https://github.com/login/oauth/access_token', cliend_id: '1a87845988b42de82d4c', client_secret:process.env.client_secret_oath, code:code}, function(e, r, body) {
      console.log(body)
      res.end('posted')
  })


  // app.post('https://github.com/login/oauth/access_token',function(req, res) {
  //   res.send({ code: code , client_id: '1a87845988b42de82d4c'});
  // })
})



// ###########


var items = ['factorial', 'basic', 'power', 'log', 'sqrt']

app.get('/items', function (req, res) {
  res.end(JSON.stringify(items))
});


app.post('/basic', function(req, res){

  db.Add.findOne({mathFunc:'basic', query:req.body.query}).then((d) => {
    if (d) {
      var result = Number(d.result);
      helper.updateStats(d);
    } else {
      var result = helper.calcBasic(req.body.query)
    }
    res.end(JSON.stringify(result))
  })
})

app.post('/factorial', function(req, res){

  db.Add.findOne({mathFunc:'factorial', query:req.body.query}).then((d) => {
    if (d) {
      var result = Number(d.result);
      helper.updateStats(d);
    } else {
      var result = helper.calcFactorial(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

})

app.post('/power', function(req, res){

  db.Add.findOne({mathFunc:'power', query:req.body.query}).then((d) => {
    if (d) {
      var result = Number(d.result)
      helper.updateStats(d)
    } else {
      var result = helper.calcPower(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

})

app.post('/log', function(req, res){

  db.Add.findOne({mathFunc:'log', query:req.body.query}).then((d) => {
    if (d) {
      var result = Number(d.result);
      helper.updateStats(d);
    } else {
      var result = helper.calcLog(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

})

app.post('/sqrt', function(req, res){

  db.Add.findOne({mathFunc:'sqrt', query:req.body.query}).then((d) => {
    if (d) {
      var result = Number(d.result)
      helper.updateStats(d)
    } else {
      var result = helper.calcSqrt(req.body.query)
    }
    res.end(JSON.stringify(result))
  })
})


app.get('/stats', function(req, res) {

  var stats = []
  Promise.all([helper.aggregator('factorial'), helper.aggregator('basic'), helper.aggregator('power'), helper.aggregator('log'), helper.aggregator('sqrt')])
  .then(function(stats) {
        res.send(stats)
    })
  .catch(function(reason) {
      console.log(reason)
    })
  })

