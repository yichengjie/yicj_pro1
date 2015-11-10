/**
 * Created by mjn on 2015/11/10.
 */
var app = angular.module('app',[]) ;
app.controller('IndexController', function ($scope) {
    $scope.data ={name:'yicj',info:'',serviceType:'',addr:''} ;

    $scope.serviceTypeList = [
        {name:'选择',value:''},{name:'类型F',value:'F'},{name:'类型M',value:'M'}
    ] ;

    $scope.changeServiceType =function (){
        console.info('当前的serviceType : ' + $scope.data.serviceType) ;
    }

}) ;

//增强指令
app.directive('force',function(){
    return  {
        restrict:'E',//restrict
        scope:{
            type:'='
        },
        template:'<div ng-show="showFunc()"><span ng-transclude=""></span></div>',
        transclude:true,
        controller: function ($scope,$element,$attrs) {
            var typeList = [] ;
            this.addForce = function(type){
                typeList.push(type) ;
            }
            this.addForceList = function(arr){
                typeList = arr ;
            }
            $scope.typeList= typeList ;
            $scope.showFunc = function(){
                var flag = true;
                if($scope.type&&$scope.type.length>0){
                   flag= _.contains(typeList,$scope.type) ;
                }
                return flag ;
            }
        },
        link: function (scope,elem,attr) {

        }
    } ;
}) ;

app.directive('ocshow', function () {
    return{
        restrict:'A',
        require:'force',
        link: function (scope,elem,attr,ctrl) {
            var str = attr['ocshow'] ;
            var info = [] ;
            if(str&&str.length>0){
                info = str.split(',') ;
            }
            ctrl.addForceList(info) ;
        }
    } ;
}) ;


app.directive('ocm', function () {
    return{
        restrict:'A',
        require:'force',
        link: function (scope,elem,attr,ctrl) {
            ctrl.addForce('M') ;
        }
    } ;
}) ;

app.directive('ocf', function () {
    return{
        restrict:'A',
        require:'force',
        link: function (scope,elem,attr,ctrl) {
            ctrl.addForce('F') ;
        }
    } ;
}) ;

