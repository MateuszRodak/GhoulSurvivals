app.controller('startViewController', ['$scope', function($scope){
    $scope.name = 'Hello World from startViewController';
    $scope.castle = false;
    $scope.castle2 = true;
    $rootScope.isMenu = false;
    $scope.isMenu2 = false;
    $scope.changeMenu = changeMenu;
}]

    function changeMenu(){
    $rootScope.isMenu = false;
    }
)

