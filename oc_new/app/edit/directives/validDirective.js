define(function(require, exports, module) {
    var directives = require("./directives");

    //数字字母
    var ALPHANUMERIC_REGEXP =  /^[A-Za-z0-9]{0,}$/ ;
    directives.directive('alphanumeric', function() {
        return {
            require : 'ngModel',
            link : function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (ALPHANUMERIC_REGEXP.test(viewValue)) {
                        ctrl.$setValidity('alphanumeric', true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity('alphanumeric', false);
                        return undefined;
                    }
                });
            }
        };
    });


    /**下面的工具指令暂时还没有使用**/
    var INTEGER_REGEXP = /^\-?\d*$/;
    directives.directive('integer', function() {
        return {
            require : 'ngModel',
            link : function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (INTEGER_REGEXP.test(viewValue)) {
                        ctrl.$setValidity('integer', true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity('integer', false);
                        return undefined;
                    }
                });
            }
        };
    });

    var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
    directives.directive('smartFloat', function() {
        return {
            require : 'ngModel',
            link : function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (FLOAT_REGEXP.test(viewValue)) {
                        ctrl.$setValidity('float', true);
                        return parseFloat(viewValue.replace(',','.'));
                    } else {
                        ctrl.$setValidity('float', false);
                        return undefined;
                    }
                });
            }
        };
    });

    directives.directive('remoteValidation',['$http', function($http) {
        return {
            require : 'ngModel',
            link : function(scope, elm, attrs, ctrl) {
                elm.bind('keyup', function() {
                    $http({method: 'GET', url: 'FormValidation.jsp'}).
                        success(function(data, status, headers, config) {
                            if(parseInt(data)==0){
                                ctrl.$setValidity('remote',true);
                            }else{
                                ctrl.$setValidity('remote',false);
                            }
                        }).
                        error(function(data, status, headers, config) {
                            ctrl.$setValidity('remote', false);
                        });
                });
            }
        };
    }]);
}) ;