//The action to call the local API should be here

var blogApp = angular.module('', ['']);

var postBind = function(post,title,author,content,date){
    var post =[title,author,contentdate];
    angular.bind(self, fn, args)
}


app.factory('blog', ['$http', function($http) { 
  return $http.get('http://localhost:3000/api/posts') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 

app.factory('blog', ['$http', function($http) { 
  return $http.post('http://localhost:3000/api/posts') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 

app.factory('blog', ['$http', function($http) { 
  return $http.get('http://localhost:3000/api/posts/[some_id]') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 

app.factory('updateBlog', ['$http', function($http) { 
  return $http.post('http://localhost:3000/api/posts/[some_id]') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 

}]);

 factories.factory('PostFactory', ['$http', function($http) {
     var f = {};
     f.age = 23;
     
     f.sayHello = function() {
         console.log('Hello World!');
     }
     
     return f;
 }]);
 
 factories.factory('PostFactory', ['$resource', function($resource) {
     return $resource('/messages/:id');
 }]);