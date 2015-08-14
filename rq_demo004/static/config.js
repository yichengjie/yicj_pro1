requirejs.config({
    baseUrl: 'static/app',
    paths: {
        "jquery":"../requirejs-modules/jquery-1.9.1.min",
        "$":"../requirejs-modules/jquery-1.9.1.min",
        "domReady":"../requirejs-modules/domready",
        "angular":"../requirejs-modules/angular/angular",
        "uiRouter": "../requirejs-modules/angular/angular-ui-router"
    },
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular":{
            exports:"angular"
        },
        "uiRouter":{
            deps:['angular']
        }
    }
});
require(['angular','bootstrap'], function (angular) { //初始化页面
    console.log("config init page...........") ;
}) ;


