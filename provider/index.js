var app = angular.module("app",[]) ;

function IndexController (a){
    a.name = "yicj" ;
}

IndexController.$inject = ['$scope'] ;

app.controller('IndexController', IndexController)  ;





