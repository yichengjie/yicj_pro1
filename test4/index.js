

var app = angular.module("app",[]) ;
app.controller('UserController',function($scope){
    $scope.name = "yicj" ;
    $scope.list = [
                    {"id":"1","name":"yicj"},
                    {"id":"2","name":"yicj2"}
                  ] ;
    $scope.sel = {"sel1":"0","sel2":"0","sel3":"0"} ;
    $scope.listName = "list" ;

    $scope.showFlag = true;
    
    $scope.clickMe = function () {
        $scope.showFlag = !$scope.showFlag ;
    }
    $scope.sex = '2' ;
    $scope.isCar = true ;
    $scope.isSelected = true ;
}) ;


app.directive('checkServicetype',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope: true, // 这个必须加上要不然会造成混乱
        template: '<div><h1><span style="color:black;">hello world</span></h1></div>',
        link: function(scope, element, attrs){

        }
    }
}) ;
