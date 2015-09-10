var app = angular.module("app",[]) ;


app.controller('IndexController', function ($scope) {


    $scope.data = {
        "hob":"",
        "name1":"",
        "name2":""
    } ;

    $scope.change = function(){//消除无用数据
        if($scope.data.hob == '1'){
            $scope.data.name2 = '' ;
        }else if ($scope.data.hob =='2'){
            $scope.data.name1 = '' ;
        }
    }

    $scope.submit = function () {

        console.info($scope.data) ;
    }

}) ;

