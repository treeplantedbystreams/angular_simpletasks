//Logic for page actions here. 
angular.module('blogApp.controllers',[])
.controller('PostController', ['$scope', 'http', function($scope, http){
       $http.get(data/post.json).success(function(data){
           $scope.post = data;
       });
        $scope.welcome= "Hello to everyone",
        $scope.intro= "Why I am writing this blog",
        $scope.blogPost= [{}];
         
$scope.getPost = function() {
        var someNumber = $scope.noteid;
        PostFactory.get({id: someNumber});
    }

 $scope.getAllPosts = function() {
             PostFactory.query().then(function(posts) {
             $scope.posts = posts;
         }, console.error);
     

 function logValue(val) {
          console.log(val);
      }
}}]);
///////////////////

     $scope.pluckFirstLetter = function() {
         $scope.weather = $scope.weather.substring(1);
         logValue($scope.weather);
     }
     
       $scope.sayHelloToEveryone = function() {
        BlogFactory.sayHello();
        BlogService.sayHello($scope.name);
     }
     //need to find a way to bind the values of title author date ect into a postin