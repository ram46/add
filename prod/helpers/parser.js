
var power = function(str) {
  var result = str.split('^');
  var num = parseInt(result[0]);
  var exp = parseInt(result[1]);
  return [num, exp]
}

var log = function(str) {
  var parsed = str.split('b');
  var n = parsed[0];
  var base = parsed[1];
  return [n, base];
}

var factorial = function(str) {
  return parseInt(str)
}

var squareRoot = function(str) {
  return parseInt(str)
}


var basic = function(str){
  var pattern = /(\d+)(.)(\d+)/
  var res = pattern.exec(str)
  var operA = parseInt(res[1])
  var operand = res[2]
  var operB = parseInt(res[3])
  return [operA, operand, operB]
}



module.exports = {
  power: power,
  basic: basic,
  log: log,
  factorial: factorial,
  squareRoot: squareRoot
}