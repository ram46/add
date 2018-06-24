var db = require('../database/index.js');
var util = require('../helpers/math.js');
var parser = require('../helpers/parser.js');

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


var updateStats = (doc) => {
  var newCount = doc.count + 1;
  db.Add.remove({mathFunc:doc.mathFunc, query:doc.query, result: doc.result}, function (err) {})
  db.Add.create({mathFunc:doc.mathFunc, query:doc.query, result: doc.result, count: newCount})
}


var aggregator = (field, cb) => {

  return new Promise((resolve, reject) => {

    db.Add.find({mathFunc:field}, function(err, result){
    if (err) {
      reject(err)
    }
      var counter = [field, 0];
      if (result && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          counter[1] += result[i].count;
        }
      }
      resolve(counter)
    })
  })
}


module.exports = {
    calcBasic: calcBasic,
    calcFactorial: calcFactorial,
    calcLog: calcLog,
    calcSqrt: calcSqrt,
    calcPower: calcPower,
    aggregator: aggregator,
    updateStats: updateStats
}


