/**
 * Created by yicj on 2016/1/20.
 */

var app = angular.module('app',[]) ;

app.controller('IndexController', function ($scope) {

    $scope.data = {
        serviceType:"",
        chargeType:"",
        shiyongyu:""
    } ;
}) ;


app.directive('chargeTypeInput', function () {
    return{
        restrice:'A',
        require:'ngModel',
        scope:true,
        link: function (scope, elem, attr, ctrl) {
            if(!ctrl) return ;
             ctrl.$parsers.push(function (viewValue) {
                 var num = parseInt(viewValue) ;
                 if(){

                 }else{

                 }
             }) ;

        }
    } ;
}) ;