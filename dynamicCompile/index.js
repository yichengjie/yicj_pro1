var app = angular.module("app",['ui.router']) ;

app.controller("IndexController",function($scope){

    $scope.userList = [{"name":"yicj1"},{"name":"yicj2"},{"name":"yicj3"}] ;

}) ;


app.directive('hello', function(){//ng-click调用的函数内部不能手动调用$('#id').trigger('click') ;//所以这里将删除定义为一个指令
    return {
        restrict: 'AE',
        replace: true,
        scope:{
            list:'='
        },
        controller:function($scope){
            console.info($scope.list) ;
        },
        template: '<ul><li ng-repeat="l in list">{{l.name}}</li></ul>',
        link: function(scope, elem, attrs) {

        }
    };
}) ;