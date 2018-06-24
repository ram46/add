angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    stats: '<'
  },
  controller: function($scope) {
    // good to have for debugging (even empty controller funcs)
    // and check the $scope e.g. $scope.$parent.$ctrl etc..
  },
  templateUrl: '/templates/list.html'
});