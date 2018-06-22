// angular.module('app')
// .controller('AppCtrl', function(itemsService) {
//   itemsService.getAll((data) => {
//     this.items = data;
//   });
// })
// .component('app', {
//   bindings: {},
//   controller: 'AppCtrl',
//   templateUrl: '/templates/app.html'
// });



//############### todo app #################

angular.module('app', [])
.component('todoList', {

  controller: function(){
    this.todos = [];

    this.addTodo = () => {
      console.log(this.newTodo)
      this.todos.push(this.newTodo)
      this.newTodo = '';
    }

    this.removeTodo = (index) => {
      console.log(index);
      this.todos.splice(index, 1);
    }
  },

  template: `
    <h1> Todo List </h1>
    <input ng-model="$ctrl.newTodo">
    <button ng-click="$ctrl.addTodo()" >add</button>
    <ul>
      <entry
      todo = "todo"
        ng-click="$ctrl.removeTodo($index)"
        ng-repeat="todo in $ctrl.todos track by $index"
      />
    </ul>
    <hr/>
    {{$ctrl.todos}}
  `
})
.component('entry', {
  bindings: {
    todo: '<'
  },

  template: `
    <li>
      {{$ctrl.todo}}
    </li>
  `
})

