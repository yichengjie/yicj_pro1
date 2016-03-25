$(document).ready(function() {
   //$(".js-example-basic-single").select2();
});

var app = angular.module('app',[]) ;
app.controller('IndexController', function ($scope,$timeout) {
    $scope.data = {name:'003'} ;
    $scope.list1 = [
        {name:'选择',value:''}
    ] ;
    //当timeout被定义时，它返回一个promise对象
   var timer = $timeout(
        function() {
            $scope.list1 = [
                {name:'name1',value:'001'},
                {name:'name2',value:'002'},
                {name:'name3',value:'003'},
                {name:'name4',value:'004'},
                {name:'name5',value:'005'}
            ] ;
            console.log( "Timeout executed", Date.now() );
        },
        2000
    );

    //将resolve/reject处理函数绑定到timer promise上以确保我们的cancel方法能正常运行
    timer.then(
        function() {
            $(".js-example-basic-single").select2();
            console.log( "Timer resolved!", Date.now() );
        },
        function() {
            console.log( "Timer rejected!", Date.now() );
        }
    );

    $scope.hello = function () {

        console.info('我的值发生了改变......', Date.now()) ;
    }


}) ;