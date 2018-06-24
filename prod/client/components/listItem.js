
angular.module('app')
.component('listItem', {
  bindings: {
    item: '<',
    stats: '=' //two-way binding is very important!!!
  },

  controller: function($scope, itemsService) {

    this.handleQuery = () => {

      if (this.item === 'basic') {
        itemsService.basic(this.query, (result) => {
          this.query = result;
          this.changestats()
        })
      }

      if (this.item === 'factorial') {
        itemsService.factorial(this.query, (result) => {
          this.query = result;
          this.changestats()
        })
      }

      if (this.item === 'log') {
        itemsService.log(this.query, (result) => {
          this.query = result;
          this.changestats()
        })
      }

      if (this.item === 'power') {
        itemsService.power(this.query, (result) => {
          this.query = result;
          this.changestats()
        })
      }


      if (this.item === 'sqrt') {
        itemsService.sqrt(this.query, (result) => {
          this.query = result
          this.changestats()
        })
      }

    }

    this.inputPlaceHolder = () => {
      if (this.item === 'factorial') return '4'
      if (this.item === 'power') return '4^3'
      if (this.item === 'log') return '16 or 16b10'
      if (this.item === 'sqrt') return '44'
      if (this.item === 'basic') return '5+4'
    }


    this.changestats = () => {
      itemsService.getStats((data) => {
        this.stats = data;
      })
    }


  },
  templateUrl: '/templates/list-item.html'
});
