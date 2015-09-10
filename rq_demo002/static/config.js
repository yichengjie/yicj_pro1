requirejs.config({
    baseUrl: 'static',
    paths: {
        "jquery":"requirejs-modules/jquery-1.9.1.min",
        "$":"requirejs-modules/jquery-1.9.1.min",
        "domReady":"requirejs-modules/domready",
        "angular":"requirejs-modules/angular/angular",
        "angular-router":"requirejs-modules/angular/angular-route"
    },
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-router":{
            deps:['angular']
        }
    }
});

require(['angular','bootstrap'], function (angular) {
    console.log("config init page...........") ;
    console.log(angular.version) ;
}) ;


