/**
 * Created by yicj on 2016/1/29.
 */
var app = angular.module('app',[]) ;
app.controller('IndexController', function ($scope,$log) {
    $log.info('hello world ......') ;
    var data = {
        email:''
    } ;
    $scope.data = data ;
    $scope.submitMyForm = function () {
        var flag = $scope.myform.$valid ;
        $scope.myform.email.$dirty = true ;
        if(flag){
            alert('表单数据校验通过，准备提交数据') ;
        }else{
            alert('页面存在错误的信息') ;
        }
    }
}) ;

//启动angular
angular.element(document).ready(function () {
    angular.bootstrap(document,['app']) ;
}) ;
