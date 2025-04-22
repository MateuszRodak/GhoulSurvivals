var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', 'controllerModule', function($scope){
    $scope.hello = 'Hello World from app js';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = true;
    $scope.isMenu2 = false;
    $scope.changeMenu = changeMenu;

      /*function changeMenu(){
        $rootScope.isMenu = false;
        }*/



}])


