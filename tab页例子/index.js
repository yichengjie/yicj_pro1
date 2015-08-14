var myApp = angular.module("myApp",["ui.router"]) ;
myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/PageTab");//url重定向
        $stateProvider
            .state("PageTab",{
                url:"/PageTab",
                templateUrl: "PageTab.html"
            })
            .state("PageTab.Page1",{
                url:"/Page1",
                templateUrl:"Page1.html"
            })
            .state("PageTab.Page2",{
                url:"/Page2",
                templateUrl:"Page2.html"
            })
            .state("PageTab.Page3",{
                url:"/Page3",
                templateUrl:"Page3.html"
            });
    }
]);