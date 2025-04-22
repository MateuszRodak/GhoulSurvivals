(function(){

    angular.module("controllerModule",{})
    .controller('appController', function($scope){

    $scope.name ="Hello World!";
    $scope.isMenu = true;
    $rootScope.isMenu = true;
    $scope.changeMenu = changeMenu;

      function changeMenu(){
        $rootScope.isMenu = false;
        }
    })
})();