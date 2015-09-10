//这里面告诉我们定义的所有的控制器，服务，过滤器及指令
define('app/app',['angular','app/controllers/index','app/services/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['controllers','services']) ;
    console.log("app page init....................") ;
    console.log(myApp) ;
    console.log("app page init....................") ;
    return myApp ;;
})