//这里面告诉我们定义的所有的控制器，服务，过滤器及指令
define('app/app',['angular','app/services/index','app/controllers/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['services','controllers']) ;
    return myApp ;
})