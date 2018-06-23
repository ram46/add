var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json())


var items = ['factorial', 'basic', 'power', 'log', 'sqrt']

var util = require('../helpers/math.js');
var parser = require('../helpers/parser.js');
 var db = require('../database/index.js');

app.get('/items', function (req, res) {
  res.end(JSON.stringify(items))
});

app.post('/basic', function(req, res){
  console.log('hit the endpoint', req.body.query)
  var result = calcBasic(req.body.query)
  res.end(JSON.stringify(result));
})

app.post('/factorial', function(req, res){
  console.log('hit the factorial endpoint', req.body.query)

  db.Add.findOne({mathFunc:'factorial', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result)
    } else {
      var result = calcFactorial(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

  // var result = calcFactorial(req.body.query)
  // res.end(JSON.stringify(result))
})

app.post('/power', function(req, res){
  console.log('hit the endpoint', req.body.query)
  var result = calcPower(req.body.query);
  res.end(JSON.stringify(result));
})

app.post('/log', function(req, res){
  console.log('hit the endpoint', req.body.query)
  var result = calcLog(req.body.query);
  res.end(JSON.stringify(result));
})

app.post('/sqrt', function(req, res){
  console.log('hit the endpoint', req.body.query)
  var result = calcSqrt(req.body.query);
  res.end(JSON.stringify(result));
})


app.get('/stats', function(req, res) {
  var result = calcStats()
  // debugger
  res.end(JSON.stringify(['basic', 'factorial', 'sqrt','log','power']))
})
// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});




var calcBasic = (query) => {
  [opA, operator, opB] = parser.basic(query);
  var result = util.basic([opA, operator, opB]);
  db.Add.create({mathFunc: 'basic', query:query, result:result})
  return result;
}

var calcFactorial = (query) => {
   var parsed = parser.factorial(query);
   var result = util.factorial(parsed);
   db.Add.create({mathFunc: 'factorial', query:query, result:result})
   return result;
}


var calcLog = (query) => {
  // var parsed = parser.log(query);
  // var n = parsed[0];
  // var base = parsed[1];
  [n, base] = parser.log(query)
  var result = util.log(n, base);
  db.Add.create({mathFunc: 'log', query:query, result:result})
  return result;
}

var calcPower = (query) => {
  // var n = parser.power(input)[0];
  // var exp = parser.power(input)[1];
  [n, exp] = parser.power(query)
  var result = util.power(n,exp);
  db.Add.create({mathFunc: 'power', query:query, result:result})
  return result;
}

var calcSqrt = (query) => {
  var parsed = parser.squareRoot(query);
  var result = util.squareRoot(parsed);
  db.Add.create({mathFunc: 'sqrt', query:query, result:result})
  return result;
}

var calcStats = () => {

}


