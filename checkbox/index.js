var app = angular.module("app",[]) ;

app.controller('IndexController', function ($scope) {

    $scope.formData = {
        "favoriteColors":{"red":false,"blue":false,"green":true}
    } ;
    
    
            
    $scope.test = function () {

        console.log($scope.formData.favoriteColors) ;
    }


}) ;