define(['./controllers'], function (controllers) {
    controllers.controller('UserController',['$scope','UserLoginService', function ($scope,UserLoginService) {
        console.log("user contorller ..............") ;
        console.log(UserLoginService.books) ;
        console.log("user contorller ..............") ;
        $scope.greeting = 'Hello ,world !' ;
        $scope.books = UserLoginService.books ;
    }]) ;
}) ;