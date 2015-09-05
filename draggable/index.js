var app = angular.module("app",[]) ;
app.controller('IndexController', function ($scope) {

    // create an injector and configure it from 'myModule'
    //var $injector = angular.injector('app');
   // var serviceA = $injector.get('serviceA');
    //console.info(serviceA) ;
});

app.directive('draggable', function ($document) {
    var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {//鼠标点击的时候，当前点的x和y
            //console.info( 'event.screenX : '+event.screenX) ;
            //console.info( 'event.screenY : ' +event.screenY) ;
           // console.info('x : ' + x) ;
            //console.info('y : ' + y) ;
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });
        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            //console.info("x : " + x) ;
            //console.info("y : " + y) ;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }
        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    }
}) ;