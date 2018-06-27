angular.module('app')
.component('add', {
  bindings: {
    items: '<',
    stats: '<'
  },

  controller: function($scope) {
    // debugger
    this.$onChanges = function( ) {

  // IMPORTANT - $onInit didn't work as the stats and items were not readily available, onChanges gets called everytime data in bindings gets updated. Uncomment the debugger and see it gets called three times. First time both items and stats were undefined. Second time items got the data and third time stats got the data.

      // debugger
      this.labels = [];
      this.data = [];
      this.options = {
        circumference: 2 * Math.PI,
        radius: 1
      }
      if (this.stats) {
        for (var i = 0; i < this.stats.length; i++) {
          this.labels.push(this.stats[i][0]);
          this.data.push(this.stats[i][1]);
        }
      }
    }
  },

  templateUrl: '/templates/add.html'
});