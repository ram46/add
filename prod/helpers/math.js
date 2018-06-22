
var squareRoot = function(n) {
  return Math.sqrt(n);
}


var power = function(n, exp) {
  return Math.pow(n, exp);
}

var log = function(n, base) {
  return base ? Math.log(n) / Math.log(base) : Math.log(n)
}


var factorial = function(n) {
  if (n <= 1) return 1
  return n * factorial(n-1);
}

var basic = function(arr) {
  if (arr[1] === '+') return arr[0] + arr[2];
  if (arr[1] === '-') return arr[0] - arr[2];
  if (arr[1] === '*') return arr[0] * arr[2];
  if (arr[1] === '/') return arr[0] / arr[2];
}


module.exports = {
    squareRoot: squareRoot,
    basic: basic,
    log: log,
    factorial: factorial,
    power: power,
}

