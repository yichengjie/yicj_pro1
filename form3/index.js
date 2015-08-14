var app = angular.module("app",[]) ;

app.controller('IndexController',['$scope',function($scope){
    $scope.name = "yicj" ;


    $scope.user={
        userName:'damoqiongqiu',
        password:''
    };
    $scope.save=function(){
        alert("±£´æÊý¾Ý!");
    }

}]) ;