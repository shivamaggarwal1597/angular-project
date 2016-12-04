(
function(){
    
    'use strict';
    
    angular.module('myApp',[])
    .controller('dishController',DishController);
    DishController.$inject=['$scope'];
    function DishController($scope){
        $scope.dishes="";
        $scope.message="";
        $scope.check=function(){
            var dish=$scope.dishes.split(",");
          dish.map(function(e){
             return String.prototype.split.apply(e); 
              
          });
            
            if(dish.length<3)
                $scope.message="enjoy!!!";
            else if(dish.length>=3)
                $scope.message="TOO Much";
        }
        
    };
    
    
    
    
    
}
)();