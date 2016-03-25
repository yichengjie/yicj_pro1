var app = angular.module("app",['jcs-autoValidate']) ;

app.run(['bootstrap3ElementModifier', function (bootstrap3ElementModifier) {
    bootstrap3ElementModifier.enableValidationStateIcons(true);
}]);

app.controller('IndexController',['$scope', function ($scope) {

    $scope.data = {
        name:"yicj",
        password:"123",
        dept:"soft",
        lover:'1'

    } ;

    console.info('我的中文测试') ;
    var $username = $("#inlineRadio1") ;
    var username = $username[0] ;
    var type = username.type ;
    console.info(type) ;

}]) ;
