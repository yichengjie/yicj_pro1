var trStt ='<%if("tb170.html"==value){%>'+
    '<div class="modal-dialog">'+
    '  <div class="modal-content">'+
    '      <div class="modal-header">'+
    '	  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
    '	  <h4 class="modal-title" id="myModalLabel">'+
    '	      添加金额信息'+
    '	  </h4>'+
    '      </div>'+
    '      <div class="modal-body">'+
                '<form class="form-horizontal" role="form">'+
                '<div class="form-group   has-success has-feedback">'+
                '    <label  class="col-sm-3 control-label">销售地类型</label>'+
                '    <div class="col-sm-6">'+
                '	<input type="text" ng-model="rowData.type" class="form-control input-sm" id="inputSuccess2" aria-describedby="inputSuccess2Status">'+
                '	<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'+
                '	<span  class="sr-only">(success)</span>'+
                '    </div>'+
                '    <div class="col-sm-3 pt_tip">'+
                '	<span class = "text-danger">必填项</span>'+
                '    </div>'+
                '</div>'+
                '<div class="form-group   has-success has-feedback">'+
                '    <label  class="col-sm-3 control-label">销售地代码</label>'+
                '    <div class="col-sm-6">'+
                '	<input type="text" ng-model="rowData.code" class="form-control input-sm" id="inputSuccess2" aria-describedby="inputSuccess2Status">'+
                '	<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'+
                '	<span  class="sr-only">(success)</span>'+
                '    </div>'+
                '    <div class="col-sm-3 pt_tip">'+
                '	<span class = "text-danger">必填项</span>'+
                '    </div>'+
                '</div>'+
                '<div class="form-group   has-success has-feedback">'+
                '    <label  class="col-sm-3 control-label">金额</label>'+
                '    <div class="col-sm-6">'+
                '	<input type="text" ng-model="rowData.money" class="form-control input-sm" id="inputSuccess2" aria-describedby="inputSuccess2Status">'+
                '	<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'+
                '	<span  class="sr-only">(success)</span>'+
                '    </div>'+
                '    <div class="col-sm-3 pt_tip">'+
                '	<span class = "text-danger">必填项</span>'+
                '    </div>'+
                '</div>'+
                '<div class="form-group   has-success has-feedback">'+
                '    <label  class="col-sm-3 control-label">货比类型</label>'+
                '    <div class="col-sm-6">'+
                '	<input type="text" ng-model="rowData.unin" class="form-control input-sm" id="inputSuccess2" aria-describedby="inputSuccess2Status">'+
                '	<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>'+
                '	<span  class="sr-only">(success)</span>'+
                '    </div>'+
                '    <div class="col-sm-3 pt_tip">'+
                '	<span class = "text-danger">必填项</span>'+
                '    </div>'+
                '</div>'+
                '</form>'+
    '      </div>'+
    '      <div class="modal-footer">'+
            '	<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>'+
            '	<button ng-click="submitFunc()" type="button" class="btn btn-primary">保存表格数据</button>'+
    '     </div>'+
    '  </div>'+
    '</div>'+
    '<%}%>' ;

var app = angular.module("app",[]);
app.controller('IndexController', function ($scope) {
    $scope.data = {
        list170VO:[
            {"type":"C-城市","code":"001","money":"1000","unin":"CNY"},
            {"type":"A-大区","code":"002","money":"2000","unin":"CNY"},
            {"type":"N-国家","code":"003","money":"3000","unin":"CNY"},
        ]
    } ;
    $scope.delRow = function (index) {
        $scope.data.list170VO.splice(index,1) ;
    }
    $scope.submitMyForm = function () {
        var flag = $scope.ocForm.$valid ;
        console.info($scope.ocForm.test1.$dirty) ;
        $scope.ocForm.test1.$dirty = true ;
        $scope.ocForm.test2.$dirty = true ;
        console.info($scope.ocForm) ;
    }


    $scope.data = {
        test1:"",
        test2:'hello world'
    } ;

}) ;

app.directive('tbAdd', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            list:'='
        },
        templateUrl:'tpls/tbAdd.html',
        link: function(scope, element, attrs) {
            scope.rowData = {type: "", code: "", money: "", unin: "CNY"} ;
            var tplStr = attrs['tpl'] ;
            element.bind('click', function () {
                var template = _.template(trStt);
                var compileStr = template({value: tplStr});
                var myModel =  $("#myModal") ;
                myModel.html(compileStr) ;
                $compile(angular.element('body').find('#myModal'))(scope);
                //myModel.append() ;
                $('#myModal').modal('show').css({
                    "margin-top":"300px"});
                }) ;
                scope.submitFunc = function () {
                    console.info(scope.rowData) ;
                    scope.list.push(angular.copy(scope.rowData)) ;
                    $('#myModal').modal('hide') ;
                }

        }
    };
}) ;

app.directive('tbUpdate', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            obj:'=',
            list:'='
        },
        templateUrl:'tpls/tbUpdate.html',
        link: function(scope, element, attrs) {
            var tplStr = attrs['tpl'] ;
            element.bind('click', function () {
                scope.rowData = angular.copy(scope.obj) ;
                var template = _.template(trStt);
                var compileStr = template({value: tplStr});
                var myModel =  $("#myModal") ;
                myModel.html(compileStr) ;
                //console.info(scope.rowData) ;
                $compile(angular.element('body').find('#myModal'))(scope);
                //myModel.append() ;
                $('#myModal').modal('show').css({
                    "margin-top":"300px"});
                }) ;
                scope.submitFunc = function () {
                    console.info(scope.rowData) ;
                    scope.list.push(angular.copy(scope.rowData)) ;
                    $('#myModal').modal('hide') ;
                }
        }
    };
}) ;
