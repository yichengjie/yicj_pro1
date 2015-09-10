var app = angular.module("app",[]) ;
app.controller('IndexController', function ($scope) {
    $scope.name='World';
    $scope.employees=[{id:101,name:'John',phone:'555-1276'},
                      {id:102,name:'Mary',phone:'800-1233'},
                      {id:103,name:'Mike',phone:'555-4321'},
                      {id:106,name:'Juliette',phone:'555-5678'}];
    $scope.showEdit=true;
    $scope.master={};
}) ;

$(function () { $('#myModal').modal({
    keyboard: true
})});

