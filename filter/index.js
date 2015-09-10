var app = angular.module("myApp",[]) ;

app.controller('IndexController',function($scope){
    $scope.userList = [
        {"name":"yicj","addr":"beijing"},
        {"name":"caobei","addr":"zhengzhou"},
        {"name":"wangjie","addr":"neimenggu"},
        {"name":"wanghao","addr":"beijing"}
    ] ;
    $scope.key = "" ;

    $scope.test = "hello world" ;
}) ;

app.filter("myFilter", function() {
    var myFunc = function(data,myinput){
        var retData = [] ;
        if(myinput.length>0){
            angular.forEach(data,function(e){
                if(e.name.indexOf(myinput)!=-1){
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



app.directive("upper",function(){
    return{
        restrict:'A',
        require:'ngModel',
        link:function(scope,element,attrs,ngModel){
            if (!ngModel)
                return; // do nothing if no ng-model
            // Specify how UI should be updated
            ngModel.$render = function() {
                var tmp = ngModel.$viewValue || '' ;
                tmp = tmp.toUpperCase() ;
                element.val(tmp);
                ngModel.$setViewValue(tmp);
            };
            // Listen for change events to enable binding
            element.bind('blur', function() {
                scope.$apply(read);
            });
            //read(); // initialize
            /// Write data to the model
            function read() {
                var tmp = ngModel.$viewValue || '' ;
                tmp = tmp.toUpperCase() ;
                ngModel.$setViewValue(tmp);
                element.val(tmp);
            }
        }
    }
}) ;





