var app = angular.module("app",[]) ;

app.controller('IndexController',function($scope){
    $scope.name = "yicj" ;





    $scope.depts = [{'name':'','value':''},
                    {'name':'dept1','value':'A'},
                    {'name':'dept2','value':'B'},
                    {'name':'dept3','value':'C'}
                   ] ;
    $scope.stList = [
        {'dept':'A','id':'001','name':'yicj1','addr':'hennan1','phone':'10001','selected':false},
        {'dept':'C','id':'002','name':'yicj2','addr':'hennan2','phone':'10002','selected':false}
    ] ;


    var ccc = angular.copy($scope.depts) ;
    console.info(ccc) ;

    $scope.selectLineNum = 0 ;

    $scope.addLine = function(){
        $scope.stList.push($scope.newStudent()) ;
    }

    $scope.delLine = function(){
        var delIndex = $scope.stList.length-1 ; //默认删除最后一行
        angular.forEach($scope.stList,function(data,index,array){
            if(data.selected){//如果没有被选中
                delIndex = index ;
            }
        }) ;
        $scope.stList.splice(delIndex,1) ;
    }

    $scope.newStudent =function(){

        return {'dept':'','id':'','name':'','addr':'','phone':'','selected':false} ;
    }

    $scope.initSelectTr = function(selIndex){
        angular.forEach($scope.stList,function(data,index,array){
            if(selIndex==index){
                data.selected = true;
            }else{
                data.selected = false ;
            }
        }) ;
    }


    $scope.change =function(st){
        console.info('i am change ....') ;
        st.id = "" ;
        st.name = "" ;
        st.add = "" ;
        st.phone = "" ;
    }

    /*initTable() ;


    function initTable (){
        if($scope.stList.length>0){//则显示表格
            $scope.showTableFlag = true ;
            $scope.showTableTitle = "hide table" ;
        }else{
            $scope.showTableFlag = false ;
            $scope.showTableTitle = "show table" ;
        }
    }


    $scope.showHideTable = function () {
        $scope.showTableFlag = !$scope.showTableFlag;
        if($scope.showTableFlag){
            $scope.showTableTitle = "hide table" ;
        }else{
            $scope.showTableTitle = "show table" ;
        }
    }*/




}) ;//controller结束





app.directive('showHideTable',function(){
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            tlength:'@'
        }, // 这个必须加上要不然会造成混乱
        controller:function($scope,$element,$attrs){
            var length = $scope.tlength || 0 ;
            $scope.title = "show table" ;
            $scope.showFlag = false;
            if(length>0){
                $scope.title = "hide table" ;
                $scope.showFlag = true;
            }
            $scope.showHideTable = function(){
                $scope.showFlag = !$scope.showFlag ;
                if($scope.showFlag){//如果当前为显示状态
                    $scope.title = "hide table" ;
                }else{
                    $scope.title = "show table" ;
                }
            }
        },
        template: '<div>' +
                      '<button ng-click="showHideTable();">{{title}}</button>' +
                      '<br/><br/>' +
                      '<div ng-show = "showFlag" ng-transclude=""></div>' +
                  '</div>',
        transclude:true,
        link: function(scope, element, attrs){

        }
    }
}) ;
//

app.directive('tableInfo',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope: true, // 这个必须加上要不然会造成混乱
        templateUrl: 'tpls/tb.html',
        transclude:true,
        link: function(scope, element, attrs){
            var alertmessage = attrs['alertmessage'] ;
        }
    }
}) ;

app.directive('trInfo',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope: true, // 这个必须加上要不然会造成混乱
        templateUrl: 'tpls/tr.html'/*,
        link:function(scope, element, attrs){
            element.bind('click', function () {
                scope.initSelectTr(scope.st) ;
            }) ;
        }*/
    };
}) ;

//tui长度限制属性
app.directive('tuiMaxLength',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope: true, // 这个必须加上要不然会造成混乱
        link: function(scope, element, attrs){
            //scope.$watch(attrs['tuiMaxLength'], myWatchCallbackFunc, true);
            scope.$watch(attrs['tuiMaxLength'], myWatchCallbackFunc);
            function myWatchCallbackFunc (){
                var tuiMaxLength = attrs['tuiMaxLength'] ;
                var info =  splitMaxLengtAttr(tuiMaxLength) ;
                var value2  = scope.$eval(info.str2) ;
                var valueAttrStr = "info.str1['"+value2+"'] ";
                var valueAtrr = eval(valueAttrStr) ;
                //console.info('---------------------') ;
                //console.info('valueAtrr : ' + valueAtrr) ;
                //console.info('value2 : ' + value2) ;
                //console.info('---------------------') ;
                //element.attr('maxLength',valueAtrr) ;//设置长度
                if(valueAtrr){
                    element.removeAttr('readonly') ;
                }else{
                    element.attr('readonly','readonly') ;
                }
            }
            //下面两个是内部工具函数
            function strToJson (str){
                //return JSON.parse(str);
                var json = eval('(' + str + ')');
                return json;
            }
            function splitMaxLengtAttr (tuiMaxLengthStr){
                var obj = {} ;
                var start1 = tuiMaxLengthStr.indexOf('{');
                var end1 = tuiMaxLengthStr.indexOf('}');
                var str1 = tuiMaxLengthStr.substr(start1,end1+1) ;
                var start2 = tuiMaxLengthStr.indexOf('[') ;
                var end2 = tuiMaxLengthStr.indexOf(']') ;
                var str2 = tuiMaxLengthStr.substring(start2+1,end2) ;
                //console.info(str1) ;
                obj.str1 = strToJson(str1);
                obj.str2 = str2 ;
                return obj ;
            }

        }
    }
}) ;