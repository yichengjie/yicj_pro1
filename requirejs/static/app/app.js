//这里面告诉我们定义的所有的控制器，服务，过滤器及指令
define(['angular','uiRouter','./services/index','./controllers/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['services','controllers','ui.router']) ;
    return myApp ;
})