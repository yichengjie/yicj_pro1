var app = angular.module("app",[]) ;

app.controller('IndexController',['$scope',function($scope){
    $scope.name = "yicj" ;


    $scope.user={
        userName:'damoqiongqiu',
        password:''
    };
    $scope.save=function(){


       console.info($scope.user) ;
        alert("±£´æÊý¾Ý!");
    }

}]) ;