var app = angular.module("app",[]) ;

app.controller('IndexController',['$scope',function($scope){
    $scope.name = "yicj" ;


    $scope.user={
        userName:'damoqiongqiu',
        password:''
    };
    $scope.save=function(){


       console.info($scope.user) ;
        alert("为什么有中文乱码!");
    }

}]) ;