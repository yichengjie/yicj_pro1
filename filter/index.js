var app = angular.module("myApp",[]) ;

app.controller('IndexController',function($scope){
    $scope.userList = [
        {"name":"yicj","addr":"beijing"},
        {"name":"caobei","addr":"zhengzhou"},
        {"name":"wangjie","addr":"neimenggu"},
        {"name":"wanghao","addr":"beijing"}
    ] ;
    $scope.key = "" ;
}) ;

app.filter("myFilter", function() {
<<<<<<< HEAD
    var myFunc = function(data,myinput){
        var retData = [] ;
        if(myinput.length>0){
            angular.forEach(data,function(e){
                if(e.name.indexOf(myinput)!=-1){
=======
    var myFunc = function(data,key){
        var retData = [] ;
        if(key.length>0){
            angular.forEach(data,function(e){
                if(e.name.indexOf(key)!=-1){
>>>>>>> 7f40b376a2e854c3980878200064e1f398d73560
                    retData.push(e) ;
                }
            }) ;
        }else{
            retData = data ;
        }
        return retData ;
    }
    return myFunc ;
});

app.filter('capitalize', function() {
    return function(input) {
        if (input) {
            return input[0].toUpperCase() + input.slice(1);
        }
    }
});





