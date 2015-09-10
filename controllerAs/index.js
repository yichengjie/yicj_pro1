var app = angular.module("app",[]) ;

app.controller('IndexController',function($scope){

    $scope.sayHello = function(){

        console
    }

});

app.directive('hello', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:true,
        controller:function($scope){
            //注意这里一定要写成this.sayHello()，
            //如果写成$scope.sayHello()，先的指令是无法获取的
            this.sayHello = function(){
                console.info('hello world....') ;
            }
            $scope.sayHello2 = function(){
                console.info('hello world 2 ....') ;
            }
        },
        controllerAs:'helloCtrl',
        template:'<div><h1>hello world <br/><mybtn></mybtn></h1></div>',
        link: function(scope, elem, attrs,helloCtrl) {
            console.info(helloCtrl) ;
            helloCtrl.sayHello() ;
            //这里面试不能调用的，会直接报错,
            //helloCtrl.sayHello2() ;
        }
    };
});



app.directive('mybtn', function(){
    return {
        restrict: 'AE',
        replace: true,
        require:'^hello',
        controller:function($scope,helloCtrl){
            console.info('***********************') ;
            console.info(helloCtrl) ;
            console.info('***********************') ;
        },
        scope:true,
        template:'<button class="btn btn-default">click test</button>',
        link: function(scope, elem, attrs,ctrl) {
            scope.$apply(function(){

            }) ;

            elem.bind('click', function () {
                ctrl.sayHello() ;
            }) ;
        }
    };
});


