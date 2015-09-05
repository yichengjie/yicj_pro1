angular.module("mytpl", []).
run(["$templateCache", function($templateCache) {
    var tmp = '<h4>lovestory</h4>'
        + '<p>this is directive use $templateCache service get template file method </p>'
        + '<a href="http://www.baidu.com"> service start templateCache method</a>';
    $templateCache.put('lovestory.html',tmp);
}]);

var app = angular.module("app",['mytpl']) ;
app.controller('IndexController', ['$scope','$templateCache', function($scope,$templateCache){
    var str = $templateCache.get('lovestory.html') ;
    console.info(str) ;
}])