var app = angular.module("app",[]) ;
app.controller('UserController',function($scope){
    $scope.name = "yicj" ;
    $scope.list = [
                    {"id":"1","name":"yicj1"},
                    {"id":"2","name":"yicj2"},
                    {"id":"3","name":"yicj3"},
                    {"id":"4","name":"yicj4"},
                    {"id":"5","name":"yicj5"},
                    {"id":"6","name":"yicj6"}
                  ] ;
    $scope.sel = {"sel1":"0","sel2":"0","sel3":"0"} ;
    $scope.listName = "list" ;

}) ;

