var app = angular.module("app",['ui.router']) ;

app.controller('IndexController',function($scope){

    $scope.sayHello = function(){
        console.info('hello world') ;
    }


}) ;
/**
 * @符号可以直接将父类的函数传递给指令,
 * 如何想给父类scope的方法传递给指令，则必须通过&符号传递，'='无法传递方法
 */
app.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<button class="btn btn-primary">Click me to go to Google</button>',
        replace:true,
        scope:{
            sayHello:'&'
        },
        link: function (scope, element,attrs) {
            element.bind('click', function () {
                scope.sayHello();
            }) ;
        }

    };
}) ;

