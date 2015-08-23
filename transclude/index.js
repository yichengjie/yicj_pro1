var app = angular.module("app",[]) ;

app.controller('IndexController',function(){



});

app.directive('hello', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:true,
        template:'<div><h1>hello world</h1><ng-transclude></ng-transclude></div>',
        transclude:true,
        link: function(scope, elem, attrs) {

        }
    };
});


