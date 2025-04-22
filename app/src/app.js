var app = angular.module('myApp', []);

app.controller('appController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.hello = 'Hello World from app js';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = true;
    $scope.isMenu2 = true;
    $scope.changeMenu = changeMenu;

      function changeMenu(){
        $rootScope.isMenu = false;
        $scope.isMenu2 = false;
        }



}])


