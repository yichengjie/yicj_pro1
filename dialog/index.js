var app = angular.module("app",[]) ;
app.controller('IndexController', function ($scope) {
    $scope.data = {
        "username":"yicj",
        "title":"helloworld",
        "show":false
    } ;
    $scope.doSomething = function () {
        console.info('I aready doSomething') ;
    }

});

app.directive("dialog",function(){
    return{
        replace:true,
        restrict:'ECMA',
        transclude:true,
        scope:{
            title: '=', // set up title to accept data-binding
            onOk: '&', // create a delegate onOk function
            onCancel: '&', // create a delegate onCancel function
            show: '='
        },
        templateUrl:'dialog.html',
        controller: function ($scope) {
            console.info($scope.title) ;
        }

    }
}) ;

