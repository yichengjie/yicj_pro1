/**
 * Created by yicj on 2016/1/20.
 */
var app = angular.module('app',[]) ;

app.controller("IndexController",['$scope', function ($scope) {

    $scope.data = {
        name:"yicj"
    } ;
}]) ;



app.directive('hello', function () {
    return{
        restrict:'A',
        require:'?ngModel',
        link: function (scope,elem,attr,ctrl) {
            if(!ctrl) return ;
            ctrl.$parsers.push(function (viewValue) {
                console.info('viewValue : ' + viewValue) ;
                var num = parseInt(viewValue) ;
                console.info('num : ' + num) ;
                if(num>0&&num<99){
                    console.info('111111111111') ;
                    ctrl.$setValidity('test',true) ;
                    return viewValue ;
                }else{
                    console.info('2222222222222') ;
                    ctrl.$setValidity('test',false) ;
                    return undefined ;
                }
            })

        }
    } ;
}) ;