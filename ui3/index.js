var app = angular.module("app",['ui.router']) ;


app.constructor('UserController',function($scope){



}) ;

app.config(function($stateProvider) {
    $stateProvider
    .state('main',{
        url: '/main',
        templateUrl:'container.html',
        controller:function($scope){
            $scope.name = 'yicj' ;
        }
    })
    .state('main.sub',{
        url:'/sub',
        views:{
            'left@main':{
                template:'<div><h2>left</h2></div>',
                controller:function($scope){

                }
            },
            'content@main':{
                template:'<div><h2>content -- {{name}}</h2></div>'
            }
        }
    }) ;


}) ;