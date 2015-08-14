var app = angular.module("app",['ui.router']) ;


app.constructor('UserController',function($scope){



}) ;

app.config(function($stateProvider) {
    $stateProvider
    .state('main',{
        url: '/main',
        abstract:true,
        views:{//如果页面ui-view有名称那么这边必须得用views
            'container':{
                controller:function($scope){
                    $scope.name = 'yicj' ;
                }
            }
        }
    })
    .state('main.sub',{
        url:'/sub',
        views:{
            'left@main':{
                template:'<div><h2>left</h2></div>'
            },
            'content@main':{
                template:'<div><h2>content -- {{name}}</h2></div>'
            }
        }
    }) ;


}) ;