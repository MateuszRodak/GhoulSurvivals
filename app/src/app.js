var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
    $scope.hello = 'Hello World from app js';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = true;
    $scope.changeMenu = changeMenu;

      function changeMenu(){
        $rootScope.isMenu = false;
        }
    )


}]


