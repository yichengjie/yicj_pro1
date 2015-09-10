define(function(require, exports, module) {
    var directives = require("./directives");

    directives.directive('ocInputValid', function () {
        return {
            restrict: 'E',
            replace: true,
            template: function (element, attrs) {
                var str = attrs['name'] ;
                var retStr = str+".$invalid&&"+str+".$dirty" ;
                var inputValidHtml = "<span class=\"glyphicon  form-control-feedback\"ng-class=\"{true:'glyphicon-remove'}["+retStr+"]\" aria-hidden=\"true\"></span>" ;
                return inputValidHtml ;
            },
            link: function(scope, element, attrs) {
                element.bind('click', function () {
                    scope.$apply(function () {
                        scope.list.splice(scope.myindex,1) ;
                    }) ;
                }) ;
            }
        } ;
    }) ;

    directives.directive('setFocus', function(){
        return {
            restrict: 'AE',
            replace: true,
            scope:{},
            link: function(scope, elem, attrs) {
                elem.trigger('click') ;
            }
        };
    });

    directives.directive("upperInput",function(){
        return{
            restrict:'A',
            require:'ngModel',
            link:function(scope,element,attrs,ngModel){
                if (!ngModel)
                    return;
                element.bind('blur', function() {
                    scope.$apply(function () {
                        var tmp = ngModel.$viewValue || '';
                        tmp = tmp.toUpperCase() ;
                        ngModel.$setViewValue(tmp);
                        element.val(tmp);
                    });
                });
            }
        }
    }) ;

}) ;