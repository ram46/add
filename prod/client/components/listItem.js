// import util from '../../helpers/math.js'

angular.module('app')
.component('listItem', {
  bindings: {
    item: '<',
  },
  controller: function(itemsService) {
    this.handleQuery = () => {
      console.log(this.item, this.query)

      if (this.item === 'basic') {
        itemsService.basic(this.query, (result) => {
          this.query = result;
          console.log('In list item component', result)
        })
      }

      if (this.item === 'factorial') {
        itemsService.factorial(this.query, (result) => {
          this.query = result;
          console.log('In list item component', result)
        })
      }

      if (this.item === 'log') {
        itemsService.log(this.query, (result) => {
          this.query = result;
          console.log(result)
        })
      }

      if (this.item === 'power') {
        itemsService.power(this.query, (result) => {
          this.query = result;
          console.log(result)
        })
      }


      if (this.item === 'sqrt') {
        itemsService.sqrt(this.query, (result) => {
          this.query = result
          console.log(result)
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

    this.calcBasic = () => {

    }
  },

  templateUrl: '/templates/list-item.html'
});
