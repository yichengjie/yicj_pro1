var app = angular.module("app",['mgcrea.ngStrap.modal']) ;

app.controller('IndexController', function ($scope) {
    $scope.modal = {
        "title": "Title",
        "content": "Hello Modal<br />This is a multiline message!"
    };
}) ;