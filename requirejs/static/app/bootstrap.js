define(['domReady','angular','./app','./routes'],function(domReady,angular){
    domReady(function () {
        angular.bootstrap(document,['myApp']) ;
    }) ;
})
