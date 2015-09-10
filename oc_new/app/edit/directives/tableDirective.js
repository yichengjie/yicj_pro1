define(function(require, exports, module){
    var directives = require("./directives") ;
    var tbAddButtonHtml = require("../tpls/tb_btnAdd.html") ;
    var tbUpdateButtonHtml = require("../tpls/tb_btnUpdate.html") ;
    var tbDeleteButtonHtml = require("../tpls/tb_btnDelete.html") ;
    var tbRowHtml = require("../tpls/tb_row.html") ;
    var _ = require("underscore") ;

    directives.directive('tbDelete', function () {
        return {
            restrict: 'E',
            replace: true,
            template:tbDeleteButtonHtml,
            scope: {
                list:'=',
                myindex:'='
            },
            link: function(scope, element, attrs) {
                element.bind('click', function () {
                    scope.$apply(function () {
                        scope.list.splice(scope.myindex,1) ;
                    }) ;
                }) ;
            }
        } ;
    }) ;

    directives.directive('tbAdd', ['$compile',function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                list:'=',
                title:'@'
            },
            template:tbAddButtonHtml,
            link: function(scope, element, attrs) {
                var title = scope.title ||"标题" ;
                scope.title = title ;
                scope.rowData = {type: "", code: "", money: "", unin: "CNY"} ;
                var tplStr = attrs['tpl'] ;
                element.bind('click', function () {
                    var template = _.template(tbRowHtml);
                    var compileStr = template({value: tplStr});
                    var myModel =  $("#myModal") ;
                    myModel.html(compileStr) ;
                    $compile(angular.element('body').find('#myModal'))(scope);
                    $('#myModal').modal('show').css({
                        "margin-top":"200px"});
                }) ;
                scope.submitFunc = function () {
                    console.info(scope.rowData) ;
                    scope.list.push(angular.copy(scope.rowData)) ;
                    $('#myModal').modal('hide') ;
                }
            }
        };
    }]) ;

    directives.directive('tbUpdate',['$compile', function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                obj:'=',
                list:'=',
                title:'@'
            },
            template:tbUpdateButtonHtml,
            link: function(scope, element, attrs) {
                var title = scope.title ||"标题" ;
                scope.title = title ;
                var tplStr = attrs['tpl'] ;
                element.bind('click', function () {
                    scope.rowData = angular.copy(scope.obj) ;
                    var template = _.template(tbRowHtml);
                    var compileStr = template({value: tplStr});
                    var myModel =  $("#myModal") ;
                    myModel.html(compileStr) ;
                    $compile(angular.element('body').find('#myModal'))(scope);
                    $('#myModal').modal('show').css({
                        "margin-top":"200px"});
                }) ;
                scope.submitFunc = function () {
                    console.info(scope.rowData) ;
                    scope.obj = angular.copy(scope.rowData) ;
                    $('#myModal').modal('hide') ;
                }
            }
        };
    }]) ;
}) ;