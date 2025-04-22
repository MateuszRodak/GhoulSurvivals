
app.controller('startViewController', ['$scope', '$rootScope', function($scope){
    $scope.name = 'Hello World from startViewController';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = true;
    $scope.isMenu2 = false;
    $scope.changeMenu = changeMenu;

     function changeMenu(){
        $rootScope.isMenu = false;
        }

}])



/*
function startViewController($scope){
    $scope.name = 'Hello World from startViewController';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = true;
    $scope.isMenu2 = false;
    $scope.changeMenu = changeMenu;

     function changeMenu(){
        $rootScope.isMenu = false;
        }

}
*/

