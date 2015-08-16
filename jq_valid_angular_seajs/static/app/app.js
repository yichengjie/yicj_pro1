// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    var app = angular.module("app",[]) ;

    app.controller('IndexCtrl',function($scope){
        $scope.userList = [
            {"name":"yicj1"},
            {"name":"yicj2"},
            {"name":"yicj3"}
        ] ;
        $scope.addLine = function(){
            var obj = {"name":""} ;
            $scope.userList.push(obj);
        }
    }) ;

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
        // 直接调用
        initValidFunc() ;
    });

    function initValidFunc (){
        $('#form_id').validationEngine();
    }

});