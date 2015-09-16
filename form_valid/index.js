var app = angular.module("app",['jcs-autoValidate']) ;

app.run(['bootstrap3ElementModifier', function (bootstrap3ElementModifier) {
    bootstrap3ElementModifier.enableValidationStateIcons(true);
}]);

app.controller('IndexController',['$scope', function ($scope) {


    console.info('我的中文测试') ;

}]) ;
