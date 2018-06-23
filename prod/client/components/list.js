angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    stats: '<'
  },
  controller: function() {
  },
  templateUrl: '/templates/list.html'
});