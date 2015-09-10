define('bootstrap',['domReady','angular','app/app'],function(domReady,angular){
    domReady(function () {
        angular.bootstrap(document,['myApp']) ;
    }) ;;
})
