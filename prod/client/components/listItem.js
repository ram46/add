angular.module('app')
.component('listItem', {
  bindings: {
    item: '<',
  },
  controller: function() {
    this.handleQuery = () => {
      console.log(this.query)
    }

    this.inputPlaceHolder = () => {
      console.log('here')
      if (this.item === 'factorial') return '4'
      if (this.item === 'power') return '4^3'
      if (this.item === 'log') return '16 or 16b10'
      if (this.item === 'sqrt') return '44'
      if (this.item === 'basic') return '5+4'
    }
  },

  templateUrl: '/templates/list-item.html'
});
