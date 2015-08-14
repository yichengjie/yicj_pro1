var app = angular.module("app",[]) ;
app.controller('UserController',function($scope){
    $scope.name = "yicj" ;
    $scope.list = [
                    {"id":"1","name":"yicj1"},
                    {"id":"2","name":"yicj2"},
                    {"id":"3","name":"yicj3"},
                    {"id":"4","name":"yicj4"},
                    {"id":"5","name":"yicj5"},
                    {"id":"6","name":"yicj6"}
                  ] ;
    $scope.sel = {"sel1":"0","sel2":"0","sel3":"0"} ;


}) ;

app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<h2><p style="background-color:{{color}}">Hello World</h2>',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                elem.css('background-color', 'white');
                scope.$apply(function() {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function() {
                elem.css('cursor', 'pointer');
            });
        }
    };
});

app.directive('containerDiv',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'tpls/container-tpl.html',
        transclude:true
    };
}) ;


app.directive('ulDiv',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'tpls/ul-tpl.html',
        controller:function($scope){
            $scope.myclick = function(id){
                console.info("you select sel1 is : " + id) ;
                $scope.sel.sel1 = id ;
            }
        },
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                //scope
            });
        }
    };
}) ;



