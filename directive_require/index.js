var app = angular.module("app",[]) ;

app.controller('IndexController',function($scope){

    $scope.sayHello = function(){

        console.info('indexController say hello ....') ;
    }

});

app.directive("add",function(){
    return{
        restrict:'ECMA',
        controller:function($scope){
            $scope.count=0;
            this.addCount=function(){
                $scope.$apply(function(){
                    $scope.count++;
                })
            }
        }
    }
}) ;

app.directive("minor",function(){
    return{
        restrict:'ECAM',
        controller:function($scope){
            this.reduceCount=function(){
                $scope.$apply(function(){
                    $scope.count--;
                })
            }

        }
    }
}) ;



app.directive("figure",function(){
    return{
        restrict:'ECMA',
        template:'<button id="add" class="btn btn-default">add</button>'+
                 '<button id="minor" class="btn btn-danger">minor</button>'+
                 '<div>{{ figureCtrl.temp }}</div>',
        require:['?^add','?^minor'],
        controller:function(){
            this.temp="controllerAs";
        },
        controllerAs:'figureCtrl',
        link:function(scope,element,attrs,resultCtrl){
            console.info(resultCtrl[0]) ;
            angular.element(document.querySelector('#minor')).on('click',resultCtrl[1].reduceCount);
            angular.element(document.querySelector('#add')).on('click',resultCtrl[0].addCount);

        }
    }
}) ;


