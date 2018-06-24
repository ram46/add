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

  db.Add.findOne({mathFunc:'basic', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result)
    } else {
      var result = calcBasic(req.body.query)
    }
    res.end(JSON.stringify(result))
  })
})

app.post('/factorial', function(req, res){
  console.log('hit the factorial endpoint', req.body.query)

  db.Add.findOne({mathFunc:'factorial', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result);
      updateStats(d);
    } else {
      var result = calcFactorial(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

})

app.post('/power', function(req, res){
  console.log('hit the endpoint', req.body.query)

  db.Add.findOne({mathFunc:'power', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result)
    } else {
      var result = calcPower(req.body.query)
    }
    res.end(JSON.stringify(result))
  })


  // var result = calcPower(req.body.query);
  // res.end(JSON.stringify(result));
})

app.post('/log', function(req, res){
  console.log('hit the endpoint', req.body.query)


  db.Add.findOne({mathFunc:'log', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result)
    } else {
      var result = calcLog(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

  // var result = calcLog(req.body.query);
  // res.end(JSON.stringify(result));
})

app.post('/sqrt', function(req, res){
  console.log('hit the endpoint', req.body.query)



  db.Add.findOne({mathFunc:'sqrt', query:req.body.query}).then((d) => {
    if (d) {
      var result = parseInt(d.result)

    } else {
      var result = calcSqrt(req.body.query)
    }
    res.end(JSON.stringify(result))
  })

  // var result = calcSqrt(req.body.query);
  // res.end(JSON.stringify(result));
})


app.get('/stats', function(req, res) {

  var stats = []

  // db.Add.find({mathFunc:'factorial'}, function(err, result){
  //   console.log('IN stats route now', result.length)
  //   var counter = ['factorial', 0];
  //   for (var i = 0; i < result.length; i++) {
  //     console.log(result[i].count)
  //     counter[1] += result[i].count;
  //   }
  //   console.log(counter)

  // aggregator('factorial', (r) => {
  //   stats.push(r)
  //   // console.log('sdasasa', r)
  // })
  // res.send(stats)



  // aggregator('factorial')
  // .then((factorialCount) => {
  //   console.log('hererererererer', factorialCount)
  //   stats.push(factorialCount);
  // })


  Promise.all([aggregator('factorial'), aggregator('basic'), aggregator('power'), aggregator('log'), aggregator('sqrt')]).then(function(stats) {
        console.log(stats)
        res.send(stats)
    })
  })


app.listen(3000, function() {
  console.log('listening on port 3000!');
});


var calcBasic = (query) => {
  [opA, operator, opB] = parser.basic(query);
  var result = util.basic([opA, operator, opB]);
  db.Add.create({mathFunc: 'basic', query:query, result:result, count:1})
  return result;
}

var calcFactorial = (query) => {
   var parsed = parser.factorial(query);
   var result = util.factorial(parsed);
   db.Add.create({mathFunc: 'factorial', query:query, result:result, count:1})
   return result;
}


var calcLog = (query) => {
  [n, base] = parser.log(query)
  var result = util.log(n, base);
  db.Add.create({mathFunc: 'log', query:query, result:result, count:1})
  return result;
}

var calcPower = (query) => {
  [n, exp] = parser.power(query)
  var result = util.power(n,exp);
  db.Add.create({mathFunc: 'power', query:query, result:result, count:1})
  return result;
}

var calcSqrt = (query) => {
  var parsed = parser.squareRoot(query);
  var result = util.squareRoot(parsed);
  db.Add.create({mathFunc: 'sqrt', query:query, result:result, count:1})
  return result;
}


function updateStats(doc) {
  var newCount = doc.count + 1;
  db.Add.remove({mathFunc:doc.mathFunc, query:doc.query, result: doc.result}, function (err) {})
  db.Add.create({mathFunc:doc.mathFunc, query:doc.query, result: doc.result, count: newCount})
}


function aggregator(field, cb) {

  // db.Add.find({mathFunc:field}, function(err, result){
  //   if (err) {
  //     console.log(err)
  //   }

  //   if (result && result.length > 0) {
  //     var counter = [field, 0];
  //     for (var i = 0; i < result.length; i++) {
  //       console.log(result[i].count)
  //       counter[1] += result[i].count;
  //     }
  //     cb(counter)
  //   }
  // })

  return new Promise((resolve, reject) => {

    db.Add.find({mathFunc:field}, function(err, result){
    if (err) {
      reject(err)
    }
      var counter = [field, 0];
      if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          // console.log(result[i].count)
          counter[1] += result[i].count;
        }
      }
      resolve(counter)
    })
  })
}

  // return counter

  // db.Add.find({mathFunc:field}, function(err, result){
  //   if (err) {
  //     console.log(err)
  //   }

  //   if (result && result.length > 0) {
  //     var counter = [field, 0];
  //     for (var i = 0; i < result.length; i++) {
  //       console.log(result[i].count)
  //       counter[1] += result[i].count;
  //     }
  //     cb(counter)
  //   }
  // })
// }
