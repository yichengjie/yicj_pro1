var app = angular.module("myApp",[]) ;

app.filter("myFilter", function() {
    return function(data,key){
        var retData = [] ;
        if(key.length>0){
            angular.forEach(data,function(e){
                if(e.name.indexOf(key)!=-1){
                    retData.push(e) ;
                }
            }) ;
        }else{
            retData = data ;
        }
        return retData ;
    }
});

app.controller('IndexController',function($scope){
    $scope.userList = [
        {"name":"yicj","addr":"beijing"},
        {"name":"caobei","addr":"zhengzhou"},
        {"name":"wangjie","addr":"neimenggu"},
        {"name":"wanghao","addr":"beijing"}
    ] ;
    $scope.key = "" ;
}) ;



