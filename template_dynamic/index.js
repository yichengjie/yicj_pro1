var app = angular.module("app",[]) ;

var htmlUrl = "" ;

app.controller('IndexController',function($scope){
    $scope.studenInfo = {
        list:[
            {'dept':'A','id':'001','name':'yicj1','addr':'hennan1','phone':'10001','selected':false},
            {'dept':'C','id':'002','name':'yicj2','addr':'hennan2','phone':'10002','selected':false}
        ],
        titleList:[
            {'title':'dept'},
            {'title':'studentNum'},
            {'title':'name'},
            {'title':'addr'},
            {'title':'phone'}
        ]
    } ;

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
        compile: function compile(tElement, tAttrs, transclude) {
            var str = tAttrs ['htmlUrl'];
            htmlUrl = str ;
            console.info("htmlUrl: " + htmlUrl);
            return {
                pre: function(scope, element, attrs){
                    console.info("pre-link : priority2!");
                },
                post: function(scope, element, attrs){
                    console.info("post-link: priority2!");
                }
            };
        },
        template: '<div>' +
        '<button ng-click="showHideTable();">{{title}}</button>' +
        '<br/><br/>' +
        '<div ng-show = "showFlag" ng-transclude=""></div>' +
        '</div>',
        transclude:true
    }
}) ;
//

app.directive('tableInfo',function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope: {
            objInfo:'='
        }, // 这个必须加上要不然会造成混乱
        compile: function compile(tElement, tAttrs, transclude) {
            var urlStr = tAttrs['htmlUrl'] ;
            var templateStr = '<tr  ng-repeat="st in list"  ng-click="initSelectTr($index)">'+
            '    <td>'+
            '        <select class="form-control input-sm"  ng-model="st.dept" ng-options="o.value as o.name for o in depts">'+
            '        </select>'+
            '    </td>'+
            '    <td>'+
            '        <input type="text" class="form-control input-sm" name="id" ng-model="st.id" placeholder="your num"/>'+
            '    </td>'+
            '    <td>'+
            '        <input type="text"   class="form-control input-sm" name="name" ng-model="st.name" placeholder="your name"/>'+
            '    </td>'+
            '    <td>'+
            '        <input type="text" class="form-control input-sm" name="add" ng-model="st.addr" placeholder="your addr" />'+
            '    </td>'+
            '    <td>'+
            '        <input type="text" class="form-control input-sm" name="phone" ng-model="st.phone" placeholder="your qq" />'+
            '    </td>'+
            '</tr>' ;
            var tbody =  angular.element(tElement).find('tbody') ;
            tbody.append(templateStr) ;
        },
        controller:function($scope){
            $scope.list = $scope.objInfo.list ;
            $scope.titleList = $scope.objInfo.titleList;
            $scope.depts = [{'name':'','value':''},
                {'name':'dept1','value':'A'},
                {'name':'dept2','value':'B'},
                {'name':'dept3','value':'C'}
            ] ;
            $scope.selectLineNum = 0 ;
            $scope.addLine = function(){
                $scope.list.push($scope.newStudent()) ;
            }

            $scope.delLine = function(){
                var delIndex = $scope.list.length-1 ; //默认删除最后一行
                angular.forEach($scope.list,function(data,index,array){
                    if(data.selected){//如果没有被选中
                        delIndex = index ;
                    }
                }) ;
                $scope.list.splice(delIndex,1) ;
            }

            $scope.newStudent =function(){
                return {'dept':'','id':'','name':'','addr':'','phone':'','selected':false} ;
            }

            $scope.initSelectTr = function(selIndex){
                angular.forEach($scope.list,function(data,index,array){
                    if(selIndex==index){
                        data.selected = true;
                    }else{
                        data.selected = false ;
                    }
                }) ;
            }
        },
        templateUrl: 'tpls/table.html',
        link: function(scope, element, attrs){
            var alertmessage = attrs['alertmessage'] ;
        }
    }
}) ;


