var app = angular.module("app",['ngResource']) ;

/*app.factory('CreditCard', ['$resource', function($resource) {
    return $resource('/user/:userId/card/:cardId',{user:123,cardId:'@id'},
        {'charge': { method:'POST',params:{chage:true},isArray:false }
    });
}]);*/


app.factory('CreditCard', ['$resource', function($resource) {
    return $resource('/user/:userId/card/:cardId',{userId:123,cardId:'@cardId'}
        ,{'charge': {
            method:'POST',
            params:{chage:true},
            isArray:false
            },
            'add':{
                url:'/oc/hello/add',
                method:'POST',
                params:{add:true},
                isArray:false
            }
        }
    );
}]);



app.controller('IndexController', function ($scope,CreditCard) {

    $scope.testGet = function () {
        CreditCard.get({"cardId":11,"name":"yicj"}) ;
    }

    $scope.testSave = function () {
        var ccard = {"t":"456"} ;
        CreditCard.save(ccard) ;

    }


    $scope.testSave2 = function () {

    }
    
    $scope.testQuery = function () {
        var cards =  CreditCard.query() ;
        console.info(cards) ;
    }
    
    $scope.testCharge = function () {
       /* CreditCard.get({cardId:456}, function (card) {
            card.name = 'yicj' ;
            card.$save() ;
        }) ;*/
        CreditCard.charge() ;
    }
    
    $scope.add = function () {
        var ccard = {"t":"123"} ;
        CreditCard.add(ccard) ;
    }


})

