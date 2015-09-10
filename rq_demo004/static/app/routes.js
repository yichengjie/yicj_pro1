define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider) {
        $stateProvider.state('view1',{
            url: '/view1',
            templateUrl: 'static/app/tpls/partial1.html',
            controller:'UserController'
        })
        .state('view2',{
            url: '/view2',
            templateUrl: 'static/app/tpls//partial2.html'
        });
    })
});