/**
 * Created by mjn on 2015/11/5.
 */
var app = angular.module('app',[]) ;

app.controller('IndexController', function ($scope) {
    preLocadData() ;

}) ;
app.directive('datepicker',function(){
    return{
        restrict: 'A',
        scope: {},
        link: function (scope,elem,attr) {
            var $elem = $(elem) ;
            $elem.datepicker({startDate: '-0d'}) ;
        }
    };
}) ;


var preLocadData = function () {
    $.fn.datepicker.dates['en'] = {
        days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
        daysShort:["周日","周一","周二","周三","周四","周五","周六"],
        daysMin:["日","一","二","三","四","五","六"],
        months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        monthsShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        today:"今日",clear:"清除",
        format:"yyyy年mm月dd日",
        titleFormat:"yyyy年mm月",
        weekStart:1
    };
}