define(['./controllers'], function (controllers) {
    controllers.controller('UserController',['$scope','UserService', function ($scope,UserService) {
        console.log("demo") ;
        $scope.greeting = 'Hello ,world !' ;
    }]) ;
}) ;