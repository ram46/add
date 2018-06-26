

angular.module('app', []);

window.onload = function() {
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