angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    stats: '<'
  },
  controller: function($scope) {
    // debugger
  },
  templateUrl: '/templates/list.html'
});