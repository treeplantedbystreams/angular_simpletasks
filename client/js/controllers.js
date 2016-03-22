//Logic for page actions here. 
app.controller('MainController', ['$scope', function($scope){
    
    function shalom(){
    alert("Shalom!")
    
};
    $scope.createAlert = function() {
    var iseeit = $scope.write;
    alert(iseeit);
};
    
   $scope.addName= function(){
        console.log("hello");
        var david = document.createElement('david');
        $scope.span.appendChild(david);
      
   };
    
   
     
    $scope.colorChange = function(){
            var colors = ["Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",                        "CadetBlue","Chartreuse","Chocolate","Coral"];               
            $scope.theColor = colors[Math.floor(Math.random() * colors.length)];
    };
}]);


 function shalom(){
    alert("Shalom!")
    
};
    
  
