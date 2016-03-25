var app = angular.module("app",[]) ;
app.controller('IndexController', function ($scope) {

    $scope.submitMyForm = function () {
        var flag = $scope.ocForm.$valid ;
        console.info($scope.ocForm.test1.$dirty) ;
        $scope.ocForm.test1.$dirty = true ;
        $scope.ocForm.test2.$dirty = true ;
        console.info($scope.ocForm) ;
    }


    $scope.data = {
        test1:"",
        test2:'hello world'
    } ;

}) ;