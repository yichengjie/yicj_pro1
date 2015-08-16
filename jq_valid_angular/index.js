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


$(function(){
    // 直接调用
    $('#form_id').validationEngine();
}) ;
