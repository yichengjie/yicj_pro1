var app = angular.module("app",['ui.router']) ;


app.config(function($stateProvider) {

    $stateProvider
    .state('main',{
        url: '/main',
        views:{
            'left':{
                template:'<div><h2>left</h2></div>',
                controller:function($scope){

                }
            },
            'content':{
                template:'<div><h2>content -- {{name}}</h2></div>',
                controller:function($scope){
                    $scope.name = "yicj" ;
                }
            }
        }
    })

}) ;
