var app = angular.module("app",['angular-table']) ;

app.controller('IndexController', function ($scope) {

    $scope.people = [
        {name: "yicj1", age: "28", birthdate: "0308"},
        {name: "yicj2", age: "28", birthdate: "0308"},
        {name: "yicj3", age: "28", birthdate: "0308"}
    ] ;


}) ;

