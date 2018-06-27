

angular.module('app', ['chart.js']);


// Below is the code related to progressive web app only.
window.onload = function() {

angular.module('app', []);
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() {
              console.log('Service Worker Registered'); })
             .catch(function(err) {
                console.log(err)
             })
  }
}