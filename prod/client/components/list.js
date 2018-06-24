angular.module('app')
.component('list', {
  bindings: {
    items: '<',
    stats: '<'
  },
  controller: function($scope) {
    this.updatestats = () => {
      // this.stats = data
      // var self = this
      debugger
        itemsService.getStats((data) => {
            console.log('okkkkkk')
            this.stats = data;
          })
    }
  },
  templateUrl: '/templates/list.html'
});