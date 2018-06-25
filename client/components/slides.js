// debugger
angular.module('app')
.component('slides', {

  bindings: {
    mathfunc: '<'
  },

  controller: function($scope) {
    // debugger
    this.demoapi = (uip) => {
      // debugger
    }
    this.reveal = () => {
      // debugger
      angular.element(document.querySelector(".black")).removeClass("black");
    }
  },

  templateUrl: '/templates/slides.html'

})
