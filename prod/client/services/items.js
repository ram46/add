angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/items')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };


  this.basic = function(query, callback) {
    $http.post('/basic', {query:query})
    .then(function(data) {
      if(callback) {
        callback(data.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };


  this.power = function(query, callback) {
    // debugger
    $http.post('/power', {query:query})
    .then(function(data) {
      if(callback) {
        callback(data.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };


  this.log = function(query, callback) {
    $http.post('/log', {query:query})
    .then(function(data) {
      if(callback) {
        callback(data.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  this.factorial = function(query, callback) {
    $http.post('/factorial', {query:query})
    .then(function(data) {
      if(callback) {
        callback(data.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };


  this.sqrt = function(query, callback) {
    $http.post('/sqrt', {query:query})
    .then(function(data) {
      if(callback) {
        callback(data.data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };


  this.getStats = function(callback) {
    $http.get('/stats')
    .then(function(data) {
      // debugger
      if(callback) {
        callback(data)
        // callback(['basic', 'factorial', 'sqrt','log','power'])
      }
    })
    .catch(function(err){
      console.log(err)
    })

  }



});








