
// debugger
angular.module('app')
.component('statsItem', {

  bindings: {
    mathfunc: '<'
  },

  controller: function($scope) {
    // debugger
    // NOTE: controllers are not necessary but great for debugging and check the $scope. For example to check if the parent got the data
    // we can apply debugger here do $scope.$parent.$ctrl etc..
  },

  templateUrl: '/templates/stats-item.html'

})


