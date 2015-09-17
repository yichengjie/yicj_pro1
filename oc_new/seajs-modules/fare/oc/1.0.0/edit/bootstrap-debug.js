define("fare/oc/1.0.0/edit/bootstrap-debug", [ "./app-debug", "./services/services-debug", "./controllers/index-debug", "./controllers/eidtController-debug", "./controllers/controllers-debug", "./directives/index-debug", "./directives/tableDirective-debug", "./directives/directives-debug", "./tpls/tb_btnAdd-debug.html", "./tpls/tb_btnUpdate-debug.html", "./tpls/tb_btnDelete-debug.html", "./tpls/tb_row-debug.html", "underscore-debug", "./directives/commonDirective-debug", "./directives/validDirective-debug", "../lib/module-debug", "../lib/helpers/compiler-debug", "../lib/helpers/date-formatter-debug", "../lib/helpers/date-parser-debug", "../lib/helpers/debounce-debug", "../lib/helpers/dimensions-debug", "../lib/helpers/parse-options-debug", "../lib/helpers/raf-debug", "../lib/datepicker/datepicker-debug", "../lib/datepicker/datepicker.tpl-debug.html", "../lib/timepicker/timepicker-debug", "../lib/timepicker/timepicker.tpl-debug.html", "../lib/tooltip/tooltip-debug", "../lib/tooltip/tooltip.tpl-debug.html", "../lib/valid/index-debug", "../lib/valid/config/index-debug", "../lib/valid/config/ngModelDecorator-debug", "../lib/valid/jcs-auto-validate-debug", "../lib/valid/config/ngSubmitDecorator-debug", "../lib/valid/directives/index-debug", "../lib/valid/directives/autoValidateFormOptions-debug", "../lib/valid/directives/formReset-debug", "../lib/valid/directives/registerCustomFormControl-debug", "../lib/valid/providers/validator-debug", "../lib/valid/services/index-debug", "../lib/valid/services/bootstrap3ElementModifier-debug", "../lib/valid/services/debounce-debug", "../lib/valid/services/defaultErrorMessageResolver-debug", "../lib/valid/services/foundation5ElementModifier-debug", "../lib/valid/services/validationManager-debug" ], function(require, exports, module) {
    require("./app-debug");
    module.exports = {
        init: function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, [ "app" ]);
            });
        }
    };
});

define("fare/oc/1.0.0/edit/app-debug", [ "fare/oc/1.0.0/edit/services/services-debug", "fare/oc/1.0.0/edit/controllers/index-debug", "fare/oc/1.0.0/edit/controllers/eidtController-debug", "fare/oc/1.0.0/edit/controllers/controllers-debug", "fare/oc/1.0.0/edit/directives/index-debug", "fare/oc/1.0.0/edit/directives/tableDirective-debug", "fare/oc/1.0.0/edit/directives/directives-debug", "underscore-debug", "fare/oc/1.0.0/edit/directives/commonDirective-debug", "fare/oc/1.0.0/edit/directives/validDirective-debug", "fare/oc/1.0.0/lib/module-debug", "fare/oc/1.0.0/lib/helpers/compiler-debug", "fare/oc/1.0.0/lib/helpers/date-formatter-debug", "fare/oc/1.0.0/lib/helpers/date-parser-debug", "fare/oc/1.0.0/lib/helpers/debounce-debug", "fare/oc/1.0.0/lib/helpers/dimensions-debug", "fare/oc/1.0.0/lib/helpers/parse-options-debug", "fare/oc/1.0.0/lib/helpers/raf-debug", "fare/oc/1.0.0/lib/datepicker/datepicker-debug", "fare/oc/1.0.0/lib/timepicker/timepicker-debug", "fare/oc/1.0.0/lib/tooltip/tooltip-debug", "fare/oc/1.0.0/lib/valid/index-debug", "fare/oc/1.0.0/lib/valid/config/index-debug", "fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug", "fare/oc/1.0.0/lib/valid/directives/index-debug", "fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug", "fare/oc/1.0.0/lib/valid/directives/formReset-debug", "fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug", "fare/oc/1.0.0/lib/valid/providers/validator-debug", "fare/oc/1.0.0/lib/valid/services/index-debug", "fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/debounce-debug", "fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug", "fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/validationManager-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/services/services-debug");
    require("fare/oc/1.0.0/edit/controllers/index-debug");
    require("fare/oc/1.0.0/edit/directives/index-debug");
    //lib中的指令
    require("fare/oc/1.0.0/lib/module-debug");
    var app = angular.module("app", [ "app.factory", "app.controllers", "app.directives", "mgcrea.ngStrap" ]).run([ "bootstrap3ElementModifier", function(bootstrap3ElementModifier) {
        bootstrap3ElementModifier.enableValidationStateIcons(true);
    } ]);
    app.constant("NEW_ADD_STR", "add");
    //方法3定义全局变量 
    app.constant("UPDATE_STR", "update");
    //方法3定义全局变量 
    app.constant("DEFAULT_SERVICETYPE", "F");
});

define("fare/oc/1.0.0/edit/services/services-debug", [], function(require, exports, module) {
    var app = angular.module("app.factory", []);
    //require('angular-resource') ;
    app.factory("SelectListData", function() {
        return {
            weightUnitList: [ //行李单
            {
                name: "选择",
                value: ""
            }, {
                name: "千克",
                value: "K"
            }, {
                name: "磅",
                value: "P"
            } ],
            cabinList: [ //舱位list集合
            {
                name: "选择",
                value: ""
            }, {
                name: "R-豪华头等舱",
                value: "R"
            }, {
                name: "F-头等舱",
                value: "F"
            }, {
                name: "J-豪华商务舱",
                value: "J"
            }, {
                name: "C-商务舱",
                value: "C"
            }, {
                name: "P-豪华经济舱",
                value: "P"
            }, {
                name: "Y-经济舱",
                value: "Y"
            } ],
            geoLocTypeList: [ //区域集合//geoSpecTypeList
            {
                name: "选择",
                value: ""
            }, {
                name: "A-大区",
                value: "A"
            }, {
                name: "C-城市",
                value: "C"
            }, {
                name: "N-国家",
                value: "N"
            }, {
                name: "P-机场",
                value: "P"
            }, {
                name: "S-州",
                value: "S"
            }, {
                name: "Z-区域",
                value: "Z"
            } ],
            indicatorReissueRefundList: [ //退/改
            {
                name: "选择",
                value: ""
            }, {
                name: "不可退款",
                value: "N"
            }, {
                name: "可退款",
                value: "Y"
            }, {
                name: "不可退款，下一次购票可同EMD单出",
                value: "R"
            } ],
            formOfRefundList: [ //退款形式
            {
                name: "选择",
                value: ""
            }, {
                name: "按原付款渠道退款",
                value: "1"
            }, {
                name: "按电子凭证退款",
                value: "2"
            } ],
            geoSpecSectPortJourneyList: [ {
                name: "选择",
                value: ""
            }, {
                name: "区域",
                value: "S"
            }, {
                name: "部分",
                value: "P"
            }, {
                name: "全程",
                value: "J"
            } ],
            geoSpecExceptionStopUnitList: [ {
                name: "分",
                value: "N"
            }, {
                name: "小时",
                value: "H"
            }, {
                name: "天",
                value: "D"
            }, {
                name: "周",
                value: "W"
            }, {
                name: "月",
                value: "M"
            } ],
            timeApplicationList: [ {
                name: "选择",
                value: ""
            }, {
                name: "分别",
                value: "D"
            }, {
                name: "之间",
                value: "R"
            } ]
        };
    });
    app.factory("FormData", [ "DEFAULT_SERVICETYPE", function(DEFAULT_SERVICETYPE) {
        var contextPath = $.trim($("#contextPath").val());
        var carrCode = $.trim($("#carrCode").val());
        var action = $.trim($("#action").val());
        console.log("[contextPath : " + contextPath + "],[carrCode : " + carrCode + "],[action:" + action + "]");
        return {
            id: "",
            status: "",
            statusDes: "",
            status: "",
            contextPath: contextPath,
            carrCode: carrCode,
            serviceAndSubCode: "",
            serviceType: DEFAULT_SERVICETYPE,
            //s7中包含信息//默认值为'F'//根据选择的s5决定是'F'/'M'
            action: action,
            sel1: {
                showStr: "",
                value: ""
            },
            sel2: {
                showStr: "",
                value: ""
            },
            sel3: {
                showStr: "",
                value: ""
            },
            firstMaintenanceDate: "2015-09-09",
            //-----------页面第二部分开始--------------//
            lastMaintenanceDate: "",
            description: "我的描述信息",
            //描述
            fareBasis: "",
            //运价基础
            freeBaggageAllowancePieces: "",
            //免费行李件数
            firstExcessOccurrence: "1",
            //收费行李件数起点
            lastExcessOccurrence: "",
            //收费行李件数结束
            freeBaggageAllowanceWeight: "",
            //免费重量
            freeBaggageAllowanceUnit: "",
            //免费单位
            noChargeNotAvailable: "",
            //'E'的时候'免费'//s7中包含信息
            list196VO: [],
            serviceFeeCurTableNo170: "",
            list170VO: [ //金额表//对应上面的收费
            {
                saleGeographicPointType: "A",
                saleGeographicPoint: "1",
                specFeeAmount: "11",
                specFeeCurrency: "CNY"
            }, {
                saleGeographicPointType: "N",
                saleGeographicPoint: "YY",
                specFeeAmount: "22",
                specFeeCurrency: "CNY"
            } ],
            //-------------页面第二部分结束---------------------------//
            mileageMinimum: "",
            //里程//新增字段
            mileageMaximum: "",
            //里程//新增字段
            specifiedServiceFeeApp: "",
            //适用于//新增字段
            specServiceFeeColSub: "",
            //包含，扣除//新增字段
            specServiceFeeNetSell: "",
            //净价/销售价//新增字段
            specSevFeeAndOrIndicator: "",
            //或、和//新增字段
            specifiedServiceFeeMileage: "",
            //里程//新增字段
            availability: "N",
            //必须检查可用性（查库存）
            sequenceNumber: "",
            //优先级序号//--------------------页面第三部分开始---------------------------//
            passengerTypeCode: "",
            //旅客类型
            minPassengerAge: "",
            //最小年龄--新增字段
            maxPassengerAge: "",
            //最大年龄--新增字段
            firstPassengerOccurrence: "",
            //个数范围    第几个到第几个【数字】//新增字段
            lastPassengerOccurrence: "",
            //个数范围    第几个到第几个【数字】//新增字段
            customerIndexScoreMinimum: "",
            //客户积分范围【数字】//新增
            customerIndexScoreMaxmum: "",
            //客户积分范围【数字】//新增
            frequentFlyerStatus: "",
            //常旅客状态
            accountCodeTableNo172: "",
            //大客户/特殊客户表（T172）//子表//新增
            list172VO: [ {
                accountCode: "001"
            } ],
            ticketDesignatorTableNo173: "",
            //指定客票表（T173）//子表//新增
            list173TicketVO: [ {
                ticketDesignator: "avx"
            } ],
            tktDesignatorTableNo173: "",
            //173
            list173TktVO: [],
            tourCode: "",
            //旅行编码（关联客票）【字母或数字】//新增
            cabin: "",
            //服务等级
            upgradeToCabin: "",
            rbdTableNo198: "",
            //暂时没啥用,后台也不使用这个字段
            list198VO: [],
            upgradeToRbdTableNo198: "",
            //暂时没啥用，后台也不是该字段
            list198UpgradeVO: [],
            securityTableNo183: "",
            //发布安全表//暂时没啥用，后台也不是该字段
            list183VO: [ //安全发布表
            {
                travelAgency: "HH",
                carrierGds: "HK",
                dutyFunctionCode: "BZ",
                geographicSpecificationType: "S",
                geographicSpecification: "CC",
                codeType: "",
                code: "",
                viewBookTkt: "XX"
            } ],
            publicPrivateIndicator: "",
            //公有、私有//新增字段
            carrierFlightTableNo186: "",
            //航班信息表//暂时没啥用，后台也不是该字段
            list186VO: [],
            taxApplication: "Y",
            //是否含税费//新增字段
            tariff: "",
            //税费
            rule: "",
            //规则
            cxrResFareTableNo171: "",
            //客票舱位等级表
            list171VO: [],
            equipment: "",
            //机型
            equipmentTypeTableNo165: "",
            list165VO: [],
            startTime: "",
            //开始时刻
            stopTime: "",
            //结束时刻
            timeApplication: "",
            //应用范围//新增字段
            dayOfWeek: "",
            //星期//新增字段
            dayOfWeekShow: {
                w1: false,
                w2: false,
                w3: false,
                w4: false,
                w5: false,
                w6: false,
                w7: false
            },
            //前台数据，后台无对应的属性
            advancedPurchasePeriod: "",
            //提前购票时间//新增字段
            advancedPurchaseUnit: "H",
            //时间单位//新增字段
            advancedPurchaseTktIssue: "",
            //是否与机票同时出票//新增字段
            indicatorReissueRefund: "",
            //退、改//新增字段
            formOfRefund: "",
            //退款形式//新增字段
            indicatorComission: "Y",
            //(是否有)代理费//新增字段
            indicatorInterline: "Y",
            //是
            firstTravelYear: "",
            firstTravelMonth: "",
            firstTravelDay: "",
            lastTravelYear: "",
            lastTravelMonth: "",
            lastTravelDay: "",
            travelStartDate: "",
            //这个是中间数据，后台不存在对应的属性
            travelEndDate: "",
            //这个是中间数据，后台不存在对应的属性
            list178Loc1Id: "",
            //区域1表格id
            list178Loc1: [],
            list178Loc2Id: "",
            //区域2表格id
            list178Loc2: [],
            list178Loc3Id: "",
            //区域3表格id
            list178Loc3: [],
            geoSpecFromToWithin: "",
            //区域限制
            geoSpecSectPortJourney: "P",
            //航段限制//目前返回的是定死的字符串‘P’
            geoSpecLoc1Type: "",
            //区域1类型
            geoSpecLoc1: "",
            //区域1代码
            geoSpecLoc2Type: "",
            //区域2类型
            geoSpecLoc2: "",
            //区域2代码
            geoSpecLoc3Type: "",
            //区域3类型
            geoSpecLoc3: "",
            //区域3代码//下面的都是新增 的字段
            geoSpecSectPortJourney: "",
            //区域/部分/全程
            geoSpecTravelIndicator: "",
            //指定区域
            geoSpecExceptionStopTime: "",
            //经停时间//新增字段
            geoSpecExceptionStopUnit: "H",
            //经停单位
            geoSpecStopConnDes: ""
        };
    } ]);
});

//主要用来加载各个控制器（所有的控制器都将在这个文件中被加载）,除此之外再不用做其他，
//因为我们可以有很多个控制器文件，按照具体需要进行添加。
define("fare/oc/1.0.0/edit/controllers/index-debug", [ "fare/oc/1.0.0/edit/controllers/eidtController-debug", "fare/oc/1.0.0/edit/controllers/controllers-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/controllers/eidtController-debug");
});

define("fare/oc/1.0.0/edit/controllers/eidtController-debug", [ "fare/oc/1.0.0/edit/controllers/controllers-debug" ], function(require, exports, module) {
    var controllers = require("fare/oc/1.0.0/edit/controllers/controllers-debug");
    //最外层controller
    controllers.controller("EditController", [ "$scope", "FormData", "NEW_ADD_STR", "UPDATE_STR", "$http", function($scope, FormData, NEW_ADD_STR, UPDATE_STR, $http) {
        $scope.NEW_ADD_STR = NEW_ADD_STR;
        //新增action字符串标记
        $scope.UPDATE_STR = UPDATE_STR;
        //更新action字符串标记
        $scope.contextPath = FormData.contextPath;
        $scope.data = FormData;
        //下面这部分是模拟测试数据之后会修改完善
        //当选择免费或则收费时触发的事件
        //表单提交
        $scope.submitForm = function(type) {
            console.info("保存保单数据 :type : " + type);
            var flag = $scope.ocForm.$valid;
            console.info("flag : " + flag);
        };
        /*********这一部分属于页面所有的静态的select框开始部分**************/
        $scope.specifiedServiceFeeAppList = [ //适用于
        {
            name: "选择",
            value: ""
        }, {
            name: "每一个票价组成部分算一次服务费用",
            value: "1"
        }, {
            name: "每一个票价组成部分算一半的服务费用",
            value: "2"
        }, {
            name: "每用一次服务算一次服务费用【F/T/M】",
            value: "3"
        }, {
            name: "匹配的部分航程算一次服务费用",
            value: "4"
        }, {
            name: "服务收费对应每张售票",
            value: "5"
        } ];
        $scope.noChargeNotAvailableList = [ {
            name: "收费",
            value: ""
        }, {
            name: "不适用",
            value: "X"
        }, {
            name: "免费，不出EMD单",
            value: "F"
        }, {
            name: "免费，出EMD单",
            value: "E"
        }, {
            name: "免费，不出EMD单，不要求预定",
            value: "G"
        }, {
            name: "免费，出EMD单，不要求预定",
            value: "H"
        }, {
            name: "免费，行李规则遵循市场方航空公司规则",
            value: "D"
        }, {
            name: "免费，行李规则遵循承运方航空公司规则",
            value: "O"
        } ];
        $scope.specServiceFeeColSubList = [ ////SPEC_SERVICE_FEE_COL_SUB//包含/扣除
        {
            name: "选择",
            value: ""
        }, {
            name: "包含",
            value: "I"
        }, {
            name: "扣除",
            value: ""
        } ];
        $scope.specServiceFeeNetSellList = [ //净价/销售价
        {
            name: "销售价",
            value: ""
        }, {
            name: "净价",
            value: "N"
        } ];
    } ]);
});

define("fare/oc/1.0.0/edit/controllers/controllers-debug", [], function(require, exports, module) {
    var controllers = angular.module("app.controllers", []);
    return controllers;
});

define("fare/oc/1.0.0/edit/directives/index-debug", [ "fare/oc/1.0.0/edit/directives/tableDirective-debug", "fare/oc/1.0.0/edit/directives/directives-debug", "underscore-debug", "fare/oc/1.0.0/edit/directives/commonDirective-debug", "fare/oc/1.0.0/edit/directives/validDirective-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/directives/tableDirective-debug");
    require("fare/oc/1.0.0/edit/directives/commonDirective-debug");
    require("fare/oc/1.0.0/edit/directives/validDirective-debug");
});

define("fare/oc/1.0.0/edit/directives/tableDirective-debug", [ "fare/oc/1.0.0/edit/directives/directives-debug", "underscore-debug" ], function(require, exports, module) {
    var directives = require("fare/oc/1.0.0/edit/directives/directives-debug");
    var tbAddButtonHtml = require("fare/oc/1.0.0/edit/tpls/tb_btnAdd-debug.html");
    var tbUpdateButtonHtml = require("fare/oc/1.0.0/edit/tpls/tb_btnUpdate-debug.html");
    var tbDeleteButtonHtml = require("fare/oc/1.0.0/edit/tpls/tb_btnDelete-debug.html");
    var tbRowHtml = require("fare/oc/1.0.0/edit/tpls/tb_row-debug.html");
    var _ = require("underscore-debug");
    directives.directive("tbDelete", function() {
        return {
            restrict: "E",
            replace: true,
            template: tbDeleteButtonHtml,
            scope: {
                list: "=",
                myindex: "="
            },
            link: function(scope, element, attrs) {
                element.bind("click", function() {
                    scope.$apply(function() {
                        scope.list.splice(scope.myindex, 1);
                    });
                });
            }
        };
    });
    directives.directive("tbAdd", [ "$compile", "SelectListData", function($compile, SelectListData) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                list: "=",
                title: "@"
            },
            template: tbAddButtonHtml,
            link: function(scope, element, attrs) {
                scope.selectList = SelectListData;
                var title = scope.title || "标题";
                scope.title = title;
                scope.rowData = {
                    type: "",
                    code: "",
                    money: "",
                    unin: "CNY"
                };
                var tplStr = attrs["tpl"];
                element.bind("click", function() {
                    var template = _.template(tbRowHtml);
                    var compileStr = template({
                        value: tplStr
                    });
                    var myModel = $("#myModal");
                    myModel.html(compileStr);
                    $compile(angular.element("body").find("#myModal"))(scope);
                    $("#myModal").modal("show").css({
                        "margin-top": "200px"
                    });
                });
                scope.submitFunc = function() {
                    console.info(scope.rowData);
                    scope.list.push(angular.copy(scope.rowData));
                    $("#myModal").modal("hide");
                };
            }
        };
    } ]);
    directives.directive("tbUpdate", [ "$compile", "SelectListData", function($compile, SelectListData) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                obj: "=",
                list: "=",
                title: "@"
            },
            template: tbUpdateButtonHtml,
            link: function(scope, element, attrs) {
                scope.selectList = SelectListData;
                var title = scope.title || "标题";
                scope.title = title;
                var tplStr = attrs["tpl"];
                element.bind("click", function() {
                    scope.rowData = angular.copy(scope.obj);
                    var template = _.template(tbRowHtml);
                    var compileStr = template({
                        value: tplStr
                    });
                    var myModel = $("#myModal");
                    myModel.html(compileStr);
                    $compile(angular.element("body").find("#myModal"))(scope);
                    $("#myModal").modal("show").css({
                        "margin-top": "200px"
                    });
                });
                scope.submitFunc = function() {
                    console.info(scope.rowData);
                    scope.obj = angular.copy(scope.rowData);
                    $("#myModal").modal("hide");
                };
            }
        };
    } ]);
});

define("fare/oc/1.0.0/edit/directives/directives-debug", [], function(require, exports, module) {
    var directives = angular.module("app.directives", []);
    return directives;
});

define("fare/oc/1.0.0/edit/tpls/tb_btnAdd-debug.html", [], '<span class="glyphicon glyphicon-plus myhand text-success"\n      data-toggle="tooltip"\n      title="新增"\n      aria-hidden="true">\n</span>');

define("fare/oc/1.0.0/edit/tpls/tb_btnUpdate-debug.html", [], '<span class="glyphicon glyphicon-pencil myhand text-info"\n      aria-hidden="true"\n      data-toggle="tooltip"\n      title="修改">\n</span>');

define("fare/oc/1.0.0/edit/tpls/tb_btnDelete-debug.html", [], '<span class="glyphicon glyphicon-remove myhand text-danger"\n      aria-hidden="true" data-toggle="tooltip" title="删除"></span>');

define("fare/oc/1.0.0/edit/tpls/tb_row-debug.html", [], '<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\n            <h4 class="modal-title" id="myModalLabel" ng-bind="title"></h4>\n        </div>\n        <div class="modal-body">\n            <form  name = "ocModelForm" class="form-horizontal" role="form">\n            <%if("tb170.html"==value){%>\n                <div class="form-group has-feedback" ng-class="{true:\'has-error\'}[ocModelForm.saleGeographicPointType.$invalid&&ocModelForm.saleGeographicPointType.$dirty]">\n                    <label  class="col-sm-3 control-label">销售地类型</label>\n                    <div class="col-sm-6">\n                        <select ng-model="rowData.saleGeographicPointType"\n                                class="form-control input-sm"\n                                ng-options="o.value as o.name for o in selectList.geoLocTypeList">\n                        </select>\n                    </div>\n                </div>\n                <div class="form-group  has-feedback" ng-class="{true:\'has-error\'}[ocModelForm.saleGeographicPoint.$invalid&&ocModelForm.saleGeographicPoint.$dirty]">\n                    <label  class="col-sm-3 control-label">销售地代码</label>\n                    <div class="col-sm-6">\n                        <input type="text"  name="saleGeographicPoint" ng-required="true" ng-model="rowData.saleGeographicPoint" class="form-control input-sm"  >\n                        <oc-input-valid name = "ocModelForm.saleGeographicPoint"></oc-input-valid>\n                    </div>\n                    <div class="col-sm-3 pt_tip" ng-show="ocModelForm.saleGeographicPoint.$dirty">\n                        <span class = "text-danger" ng-show="ocModelForm.saleGeographicPoint.$error.required">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group  has-feedback" ng-class="{true:\'has-error\'}[ocModelForm.specFeeAmount.$invalid&&ocModelForm.specFeeAmount.$dirty]">\n                    <label  class="col-sm-3 control-label">金额</label>\n                    <div class="col-sm-6">\n                        <input type="text" integer="true" ng-maxlength="7"  ng-required="true" name ="specFeeAmount" ng-model="rowData.specFeeAmount" class="form-control input-sm" >\n                        <oc-input-valid name = "ocModelForm.specFeeAmount"></oc-input-valid>\n                    </div>\n                    <div class="col-sm-3 pt_tip" ng-show="ocModelForm.specFeeAmount.$dirty">\n                        <span class = "text-danger" ng-show="ocModelForm.specFeeAmount.$error.integer">必须输入正整数</span>\n                        <span class = "text-danger" ng-show="ocModelForm.specFeeAmount.$error.required">必填项</span>\n                        <span class = "text-danger" ng-show="ocModelForm.specFeeAmount.$error.maxlength">超过7位</span>\n                    </div>\n                </div>\n                <div class="form-group  has-feedback" ng-class="{true:\'has-error\'}[ocModelForm.specFeeCurrency.$invalid&&ocModelForm.specFeeCurrency.$dirty]">\n                    <label  class="col-sm-3 control-label">货比类型</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-maxlength="3" ng-required="true" name="specFeeCurrency" ng-model="rowData.specFeeCurrency" upper-input="" class="form-control input-sm">\n                        <oc-input-valid name = "ocModelForm.specFeeCurrency"></oc-input-valid>\n                    </div>\n                    <div class="col-sm-3 pt_tip" ng-show="ocModelForm.specFeeCurrency.$dirty">\n                        <span class = "text-danger"  ng-show="ocModelForm.specFeeCurrency.$error.required">必填项</span>\n                        <span class = "text-danger"  ng-show="ocModelForm.specFeeCurrency.$error.maxlength">超过3位</span>\n                    </div>\n                </div>\n            <%}else if("tb172.html"==value){%>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">大客户编码</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.accountCode" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n            <%}else if("tb173Ticket.html"==value){%>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">指定客票</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.ticketDesignator" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n            <%}else if("tb183.html"==value){%>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">旅行社</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.travelAgency" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">航空公司、分销商</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.carrierGds" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">职责、功能码</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.dutyFunctionCode" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">区域类型</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.geographicSpecificationType" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">区域代码</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.geographicSpecification" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">发布对象类型</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.codeType" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">发布对象代码</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.code" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n                <div class="form-group   has-success has-feedback">\n                    <label  class="col-sm-3 control-label">权限</label>\n                    <div class="col-sm-6">\n                        <input type="text" ng-model="rowData.viewBookTkt" class="form-control input-sm"  aria-describedby="inputSuccess2Status">\n                        <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>\n                    </div>\n                    <div class="col-sm-3 pt_tip">\n                        <span class = "text-danger">必填项</span>\n                    </div>\n                </div>\n            <%}else{%>\n                <h2>表格不支持修改</h2>\n            <%}%>\n            </form>\n        </div>\n        <div class="modal-footer">\n            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>\n            <button type="button" ng-click="submitFunc()" ng-disabled = "ocModelForm.$invalid" class="btn btn-primary">提交更改</button>\n        </div>\n    </div>\n</div>\n\n\n\n');

define("fare/oc/1.0.0/edit/directives/commonDirective-debug", [ "fare/oc/1.0.0/edit/directives/directives-debug", "underscore-debug" ], function(require, exports, module) {
    var directives = require("fare/oc/1.0.0/edit/directives/directives-debug");
    var _ = require("underscore-debug");
    directives.directive("ocInputValid", function() {
        return {
            restrict: "E",
            replace: true,
            template: function(element, attrs) {
                var str = attrs["name"];
                var retStr = str + ".$invalid&&" + str + ".$dirty";
                var inputValidHtml = '<span class="glyphicon  form-control-feedback"ng-class="{true:\'glyphicon-remove\'}[' + retStr + ']" aria-hidden="true"></span>';
                return inputValidHtml;
            },
            link: function(scope, element, attrs) {
                element.bind("click", function() {
                    scope.$apply(function() {
                        scope.list.splice(scope.myindex, 1);
                    });
                });
            }
        };
    });
    directives.directive("commmonInput", function() {
        return {
            restrict: "E",
            replace: true,
            scope: {},
            link: function(scope, elem, attrs) {
                elem.trigger("click");
            }
        };
    });
    directives.directive("setFocus", function() {
        return {
            restrict: "AE",
            replace: true,
            scope: {},
            link: function(scope, elem, attrs) {
                elem.trigger("click");
            }
        };
    });
    directives.directive("upperInput", function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;
                element.bind("blur", function() {
                    scope.$apply(function() {
                        var tmp = ngModel.$viewValue || "";
                        tmp = tmp.toUpperCase();
                        ngModel.$setViewValue(tmp);
                        element.val(tmp);
                    });
                });
            }
        };
    });
});

define("fare/oc/1.0.0/edit/directives/validDirective-debug", [ "fare/oc/1.0.0/edit/directives/directives-debug" ], function(require, exports, module) {
    var directives = require("fare/oc/1.0.0/edit/directives/directives-debug");
    //数字字母
    var ALPHANUMERIC_REGEXP = /^[A-Za-z0-9]{0,}$/;
    directives.directive("alphanumeric", function() {
        return {
            require: "ngModel",
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (ALPHANUMERIC_REGEXP.test(viewValue)) {
                        ctrl.$setValidity("alphanumeric", true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity("alphanumeric", false);
                        return undefined;
                    }
                });
            }
        };
    });
    /**下面的工具指令暂时还没有使用**/
    var INTEGER_REGEXP = /^\-?\d*$/;
    directives.directive("integer", function() {
        return {
            require: "ngModel",
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (INTEGER_REGEXP.test(viewValue)) {
                        ctrl.$setValidity("integer", true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity("integer", false);
                        return undefined;
                    }
                });
            }
        };
    });
    var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
    directives.directive("smartFloat", function() {
        return {
            require: "ngModel",
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    if (FLOAT_REGEXP.test(viewValue)) {
                        ctrl.$setValidity("float", true);
                        return parseFloat(viewValue.replace(",", "."));
                    } else {
                        ctrl.$setValidity("float", false);
                        return undefined;
                    }
                });
            }
        };
    });
    directives.directive("remoteValidation", [ "$http", function($http) {
        return {
            require: "ngModel",
            link: function(scope, elm, attrs, ctrl) {
                elm.bind("keyup", function() {
                    $http({
                        method: "GET",
                        url: "FormValidation.jsp"
                    }).success(function(data, status, headers, config) {
                        if (parseInt(data) == 0) {
                            ctrl.$setValidity("remote", true);
                        } else {
                            ctrl.$setValidity("remote", false);
                        }
                    }).error(function(data, status, headers, config) {
                        ctrl.$setValidity("remote", false);
                    });
                });
            }
        };
    } ]);
});

define("fare/oc/1.0.0/lib/module-debug", [ "fare/oc/1.0.0/lib/helpers/compiler-debug", "fare/oc/1.0.0/lib/helpers/date-formatter-debug", "fare/oc/1.0.0/lib/helpers/date-parser-debug", "fare/oc/1.0.0/lib/helpers/debounce-debug", "fare/oc/1.0.0/lib/helpers/dimensions-debug", "fare/oc/1.0.0/lib/helpers/parse-options-debug", "fare/oc/1.0.0/lib/helpers/raf-debug", "fare/oc/1.0.0/lib/datepicker/datepicker-debug", "fare/oc/1.0.0/lib/timepicker/timepicker-debug", "fare/oc/1.0.0/lib/tooltip/tooltip-debug", "fare/oc/1.0.0/lib/valid/index-debug", "fare/oc/1.0.0/lib/valid/config/index-debug", "fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug", "fare/oc/1.0.0/lib/valid/directives/index-debug", "fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug", "fare/oc/1.0.0/lib/valid/directives/formReset-debug", "fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug", "fare/oc/1.0.0/lib/valid/providers/validator-debug", "fare/oc/1.0.0/lib/valid/services/index-debug", "fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/debounce-debug", "fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug", "fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/validationManager-debug" ], function(require, exports, module) {
    //工具类
    require("fare/oc/1.0.0/lib/helpers/compiler-debug");
    require("fare/oc/1.0.0/lib/helpers/date-formatter-debug");
    require("fare/oc/1.0.0/lib/helpers/date-parser-debug");
    require("fare/oc/1.0.0/lib/helpers/debounce-debug");
    require("fare/oc/1.0.0/lib/helpers/dimensions-debug");
    require("fare/oc/1.0.0/lib/helpers/parse-options-debug");
    require("fare/oc/1.0.0/lib/helpers/raf-debug");
    //下面是使用的组件
    require("fare/oc/1.0.0/lib/datepicker/datepicker-debug");
    require("fare/oc/1.0.0/lib/timepicker/timepicker-debug");
    require("fare/oc/1.0.0/lib/tooltip/tooltip-debug");
    require("fare/oc/1.0.0/lib/valid/index-debug");
    angular.module("mgcrea.ngStrap", [ "mgcrea.ngStrap.datepicker", "mgcrea.ngStrap.timepicker", "mgcrea.ngStrap.tooltip", "jcs-autoValidate" ]);
});

define("fare/oc/1.0.0/lib/helpers/compiler-debug", [], function(require, exports, module) {
    "use strict";
    // NOTICE: This file was forked from the angular-material project (github.com/angular/material)
    // MIT Licensed - Copyright (c) 2014-2015 Google, Inc. http://angularjs.org
    angular.module("mgcrea.ngStrap.core", []).service("$bsCompiler", [ "$q", "$http", "$injector", "$compile", "$controller", "$templateCache", function bsCompilerService($q, $http, $injector, $compile, $controller, $templateCache) {
        /* jshint validthis: true */
        /*
   * @ngdoc service
   * @name $bsCompiler
   * @module material.core
   * @description
   * The $bsCompiler service is an abstraction of angular's compiler, that allows the developer
   * to easily compile an element with a templateUrl, controller, and locals.
   *
   * @usage
   * <hljs lang="js">
   * $bsCompiler.compile({
   *   templateUrl: 'modal.html',
   *   controller: 'ModalCtrl',
   *   locals: {
   *     modal: myModalInstance;
   *   }
   * }).then(function(compileData) {
   *   compileData.element; // modal.html's template in an element
   *   compileData.link(myScope); //attach controller & scope to element
   * });
   * </hljs>
   */
        /*
    * @ngdoc method
    * @name $bsCompiler#compile
    * @description A helper to compile an HTML template/templateUrl with a given controller,
    * locals, and scope.
    * @param {object} options An options object, with the following properties:
    *
    *    - `controller` - `{(string=|function()=}` Controller fn that should be associated with
    *      newly created scope or the name of a registered controller if passed as a string.
    *    - `controllerAs` - `{string=}` A controller alias name. If present the controller will be
    *      published to scope under the `controllerAs` name.
    *    - `template` - `{string=}` An html template as a string.
    *    - `templateUrl` - `{string=}` A path to an html template.
    *    - `transformTemplate` - `{function(template)=}` A function which transforms the template after
    *      it is loaded. It will be given the template string as a parameter, and should
    *      return a a new string representing the transformed template.
    *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
    *      be injected into the controller. If any of these dependencies are promises, the compiler
    *      will wait for them all to be resolved, or if one is rejected before the controller is
    *      instantiated `compile()` will fail..
    *      * `key` - `{string}`: a name of a dependency to be injected into the controller.
    *      * `factory` - `{string|function}`: If `string` then it is an alias for a service.
    *        Otherwise if function, then it is injected and the return value is treated as the
    *        dependency. If the result is a promise, it is resolved before its value is
    *        injected into the controller.
    *
    * @returns {object=} promise A promise, which will be resolved with a `compileData` object.
    * `compileData` has the following properties:
    *
    *   - `element` - `{element}`: an uncompiled element matching the provided template.
    *   - `link` - `{function(scope)}`: A link function, which, when called, will compile
    *     the element and instantiate the provided controller (if given).
    *   - `locals` - `{object}`: The locals which will be passed into the controller once `link` is
    *     called. If `bindToController` is true, they will be coppied to the ctrl instead
    *   - `bindToController` - `bool`: bind the locals to the controller, instead of passing them in.
    */
        this.compile = function(options) {
            if (options.template && /\.html$/.test(options.template)) {
                console.warn("Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead.");
                options.templateUrl = options.template;
                options.template = "";
            }
            var templateUrl = options.templateUrl;
            var template = options.template || "";
            var controller = options.controller;
            var controllerAs = options.controllerAs;
            var resolve = angular.copy(options.resolve || {});
            var locals = angular.copy(options.locals || {});
            var transformTemplate = options.transformTemplate || angular.identity;
            var bindToController = options.bindToController;
            // Take resolve values and invoke them.
            // Resolves can either be a string (value: 'MyRegisteredAngularConst'),
            // or an invokable 'factory' of sorts: (value: function ValueGetter($dependency) {})
            angular.forEach(resolve, function(value, key) {
                if (angular.isString(value)) {
                    resolve[key] = $injector.get(value);
                } else {
                    resolve[key] = $injector.invoke(value);
                }
            });
            // Add the locals, which are just straight values to inject
            // eg locals: { three: 3 }, will inject three into the controller
            angular.extend(resolve, locals);
            if (templateUrl) {
                resolve.$template = fetchTemplate(templateUrl);
            } else {
                resolve.$template = $q.when(template);
            }
            if (options.contentTemplate) {
                // TODO(mgcrea): deprecate?
                resolve.$template = $q.all([ resolve.$template, fetchTemplate(options.contentTemplate) ]).then(function(templates) {
                    var templateEl = angular.element(templates[0]);
                    var contentEl = findElement('[ng-bind="content"]', templateEl[0]).removeAttr("ng-bind").html(templates[1]);
                    // Drop the default footer as you probably don't want it if you use a custom contentTemplate
                    if (!options.templateUrl) contentEl.next().remove();
                    return templateEl[0].outerHTML;
                });
            }
            // Wait for all the resolves to finish if they are promises
            return $q.all(resolve).then(function(locals) {
                var template = transformTemplate(locals.$template);
                if (options.html) {
                    template = template.replace(/ng-bind="/gi, 'ng-bind-html="');
                }
                // var element = options.element || angular.element('<div>').html(template.trim()).contents();
                var element = angular.element("<div>").html(template.trim()).contents();
                var linkFn = $compile(element);
                // Return a linking function that can be used later when the element is ready
                return {
                    locals: locals,
                    element: element,
                    link: function link(scope) {
                        locals.$scope = scope;
                        // Instantiate controller if it exists, because we have scope
                        if (controller) {
                            var invokeCtrl = $controller(controller, locals, true);
                            if (bindToController) {
                                angular.extend(invokeCtrl.instance, locals);
                            }
                            // Support angular@~1.2 invokeCtrl
                            var ctrl = angular.isObject(invokeCtrl) ? invokeCtrl : invokeCtrl();
                            // See angular-route source for this logic
                            element.data("$ngControllerController", ctrl);
                            element.children().data("$ngControllerController", ctrl);
                            if (controllerAs) {
                                scope[controllerAs] = ctrl;
                            }
                        }
                        return linkFn.apply(null, arguments);
                    }
                };
            });
        };
        function findElement(query, element) {
            return angular.element((element || document).querySelectorAll(query));
        }
        var fetchPromises = {};
        function fetchTemplate(template) {
            if (fetchPromises[template]) return fetchPromises[template];
            return fetchPromises[template] = $http.get(template, {
                cache: $templateCache
            }).then(function(res) {
                return res.data;
            });
        }
    } ]);
});

define("fare/oc/1.0.0/lib/helpers/date-formatter-debug", [], function(require, exports, module) {
    "use strict";
    angular.module("mgcrea.ngStrap.helpers.dateFormatter", []).service("$dateFormatter", [ "$locale", "dateFilter", function($locale, dateFilter) {
        // The unused `lang` arguments are on purpose. The default implementation does not
        // use them and it always uses the locale loaded into the `$locale` service.
        // Custom implementations might use it, thus allowing different directives to
        // have different languages.
        this.getDefaultLocale = function() {
            return $locale.id;
        };
        // Format is either a data format name, e.g. "shortTime" or "fullDate", or a date format
        // Return either the corresponding date format or the given date format.
        this.getDatetimeFormat = function(format, lang) {
            return $locale.DATETIME_FORMATS[format] || format;
        };
        this.weekdaysShort = function(lang) {
            return $locale.DATETIME_FORMATS.SHORTDAY;
        };
        function splitTimeFormat(format) {
            return /(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(format).slice(1);
        }
        // h:mm a => h
        this.hoursFormat = function(timeFormat) {
            return splitTimeFormat(timeFormat)[0];
        };
        // h:mm a => mm
        this.minutesFormat = function(timeFormat) {
            return splitTimeFormat(timeFormat)[2];
        };
        // h:mm:ss a => ss
        this.secondsFormat = function(timeFormat) {
            return splitTimeFormat(timeFormat)[4];
        };
        // h:mm a => :
        this.timeSeparator = function(timeFormat) {
            return splitTimeFormat(timeFormat)[1];
        };
        // h:mm:ss a => true, h:mm a => false
        this.showSeconds = function(timeFormat) {
            return !!splitTimeFormat(timeFormat)[4];
        };
        // h:mm a => true, H.mm => false
        this.showAM = function(timeFormat) {
            return !!splitTimeFormat(timeFormat)[5];
        };
        this.formatDate = function(date, format, lang, timezone) {
            return dateFilter(date, format, timezone);
        };
    } ]);
});

define("fare/oc/1.0.0/lib/helpers/date-parser-debug", [], function(require, exports, module) {
    "use strict";
    angular.module("mgcrea.ngStrap.helpers.dateParser", []).provider("$dateParser", [ "$localeProvider", function($localeProvider) {
        // define a custom ParseDate object to use instead of native Date
        // to avoid date values wrapping when setting date component values
        function ParseDate() {
            this.year = 1970;
            this.month = 0;
            this.day = 1;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.milliseconds = 0;
        }
        ParseDate.prototype.setMilliseconds = function(value) {
            this.milliseconds = value;
        };
        ParseDate.prototype.setSeconds = function(value) {
            this.seconds = value;
        };
        ParseDate.prototype.setMinutes = function(value) {
            this.minutes = value;
        };
        ParseDate.prototype.setHours = function(value) {
            this.hours = value;
        };
        ParseDate.prototype.getHours = function() {
            return this.hours;
        };
        ParseDate.prototype.setDate = function(value) {
            this.day = value;
        };
        ParseDate.prototype.setMonth = function(value) {
            this.month = value;
        };
        ParseDate.prototype.setFullYear = function(value) {
            this.year = value;
        };
        ParseDate.prototype.fromDate = function(value) {
            this.year = value.getFullYear();
            this.month = value.getMonth();
            this.day = value.getDate();
            this.hours = value.getHours();
            this.minutes = value.getMinutes();
            this.seconds = value.getSeconds();
            this.milliseconds = value.getMilliseconds();
            return this;
        };
        ParseDate.prototype.toDate = function() {
            return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
        };
        var proto = ParseDate.prototype;
        function noop() {}
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        function indexOfCaseInsensitive(array, value) {
            var len = array.length, str = value.toString().toLowerCase();
            for (var i = 0; i < len; i++) {
                if (array[i].toLowerCase() === str) {
                    return i;
                }
            }
            return -1;
        }
        var defaults = this.defaults = {
            format: "shortDate",
            strict: false
        };
        var myGet = function($locale, dateFilter) {
            var DateParserFactory = function(config) {
                var options = angular.extend({}, defaults, config);
                var $dateParser = {};
                var regExpMap = {
                    sss: "[0-9]{3}",
                    ss: "[0-5][0-9]",
                    s: options.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                    mm: "[0-5][0-9]",
                    m: options.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                    HH: "[01][0-9]|2[0-3]",
                    H: options.strict ? "1?[0-9]|2[0-3]" : "[01]?[0-9]|2[0-3]",
                    hh: "[0][1-9]|[1][012]",
                    h: options.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                    a: "AM|PM",
                    EEEE: $locale.DATETIME_FORMATS.DAY.join("|"),
                    EEE: $locale.DATETIME_FORMATS.SHORTDAY.join("|"),
                    dd: "0[1-9]|[12][0-9]|3[01]",
                    d: options.strict ? "[1-9]|[1-2][0-9]|3[01]" : "0?[1-9]|[1-2][0-9]|3[01]",
                    MMMM: $locale.DATETIME_FORMATS.MONTH.join("|"),
                    MMM: $locale.DATETIME_FORMATS.SHORTMONTH.join("|"),
                    MM: "0[1-9]|1[012]",
                    M: options.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                    yyyy: "[1]{1}[0-9]{3}|[2]{1}[0-9]{3}",
                    yy: "[0-9]{2}",
                    y: options.strict ? "-?(0|[1-9][0-9]{0,3})" : "-?0*[0-9]{1,4}"
                };
                var setFnMap = {
                    sss: proto.setMilliseconds,
                    ss: proto.setSeconds,
                    s: proto.setSeconds,
                    mm: proto.setMinutes,
                    m: proto.setMinutes,
                    HH: proto.setHours,
                    H: proto.setHours,
                    hh: proto.setHours,
                    h: proto.setHours,
                    EEEE: noop,
                    EEE: noop,
                    dd: proto.setDate,
                    d: proto.setDate,
                    a: function(value) {
                        var hours = this.getHours() % 12;
                        return this.setHours(value.match(/pm/i) ? hours + 12 : hours);
                    },
                    MMMM: function(value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.MONTH, value));
                    },
                    MMM: function(value) {
                        return this.setMonth(indexOfCaseInsensitive($locale.DATETIME_FORMATS.SHORTMONTH, value));
                    },
                    MM: function(value) {
                        return this.setMonth(1 * value - 1);
                    },
                    M: function(value) {
                        return this.setMonth(1 * value - 1);
                    },
                    yyyy: proto.setFullYear,
                    yy: function(value) {
                        return this.setFullYear(2e3 + 1 * value);
                    },
                    y: function(value) {
                        return 1 * value <= 50 && value.length === 2 ? this.setFullYear(2e3 + 1 * value) : this.setFullYear(1 * value);
                    }
                };
                var regex, setMap;
                $dateParser.init = function() {
                    $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format;
                    regex = regExpForFormat($dateParser.$format);
                    setMap = setMapForFormat($dateParser.$format);
                };
                $dateParser.isValid = function(date) {
                    if (angular.isDate(date)) return !isNaN(date.getTime());
                    return regex.test(date);
                };
                $dateParser.parse = function(value, baseDate, format, timezone) {
                    // check for date format special names
                    if (format) format = $locale.DATETIME_FORMATS[format] || format;
                    if (angular.isDate(value)) value = dateFilter(value, format || $dateParser.$format, timezone);
                    var formatRegex = format ? regExpForFormat(format) : regex;
                    var formatSetMap = format ? setMapForFormat(format) : setMap;
                    var matches = formatRegex.exec(value);
                    if (!matches) return false;
                    // use custom ParseDate object to set parsed values
                    var date = baseDate && !isNaN(baseDate.getTime()) ? new ParseDate().fromDate(baseDate) : new ParseDate().fromDate(new Date(1970, 0, 1, 0));
                    for (var i = 0; i < matches.length - 1; i++) {
                        formatSetMap[i] && formatSetMap[i].call(date, matches[i + 1]);
                    }
                    // convert back to native Date object
                    var newDate = date.toDate();
                    // check new native Date object for day values overflow
                    if (parseInt(date.day, 10) !== newDate.getDate()) {
                        return false;
                    }
                    return newDate;
                };
                $dateParser.getDateForAttribute = function(key, value) {
                    var date;
                    if (value === "today") {
                        var today = new Date();
                        date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (key === "maxDate" ? 1 : 0), 0, 0, 0, key === "minDate" ? 0 : -1);
                    } else if (angular.isString(value) && value.match(/^".+"$/)) {
                        // Support {{ dateObj }}
                        date = new Date(value.substr(1, value.length - 2));
                    } else if (isNumeric(value)) {
                        date = new Date(parseInt(value, 10));
                    } else if (angular.isString(value) && 0 === value.length) {
                        // Reset date
                        date = key === "minDate" ? -Infinity : +Infinity;
                    } else {
                        date = new Date(value);
                    }
                    return date;
                };
                $dateParser.getTimeForAttribute = function(key, value) {
                    var time;
                    if (value === "now") {
                        time = new Date().setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && value.match(/^".+"$/)) {
                        time = new Date(value.substr(1, value.length - 2)).setFullYear(1970, 0, 1);
                    } else if (isNumeric(value)) {
                        time = new Date(parseInt(value, 10)).setFullYear(1970, 0, 1);
                    } else if (angular.isString(value) && 0 === value.length) {
                        // Reset time
                        time = key === "minTime" ? -Infinity : +Infinity;
                    } else {
                        time = $dateParser.parse(value, new Date(1970, 0, 1, 0));
                    }
                    return time;
                };
                /* Handle switch to/from daylight saving.
      * Hours may be non-zero on daylight saving cut-over:
      * > 12 when midnight changeover, but then cannot generate
      * midnight datetime, so jump to 1AM, otherwise reset.
      * @param  date  (Date) the date to check
      * @return  (Date) the corrected date
      *
      * __ copied from jquery ui datepicker __
      */
                $dateParser.daylightSavingAdjust = function(date) {
                    if (!date) {
                        return null;
                    }
                    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
                    return date;
                };
                /* Correct the date for timezone offset.
      * @param  date  (Date) the date to adjust
      * @param  timezone  (string) the timezone to adjust for
      * @param  undo  (boolean) to add or subtract timezone offset
      * @return  (Date) the corrected date
      */
                $dateParser.timezoneOffsetAdjust = function(date, timezone, undo) {
                    if (!date) {
                        return null;
                    }
                    // Right now, only 'UTC' is supported.
                    if (timezone && timezone === "UTC") {
                        date = new Date(date.getTime());
                        date.setMinutes(date.getMinutes() + (undo ? -1 : 1) * date.getTimezoneOffset());
                    }
                    return date;
                };
                // Private functions
                function setMapForFormat(format) {
                    var keys = Object.keys(setFnMap), i;
                    var map = [], sortedMap = [];
                    // Map to setFn
                    var clonedFormat = format;
                    for (i = 0; i < keys.length; i++) {
                        if (format.split(keys[i]).length > 1) {
                            var index = clonedFormat.search(keys[i]);
                            format = format.split(keys[i]).join("");
                            if (setFnMap[keys[i]]) {
                                map[index] = setFnMap[keys[i]];
                            }
                        }
                    }
                    // Sort result map
                    angular.forEach(map, function(v) {
                        // conditional required since angular.forEach broke around v1.2.21
                        // related pr: https://github.com/angular/angular.js/pull/8525
                        if (v) sortedMap.push(v);
                    });
                    return sortedMap;
                }
                function escapeReservedSymbols(text) {
                    return text.replace(/\//g, "[\\/]").replace("/-/g", "[-]").replace(/\./g, "[.]").replace(/\\s/g, "[\\s]");
                }
                function regExpForFormat(format) {
                    var keys = Object.keys(regExpMap), i;
                    var re = format;
                    // Abstract replaces to avoid collisions
                    for (i = 0; i < keys.length; i++) {
                        re = re.split(keys[i]).join("${" + i + "}");
                    }
                    // Replace abstracted values
                    for (i = 0; i < keys.length; i++) {
                        re = re.split("${" + i + "}").join("(" + regExpMap[keys[i]] + ")");
                    }
                    format = escapeReservedSymbols(format);
                    return new RegExp("^" + re + "$", [ "i" ]);
                }
                $dateParser.init();
                return $dateParser;
            };
            return DateParserFactory;
        };
        myGet.$inject = [ "$locale", "dateFilter" ];
        this.$get = myGet;
    } ]);
});

define("fare/oc/1.0.0/lib/helpers/debounce-debug", [], function(require, exports, module) {
    "use strict";
    angular.module("mgcrea.ngStrap.helpers.debounce", []).factory("debounce", [ "$timeout", function($timeout) {
        return function(func, wait, immediate) {
            var timeout = null;
            return function() {
                var context = this, args = arguments, callNow = immediate && !timeout;
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(function later() {
                    timeout = null;
                    if (!immediate) {
                        func.apply(context, args);
                    }
                }, wait, false);
                if (callNow) {
                    func.apply(context, args);
                }
                return timeout;
            };
        };
    } ]).factory("throttle", [ "$timeout", function($timeout) {
        return function(func, wait, options) {
            var timeout = null;
            options || (options = {});
            return function() {
                var context = this, args = arguments;
                if (!timeout) {
                    if (options.leading !== false) {
                        func.apply(context, args);
                    }
                    timeout = $timeout(function later() {
                        timeout = null;
                        if (options.trailing !== false) {
                            func.apply(context, args);
                        }
                    }, wait, false);
                }
            };
        };
    } ]);
});

define("fare/oc/1.0.0/lib/helpers/dimensions-debug", [], function(require, exports, module) {
    "use strict";
    angular.module("mgcrea.ngStrap.helpers.dimensions", []).factory("dimensions", [ "$document", "$window", function($document, $window) {
        var jqLite = angular.element;
        var fn = {};
        /**
     * Test the element nodeName
     * @param element
     * @param name
     */
        var nodeName = fn.nodeName = function(element, name) {
            return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
        };
        /**
     * Returns the element computed style
     * @param element
     * @param prop
     * @param extra
     */
        fn.css = function(element, prop, extra) {
            var value;
            if (element.currentStyle) {
                //IE
                value = element.currentStyle[prop];
            } else if (window.getComputedStyle) {
                value = window.getComputedStyle(element)[prop];
            } else {
                value = element.style[prop];
            }
            return extra === true ? parseFloat(value) || 0 : value;
        };
        /**
     * Provides read-only equivalent of jQuery's offset function:
     * @required-by bootstrap-tooltip, bootstrap-affix
     * @url http://api.jquery.com/offset/
     * @param element
     */
        fn.offset = function(element) {
            var boxRect = element.getBoundingClientRect();
            var docElement = element.ownerDocument;
            return {
                width: boxRect.width || element.offsetWidth,
                height: boxRect.height || element.offsetHeight,
                top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
                left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
            };
        };
        /**
     * Provides set equivalent of jQuery's offset function:
     * @required-by bootstrap-tooltip
     * @url http://api.jquery.com/offset/
     * @param element
     * @param options
     * @param i
     */
        fn.setOffset = function(element, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = fn.css(element, "position"), curElem = angular.element(element), props = {};
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                element.style.position = "relative";
            }
            curOffset = fn.offset(element);
            curCSSTop = fn.css(element, "top");
            curCSSLeft = fn.css(element, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = fn.position(element);
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (angular.isFunction(options)) {
                options = options.call(element, i, curOffset);
            }
            if (options.top !== null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left !== null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(curElem, props);
            } else {
                curElem.css({
                    top: props.top + "px",
                    left: props.left + "px"
                });
            }
        };
        /**
     * Provides read-only equivalent of jQuery's position function
     * @required-by bootstrap-tooltip, bootstrap-affix
     * @url http://api.jquery.com/offset/
     * @param element
     */
        fn.position = function(element) {
            var offsetParentRect = {
                top: 0,
                left: 0
            }, offsetParentElement, offset;
            // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
            if (fn.css(element, "position") === "fixed") {
                // We assume that getBoundingClientRect is available when computed position is fixed
                offset = element.getBoundingClientRect();
            } else {
                // Get *real* offsetParentElement
                offsetParentElement = offsetParent(element);
                // Get correct offsets
                offset = fn.offset(element);
                if (!nodeName(offsetParentElement, "html")) {
                    offsetParentRect = fn.offset(offsetParentElement);
                }
                // Add offsetParent borders
                offsetParentRect.top += fn.css(offsetParentElement, "borderTopWidth", true);
                offsetParentRect.left += fn.css(offsetParentElement, "borderLeftWidth", true);
            }
            // Subtract parent offsets and element margins
            return {
                width: element.offsetWidth,
                height: element.offsetHeight,
                top: offset.top - offsetParentRect.top - fn.css(element, "marginTop", true),
                left: offset.left - offsetParentRect.left - fn.css(element, "marginLeft", true)
            };
        };
        /**
     * Returns the closest, non-statically positioned offsetParent of a given element
     * @required-by fn.position
     * @param element
     */
        var offsetParent = function offsetParentElement(element) {
            var docElement = element.ownerDocument;
            var offsetParent = element.offsetParent || docElement;
            if (nodeName(offsetParent, "#document")) return docElement.documentElement;
            while (offsetParent && !nodeName(offsetParent, "html") && fn.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || docElement.documentElement;
        };
        /**
     * Provides equivalent of jQuery's height function
     * @required-by bootstrap-affix
     * @url http://api.jquery.com/height/
     * @param element
     * @param outer
     */
        fn.height = function(element, outer) {
            var value = element.offsetHeight;
            if (outer) {
                value += fn.css(element, "marginTop", true) + fn.css(element, "marginBottom", true);
            } else {
                value -= fn.css(element, "paddingTop", true) + fn.css(element, "paddingBottom", true) + fn.css(element, "borderTopWidth", true) + fn.css(element, "borderBottomWidth", true);
            }
            return value;
        };
        /**
     * Provides equivalent of jQuery's width function
     * @required-by bootstrap-affix
     * @url http://api.jquery.com/width/
     * @param element
     * @param outer
     */
        fn.width = function(element, outer) {
            var value = element.offsetWidth;
            if (outer) {
                value += fn.css(element, "marginLeft", true) + fn.css(element, "marginRight", true);
            } else {
                value -= fn.css(element, "paddingLeft", true) + fn.css(element, "paddingRight", true) + fn.css(element, "borderLeftWidth", true) + fn.css(element, "borderRightWidth", true);
            }
            return value;
        };
        return fn;
    } ]);
});

define("fare/oc/1.0.0/lib/helpers/parse-options-debug", [], function(require, exports, module) {
    "use strict";
    angular.module("mgcrea.ngStrap.helpers.parseOptions", []).provider("$parseOptions", function() {
        var defaults = this.defaults = {
            regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
        };
        this.$get = function($parse, $q) {
            function ParseOptionsFactory(attr, config) {
                var $parseOptions = {};
                // Common vars
                var options = angular.extend({}, defaults, config);
                $parseOptions.$values = [];
                // Private vars
                var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;
                $parseOptions.init = function() {
                    $parseOptions.$match = match = attr.match(options.regexp);
                    displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], 
                    groupByFn = $parse(match[3] || ""), valueFn = $parse(match[2] ? match[1] : valueName), 
                    valuesFn = $parse(match[7]);
                };
                $parseOptions.valuesFn = function(scope, controller) {
                    return $q.when(valuesFn(scope, controller)).then(function(values) {
                        if (!angular.isArray(values)) {
                            values = [];
                        }
                        $parseOptions.$values = values.length ? parseValues(values, scope) : [];
                        return $parseOptions.$values;
                    });
                };
                $parseOptions.displayValue = function(modelValue) {
                    var scope = {};
                    scope[valueName] = modelValue;
                    return displayFn(scope);
                };
                // Private functions
                function parseValues(values, scope) {
                    return values.map(function(match, index) {
                        var locals = {}, label, value;
                        locals[valueName] = match;
                        label = displayFn(scope, locals);
                        value = valueFn(scope, locals);
                        return {
                            label: label,
                            value: value,
                            index: index
                        };
                    });
                }
                $parseOptions.init();
                return $parseOptions;
            }
            return ParseOptionsFactory;
        };
    });
});

define("fare/oc/1.0.0/lib/helpers/raf-debug", [], function(require, exports, module) {
    "use strict";
    angular.version.minor < 3 && angular.version.dot < 14 && angular.module("ng").factory("$$rAF", function($window, $timeout) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame;
        var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.mozCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
        var rafSupported = !!requestAnimationFrame;
        var raf = rafSupported ? function(fn) {
            var id = requestAnimationFrame(fn);
            return function() {
                cancelAnimationFrame(id);
            };
        } : function(fn) {
            var timer = $timeout(fn, 16.66, false);
            // 1000 / 60 = 16.666
            return function() {
                $timeout.cancel(timer);
            };
        };
        raf.supported = rafSupported;
        return raf;
    });
});

define("fare/oc/1.0.0/lib/datepicker/datepicker-debug", [], function(require, exports, module) {
    var dataHtml = require("fare/oc/1.0.0/lib/datepicker/datepicker.tpl-debug.html");
    angular.module("mgcrea.ngStrap.datepicker", [ "mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.helpers.dateFormatter", "mgcrea.ngStrap.tooltip" ]).provider("$datepicker", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            //uncommenting the following line will break backwards compatability
            // prefixEvent: 'datepicker',
            prefixClass: "datepicker",
            placement: "bottom-left",
            template: dataHtml,
            trigger: "focus",
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: false,
            dateType: "date",
            dateFormat: "shortDate",
            timezone: null,
            modelDateFormat: null,
            dayFormat: "dd",
            monthFormat: "MMM",
            yearFormat: "yyyy",
            monthTitleFormat: "MMMM yyyy",
            yearTitleFormat: "yyyy",
            strictFormat: false,
            autoclose: false,
            minDate: -Infinity,
            maxDate: +Infinity,
            startView: 0,
            minView: 0,
            startWeek: 0,
            daysOfWeekDisabled: "",
            iconLeft: "glyphicon glyphicon-chevron-left",
            iconRight: "glyphicon glyphicon-chevron-right"
        };
        var myGet = function($window, $document, $rootScope, $sce, $dateFormatter, datepickerViews, $tooltip, $timeout) {
            var bodyEl = angular.element($window.document.body);
            var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
            var isTouch = "createTouch" in $window.document && isNative;
            if (!defaults.lang) defaults.lang = $dateFormatter.getDefaultLocale();
            function DatepickerFactory(element, controller, config) {
                var $datepicker = $tooltip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $datepicker.$options;
                var scope = $datepicker.$scope;
                if (options.startView) options.startView -= options.minView;
                // View vars
                var pickerViews = datepickerViews($datepicker);
                $datepicker.$views = pickerViews.views;
                var viewDate = pickerViews.viewDate;
                scope.$mode = options.startView;
                scope.$iconLeft = options.iconLeft;
                scope.$iconRight = options.iconRight;
                var $picker = $datepicker.$views[scope.$mode];
                // Scope methods
                scope.$select = function(date) {
                    $datepicker.select(date);
                };
                scope.$selectPane = function(value) {
                    $datepicker.$selectPane(value);
                };
                scope.$toggleMode = function() {
                    $datepicker.setMode((scope.$mode + 1) % $datepicker.$views.length);
                };
                // Public methods
                $datepicker.update = function(date) {
                    // console.warn('$datepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $datepicker.$date = date;
                        $picker.update.call($picker, date);
                    }
                    // Build only if pristine
                    $datepicker.$build(true);
                };
                $datepicker.updateDisabledDates = function(dateRanges) {
                    options.disabledDateRanges = dateRanges;
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], $datepicker.$setDisabledEl);
                    }
                };
                $datepicker.select = function(date, keep) {
                    // console.warn('$datepicker.select', date, scope.$mode);
                    if (!angular.isDate(controller.$dateValue)) controller.$dateValue = new Date(date);
                    if (!scope.$mode || keep) {
                        controller.$setViewValue(angular.copy(date));
                        controller.$render();
                        if (options.autoclose && !keep) {
                            $timeout(function() {
                                $datepicker.hide(true);
                            });
                        }
                    } else {
                        angular.extend(viewDate, {
                            year: date.getFullYear(),
                            month: date.getMonth(),
                            date: date.getDate()
                        });
                        $datepicker.setMode(scope.$mode - 1);
                        $datepicker.$build();
                    }
                };
                $datepicker.setMode = function(mode) {
                    // console.warn('$datepicker.setMode', mode);
                    scope.$mode = mode;
                    $picker = $datepicker.$views[scope.$mode];
                    $datepicker.$build();
                };
                // Protected methods
                $datepicker.$build = function(pristine) {
                    // console.warn('$datepicker.$build() viewDate=%o', viewDate);
                    if (pristine === true && $picker.built) return;
                    if (pristine === false && !$picker.built) return;
                    $picker.build.call($picker);
                };
                $datepicker.$updateSelected = function() {
                    for (var i = 0, l = scope.rows.length; i < l; i++) {
                        angular.forEach(scope.rows[i], updateSelected);
                    }
                };
                $datepicker.$isSelected = function(date) {
                    return $picker.isSelected(date);
                };
                $datepicker.$setDisabledEl = function(el) {
                    el.disabled = $picker.isDisabled(el.date);
                };
                $datepicker.$selectPane = function(value) {
                    var steps = $picker.steps;
                    // set targetDate to first day of month to avoid problems with
                    // date values rollover. This assumes the viewDate does not
                    // depend on the day of the month
                    var targetDate = new Date(Date.UTC(viewDate.year + (steps.year || 0) * value, viewDate.month + (steps.month || 0) * value, 1));
                    angular.extend(viewDate, {
                        year: targetDate.getUTCFullYear(),
                        month: targetDate.getUTCMonth(),
                        date: targetDate.getUTCDate()
                    });
                    $datepicker.$build();
                };
                $datepicker.$onMouseDown = function(evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== "button") {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler("click");
                    }
                };
                $datepicker.$onKeyDown = function(evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();
                    if (evt.keyCode === 13) {
                        if (!scope.$mode) {
                            return $datepicker.hide(true);
                        } else {
                            return scope.$apply(function() {
                                $datepicker.setMode(scope.$mode - 1);
                            });
                        }
                    }
                    // Navigate with keyboard
                    $picker.onKeyDown(evt);
                    parentScope.$digest();
                };
                // Private
                function updateSelected(el) {
                    el.selected = $datepicker.$isSelected(el.date);
                }
                function focusElement() {
                    element[0].focus();
                }
                // Overrides
                var _init = $datepicker.init;
                $datepicker.init = function() {
                    if (isNative && options.useNative) {
                        element.prop("type", "date");
                        element.css("-webkit-appearance", "textfield");
                        return;
                    } else if (isTouch) {
                        element.prop("type", "text");
                        element.attr("readonly", "true");
                        element.on("click", focusElement);
                    }
                    _init();
                };
                var _destroy = $datepicker.destroy;
                $datepicker.destroy = function() {
                    if (isNative && options.useNative) {
                        element.off("click", focusElement);
                    }
                    _destroy();
                };
                var _show = $datepicker.show;
                $datepicker.show = function() {
                    if (!isTouch && element.attr("readonly") || element.attr("disabled")) return;
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function() {
                        // if $datepicker is no longer showing, don't setup events
                        if (!$datepicker.$isShown) return;
                        $datepicker.$element.on(isTouch ? "touchstart" : "mousedown", $datepicker.$onMouseDown);
                        if (options.keyboard) {
                            element.on("keydown", $datepicker.$onKeyDown);
                        }
                    }, 0, false);
                };
                var _hide = $datepicker.hide;
                $datepicker.hide = function(blur) {
                    if (!$datepicker.$isShown) return;
                    $datepicker.$element.off(isTouch ? "touchstart" : "mousedown", $datepicker.$onMouseDown);
                    if (options.keyboard) {
                        element.off("keydown", $datepicker.$onKeyDown);
                    }
                    _hide(blur);
                };
                return $datepicker;
            }
            DatepickerFactory.defaults = defaults;
            return DatepickerFactory;
        };
        myGet.$inject = [ "$window", "$document", "$rootScope", "$sce", "$dateFormatter", "datepickerViews", "$tooltip", "$timeout" ];
        this.$get = myGet;
    }).directive("bsDatepicker", [ "$window", "$parse", "$q", "$dateFormatter", "$dateParser", "$datepicker", function($window, $parse, $q, $dateFormatter, $dateParser, $datepicker) {
        var defaults = $datepicker.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function postLink(scope, element, attr, controller) {
                // Directive options
                var options = {
                    scope: scope
                };
                angular.forEach([ "template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "html", "animation", "autoclose", "dateType", "dateFormat", "timezone", "modelDateFormat", "dayFormat", "strictFormat", "startWeek", "startDate", "useNative", "lang", "startView", "minView", "iconLeft", "iconRight", "daysOfWeekDisabled", "id", "prefixClass", "prefixEvent" ], function(key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });
                // use string regex match boolean attr falsy values, leave truthy values be
                var falseValueRegExp = /^(false|0|)$/i;
                angular.forEach([ "html", "container", "autoclose", "useNative" ], function(key) {
                    if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
                });
                // Visibility binding support
                attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
                    if (!datepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(datepicker),?/i);
                    newValue === true ? datepicker.show() : datepicker.hide();
                });
                // Initialize datepicker
                var datepicker = $datepicker(element, controller, options);
                options = datepicker.$options;
                // Set expected iOS format
                if (isNative && options.useNative) options.dateFormat = "yyyy-MM-dd";
                var lang = options.lang;
                var formatDate = function(date, format) {
                    return $dateFormatter.formatDate(date, format, lang);
                };
                var dateParser = $dateParser({
                    format: options.dateFormat,
                    lang: lang,
                    strict: options.strictFormat
                });
                // Observe attributes for changes
                angular.forEach([ "minDate", "maxDate" ], function(key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
                        // console.warn('attr.$observe(%s)=%o', key, newValue);
                        datepicker.$options[key] = dateParser.getDateForAttribute(key, newValue);
                        // Build only if dirty
                        !isNaN(datepicker.$options[key]) && datepicker.$build(false);
                        validateAgainstMinMaxDate(controller.$dateValue);
                    });
                });
                // Watch model for changes
                scope.$watch(attr.ngModel, function(newValue, oldValue) {
                    datepicker.update(controller.$dateValue);
                }, true);
                // Normalize undefined/null/empty array,
                // so that we don't treat changing from undefined->null as a change.
                function normalizeDateRanges(ranges) {
                    if (!ranges || !ranges.length) return null;
                    return ranges;
                }
                if (angular.isDefined(attr.disabledDates)) {
                    scope.$watch(attr.disabledDates, function(disabledRanges, previousValue) {
                        disabledRanges = normalizeDateRanges(disabledRanges);
                        previousValue = normalizeDateRanges(previousValue);
                        if (disabledRanges) {
                            datepicker.updateDisabledDates(disabledRanges);
                        }
                    });
                }
                function validateAgainstMinMaxDate(parsedDate) {
                    if (!angular.isDate(parsedDate)) return;
                    var isMinValid = isNaN(datepicker.$options.minDate) || parsedDate.getTime() >= datepicker.$options.minDate;
                    var isMaxValid = isNaN(datepicker.$options.maxDate) || parsedDate.getTime() <= datepicker.$options.maxDate;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity("date", isValid);
                    controller.$setValidity("min", isMinValid);
                    controller.$setValidity("max", isMaxValid);
                    // Only update the model when we have a valid date
                    if (isValid) controller.$dateValue = parsedDate;
                }
                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function(viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    var date;
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        controller.$setValidity("date", true);
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        return null;
                    }
                    var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedDate || isNaN(parsedDate.getTime())) {
                        controller.$setValidity("date", false);
                        // return undefined, causes ngModelController to
                        // invalidate model value
                        return;
                    } else {
                        validateAgainstMinMaxDate(parsedDate);
                    }
                    if (options.dateType === "string") {
                        date = dateParser.timezoneOffsetAdjust(parsedDate, options.timezone, true);
                        return formatDate(date, options.modelDateFormat || options.dateFormat);
                    }
                    date = dateParser.timezoneOffsetAdjust(controller.$dateValue, options.timezone, true);
                    if (options.dateType === "number") {
                        return date.getTime();
                    } else if (options.dateType === "unix") {
                        return date.getTime() / 1e3;
                    } else if (options.dateType === "iso") {
                        return date.toISOString();
                    } else {
                        return new Date(date);
                    }
                });
                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function(modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.dateType === "string") {
                        date = dateParser.parse(modelValue, null, options.modelDateFormat);
                    } else if (options.dateType === "unix") {
                        date = new Date(modelValue * 1e3);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) {
                    //   var today = new Date();
                    //   date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
                    // }
                    controller.$dateValue = dateParser.timezoneOffsetAdjust(date, options.timezone);
                    return getDateFormattedString();
                });
                // viewValue -> element
                controller.$render = function() {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getDateFormattedString());
                };
                function getDateFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? "" : formatDate(controller.$dateValue, options.dateFormat);
                }
                // Garbage collection
                scope.$on("$destroy", function() {
                    if (datepicker) datepicker.destroy();
                    options = null;
                    datepicker = null;
                });
            }
        };
    } ]).provider("datepickerViews", function() {
        var defaults = this.defaults = {
            dayFormat: "dd",
            daySplit: 7
        };
        // Split array into smaller arrays
        function split(arr, size) {
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        }
        // Modulus operator
        function mod(n, m) {
            return (n % m + m) % m;
        }
        var myGet = function($dateFormatter, $dateParser, $sce) {
            return function(picker) {
                var scope = picker.$scope;
                var options = picker.$options;
                var lang = options.lang;
                var formatDate = function(date, format) {
                    return $dateFormatter.formatDate(date, format, lang);
                };
                var dateParser = $dateParser({
                    format: options.dateFormat,
                    lang: lang,
                    strict: options.strictFormat
                });
                var weekDaysMin = $dateFormatter.weekdaysShort(lang);
                var weekDaysLabels = weekDaysMin.slice(options.startWeek).concat(weekDaysMin.slice(0, options.startWeek));
                var weekDaysLabelsHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + "</th>");
                var startDate = picker.$date || (options.startDate ? dateParser.getDateForAttribute("startDate", options.startDate) : new Date());
                var viewDate = {
                    year: startDate.getFullYear(),
                    month: startDate.getMonth(),
                    date: startDate.getDate()
                };
                var views = [ {
                    format: options.dayFormat,
                    split: 7,
                    steps: {
                        month: 1
                    },
                    update: function(date, force) {
                        if (!this.built || force || date.getFullYear() !== viewDate.year || date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getDate() !== viewDate.date || date.getDate() === 1) {
                            // chaging picker current month will cause viewDate.date to be set to first day of the month,
                            // in $datepicker.$selectPane, so picker would not update selected day display if
                            // user picks first day of the new month.
                            // As a workaround, we are always forcing update when picked date is first day of month.
                            viewDate.date = picker.$date.getDate();
                            picker.$updateSelected();
                        }
                    },
                    build: function() {
                        var firstDayOfMonth = new Date(viewDate.year, viewDate.month, 1), firstDayOfMonthOffset = firstDayOfMonth.getTimezoneOffset();
                        var firstDate = new Date(+firstDayOfMonth - mod(firstDayOfMonth.getDay() - options.startWeek, 7) * 864e5), firstDateOffset = firstDate.getTimezoneOffset();
                        var today = dateParser.timezoneOffsetAdjust(new Date(), options.timezone).toDateString();
                        // Handle daylight time switch
                        if (firstDateOffset !== firstDayOfMonthOffset) firstDate = new Date(+firstDate + (firstDateOffset - firstDayOfMonthOffset) * 6e4);
                        var days = [], day;
                        for (var i = 0; i < 42; i++) {
                            // < 7 * 6
                            day = dateParser.daylightSavingAdjust(new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i));
                            days.push({
                                date: day,
                                isToday: day.toDateString() === today,
                                label: formatDate(day, this.format),
                                selected: picker.$date && this.isSelected(day),
                                muted: day.getMonth() !== viewDate.month,
                                disabled: this.isDisabled(day)
                            });
                        }
                        scope.title = formatDate(firstDayOfMonth, options.monthTitleFormat);
                        scope.showLabels = true;
                        scope.labels = weekDaysLabelsHtml;
                        scope.rows = split(days, this.split);
                        this.built = true;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth() && date.getDate() === picker.$date.getDate();
                    },
                    isDisabled: function(date) {
                        var time = date.getTime();
                        // Disabled because of min/max date.
                        if (time < options.minDate || time > options.maxDate) return true;
                        // Disabled due to being a disabled day of the week
                        if (options.daysOfWeekDisabled.indexOf(date.getDay()) !== -1) return true;
                        // Disabled because of disabled date range.
                        if (options.disabledDateRanges) {
                            for (var i = 0; i < options.disabledDateRanges.length; i++) {
                                if (time >= options.disabledDateRanges[i].start && time <= options.disabledDateRanges[i].end) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    onKeyDown: function(evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualTime = picker.$date.getTime();
                        var newDate;
                        if (evt.keyCode === 37) newDate = new Date(actualTime - 1 * 864e5); else if (evt.keyCode === 38) newDate = new Date(actualTime - 7 * 864e5); else if (evt.keyCode === 39) newDate = new Date(actualTime + 1 * 864e5); else if (evt.keyCode === 40) newDate = new Date(actualTime + 7 * 864e5);
                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: "month",
                    format: options.monthFormat,
                    split: 4,
                    steps: {
                        year: 1
                    },
                    update: function(date, force) {
                        if (!this.built || date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getMonth() !== viewDate.month) {
                            angular.extend(viewDate, {
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$updateSelected();
                        }
                    },
                    build: function() {
                        var firstMonth = new Date(viewDate.year, 0, 1);
                        var months = [], month;
                        for (var i = 0; i < 12; i++) {
                            month = new Date(viewDate.year, i, 1);
                            months.push({
                                date: month,
                                label: formatDate(month, this.format),
                                selected: picker.$isSelected(month),
                                disabled: this.isDisabled(month)
                            });
                        }
                        scope.title = formatDate(month, options.yearTitleFormat);
                        scope.showLabels = false;
                        scope.rows = split(months, this.split);
                        this.built = true;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth();
                    },
                    isDisabled: function(date) {
                        var lastDate = +new Date(date.getFullYear(), date.getMonth() + 1, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function(evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualMonth = picker.$date.getMonth();
                        var newDate = new Date(picker.$date);
                        if (evt.keyCode === 37) newDate.setMonth(actualMonth - 1); else if (evt.keyCode === 38) newDate.setMonth(actualMonth - 4); else if (evt.keyCode === 39) newDate.setMonth(actualMonth + 1); else if (evt.keyCode === 40) newDate.setMonth(actualMonth + 4);
                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                }, {
                    name: "year",
                    format: options.yearFormat,
                    split: 4,
                    steps: {
                        year: 12
                    },
                    update: function(date, force) {
                        if (!this.built || force || parseInt(date.getFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10)) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$build();
                        } else if (date.getFullYear() !== viewDate.year) {
                            angular.extend(viewDate, {
                                year: picker.$date.getFullYear(),
                                month: picker.$date.getMonth(),
                                date: picker.$date.getDate()
                            });
                            picker.$updateSelected();
                        }
                    },
                    build: function() {
                        var firstYear = viewDate.year - viewDate.year % (this.split * 3);
                        var years = [], year;
                        for (var i = 0; i < 12; i++) {
                            year = new Date(firstYear + i, 0, 1);
                            years.push({
                                date: year,
                                label: formatDate(year, this.format),
                                selected: picker.$isSelected(year),
                                disabled: this.isDisabled(year)
                            });
                        }
                        scope.title = years[0].label + "-" + years[years.length - 1].label;
                        scope.showLabels = false;
                        scope.rows = split(years, this.split);
                        this.built = true;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear();
                    },
                    isDisabled: function(date) {
                        var lastDate = +new Date(date.getFullYear() + 1, 0, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function(evt) {
                        if (!picker.$date) {
                            return;
                        }
                        var actualYear = picker.$date.getFullYear(), newDate = new Date(picker.$date);
                        if (evt.keyCode === 37) newDate.setYear(actualYear - 1); else if (evt.keyCode === 38) newDate.setYear(actualYear - 4); else if (evt.keyCode === 39) newDate.setYear(actualYear + 1); else if (evt.keyCode === 40) newDate.setYear(actualYear + 4);
                        if (!this.isDisabled(newDate)) picker.select(newDate, true);
                    }
                } ];
                return {
                    views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
                    viewDate: viewDate
                };
            };
        };
        myGet.$inject = [ "$dateFormatter", "$dateParser", "$sce" ];
        this.$get = myGet;
    });
});

define("fare/oc/1.0.0/lib/datepicker/datepicker.tpl-debug.html", [], '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px;">\n<table style="table-layout: fixed; height: 100%; width: 100%;">\n  <thead>\n    <tr class="text-center">\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)">\n          <i class="{{$iconLeft}}"></i>\n        </button>\n      </th>\n      <th colspan="{{ rows[0].length - 2 }}">\n        <button tabindex="-1" type="button" class="btn btn-default btn-block text-strong"  ng-click="$toggleMode()">\n          <strong style="text-transform: capitalize;" ng-bind="title"></strong>\n        </button>\n      </th>\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)">\n          <i class="{{$iconRight}}"></i>\n        </button>\n      </th>\n    </tr>\n    <tr ng-show="showLabels" ng-bind-html="labels"></tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%">\n      <td class="text-center" ng-repeat="(j, el) in row">\n        <button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled">\n          <span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</div>\n');

define("fare/oc/1.0.0/lib/timepicker/timepicker-debug", [ "fare/oc/1.0.0/lib/helpers/compiler-debug", "fare/oc/1.0.0/lib/helpers/date-formatter-debug", "fare/oc/1.0.0/lib/helpers/date-parser-debug", "fare/oc/1.0.0/lib/helpers/debounce-debug", "fare/oc/1.0.0/lib/helpers/dimensions-debug", "fare/oc/1.0.0/lib/helpers/parse-options-debug", "fare/oc/1.0.0/lib/helpers/raf-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/lib/helpers/compiler-debug");
    require("fare/oc/1.0.0/lib/helpers/date-formatter-debug");
    require("fare/oc/1.0.0/lib/helpers/date-parser-debug");
    require("fare/oc/1.0.0/lib/helpers/debounce-debug");
    require("fare/oc/1.0.0/lib/helpers/dimensions-debug");
    require("fare/oc/1.0.0/lib/helpers/parse-options-debug");
    require("fare/oc/1.0.0/lib/helpers/raf-debug");
    var timeHtml = require("fare/oc/1.0.0/lib/timepicker/timepicker.tpl-debug.html");
    angular.module("mgcrea.ngStrap.timepicker", [ "mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.helpers.dateFormatter", "mgcrea.ngStrap.tooltip" ]).provider("$timepicker", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            //uncommenting the following line will break backwards compatability
            // prefixEvent: 'timepicker',
            prefixClass: "timepicker",
            placement: "bottom-left",
            template: timeHtml,
            trigger: "focus",
            container: false,
            keyboard: true,
            html: false,
            delay: 0,
            // lang: $locale.id,
            useNative: true,
            timeType: "date",
            timeFormat: "shortTime",
            timezone: null,
            modelTimeFormat: null,
            autoclose: false,
            minTime: -Infinity,
            maxTime: +Infinity,
            length: 5,
            hourStep: 1,
            minuteStep: 5,
            secondStep: 5,
            roundDisplay: false,
            iconUp: "glyphicon glyphicon-chevron-up",
            iconDown: "glyphicon glyphicon-chevron-down",
            arrowBehavior: "pager"
        };
        this.$get = function($window, $document, $rootScope, $sce, $dateFormatter, $tooltip, $timeout) {
            var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
            var isTouch = "createTouch" in $window.document && isNative;
            if (!defaults.lang) {
                defaults.lang = $dateFormatter.getDefaultLocale();
            }
            function timepickerFactory(element, controller, config) {
                var $timepicker = $tooltip(element, angular.extend({}, defaults, config));
                var parentScope = config.scope;
                var options = $timepicker.$options;
                var scope = $timepicker.$scope;
                var lang = options.lang;
                var formatDate = function(date, format, timezone) {
                    return $dateFormatter.formatDate(date, format, lang, timezone);
                };
                function floorMinutes(time) {
                    // coeff used to floor current time to nearest minuteStep interval
                    var coeff = 1e3 * 60 * options.minuteStep;
                    return new Date(Math.floor(time.getTime() / coeff) * coeff);
                }
                // View vars
                var selectedIndex = 0;
                var defaultDate = options.roundDisplay ? floorMinutes(new Date()) : new Date();
                var startDate = controller.$dateValue || defaultDate;
                var viewDate = {
                    hour: startDate.getHours(),
                    meridian: startDate.getHours() < 12,
                    minute: startDate.getMinutes(),
                    second: startDate.getSeconds(),
                    millisecond: startDate.getMilliseconds()
                };
                var format = $dateFormatter.getDatetimeFormat(options.timeFormat, lang);
                var hoursFormat = $dateFormatter.hoursFormat(format), timeSeparator = $dateFormatter.timeSeparator(format), minutesFormat = $dateFormatter.minutesFormat(format), secondsFormat = $dateFormatter.secondsFormat(format), showSeconds = $dateFormatter.showSeconds(format), showAM = $dateFormatter.showAM(format);
                scope.$iconUp = options.iconUp;
                scope.$iconDown = options.iconDown;
                // Scope methods
                scope.$select = function(date, index) {
                    $timepicker.select(date, index);
                };
                scope.$moveIndex = function(value, index) {
                    $timepicker.$moveIndex(value, index);
                };
                scope.$switchMeridian = function(date) {
                    $timepicker.switchMeridian(date);
                };
                // Public methods
                $timepicker.update = function(date) {
                    // console.warn('$timepicker.update() newValue=%o', date);
                    if (angular.isDate(date) && !isNaN(date.getTime())) {
                        $timepicker.$date = date;
                        angular.extend(viewDate, {
                            hour: date.getHours(),
                            minute: date.getMinutes(),
                            second: date.getSeconds(),
                            millisecond: date.getMilliseconds()
                        });
                        $timepicker.$build();
                    } else if (!$timepicker.$isBuilt) {
                        $timepicker.$build();
                    }
                };
                $timepicker.select = function(date, index, keep) {
                    // console.warn('$timepicker.select', date, scope.$mode);
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) controller.$dateValue = new Date(1970, 0, 1);
                    if (!angular.isDate(date)) date = new Date(date);
                    if (index === 0) controller.$dateValue.setHours(date.getHours()); else if (index === 1) controller.$dateValue.setMinutes(date.getMinutes()); else if (index === 2) controller.$dateValue.setSeconds(date.getSeconds());
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                    if (options.autoclose && !keep) {
                        $timeout(function() {
                            $timepicker.hide(true);
                        });
                    }
                };
                $timepicker.switchMeridian = function(date) {
                    if (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) {
                        return;
                    }
                    var hours = (date || controller.$dateValue).getHours();
                    controller.$dateValue.setHours(hours < 12 ? hours + 12 : hours - 12);
                    controller.$setViewValue(angular.copy(controller.$dateValue));
                    controller.$render();
                };
                // Protected methods
                $timepicker.$build = function() {
                    // console.warn('$timepicker.$build() viewDate=%o', viewDate);
                    var i, midIndex = scope.midIndex = parseInt(options.length / 2, 10);
                    var hours = [], hour;
                    for (i = 0; i < options.length; i++) {
                        hour = new Date(1970, 0, 1, viewDate.hour - (midIndex - i) * options.hourStep);
                        hours.push({
                            date: hour,
                            label: formatDate(hour, hoursFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(hour, 0),
                            disabled: $timepicker.$isDisabled(hour, 0)
                        });
                    }
                    var minutes = [], minute;
                    for (i = 0; i < options.length; i++) {
                        minute = new Date(1970, 0, 1, 0, viewDate.minute - (midIndex - i) * options.minuteStep);
                        minutes.push({
                            date: minute,
                            label: formatDate(minute, minutesFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(minute, 1),
                            disabled: $timepicker.$isDisabled(minute, 1)
                        });
                    }
                    var seconds = [], second;
                    for (i = 0; i < options.length; i++) {
                        second = new Date(1970, 0, 1, 0, 0, viewDate.second - (midIndex - i) * options.secondStep);
                        seconds.push({
                            date: second,
                            label: formatDate(second, secondsFormat),
                            selected: $timepicker.$date && $timepicker.$isSelected(second, 2),
                            disabled: $timepicker.$isDisabled(second, 2)
                        });
                    }
                    var rows = [];
                    for (i = 0; i < options.length; i++) {
                        if (showSeconds) {
                            rows.push([ hours[i], minutes[i], seconds[i] ]);
                        } else {
                            rows.push([ hours[i], minutes[i] ]);
                        }
                    }
                    scope.rows = rows;
                    scope.showSeconds = showSeconds;
                    scope.showAM = showAM;
                    scope.isAM = ($timepicker.$date || hours[midIndex].date).getHours() < 12;
                    scope.timeSeparator = timeSeparator;
                    $timepicker.$isBuilt = true;
                };
                $timepicker.$isSelected = function(date, index) {
                    if (!$timepicker.$date) return false; else if (index === 0) {
                        return date.getHours() === $timepicker.$date.getHours();
                    } else if (index === 1) {
                        return date.getMinutes() === $timepicker.$date.getMinutes();
                    } else if (index === 2) {
                        return date.getSeconds() === $timepicker.$date.getSeconds();
                    }
                };
                $timepicker.$isDisabled = function(date, index) {
                    var selectedTime;
                    if (index === 0) {
                        selectedTime = date.getTime() + viewDate.minute * 6e4 + viewDate.second * 1e3;
                    } else if (index === 1) {
                        selectedTime = date.getTime() + viewDate.hour * 36e5 + viewDate.second * 1e3;
                    } else if (index === 2) {
                        selectedTime = date.getTime() + viewDate.hour * 36e5 + viewDate.minute * 6e4;
                    }
                    return selectedTime < options.minTime * 1 || selectedTime > options.maxTime * 1;
                };
                scope.$arrowAction = function(value, index) {
                    if (options.arrowBehavior === "picker") {
                        $timepicker.$setTimeByStep(value, index);
                    } else {
                        $timepicker.$moveIndex(value, index);
                    }
                };
                $timepicker.$setTimeByStep = function(value, index) {
                    var newDate = new Date($timepicker.$date || startDate);
                    var hours = newDate.getHours();
                    var minutes = newDate.getMinutes();
                    var seconds = newDate.getSeconds();
                    if (index === 0) {
                        newDate.setHours(hours - parseInt(options.hourStep, 10) * value);
                    } else if (index === 1) {
                        newDate.setMinutes(minutes - parseInt(options.minuteStep, 10) * value);
                    } else if (index === 2) {
                        newDate.setSeconds(seconds - parseInt(options.secondStep, 10) * value);
                    }
                    $timepicker.select(newDate, index, true);
                };
                $timepicker.$moveIndex = function(value, index) {
                    var targetDate;
                    if (index === 0) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour + value * options.length, viewDate.minute, viewDate.second);
                        angular.extend(viewDate, {
                            hour: targetDate.getHours()
                        });
                    } else if (index === 1) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute + value * options.length * options.minuteStep, viewDate.second);
                        angular.extend(viewDate, {
                            minute: targetDate.getMinutes()
                        });
                    } else if (index === 2) {
                        targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute, viewDate.second + value * options.length * options.secondStep);
                        angular.extend(viewDate, {
                            second: targetDate.getSeconds()
                        });
                    }
                    $timepicker.$build();
                };
                $timepicker.$onMouseDown = function(evt) {
                    // Prevent blur on mousedown on .dropdown-menu
                    if (evt.target.nodeName.toLowerCase() !== "input") evt.preventDefault();
                    evt.stopPropagation();
                    // Emulate click for mobile devices
                    if (isTouch) {
                        var targetEl = angular.element(evt.target);
                        if (targetEl[0].nodeName.toLowerCase() !== "button") {
                            targetEl = targetEl.parent();
                        }
                        targetEl.triggerHandler("click");
                    }
                };
                $timepicker.$onKeyDown = function(evt) {
                    if (!/(38|37|39|40|13)/.test(evt.keyCode) || evt.shiftKey || evt.altKey) return;
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Close on enter
                    if (evt.keyCode === 13) {
                        $timepicker.hide(true);
                        return;
                    }
                    // Navigate with keyboard
                    var newDate = new Date($timepicker.$date);
                    var hours = newDate.getHours(), hoursLength = formatDate(newDate, hoursFormat).length;
                    var minutes = newDate.getMinutes(), minutesLength = formatDate(newDate, minutesFormat).length;
                    var seconds = newDate.getSeconds(), secondsLength = formatDate(newDate, secondsFormat).length;
                    var sepLength = 1;
                    var lateralMove = /(37|39)/.test(evt.keyCode);
                    var count = 2 + showSeconds * 1 + showAM * 1;
                    // Navigate indexes (left, right)
                    if (lateralMove) {
                        if (evt.keyCode === 37) selectedIndex = selectedIndex < 1 ? count - 1 : selectedIndex - 1; else if (evt.keyCode === 39) selectedIndex = selectedIndex < count - 1 ? selectedIndex + 1 : 0;
                    }
                    // Update values (up, down)
                    var selectRange = [ 0, hoursLength ];
                    var incr = 0;
                    if (evt.keyCode === 38) incr = -1;
                    if (evt.keyCode === 40) incr = +1;
                    var isSeconds = selectedIndex === 2 && showSeconds;
                    var isMeridian = selectedIndex === 2 && !showSeconds || selectedIndex === 3 && showSeconds;
                    if (selectedIndex === 0) {
                        newDate.setHours(hours + incr * parseInt(options.hourStep, 10));
                        // re-calculate hours length because we have changed hours value
                        hoursLength = formatDate(newDate, hoursFormat).length;
                        selectRange = [ 0, hoursLength ];
                    } else if (selectedIndex === 1) {
                        newDate.setMinutes(minutes + incr * parseInt(options.minuteStep, 10));
                        // re-calculate minutes length because we have changes minutes value
                        minutesLength = formatDate(newDate, minutesFormat).length;
                        selectRange = [ hoursLength + sepLength, minutesLength ];
                    } else if (isSeconds) {
                        newDate.setSeconds(seconds + incr * parseInt(options.secondStep, 10));
                        // re-calculate seconds length because we have changes seconds value
                        secondsLength = formatDate(newDate, secondsFormat).length;
                        selectRange = [ hoursLength + sepLength + minutesLength + sepLength, secondsLength ];
                    } else if (isMeridian) {
                        if (!lateralMove) $timepicker.switchMeridian();
                        selectRange = [ hoursLength + sepLength + minutesLength + sepLength + (secondsLength + sepLength) * showSeconds, 2 ];
                    }
                    $timepicker.select(newDate, selectedIndex, true);
                    createSelection(selectRange[0], selectRange[1]);
                    parentScope.$digest();
                };
                // Private
                function createSelection(start, length) {
                    var end = start + length;
                    if (element[0].createTextRange) {
                        var selRange = element[0].createTextRange();
                        selRange.collapse(true);
                        selRange.moveStart("character", start);
                        selRange.moveEnd("character", end);
                        selRange.select();
                    } else if (element[0].setSelectionRange) {
                        element[0].setSelectionRange(start, end);
                    } else if (angular.isUndefined(element[0].selectionStart)) {
                        element[0].selectionStart = start;
                        element[0].selectionEnd = end;
                    }
                }
                function focusElement() {
                    element[0].focus();
                }
                // Overrides
                var _init = $timepicker.init;
                $timepicker.init = function() {
                    if (isNative && options.useNative) {
                        element.prop("type", "time");
                        element.css("-webkit-appearance", "textfield");
                        return;
                    } else if (isTouch) {
                        element.prop("type", "text");
                        element.attr("readonly", "true");
                        element.on("click", focusElement);
                    }
                    _init();
                };
                var _destroy = $timepicker.destroy;
                $timepicker.destroy = function() {
                    if (isNative && options.useNative) {
                        element.off("click", focusElement);
                    }
                    _destroy();
                };
                var _show = $timepicker.show;
                $timepicker.show = function() {
                    if (!isTouch && element.attr("readonly") || element.attr("disabled")) return;
                    _show();
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function() {
                        $timepicker.$element && $timepicker.$element.on(isTouch ? "touchstart" : "mousedown", $timepicker.$onMouseDown);
                        if (options.keyboard) {
                            element && element.on("keydown", $timepicker.$onKeyDown);
                        }
                    }, 0, false);
                };
                var _hide = $timepicker.hide;
                $timepicker.hide = function(blur) {
                    if (!$timepicker.$isShown) return;
                    $timepicker.$element && $timepicker.$element.off(isTouch ? "touchstart" : "mousedown", $timepicker.$onMouseDown);
                    if (options.keyboard) {
                        element && element.off("keydown", $timepicker.$onKeyDown);
                    }
                    _hide(blur);
                };
                return $timepicker;
            }
            timepickerFactory.defaults = defaults;
            return timepickerFactory;
        };
    }).directive("bsTimepicker", [ "$window", "$parse", "$q", "$dateFormatter", "$dateParser", "$timepicker", function($window, $parse, $q, $dateFormatter, $dateParser, $timepicker) {
        var defaults = $timepicker.defaults;
        var isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function postLink(scope, element, attr, controller) {
                // Directive options
                var options = {
                    scope: scope
                };
                angular.forEach([ "template", "templateUrl", "controller", "controllerAs", "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "autoclose", "timeType", "timeFormat", "timezone", "modelTimeFormat", "useNative", "hourStep", "minuteStep", "secondStep", "length", "arrowBehavior", "iconUp", "iconDown", "roundDisplay", "id", "prefixClass", "prefixEvent" ], function(key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });
                // use string regex match boolean attr falsy values, leave truthy values be
                var falseValueRegExp = /^(false|0|)$/i;
                angular.forEach([ "html", "container", "autoclose", "useNative", "roundDisplay" ], function(key) {
                    if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
                });
                // Visibility binding support
                attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
                    if (!timepicker || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(timepicker),?/i);
                    newValue === true ? timepicker.show() : timepicker.hide();
                });
                // Initialize timepicker
                if (isNative && (options.useNative || defaults.useNative)) options.timeFormat = "HH:mm";
                var timepicker = $timepicker(element, controller, options);
                options = timepicker.$options;
                var lang = options.lang;
                var formatDate = function(date, format, timezone) {
                    return $dateFormatter.formatDate(date, format, lang, timezone);
                };
                // Initialize parser
                var dateParser = $dateParser({
                    format: options.timeFormat,
                    lang: lang
                });
                // Observe attributes for changes
                angular.forEach([ "minTime", "maxTime" ], function(key) {
                    // console.warn('attr.$observe(%s)', key, attr[key]);
                    angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
                        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
                        !isNaN(timepicker.$options[key]) && timepicker.$build();
                        validateAgainstMinMaxTime(controller.$dateValue);
                    });
                });
                // Watch model for changes
                scope.$watch(attr.ngModel, function(newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.ngModel, newValue, oldValue, controller.$dateValue);
                    timepicker.update(controller.$dateValue);
                }, true);
                function validateAgainstMinMaxTime(parsedTime) {
                    if (!angular.isDate(parsedTime)) return;
                    var isMinValid = isNaN(options.minTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) >= options.minTime;
                    var isMaxValid = isNaN(options.maxTime) || new Date(parsedTime.getTime()).setFullYear(1970, 0, 1) <= options.maxTime;
                    var isValid = isMinValid && isMaxValid;
                    controller.$setValidity("date", isValid);
                    controller.$setValidity("min", isMinValid);
                    controller.$setValidity("max", isMaxValid);
                    // Only update the model when we have a valid date
                    if (!isValid) {
                        return;
                    }
                    controller.$dateValue = parsedTime;
                }
                // viewValue -> $parsers -> modelValue
                controller.$parsers.unshift(function(viewValue) {
                    // console.warn('$parser("%s"): viewValue=%o', element.attr('ng-model'), viewValue);
                    var date;
                    // Null values should correctly reset the model value & validity
                    if (!viewValue) {
                        // BREAKING CHANGE:
                        // return null (not undefined) when input value is empty, so angularjs 1.3
                        // ngModelController can go ahead and run validators, like ngRequired
                        controller.$setValidity("date", true);
                        return null;
                    }
                    var parsedTime = angular.isDate(viewValue) ? viewValue : dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedTime || isNaN(parsedTime.getTime())) {
                        controller.$setValidity("date", false);
                        // Return undefined, causes ngModelController to
                        // invalidate model value
                        return undefined;
                    } else {
                        validateAgainstMinMaxTime(parsedTime);
                    }
                    if (options.timeType === "string") {
                        date = dateParser.timezoneOffsetAdjust(parsedTime, options.timezone, true);
                        return formatDate(date, options.modelTimeFormat || options.timeFormat);
                    }
                    date = dateParser.timezoneOffsetAdjust(controller.$dateValue, options.timezone, true);
                    if (options.timeType === "number") {
                        return date.getTime();
                    } else if (options.timeType === "unix") {
                        return date.getTime() / 1e3;
                    } else if (options.timeType === "iso") {
                        return date.toISOString();
                    } else {
                        return new Date(date);
                    }
                });
                // modelValue -> $formatters -> viewValue
                controller.$formatters.push(function(modelValue) {
                    // console.warn('$formatter("%s"): modelValue=%o (%o)', element.attr('ng-model'), modelValue, typeof modelValue);
                    var date;
                    if (angular.isUndefined(modelValue) || modelValue === null) {
                        date = NaN;
                    } else if (angular.isDate(modelValue)) {
                        date = modelValue;
                    } else if (options.timeType === "string") {
                        date = dateParser.parse(modelValue, null, options.modelTimeFormat);
                    } else if (options.timeType === "unix") {
                        date = new Date(modelValue * 1e3);
                    } else {
                        date = new Date(modelValue);
                    }
                    // Setup default value?
                    // if(isNaN(date.getTime())) date = new Date(new Date().setMinutes(0) + 36e5);
                    controller.$dateValue = dateParser.timezoneOffsetAdjust(date, options.timezone);
                    return getTimeFormattedString();
                });
                // viewValue -> element
                controller.$render = function() {
                    // console.warn('$render("%s"): viewValue=%o', element.attr('ng-model'), controller.$viewValue);
                    element.val(getTimeFormattedString());
                };
                function getTimeFormattedString() {
                    return !controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? "" : formatDate(controller.$dateValue, options.timeFormat);
                }
                // Garbage collection
                scope.$on("$destroy", function() {
                    if (timepicker) timepicker.destroy();
                    options = null;
                    timepicker = null;
                });
            }
        };
    } ]);
});

define("fare/oc/1.0.0/lib/timepicker/timepicker.tpl-debug.html", [], '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto;">\n<table height="100%">\n  <thead>\n    <tr class="text-center">\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)">\n          <i class="{{ $iconUp }}"></i>\n        </button>\n      </th>\n      <th>\n        &nbsp;\n      </th>\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)">\n          <i class="{{ $iconUp }}"></i>\n        </button>\n      </th>\n      <th>\n        &nbsp;\n      </th>\n      <th>\n        <button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)">\n          <i class="{{ $iconUp }}"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="(i, row) in rows">\n      <td class="text-center">\n        <button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled">\n          <span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span>\n        </button>\n      </td>\n      <td>\n        <span ng-bind="i == midIndex ? timeSeparator : \' \'"></span>\n      </td>\n      <td class="text-center">\n        <button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled">\n          <span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span>\n        </button>\n      </td>\n      <td>\n        <span ng-bind="i == midIndex ? timeSeparator : \' \'"></span>\n      </td>\n      <td class="text-center">\n        <button tabindex="-1" ng-if="showSeconds && row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled">\n          <span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span>\n        </button>\n      </td>\n      <td ng-if="showAM">\n        &nbsp;\n      </td>\n      <td ng-if="showAM">\n        <button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button>\n        <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button>\n      </td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr class="text-center">\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)">\n          <i class="{{ $iconDown }}"></i>\n        </button>\n      </th>\n      <th>\n        &nbsp;\n      </th>\n      <th>\n        <button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)">\n          <i class="{{ $iconDown }}"></i>\n        </button>\n      </th>\n      <th>\n        &nbsp;\n      </th>\n      <th>\n        <button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)">\n          <i class="{{ $iconDown }}"></i>\n        </button>\n      </th>\n    </tr>\n  </tfoot>\n</table>\n</div>\n');

define("fare/oc/1.0.0/lib/tooltip/tooltip-debug", [], function(require, exports, module) {
    var tipHtml = require("fare/oc/1.0.0/lib/tooltip/tooltip.tpl-debug.html");
    angular.module("mgcrea.ngStrap.tooltip", [ "mgcrea.ngStrap.core", "mgcrea.ngStrap.helpers.dimensions" ]).provider("$tooltip", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            customClass: "",
            prefixClass: "tooltip",
            prefixEvent: "tooltip",
            container: false,
            target: false,
            placement: "top",
            template: tipHtml,
            contentTemplate: false,
            trigger: "hover focus",
            keyboard: false,
            html: false,
            show: false,
            title: "",
            type: "",
            delay: 0,
            autoClose: false,
            bsEnabled: true,
            viewport: {
                selector: "body",
                padding: 0
            }
        };
        var myGet = function($window, $rootScope, $bsCompiler, $q, $templateCache, $http, $animate, $sce, dimensions, $$rAF, $timeout) {
            var trim = String.prototype.trim;
            var isTouch = "createTouch" in $window.document;
            var htmlReplaceRegExp = /ng-bind="/gi;
            var $body = angular.element($window.document);
            function TooltipFactory(element, config) {
                var $tooltip = {};
                // Common vars
                var options = $tooltip.$options = angular.extend({}, defaults, config);
                var promise = $tooltip.$promise = $bsCompiler.compile(options);
                var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
                var nodeName = element[0].nodeName.toLowerCase();
                if (options.delay && angular.isString(options.delay)) {
                    var split = options.delay.split(",").map(parseFloat);
                    options.delay = split.length > 1 ? {
                        show: split[0],
                        hide: split[1]
                    } : split[0];
                }
                // Store $id to identify the triggering element in events
                // give priority to options.id, otherwise, try to use
                // element id if defined
                $tooltip.$id = options.id || element.attr("id") || "";
                // Support scope as string options
                if (options.title) {
                    scope.title = $sce.trustAsHtml(options.title);
                }
                // Provide scope helpers
                scope.$setEnabled = function(isEnabled) {
                    scope.$$postDigest(function() {
                        $tooltip.setEnabled(isEnabled);
                    });
                };
                scope.$hide = function() {
                    scope.$$postDigest(function() {
                        $tooltip.hide();
                    });
                };
                scope.$show = function() {
                    scope.$$postDigest(function() {
                        $tooltip.show();
                    });
                };
                scope.$toggle = function() {
                    scope.$$postDigest(function() {
                        $tooltip.toggle();
                    });
                };
                // Publish isShown as a protected var on scope
                $tooltip.$isShown = scope.$isShown = false;
                // Private vars
                var timeout, hoverState;
                // Fetch, compile then initialize tooltip
                var compileData, tipElement, tipContainer, tipScope;
                promise.then(function(data) {
                    compileData = data;
                    $tooltip.init();
                });
                $tooltip.init = function() {
                    // Options: delay
                    if (options.delay && angular.isNumber(options.delay)) {
                        options.delay = {
                            show: options.delay,
                            hide: options.delay
                        };
                    }
                    // Replace trigger on touch devices ?
                    // if(isTouch && options.trigger === defaults.trigger) {
                    //   options.trigger.replace(/hover/g, 'click');
                    // }
                    // Options : container
                    if (options.container === "self") {
                        tipContainer = element;
                    } else if (angular.isElement(options.container)) {
                        tipContainer = options.container;
                    } else if (options.container) {
                        tipContainer = findElement(options.container);
                    }
                    // Options: trigger
                    bindTriggerEvents();
                    // Options: target
                    if (options.target) {
                        options.target = angular.isElement(options.target) ? options.target : findElement(options.target);
                    }
                    // Options: show
                    if (options.show) {
                        scope.$$postDigest(function() {
                            options.trigger === "focus" ? element[0].focus() : $tooltip.show();
                        });
                    }
                };
                $tooltip.destroy = function() {
                    // Unbind events
                    unbindTriggerEvents();
                    // Remove element
                    destroyTipElement();
                    // Destroy scope
                    scope.$destroy();
                };
                $tooltip.enter = function() {
                    clearTimeout(timeout);
                    hoverState = "in";
                    if (!options.delay || !options.delay.show) {
                        return $tooltip.show();
                    }
                    timeout = setTimeout(function() {
                        if (hoverState === "in") $tooltip.show();
                    }, options.delay.show);
                };
                $tooltip.show = function() {
                    if (!options.bsEnabled || $tooltip.$isShown) return;
                    scope.$emit(options.prefixEvent + ".show.before", $tooltip);
                    var parent, after;
                    if (options.container) {
                        parent = tipContainer;
                        if (tipContainer[0].lastChild) {
                            after = angular.element(tipContainer[0].lastChild);
                        } else {
                            after = null;
                        }
                    } else {
                        parent = null;
                        after = element;
                    }
                    // Hide any existing tipElement
                    if (tipElement) destroyTipElement();
                    // Fetch a cloned element linked from template
                    tipScope = $tooltip.$scope.$new();
                    tipElement = $tooltip.$element = compileData.link(tipScope, function(clonedElement, scope) {});
                    // Set the initial positioning.  Make the tooltip invisible
                    // so IE doesn't try to focus on it off screen.
                    tipElement.css({
                        top: "-9999px",
                        left: "-9999px",
                        right: "auto",
                        display: "block",
                        visibility: "hidden"
                    });
                    // Options: animation
                    if (options.animation) tipElement.addClass(options.animation);
                    // Options: type
                    if (options.type) tipElement.addClass(options.prefixClass + "-" + options.type);
                    // Options: custom classes
                    if (options.customClass) tipElement.addClass(options.customClass);
                    // Append the element, without any animations.  If we append
                    // using $animate.enter, some of the animations cause the placement
                    // to be off due to the transforms.
                    after ? after.after(tipElement) : parent.prepend(tipElement);
                    $tooltip.$isShown = scope.$isShown = true;
                    safeDigest(scope);
                    // Now, apply placement
                    $tooltip.$applyPlacement();
                    // Once placed, animate it.
                    // Support v1.2+ $animate
                    // https://github.com/angular/angular.js/issues/11713
                    if (angular.version.minor <= 2) {
                        $animate.enter(tipElement, parent, after, enterAnimateCallback);
                    } else {
                        $animate.enter(tipElement, parent, after).then(enterAnimateCallback);
                    }
                    safeDigest(scope);
                    $$rAF(function() {
                        // Once the tooltip is placed and the animation starts, make the tooltip visible
                        if (tipElement) tipElement.css({
                            visibility: "visible"
                        });
                    });
                    // Bind events
                    if (options.keyboard) {
                        if (options.trigger !== "focus") {
                            $tooltip.focus();
                        }
                        bindKeyboardEvents();
                    }
                    if (options.autoClose) {
                        bindAutoCloseEvents();
                    }
                };
                function enterAnimateCallback() {
                    scope.$emit(options.prefixEvent + ".show", $tooltip);
                }
                $tooltip.leave = function() {
                    clearTimeout(timeout);
                    hoverState = "out";
                    if (!options.delay || !options.delay.hide) {
                        return $tooltip.hide();
                    }
                    timeout = setTimeout(function() {
                        if (hoverState === "out") {
                            $tooltip.hide();
                        }
                    }, options.delay.hide);
                };
                var _blur;
                var _tipToHide;
                $tooltip.hide = function(blur) {
                    if (!$tooltip.$isShown) return;
                    scope.$emit(options.prefixEvent + ".hide.before", $tooltip);
                    // store blur value for leaveAnimateCallback to use
                    _blur = blur;
                    // store current tipElement reference to use
                    // in leaveAnimateCallback
                    _tipToHide = tipElement;
                    // Support v1.2+ $animate
                    // https://github.com/angular/angular.js/issues/11713
                    if (angular.version.minor <= 2) {
                        $animate.leave(tipElement, leaveAnimateCallback);
                    } else {
                        $animate.leave(tipElement).then(leaveAnimateCallback);
                    }
                    $tooltip.$isShown = scope.$isShown = false;
                    safeDigest(scope);
                    // Unbind events
                    if (options.keyboard && tipElement !== null) {
                        unbindKeyboardEvents();
                    }
                    if (options.autoClose && tipElement !== null) {
                        unbindAutoCloseEvents();
                    }
                };
                function leaveAnimateCallback() {
                    scope.$emit(options.prefixEvent + ".hide", $tooltip);
                    // check if current tipElement still references
                    // the same element when hide was called
                    if (tipElement === _tipToHide) {
                        // Allow to blur the input when hidden, like when pressing enter key
                        if (_blur && options.trigger === "focus") {
                            return element[0].blur();
                        }
                        // clean up child scopes
                        destroyTipElement();
                    }
                }
                $tooltip.toggle = function() {
                    $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
                };
                $tooltip.focus = function() {
                    tipElement[0].focus();
                };
                $tooltip.setEnabled = function(isEnabled) {
                    options.bsEnabled = isEnabled;
                };
                $tooltip.setViewport = function(viewport) {
                    options.viewport = viewport;
                };
                // Protected methods
                $tooltip.$applyPlacement = function() {
                    if (!tipElement) return;
                    // Determine if we're doing an auto or normal placement
                    var placement = options.placement, autoToken = /\s?auto?\s?/i, autoPlace = autoToken.test(placement);
                    if (autoPlace) {
                        placement = placement.replace(autoToken, "") || defaults.placement;
                    }
                    // Need to add the position class before we get
                    // the offsets
                    tipElement.addClass(options.placement);
                    // Get the position of the target element
                    // and the height and width of the tooltip so we can center it.
                    var elementPosition = getPosition(), tipWidth = tipElement.prop("offsetWidth"), tipHeight = tipElement.prop("offsetHeight");
                    // Refresh viewport position
                    $tooltip.$viewport = options.viewport && findElement(options.viewport.selector || options.viewport);
                    // If we're auto placing, we need to check the positioning
                    if (autoPlace) {
                        var originalPlacement = placement;
                        var viewportPosition = getPosition($tooltip.$viewport);
                        // Determine if the vertical placement
                        if (originalPlacement.indexOf("bottom") >= 0 && elementPosition.bottom + tipHeight > viewportPosition.bottom) {
                            placement = originalPlacement.replace("bottom", "top");
                        } else if (originalPlacement.indexOf("top") >= 0 && elementPosition.top - tipHeight < viewportPosition.top) {
                            placement = originalPlacement.replace("top", "bottom");
                        }
                        // Determine the horizontal placement
                        // The exotic placements of left and right are opposite of the standard placements.  Their arrows are put on the left/right
                        // and flow in the opposite direction of their placement.
                        if ((originalPlacement === "right" || originalPlacement === "bottom-left" || originalPlacement === "top-left") && elementPosition.right + tipWidth > viewportPosition.width) {
                            placement = originalPlacement === "right" ? "left" : placement.replace("left", "right");
                        } else if ((originalPlacement === "left" || originalPlacement === "bottom-right" || originalPlacement === "top-right") && elementPosition.left - tipWidth < viewportPosition.left) {
                            placement = originalPlacement === "left" ? "right" : placement.replace("right", "left");
                        }
                        tipElement.removeClass(originalPlacement).addClass(placement);
                    }
                    // Get the tooltip's top and left coordinates to center it with this directive.
                    var tipPosition = getCalculatedOffset(placement, elementPosition, tipWidth, tipHeight);
                    applyPlacement(tipPosition, placement);
                };
                $tooltip.$onKeyUp = function(evt) {
                    if (evt.which === 27 && $tooltip.$isShown) {
                        $tooltip.hide();
                        evt.stopPropagation();
                    }
                };
                $tooltip.$onFocusKeyUp = function(evt) {
                    if (evt.which === 27) {
                        element[0].blur();
                        evt.stopPropagation();
                    }
                };
                $tooltip.$onFocusElementMouseDown = function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    // Some browsers do not auto-focus buttons (eg. Safari)
                    $tooltip.$isShown ? element[0].blur() : element[0].focus();
                };
                // bind/unbind events
                function bindTriggerEvents() {
                    var triggers = options.trigger.split(" ");
                    angular.forEach(triggers, function(trigger) {
                        if (trigger === "click") {
                            element.on("click", $tooltip.toggle);
                        } else if (trigger !== "manual") {
                            element.on(trigger === "hover" ? "mouseenter" : "focus", $tooltip.enter);
                            element.on(trigger === "hover" ? "mouseleave" : "blur", $tooltip.leave);
                            nodeName === "button" && trigger !== "hover" && element.on(isTouch ? "touchstart" : "mousedown", $tooltip.$onFocusElementMouseDown);
                        }
                    });
                }
                function unbindTriggerEvents() {
                    var triggers = options.trigger.split(" ");
                    for (var i = triggers.length; i--; ) {
                        var trigger = triggers[i];
                        if (trigger === "click") {
                            element.off("click", $tooltip.toggle);
                        } else if (trigger !== "manual") {
                            element.off(trigger === "hover" ? "mouseenter" : "focus", $tooltip.enter);
                            element.off(trigger === "hover" ? "mouseleave" : "blur", $tooltip.leave);
                            nodeName === "button" && trigger !== "hover" && element.off(isTouch ? "touchstart" : "mousedown", $tooltip.$onFocusElementMouseDown);
                        }
                    }
                }
                function bindKeyboardEvents() {
                    if (options.trigger !== "focus") {
                        tipElement.on("keyup", $tooltip.$onKeyUp);
                    } else {
                        element.on("keyup", $tooltip.$onFocusKeyUp);
                    }
                }
                function unbindKeyboardEvents() {
                    if (options.trigger !== "focus") {
                        tipElement.off("keyup", $tooltip.$onKeyUp);
                    } else {
                        element.off("keyup", $tooltip.$onFocusKeyUp);
                    }
                }
                var _autoCloseEventsBinded = false;
                function bindAutoCloseEvents() {
                    // use timeout to hookup the events to prevent
                    // event bubbling from being processed imediately.
                    $timeout(function() {
                        // Stop propagation when clicking inside tooltip
                        tipElement.on("click", stopEventPropagation);
                        // Hide when clicking outside tooltip
                        $body.on("click", $tooltip.hide);
                        _autoCloseEventsBinded = true;
                    }, 0, false);
                }
                function unbindAutoCloseEvents() {
                    if (_autoCloseEventsBinded) {
                        tipElement.off("click", stopEventPropagation);
                        $body.off("click", $tooltip.hide);
                        _autoCloseEventsBinded = false;
                    }
                }
                function stopEventPropagation(event) {
                    event.stopPropagation();
                }
                // Private methods
                function getPosition($element) {
                    $element = $element || options.target || element;
                    var el = $element[0], isBody = el.tagName === "BODY";
                    var elRect = el.getBoundingClientRect();
                    var rect = {};
                    // IE8 has issues with angular.extend and using elRect directly.
                    // By coping the values of elRect into a new object, we can continue to use extend
                    for (var p in elRect) {
                        // DO NOT use hasOwnProperty when inspecting the return of getBoundingClientRect.
                        rect[p] = elRect[p];
                    }
                    if (rect.width === null) {
                        // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
                        rect = angular.extend({}, rect, {
                            width: elRect.right - elRect.left,
                            height: elRect.bottom - elRect.top
                        });
                    }
                    var elOffset = isBody ? {
                        top: 0,
                        left: 0
                    } : dimensions.offset(el), scroll = {
                        scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.prop("scrollTop") || 0
                    }, outerDims = isBody ? {
                        width: document.documentElement.clientWidth,
                        height: $window.innerHeight
                    } : null;
                    return angular.extend({}, rect, scroll, outerDims, elOffset);
                }
                function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
                    var offset;
                    var split = placement.split("-");
                    switch (split[0]) {
                      case "right":
                        offset = {
                            top: position.top + position.height / 2 - actualHeight / 2,
                            left: position.left + position.width
                        };
                        break;

                      case "bottom":
                        offset = {
                            top: position.top + position.height,
                            left: position.left + position.width / 2 - actualWidth / 2
                        };
                        break;

                      case "left":
                        offset = {
                            top: position.top + position.height / 2 - actualHeight / 2,
                            left: position.left - actualWidth
                        };
                        break;

                      default:
                        offset = {
                            top: position.top - actualHeight,
                            left: position.left + position.width / 2 - actualWidth / 2
                        };
                        break;
                    }
                    if (!split[1]) {
                        return offset;
                    }
                    // Add support for corners @todo css
                    if (split[0] === "top" || split[0] === "bottom") {
                        switch (split[1]) {
                          case "left":
                            offset.left = position.left;
                            break;

                          case "right":
                            offset.left = position.left + position.width - actualWidth;
                        }
                    } else if (split[0] === "left" || split[0] === "right") {
                        switch (split[1]) {
                          case "top":
                            offset.top = position.top - actualHeight;
                            break;

                          case "bottom":
                            offset.top = position.top + position.height;
                        }
                    }
                    return offset;
                }
                function applyPlacement(offset, placement) {
                    var tip = tipElement[0], width = tip.offsetWidth, height = tip.offsetHeight;
                    // manually read margins because getBoundingClientRect includes difference
                    var marginTop = parseInt(dimensions.css(tip, "margin-top"), 10), marginLeft = parseInt(dimensions.css(tip, "margin-left"), 10);
                    // we must check for NaN for ie 8/9
                    if (isNaN(marginTop)) marginTop = 0;
                    if (isNaN(marginLeft)) marginLeft = 0;
                    offset.top = offset.top + marginTop;
                    offset.left = offset.left + marginLeft;
                    // dimensions setOffset doesn't round pixel values
                    // so we use setOffset directly with our own function
                    dimensions.setOffset(tip, angular.extend({
                        using: function(props) {
                            tipElement.css({
                                top: Math.round(props.top) + "px",
                                left: Math.round(props.left) + "px",
                                right: ""
                            });
                        }
                    }, offset), 0);
                    // check to see if placing tip in new offset caused the tip to resize itself
                    var actualWidth = tip.offsetWidth, actualHeight = tip.offsetHeight;
                    if (placement === "top" && actualHeight !== height) {
                        offset.top = offset.top + height - actualHeight;
                    }
                    // If it's an exotic placement, exit now instead of
                    // applying a delta and changing the arrow
                    if (/top-left|top-right|bottom-left|bottom-right/.test(placement)) return;
                    var delta = getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
                    if (delta.left) {
                        offset.left += delta.left;
                    } else {
                        offset.top += delta.top;
                    }
                    dimensions.setOffset(tip, offset);
                    if (/top|right|bottom|left/.test(placement)) {
                        var isVertical = /top|bottom/.test(placement), arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight, arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
                        replaceArrow(arrowDelta, tip[arrowOffsetPosition], isVertical);
                    }
                }
                // @source https://github.com/twbs/bootstrap/blob/v3.3.5/js/tooltip.js#L380
                function getViewportAdjustedDelta(placement, position, actualWidth, actualHeight) {
                    var delta = {
                        top: 0,
                        left: 0
                    };
                    if (!$tooltip.$viewport) return delta;
                    var viewportPadding = options.viewport && options.viewport.padding || 0;
                    var viewportDimensions = getPosition($tooltip.$viewport);
                    if (/right|left/.test(placement)) {
                        var topEdgeOffset = position.top - viewportPadding - viewportDimensions.scroll;
                        var bottomEdgeOffset = position.top + viewportPadding - viewportDimensions.scroll + actualHeight;
                        if (topEdgeOffset < viewportDimensions.top) {
                            // top overflow
                            delta.top = viewportDimensions.top - topEdgeOffset;
                        } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                            // bottom overflow
                            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
                        }
                    } else {
                        var leftEdgeOffset = position.left - viewportPadding;
                        var rightEdgeOffset = position.left + viewportPadding + actualWidth;
                        if (leftEdgeOffset < viewportDimensions.left) {
                            // left overflow
                            delta.left = viewportDimensions.left - leftEdgeOffset;
                        } else if (rightEdgeOffset > viewportDimensions.right) {
                            // right overflow
                            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
                        }
                    }
                    return delta;
                }
                function replaceArrow(delta, dimension, isHorizontal) {
                    var $arrow = findElement(".tooltip-arrow, .arrow", tipElement[0]);
                    $arrow.css(isHorizontal ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isHorizontal ? "top" : "left", "");
                }
                function destroyTipElement() {
                    // Cancel pending callbacks
                    clearTimeout(timeout);
                    if ($tooltip.$isShown && tipElement !== null) {
                        if (options.autoClose) {
                            unbindAutoCloseEvents();
                        }
                        if (options.keyboard) {
                            unbindKeyboardEvents();
                        }
                    }
                    if (tipScope) {
                        tipScope.$destroy();
                        tipScope = null;
                    }
                    if (tipElement) {
                        tipElement.remove();
                        tipElement = $tooltip.$element = null;
                    }
                }
                return $tooltip;
            }
            // Helper functions
            function safeDigest(scope) {
                scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest();
            }
            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }
            var fetchPromises = {};
            function fetchTemplate(template) {
                if (fetchPromises[template]) return fetchPromises[template];
                return fetchPromises[template] = $http.get(template, {
                    cache: $templateCache
                }).then(function(res) {
                    return res.data;
                });
            }
            return TooltipFactory;
        };
        myGet.$inject = [ "$window", "$rootScope", "$bsCompiler", "$q", "$templateCache", "$http", "$animate", "$sce", "dimensions", "$$rAF", "$timeout" ];
        this.$get = myGet;
    }).directive("bsTooltip", [ "$window", "$location", "$sce", "$tooltip", "$$rAF", function($window, $location, $sce, $tooltip, $$rAF) {
        return {
            restrict: "EAC",
            scope: true,
            link: function postLink(scope, element, attr, transclusion) {
                // Directive options
                var options = {
                    scope: scope
                };
                angular.forEach([ "template", "templateUrl", "controller", "controllerAs", "contentTemplate", "placement", "container", "delay", "trigger", "html", "animation", "backdropAnimation", "type", "customClass", "id" ], function(key) {
                    if (angular.isDefined(attr[key])) options[key] = attr[key];
                });
                // use string regex match boolean attr falsy values, leave truthy values be
                var falseValueRegExp = /^(false|0|)$/i;
                angular.forEach([ "html", "container" ], function(key) {
                    if (angular.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
                });
                // should not parse target attribute (anchor tag), only data-target #1454
                var dataTarget = element.attr("data-target");
                if (angular.isDefined(dataTarget)) {
                    if (falseValueRegExp.test(dataTarget)) options.target = false; else options.target = dataTarget;
                }
                // overwrite inherited title value when no value specified
                // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
                if (!scope.hasOwnProperty("title")) {
                    scope.title = "";
                }
                // Observe scope attributes for change
                attr.$observe("title", function(newValue) {
                    if (angular.isDefined(newValue) || !scope.hasOwnProperty("title")) {
                        var oldValue = scope.title;
                        scope.title = $sce.trustAsHtml(newValue);
                        angular.isDefined(oldValue) && $$rAF(function() {
                            tooltip && tooltip.$applyPlacement();
                        });
                    }
                });
                // Support scope as an object
                attr.bsTooltip && scope.$watch(attr.bsTooltip, function(newValue, oldValue) {
                    if (angular.isObject(newValue)) {
                        angular.extend(scope, newValue);
                    } else {
                        scope.title = newValue;
                    }
                    angular.isDefined(oldValue) && $$rAF(function() {
                        tooltip && tooltip.$applyPlacement();
                    });
                }, true);
                // Visibility binding support
                attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|,?(tooltip),?/i);
                    newValue === true ? tooltip.show() : tooltip.hide();
                });
                // Enabled binding support
                attr.bsEnabled && scope.$watch(attr.bsEnabled, function(newValue, oldValue) {
                    // console.warn('scope.$watch(%s)', attr.bsEnabled, newValue, oldValue);
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    if (angular.isString(newValue)) newValue = !!newValue.match(/true|1|,?(tooltip),?/i);
                    newValue === false ? tooltip.setEnabled(false) : tooltip.setEnabled(true);
                });
                // Viewport support
                attr.viewport && scope.$watch(attr.viewport, function(newValue) {
                    if (!tooltip || !angular.isDefined(newValue)) return;
                    tooltip.setViewport(newValue);
                });
                // Initialize popover
                var tooltip = $tooltip(element, options);
                // Garbage collection
                scope.$on("$destroy", function() {
                    if (tooltip) tooltip.destroy();
                    options = null;
                    tooltip = null;
                });
            }
        };
    } ]);
});

define("fare/oc/1.0.0/lib/tooltip/tooltip.tpl-debug.html", [], '<div class="tooltip in" ng-show="title">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="title"></div>\n</div>\n');

define("fare/oc/1.0.0/lib/valid/index-debug", [ "fare/oc/1.0.0/lib/valid/config/index-debug", "fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug", "fare/oc/1.0.0/lib/valid/directives/index-debug", "fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug", "fare/oc/1.0.0/lib/valid/directives/formReset-debug", "fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug", "fare/oc/1.0.0/lib/valid/providers/validator-debug", "fare/oc/1.0.0/lib/valid/services/index-debug", "fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/debounce-debug", "fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug", "fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/validationManager-debug" ], function(require, exports, module) {
    //var app = require("./index") ;
    require("fare/oc/1.0.0/lib/valid/config/index-debug");
    require("fare/oc/1.0.0/lib/valid/directives/index-debug");
    require("fare/oc/1.0.0/lib/valid/providers/validator-debug");
    require("fare/oc/1.0.0/lib/valid/services/index-debug");
    function AutoValidateRunFn(validator, defaultErrorMessageResolver, bootstrap3ElementModifier, foundation5ElementModifier) {
        validator.setErrorMessageResolver(defaultErrorMessageResolver.resolve);
        validator.registerDomModifier(bootstrap3ElementModifier.key, bootstrap3ElementModifier);
        validator.registerDomModifier(foundation5ElementModifier.key, foundation5ElementModifier);
        validator.setDefaultElementModifier(bootstrap3ElementModifier.key);
    }
    AutoValidateRunFn.$inject = [ "validator", "defaultErrorMessageResolver", "bootstrap3ElementModifier", "foundation5ElementModifier" ];
    angular.module("jcs-autoValidate").run(AutoValidateRunFn);
});

define("fare/oc/1.0.0/lib/valid/config/index-debug", [ "fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug");
    require("fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug");
});

define("fare/oc/1.0.0/lib/valid/config/ngModelDecorator-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    app.config([ "$provide", function($provide) {
        $provide.decorator("ngModelDirective", [ "$timeout", "$delegate", "validationManager", "jcs-debounce", function($timeout, $delegate, validationManager, debounce) {
            var directive = $delegate[0], link = directive.link || directive.compile;
            directive.compile = function(el) {
                var supportsNgModelOptions = angular.version.major >= 1 && angular.version.minor >= 3, originalLink = link;
                // in the RC of 1.3 there is no directive.link only the directive.compile which
                // needs to be invoked to get at the link functions.
                if (supportsNgModelOptions && angular.isFunction(link)) {
                    originalLink = link(el);
                }
                return {
                    pre: function(scope, element, attrs, ctrls) {
                        var ngModelCtrl = ctrls[0], frmCtrl = ctrls[1], ngModelOptions = attrs.ngModelOptions === undefined ? undefined : scope.$eval(attrs.ngModelOptions), setValidity = ngModelCtrl.$setValidity, setPristine = ngModelCtrl.$setPristine, setValidationState = debounce.debounce(function() {
                            var validateOptions = frmCtrl !== undefined && frmCtrl !== null ? frmCtrl.autoValidateFormOptions : undefined;
                            validationManager.validateElement(ngModelCtrl, element, validateOptions);
                        }, 100);
                        if (attrs.formnovalidate === undefined && frmCtrl !== undefined && frmCtrl !== null && frmCtrl.autoValidateFormOptions && frmCtrl.autoValidateFormOptions.disabled === false) {
                            if (!supportsNgModelOptions || ngModelOptions === undefined || ngModelOptions.updateOn === undefined || ngModelOptions.updateOn === "") {
                                ngModelCtrl.$setValidity = function(validationErrorKey, isValid) {
                                    setValidity.call(ngModelCtrl, validationErrorKey, isValid);
                                    setValidationState();
                                };
                            } else {
                                element.on(ngModelOptions.updateOn, function() {
                                    setValidationState();
                                });
                                scope.$on("$destroy", function() {
                                    element.off(ngModelOptions.updateOn);
                                });
                            }
                            // We override this so we can reset the element state when it is called.
                            ngModelCtrl.$setPristine = function() {
                                setPristine.call(ngModelCtrl);
                                validationManager.resetElement(element);
                            };
                            ngModelCtrl.autoValidated = true;
                        }
                        ngModelCtrl.setExternalValidation = function(errorMsgKey, errorMessage, addToModelErrors) {
                            if (addToModelErrors) {
                                var collection = ngModelCtrl.$error || ngModelCtrl.$errors;
                                collection[errorMsgKey] = false;
                            }
                            ngModelCtrl.externalErrors = ngModelCtrl.externalErrors || {};
                            ngModelCtrl.externalErrors[errorMsgKey] = false;
                            validationManager.setElementValidationError(element, errorMsgKey, errorMessage);
                        };
                        ngModelCtrl.removeExternalValidation = function(errorMsgKey, addToModelErrors) {
                            if (addToModelErrors) {
                                var collection = ngModelCtrl.$error || ngModelCtrl.$errors;
                                delete collection[errorMsgKey];
                            }
                            if (ngModelCtrl.externalErrors) {
                                delete ngModelCtrl.externalErrors[errorMsgKey];
                            }
                            validationManager.resetElement(element);
                        };
                        ngModelCtrl.removeAllExternalValidation = function() {
                            if (ngModelCtrl.externalErrors) {
                                var errorCollection = ngModelCtrl.$error || ngModelCtrl.$errors;
                                angular.forEach(ngModelCtrl.externalErrors, function(value, key) {
                                    delete errorCollection[key];
                                });
                                ngModelCtrl.externalErrors = {};
                                validationManager.resetElement(element);
                            }
                        };
                        if (frmCtrl) {
                            frmCtrl.setExternalValidation = function(modelProperty, errorMsgKey, errorMessageOverride, addToModelErrors) {
                                var success = false;
                                if (frmCtrl[modelProperty]) {
                                    frmCtrl[modelProperty].setExternalValidation(errorMsgKey, errorMessageOverride, addToModelErrors);
                                    success = true;
                                }
                                return success;
                            };
                            frmCtrl.removeExternalValidation = function(modelProperty, errorMsgKey, errorMessageOverride, addToModelErrors) {
                                var success = false;
                                if (frmCtrl[modelProperty]) {
                                    frmCtrl[modelProperty].removeExternalValidation(errorMsgKey, addToModelErrors);
                                    success = true;
                                }
                                return success;
                            };
                        }
                        return originalLink.pre ? originalLink.pre.apply(this, arguments) : this;
                    },
                    post: function(scope, element, attrs, ctrls) {
                        return originalLink.post ? originalLink.post.apply(this, arguments) : originalLink.apply(this, arguments);
                    }
                };
            };
            return $delegate;
        } ]);
    } ]);
});

define("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", [], function(require, exports, module) {
    var app = angular.module("jcs-autoValidate", []);
    return app;
});

define("fare/oc/1.0.0/lib/valid/config/ngSubmitDecorator-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function SubmitDecorator($delegate, $parse, validationManager) {
        $delegate[0].compile = function($element, attrs) {
            var fn = $parse(attrs.ngSubmit), force = attrs.ngSubmitForce === "true";
            return function(scope, element) {
                var formController = element.controller("form"), resetListenerOffFn;
                function handlerFn(event) {
                    scope.$apply(function() {
                        if (formController !== undefined && formController !== null && formController.autoValidateFormOptions && formController.autoValidateFormOptions.disabled === true) {
                            fn(scope, {
                                $event: event
                            });
                        } else {
                            if (formController.$setSubmitted === undefined) {
                                // we probably have angular <= 1.2
                                formController.$submitted = true;
                            }
                            if (validationManager.validateForm(element) || force === true) {
                                fn(scope, {
                                    $event: event
                                });
                            }
                        }
                    });
                }
                function resetFormFn() {
                    if (element[0].reset) {
                        element[0].reset();
                    } else {
                        validationManager.resetForm(element);
                    }
                }
                if (formController && formController.autoValidateFormOptions) {
                    // allow the form to be reset programatically or via raising the event
                    // form:formName:reset
                    formController.autoValidateFormOptions.resetForm = resetFormFn;
                    if (formController.$name !== undefined && formController.$name !== "") {
                        resetListenerOffFn = scope.$on("form:" + formController.$name + ":reset", resetFormFn);
                    }
                }
                element.on("submit", handlerFn);
                scope.$on("$destroy", function() {
                    element.off("submit", handlerFn);
                    if (resetListenerOffFn) {
                        resetListenerOffFn();
                    }
                });
            };
        };
        return $delegate;
    }
    SubmitDecorator.$inject = [ "$delegate", "$parse", "validationManager" ];
    function ProviderFn($provide) {
        $provide.decorator("ngSubmitDirective", SubmitDecorator);
    }
    ProviderFn.$inject = [ "$provide" ];
    app.config(ProviderFn);
});

define("fare/oc/1.0.0/lib/valid/directives/index-debug", [ "fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/directives/formReset-debug", "fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug");
    require("fare/oc/1.0.0/lib/valid/directives/formReset-debug");
    require("fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug");
});

define("fare/oc/1.0.0/lib/valid/directives/autoValidateFormOptions-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function parseBooleanAttributeValue(val, defaultValue) {
        if ((val === undefined || val === null) && defaultValue !== undefined) {
            return defaultValue;
        } else {
            return val !== "false";
        }
    }
    function parseOptions(ctrl, validator, attrs) {
        var opts = ctrl.autoValidateFormOptions = ctrl.autoValidateFormOptions || angular.copy(validator.defaultFormValidationOptions);
        opts.formController = ctrl;
        opts.forceValidation = false;
        opts.disabled = !validator.isEnabled() || parseBooleanAttributeValue(attrs.disableDynamicValidation, opts.disabled);
        opts.validateNonVisibleControls = parseBooleanAttributeValue(attrs.validateNonVisibleControls, opts.validateNonVisibleControls);
        opts.validateOnFormSubmit = parseBooleanAttributeValue(attrs.validateOnFormSubmit, opts.validateOnFormSubmit);
        opts.removeExternalValidationErrorsOnSubmit = attrs.removeExternalValidationErrorsOnSubmit === undefined ? opts.removeExternalValidationErrorsOnSubmit : parseBooleanAttributeValue(attrs.removeExternalValidationErrorsOnSubmit, opts.removeExternalValidationErrorsOnSubmit);
        // the library might be globally disabled but enabled on a particular form so check the
        // disableDynamicValidation attribute is on the form
        if (validator.isEnabled() === false && attrs.disableDynamicValidation === "false") {
            opts.disabled = false;
        }
    }
    app.directive("form", [ "validator", function(validator) {
        return {
            restrict: "E",
            require: "form",
            priority: 9999,
            compile: function() {
                return {
                    pre: function(scope, element, attrs, ctrl) {
                        parseOptions(ctrl, validator, attrs);
                    }
                };
            }
        };
    } ]);
    app.directive("ngForm", [ "validator", function(validator) {
        return {
            restrict: "EA",
            require: "form",
            priority: 9999,
            compile: function() {
                return {
                    pre: function(scope, element, attrs, ctrl) {
                        parseOptions(ctrl, validator, attrs);
                    }
                };
            }
        };
    } ]);
});

define("fare/oc/1.0.0/lib/valid/directives/formReset-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function FormResetDirectiveFn(validationManager) {
        return {
            restrict: "E",
            link: function(scope, el) {
                var formController = el.controller("form");
                function resetFn() {
                    validationManager.resetForm(el);
                    if (formController.$setPristine) {
                        formController.$setPristine();
                    }
                    if (formController.$setUntouched) {
                        formController.$setUntouched();
                    }
                }
                if (formController !== undefined && formController.autoValidateFormOptions && formController.autoValidateFormOptions.disabled === false) {
                    el.on("reset", resetFn);
                    scope.$on("$destroy", function() {
                        el.off("reset", resetFn);
                    });
                }
            }
        };
    }
    FormResetDirectiveFn.$inject = [ "validationManager" ];
    app.directive("form", FormResetDirectiveFn);
});

define("fare/oc/1.0.0/lib/valid/directives/registerCustomFormControl-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function RegisterCustomFormControlFn() {
        var findParentForm = function(el) {
            var parent = el;
            for (var i = 0; i <= 50; i += 1) {
                if (parent !== undefined && parent.nodeName.toLowerCase() === "form") {
                    break;
                } else if (parent !== undefined) {
                    parent = angular.element(parent).parent()[0];
                }
            }
            return parent;
        };
        return {
            restrict: "A",
            link: function(scope, element) {
                var frmEl = findParentForm(element.parent()[0]);
                if (frmEl) {
                    frmEl.customHTMLFormControlsCollection = frmEl.customHTMLFormControlsCollection || [];
                    frmEl.customHTMLFormControlsCollection.push(element[0]);
                }
            }
        };
    }
    app.directive("registerCustomFormControl", RegisterCustomFormControlFn);
});

define("fare/oc/1.0.0/lib/valid/providers/validator-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function ValidatorFn() {
        var elementStateModifiers = {}, enableValidElementStyling = true, enableInvalidElementStyling = true, validationEnabled = true, toBoolean = function(value) {
            var v;
            if (value && value.length !== 0) {
                v = value.toLowerCase();
                value = !(v === "f" || v === "0" || v === "false");
            } else {
                value = false;
            }
            return value;
        }, getAttributeValue = function(el, attrName) {
            var val;
            if (el !== undefined) {
                val = el.attr(attrName) || el.attr("data-" + attrName);
            }
            return val;
        }, attributeExists = function(el, attrName) {
            var exists;
            if (el !== undefined) {
                exists = el.attr(attrName) !== undefined || el.attr("data-" + attrName) !== undefined;
            }
            return exists;
        }, getBooleanAttributeValue = function(el, attrName) {
            return toBoolean(getAttributeValue(el, attrName));
        }, validElementStylingEnabled = function(el) {
            return enableValidElementStyling && !getBooleanAttributeValue(el, "disable-valid-styling");
        }, invalidElementStylingEnabled = function(el) {
            return enableInvalidElementStyling && !getBooleanAttributeValue(el, "disable-invalid-styling");
        };
        /**
     * @ngdoc function
     * @name validator#enable
     * @methodOf validator
     *
     * @description
     * By default auto validate will validate all forms and elements with an ngModel directive on.  By
     * setting enabled to false you will explicitly have to opt in to enable validation on forms and child
     * elements.
     *
     * Note: this can be overridden by add the 'auto-validate-enabled="true/false' attribute to a form.
     *
     * Example:
     * <pre>
     *  app.config(function (validator) {
     *    validator.enable(false);
     *  });
     * </pre>
     *
     * @param {Boolean} isEnabled true to enable, false to disable.
     */
        this.enable = function(isEnabled) {
            validationEnabled = isEnabled;
        };
        /**
     * @ngdoc function
     * @name validator#isEnabled
     * @methodOf validator
     *
     * @description
     * Returns true if the library is enabeld.
     *
     * @return {Boolean} true if enabled, otherwise false.
     */
        this.isEnabled = function() {
            return validationEnabled;
        };
        /**
     * @ngdoc function
     * @name validator#setDefaultElementModifier
     * @methodOf validator
     *
     * @description
     * Sets the default element modifier that will be used by the validator
     * to change an elements UI state.  Please ensure the modifier has been registered
     * before setting it as default.
     *
     * Note: this can be changed by setting the
     * element modifier attribute on the input element 'data-element-modifier="myCustomModifier"'
     *
     * Example:
     * <pre>
     *  app.config(function (validator) {
     *    validator.setDefaultElementModifier('myCustomModifier');
     *  });
     * </pre>
     *
     * @param {string} key The key name of the modifier.
     */
        this.setDefaultElementModifier = function(key) {
            if (elementStateModifiers[key] === undefined) {
                throw new Error("Element modifier not registered: " + key);
            }
            this.defaultElementModifier = key;
        };
        /**
     * @ngdoc function
     * @name validator#registerDomModifier
     * @methodOf validator
     *
     * @description
     * Registers an object that adheres to the elementModifier interface and is
     * able to modifier an elements dom so that appears valid / invalid for a specific
     * scenario i.e. the Twitter Bootstrap css framework, Foundation CSS framework etc.
     *
     * Example:
     * <pre>
     *  app.config(function (validator) {
     *    validator.registerDomModifier('customDomModifier', {
     *      makeValid: function (el) {
     *          el.removeClass(el, 'invalid');
     *          el.addClass(el, 'valid');
     *      },
     *      makeInvalid: function (el, err, domManipulator) {
     *          el.removeClass(el, 'valid');
     *          el.addClass(el, 'invalid');
     *      }
     *    });
     *  });
     * </pre>
     *
     * @param {string} key The key name of the modifier
     * @param {object} modifier An object which implements the elementModifier interface
     */
        this.registerDomModifier = function(key, modifier) {
            elementStateModifiers[key] = modifier;
        };
        /**
     * @ngdoc function
     * @name validator#setErrorMessageResolver
     * @methodOf validator
     *
     * @description
     * Registers an object that adheres to the elementModifier interface and is
     * able to modifier an elements dom so that appears valid / invalid for a specific
     * scenario i.e. the Twitter Bootstrap css framework, Foundation CSS framework etc.
     *
     * Example:
     * <pre>
     *  app.config(function (validator) {
     *    validator.setErrorMessageResolver(function (errorKey, el) {
     *      var defer = $q.defer();
     *      // resolve the correct error from the given key and resolve the returned promise.
     *      return defer.promise();
     *    });
     *  });
     * </pre>
     *
     * @param {function} resolver A method that returns a promise with the resolved error message in.
     */
        this.setErrorMessageResolver = function(resolver) {
            this.errorMessageResolver = resolver;
        };
        /**
     * @ngdoc function
     * @name validator#getErrorMessage
     * @methodOf validator
     *
     * @description
     * Resolves the error message for the given error type.
     *
     * @param {String} errorKey The error type.
     * @param {Element} el The UI element that is the focus of the error.
     * It is provided as the error message may need information from the element i.e. ng-min (the min allowed value).
     */
        this.getErrorMessage = function(errorKey, el) {
            var defer;
            if (this.errorMessageResolver === undefined) {
                throw new Error("Please set an error message resolver via the setErrorMessageResolver function before attempting to resolve an error message.");
            }
            if (attributeExists(el, "disable-validation-message")) {
                defer = angular.injector([ "ng" ]).get("$q").defer();
                defer.resolve("");
                return defer.promise;
            } else {
                return this.errorMessageResolver(errorKey, el);
            }
        };
        /**
     * @ngdoc function
     * @name validator#setValidElementStyling
     * @methodOf validator
     *
     * @description
     * Globally enables valid element visual styling.  This is enabled by default.
     *
     * @param {Boolean} enabled True to enable style otherwise false.
     */
        this.setValidElementStyling = function(enabled) {
            enableValidElementStyling = enabled;
        };
        /**
     * @ngdoc function
     * @name validator#setInvalidElementStyling
     * @methodOf validator
     *
     * @description
     * Globally enables invalid element visual styling.  This is enabled by default.
     *
     * @param {Boolean} enabled True to enable style otherwise false.
     */
        this.setInvalidElementStyling = function(enabled) {
            enableInvalidElementStyling = enabled;
        };
        this.getDomModifier = function(el) {
            var modifierKey = (el !== undefined ? el.attr("element-modifier") : this.defaultElementModifier) || (el !== undefined ? el.attr("data-element-modifier") : this.defaultElementModifier) || this.defaultElementModifier;
            if (modifierKey === undefined) {
                throw new Error("Please set a default dom modifier via the setDefaultElementModifier method on the validator class.");
            }
            return elementStateModifiers[modifierKey];
        };
        this.makeValid = function(el) {
            if (validElementStylingEnabled(el)) {
                this.getDomModifier(el).makeValid(el);
            } else {
                this.makeDefault(el);
            }
        };
        this.makeInvalid = function(el, errorMsg) {
            if (invalidElementStylingEnabled(el)) {
                this.getDomModifier(el).makeInvalid(el, errorMsg);
            } else {
                this.makeDefault(el);
            }
        };
        this.makeDefault = function(el) {
            var dm = this.getDomModifier(el);
            if (dm.makeDefault) {
                dm.makeDefault(el);
            }
        };
        this.defaultFormValidationOptions = {
            forceValidation: false,
            disabled: false,
            validateNonVisibleControls: false,
            removeExternalValidationErrorsOnSubmit: true,
            validateOnFormSubmit: false
        };
        this.$get = [ function() {
            return this;
        } ];
    }
    app.provider("validator", ValidatorFn);
});

define("fare/oc/1.0.0/lib/valid/services/index-debug", [ "fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug", "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug", "fare/oc/1.0.0/lib/valid/services/debounce-debug", "fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug", "fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug", "fare/oc/1.0.0/lib/valid/services/validationManager-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug");
    require("fare/oc/1.0.0/lib/valid/services/debounce-debug");
    require("fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug");
    require("fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug");
    require("fare/oc/1.0.0/lib/valid/services/validationManager-debug");
});

define("fare/oc/1.0.0/lib/valid/services/bootstrap3ElementModifier-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function Bootstrap3ElementModifierFn($log) {
        var reset = function(el) {
            angular.forEach(el.find("span"), function(spanEl) {
                spanEl = angular.element(spanEl);
                if (spanEl.hasClass("error-msg") || spanEl.hasClass("form-control-feedback") || spanEl.hasClass("control-feedback")) {
                    spanEl.remove();
                }
            });
            el.removeClass("has-success has-error has-feedback");
        }, findWithClassElementAsc = function(el, klass) {
            var returnEl, parent = el;
            for (var i = 0; i <= 10; i += 1) {
                if (parent !== undefined && parent.hasClass(klass)) {
                    returnEl = parent;
                    break;
                } else if (parent !== undefined) {
                    parent = parent.parent();
                }
            }
            return returnEl;
        }, findWithClassElementDesc = function(el, klass) {
            var child;
            for (var i = 0; i < el.children.length; i += 1) {
                child = el.children[i];
                if (child !== undefined && angular.element(child).hasClass(klass)) {
                    break;
                } else if (child.children !== undefined) {
                    child = findWithClassElementDesc(child, klass);
                    if (child.length > 0) {
                        break;
                    }
                }
            }
            return angular.element(child);
        }, findFormGroupElement = function(el) {
            return findWithClassElementAsc(el, "form-group");
        }, findInputGroupElement = function(el) {
            return findWithClassElementDesc(el, "input-group");
        }, insertAfter = function(referenceNode, newNode) {
            referenceNode[0].parentNode.insertBefore(newNode[0], referenceNode[0].nextSibling);
        }, /**
       * @ngdoc property
       * @name bootstrap3ElementModifier#addValidationStateIcons
       * @propertyOf bootstrap3ElementModifier
       * @returns {bool} True if an state icon will be added to the element in the valid and invalid control
       * states.  The default is false.
       */
        addValidationStateIcons = false, /**
       * @ngdoc function
       * @name bootstrap3ElementModifier#enableValidationStateIcons
       * @methodOf bootstrap3ElementModifier
       *
       * @description
       * Makes an element appear invalid by apply an icon to the input element.
       *
       * @param {bool} enable - True to enable the icon otherwise false.
       */
        enableValidationStateIcons = function(enable) {
            addValidationStateIcons = enable;
        }, /**
       * @ngdoc function
       * @name bootstrap3ElementModifier#makeValid
       * @methodOf bootstrap3ElementModifier
       *
       * @description
       * Makes an element appear valid by apply bootstrap 3 specific styles and child elements. If the service
       * property 'addValidationStateIcons' is true it will also append validation glyphicon to the element.
       * See: http://getbootstrap.com/css/#forms-control-validation
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeValid = function(el) {
            var frmGroupEl = findFormGroupElement(el), inputGroupEl;
            if (frmGroupEl) {
                reset(frmGroupEl);
                inputGroupEl = findInputGroupElement(frmGroupEl[0]);
                frmGroupEl.addClass("has-success " + (inputGroupEl.length > 0 ? "" : "has-feedback"));
                if (addValidationStateIcons) {
                    var iconElText = '<span class="glyphicon glyphicon-ok form-control-feedback"></span>';
                    if (inputGroupEl.length > 0) {
                        iconElText = iconElText.replace("form-", "");
                        iconElText = '<span class="input-group-addon control-feedback">' + iconElText + "</span";
                    }
                    insertAfter(el, angular.element(iconElText));
                }
            } else {
                $log.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
            }
        }, /**
       * @ngdoc function
       * @name bootstrap3ElementModifier#makeInvalid
       * @methodOf bootstrap3ElementModifier
       *
       * @description
       * Makes an element appear invalid by apply bootstrap 3 specific styles and child elements. If the service
       * property 'addValidationStateIcons' is true it will also append validation glyphicon to the element.
       * See: http://getbootstrap.com/css/#forms-control-validation
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeInvalid = function(el, errorMsg) {
            var frmGroupEl = findFormGroupElement(el), helpTextEl = angular.element('<span class="help-block has-error error-msg">' + errorMsg + "</span>"), inputGroupEl;
            if (frmGroupEl) {
                reset(frmGroupEl);
                inputGroupEl = findInputGroupElement(frmGroupEl[0]);
                frmGroupEl.addClass("has-error " + (inputGroupEl.length > 0 ? "" : "has-feedback"));
                insertAfter(inputGroupEl.length > 0 ? inputGroupEl : getCorrectElementToPlaceErrorElementAfter(el), helpTextEl);
                if (addValidationStateIcons) {
                    var iconElText = '<span class="glyphicon glyphicon-remove form-control-feedback"></span>';
                    if (inputGroupEl.length > 0) {
                        iconElText = iconElText.replace("form-", "");
                        iconElText = '<span class="input-group-addon control-feedback">' + iconElText + "</span";
                    }
                    insertAfter(getCorrectElementToPlaceErrorElementAfter(el), angular.element(iconElText));
                }
            } else {
                $log.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
            }
        }, getCorrectElementToPlaceErrorElementAfter = function(el) {
            var correctEl = el, elType = el[0].type ? el[0].type.toLowerCase() : "";
            if ((elType === "checkbox" || elType === "radio") && el.parent()[0].nodeName.toLowerCase() === "label") {
                correctEl = el.parent();
            }
            return correctEl;
        }, /**
       * @ngdoc function
       * @name bootstrap3ElementModifier#makeDefault
       * @methodOf bootstrap3ElementModifier
       *
       * @description
       * Makes an element appear in its default visual state by apply bootstrap 3 specific styles and child elements.
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeDefault = function(el) {
            var frmGroupEl = findFormGroupElement(el);
            if (frmGroupEl) {
                reset(frmGroupEl);
            } else {
                $log.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class");
            }
        };
        return {
            makeValid: makeValid,
            makeInvalid: makeInvalid,
            makeDefault: makeDefault,
            enableValidationStateIcons: enableValidationStateIcons,
            key: "bs3"
        };
    }
    Bootstrap3ElementModifierFn.$inject = [ "$log" ];
    app.factory("bootstrap3ElementModifier", Bootstrap3ElementModifierFn);
});

define("fare/oc/1.0.0/lib/valid/services/debounce-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    /*
   * Taken from https://github.com/angular/angular.js/issues/2690#issue-14462164 (with added tests of course!)
   */
    function JCSDebounceFn($timeout) {
        var debounce = function(fn, timeout, apply) {
            timeout = angular.isUndefined(timeout) ? 0 : timeout;
            apply = angular.isUndefined(apply) ? true : apply;
            // !!default is true! most suitable to my experience
            var nthCall = 0;
            return function() {
                // intercepting fn
                var that = this;
                var argz = arguments;
                nthCall += 1;
                var later = function(version) {
                    return function() {
                        if (version === nthCall) {
                            return fn.apply(that, argz);
                        }
                    };
                }(nthCall);
                return $timeout(later, timeout, apply);
            };
        };
        return {
            debounce: debounce
        };
    }
    JCSDebounceFn.$inject = [ "$timeout" ];
    app.factory("jcs-debounce", JCSDebounceFn);
});

define("fare/oc/1.0.0/lib/valid/services/defaultErrorMessageResolver-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    /**
   * Replaces string placeholders with corresponding template string
   */
    if (!("format" in String.prototype)) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] !== undefined ? args[number] : match;
            });
        };
    }
    angular.autoValidate = angular.autoValidate || {
        errorMessages: {}
    };
    angular.autoValidate.errorMessages["en-us"] = angular.autoValidate.errorMessages["en-gb"] = {
        defaultMsg: "Please add error message for {0}",
        email: "Please enter a valid email address",
        minlength: "Please enter at least {0} characters",
        maxlength: "You have entered more than the maximum {0} characters",
        min: "Please enter the minimum number of {0}",
        max: "Please enter the maximum number of {0}",
        required: "This field is required",
        date: "Please enter a valid date",
        pattern: "Please ensure the entered information adheres to this pattern {0}",
        number: "Please enter a valid number",
        url: "Please enter a valid URL in the format of http(s)://www.google.com"
    };
    function DefaultErrorMessageResolverFn($q, $http) {
        var currentCulture = "en-gb", i18nFileRootPath = "js/angular-auto-validate/dist/lang", cultureRetrievalPromise, loadRemoteCulture = function(culture) {
            cultureRetrievalPromise = $http.get("{0}/jcs-auto-validate_{1}.json".format(i18nFileRootPath, culture.toLowerCase()));
            return cultureRetrievalPromise;
        }, /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#setI18nFileRootPath
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Set the root path to the il8n files on the server
       *
       * @param {String} rootPath - The root path on the server to the il8n file - this defaults
       * to 'js/angular-auto-validate/lang/'
       */
        setI18nFileRootPath = function(rootPath) {
            i18nFileRootPath = rootPath;
        }, /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#setCulture
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Set the culture for the error messages by loading an the correct culture resource file.
       *
       * @param {String} culture - The new culture in the format of 'en-gb' etc.
       * @param {Function} cultureLoadingFn - A optional function to load the culture resolve which should
       * return a promise which is resolved with the culture errorMessage object.  If a function is not specified
       * the culture file is loaded from the **i18nFileRootPath**.
       * @returns {Promise} - A promise which is resolved with the loaded culture error messages object.
       */
        setCulture = function(culture, cultureLoadingFn) {
            var defer = $q.defer();
            cultureLoadingFn = cultureLoadingFn || loadRemoteCulture;
            currentCulture = culture.toLowerCase();
            if (angular.autoValidate.errorMessages[currentCulture] === undefined) {
                cultureRetrievalPromise = cultureLoadingFn(culture);
                cultureRetrievalPromise.then(function(response) {
                    cultureRetrievalPromise = undefined;
                    angular.autoValidate.errorMessages[currentCulture] = response.data;
                    defer.resolve(angular.autoValidate.errorMessages[currentCulture]);
                }, function(err) {
                    angular.autoValidate.errorMessages[currentCulture] = {
                        defaultMsg: "Loading culture failed!"
                    };
                    cultureRetrievalPromise = null;
                    defer.reject(err);
                });
            } else {
                defer.resolve(angular.autoValidate.errorMessages[currentCulture]);
            }
            return defer.promise;
        }, getErrorMessages = function(culture) {
            var defer = $q.defer();
            culture = culture === undefined ? currentCulture : culture.toLowerCase();
            if (cultureRetrievalPromise !== undefined) {
                cultureRetrievalPromise.then(function() {
                    defer.resolve(angular.autoValidate.errorMessages[culture]);
                }, function(err) {
                    defer.reject(err);
                });
            } else {
                defer.resolve(angular.autoValidate.errorMessages[culture]);
            }
            return defer.promise;
        }, getMessageTypeOverride = function(errorType, el) {
            var overrideKey;
            if (el) {
                // try and find an attribute which overrides the given error type in the form of errorType-err-type="someMsgKey"
                errorType += "-err-type";
                overrideKey = el.attr("ng-" + errorType);
                if (overrideKey === undefined) {
                    overrideKey = el.attr("data-ng-" + errorType) || el.attr(errorType);
                }
                if (overrideKey) {
                    overrideKey = overrideKey.replace(/[\W]/g, "");
                }
            }
            return overrideKey;
        }, /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#resolve
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Resolves a validate error type into a user validation error message
       *
       * @param {String} errorType - The type of validation error that has occurred.
       * @param {Element} el - The input element that is the source of the validation error.
       * @returns {Promise} A promise that is resolved when the validation message has been produced.
       */
        resolve = function(errorType, el) {
            var defer = $q.defer(), errMsg, parameters = [], parameter, messageTypeOverride;
            if (cultureRetrievalPromise !== undefined) {
                cultureRetrievalPromise.then(function() {
                    resolve(errorType, el).then(function(msg) {
                        defer.resolve(msg);
                    });
                });
            } else {
                errMsg = angular.autoValidate.errorMessages[currentCulture][errorType];
                messageTypeOverride = getMessageTypeOverride(errorType, el);
                if (messageTypeOverride) {
                    errMsg = angular.autoValidate.errorMessages[currentCulture][messageTypeOverride];
                }
                if (errMsg === undefined) {
                    errMsg = angular.autoValidate.errorMessages[currentCulture].defaultMsg.format(errorType);
                }
                if (el && el.attr) {
                    try {
                        parameter = el.attr("ng-" + errorType);
                        if (parameter === undefined) {
                            parameter = el.attr("data-ng-" + errorType) || el.attr(errorType);
                        }
                        parameters.push(parameter || "");
                        errMsg = errMsg.format(parameters);
                    } catch (e) {}
                }
                defer.resolve(errMsg);
            }
            return defer.promise;
        };
        return {
            setI18nFileRootPath: setI18nFileRootPath,
            setCulture: setCulture,
            getErrorMessages: getErrorMessages,
            resolve: resolve
        };
    }
    DefaultErrorMessageResolverFn.$inject = [ "$q", "$http" ];
    app.factory("defaultErrorMessageResolver", DefaultErrorMessageResolverFn);
});

define("fare/oc/1.0.0/lib/valid/services/foundation5ElementModifier-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function Foundation5ElementModifierFn() {
        var reset = function(el, inputEl) {
            angular.forEach(el.find("small"), function(smallEl) {
                if (angular.element(smallEl).hasClass("error")) {
                    angular.element(smallEl).remove();
                }
            });
            inputEl.removeClass("error");
        }, findParentColumn = function(el) {
            var parent = el;
            for (var i = 0; i <= 3; i += 1) {
                if (parent !== undefined && (parent.hasClass("columns") || parent.hasClass("column"))) {
                    break;
                } else if (parent !== undefined) {
                    parent = parent.parent();
                }
            }
            return parent;
        }, /**
       * @ngdoc function
       * @name foundation5ElementModifier#makeValid
       * @methodOf foundation5ElementModifier
       *
       * @description
       * Makes an element appear valid by apply Foundation 5 specific styles and child elements.
       * See: http://foundation.zurb.com/docs/components/forms.html
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeValid = function(el) {
            var parentColumn = findParentColumn(el);
            reset(parentColumn && parentColumn.length > 0 ? parentColumn : el, el);
        }, /**
       * @ngdoc function
       * @name foundation5ElementModifier#makeInvalid
       * @methodOf foundation5ElementModifier
       *
       * @description
       * Makes an element appear invalid by apply Foundation 5 specific styles and child elements.
       * See: http://foundation.zurb.com/docs/components/forms.html
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeInvalid = function(el, errorMsg) {
            var parentColumn = findParentColumn(el), helpTextEl;
            reset(parentColumn || el, el);
            el.addClass("error");
            if (parentColumn) {
                helpTextEl = angular.element('<small class="error">' + errorMsg + "</small>");
                parentColumn.append(helpTextEl);
            }
        }, /**
       * @ngdoc function
       * @name foundation5ElementModifier#makeDefault
       * @methodOf foundation5ElementModifier
       *
       * @description
       * Makes an element appear in its default visual state by apply foundation 5 specific styles and child elements.
       *
       * @param {Element} el - The input control element that is the target of the validation.
       */
        makeDefault = function(el) {
            makeValid(el);
        };
        return {
            makeValid: makeValid,
            makeInvalid: makeInvalid,
            makeDefault: makeDefault,
            key: "foundation5"
        };
    }
    app.factory("foundation5ElementModifier", Foundation5ElementModifierFn);
});

define("fare/oc/1.0.0/lib/valid/services/validationManager-debug", [ "fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug" ], function(require, exports, module) {
    var app = require("fare/oc/1.0.0/lib/valid/jcs-auto-validate-debug");
    function ElementUtilsFn() {
        var isElementVisible = function(el) {
            return el[0].offsetWidth > 0 && el[0].offsetHeight > 0;
        };
        return {
            isElementVisible: isElementVisible
        };
    }
    function ValidationManagerFn(validator, elementUtils) {
        var elementTypesToValidate = [ "input", "textarea", "select", "form" ], elementIsVisible = function(el) {
            return elementUtils.isElementVisible(el);
        }, getFormOptions = function(el) {
            var frmCtrl = angular.element(el).controller("form"), options;
            if (frmCtrl !== undefined && frmCtrl !== null) {
                options = frmCtrl.autoValidateFormOptions;
            } else {
                options = validator.defaultFormValidationOptions;
            }
            return options;
        }, /**
       * Only validate if the element is present, it is visible, if it is not a comment,
       * it is either a valid user input control (input, select, textare, form) or
       * it is a custom control register by the developer.
       * @param el
       * @param formOptions The validation options of the parent form
       * @returns {boolean} true to indicate it should be validated
       */
        shouldValidateElement = function(el, formOptions, formSubmitted) {
            var elementExists = el && el.length > 0, isElementAComment = elementExists && el[0].nodeName.toLowerCase() === "#comment", correctVisibilityToValidate, correctTypeToValidate, correctPhaseToValidate;
            if (elementExists && isElementAComment === false) {
                correctVisibilityToValidate = elementIsVisible(el) || formOptions.validateNonVisibleControls;
                correctTypeToValidate = elementTypesToValidate.indexOf(el[0].nodeName.toLowerCase()) > -1 || el[0].hasAttribute("register-custom-form-control");
                correctPhaseToValidate = formOptions.validateOnFormSubmit === false || formOptions.validateOnFormSubmit === true && formSubmitted === true;
            }
            return elementExists && !isElementAComment && correctVisibilityToValidate && correctTypeToValidate && correctPhaseToValidate;
        }, /**
       * @ngdoc validateElement
       * @name validation#validateElement
       * @param {object} modelCtrl holds the information about the element e.g. $invalid, $valid
       * @param {options}
       *  - forceValidation if set to true forces the validation even if the element is pristine
       *  - disabled if set to true forces the validation is disabled and will return true
       *  - validateNonVisibleControls if set to true forces the validation of non visible element i.e. display:block
       * @description
       * Validate the form element and make invalid/valid element model status.
       *
       * As of v1.17.22:
       * BREAKING CHANGE to validateElement on the validationManger.  The third parameter is now the parent form's
       * autoValidateFormOptions object on the form controller.  This can be left blank and will be found by the
       * validationManager.
       */
        validateElement = function(modelCtrl, el, options) {
            var isValid = true, frmOptions = options || getFormOptions(el), needsValidation = modelCtrl.$pristine === false || frmOptions.forceValidation, errorType, findErrorType = function($errors) {
                var keepGoing = true, errorTypeToReturn;
                angular.forEach($errors, function(status, errortype) {
                    if (keepGoing && status) {
                        keepGoing = false;
                        errorTypeToReturn = errortype;
                    }
                });
                return errorTypeToReturn;
            };
            if (frmOptions.disabled === false) {
                if (frmOptions.forceValidation || shouldValidateElement(el, frmOptions, frmOptions.formController.$submitted) && modelCtrl && needsValidation) {
                    isValid = !modelCtrl.$invalid;
                    if (frmOptions.removeExternalValidationErrorsOnSubmit && modelCtrl.removeAllExternalValidation) {
                        modelCtrl.removeAllExternalValidation();
                    }
                    if (isValid) {
                        validator.makeValid(el);
                    } else {
                        errorType = findErrorType(modelCtrl.$errors || modelCtrl.$error);
                        if (errorType === undefined) {
                            // we have a weird situation some users are encountering where a custom control
                            // is valid but the ngModel is report it isn't and thus no valid error type can be found
                            isValid = true;
                        } else {
                            validator.getErrorMessage(errorType, el).then(function(errorMsg) {
                                validator.makeInvalid(el, errorMsg);
                            });
                        }
                    }
                }
            }
            return isValid;
        }, resetElement = function(element) {
            validator.makeDefault(element);
        }, resetForm = function(frmElement) {
            angular.forEach(frmElement[0].all || frmElement[0].elements || frmElement[0], function(element) {
                var controller, ctrlElement = angular.element(element);
                controller = ctrlElement.controller("ngModel");
                if (controller !== undefined) {
                    if (ctrlElement[0].nodeName.toLowerCase() === "form") {
                        // we probably have a sub form
                        resetForm(ctrlElement);
                    } else {
                        controller.$setPristine();
                    }
                }
            });
        }, validateForm = function(frmElement) {
            var frmValid = true, frmCtrl = frmElement ? angular.element(frmElement).controller("form") : undefined, processElement = function(ctrlElement, force, formOptions) {
                var controller, isValid, ctrlFormOptions, originalForceValue;
                ctrlElement = angular.element(ctrlElement);
                controller = ctrlElement.controller("ngModel");
                if (controller !== undefined && (force || shouldValidateElement(ctrlElement, formOptions, frmCtrl.$submitted))) {
                    if (ctrlElement[0].nodeName.toLowerCase() === "form") {
                        // we probably have a sub form
                        validateForm(ctrlElement);
                    } else {
                        // we need to get the options for the element rather than use the passed in as the
                        // element could be an ng-form and have different options to the parent form.
                        ctrlFormOptions = getFormOptions(ctrlElement);
                        originalForceValue = ctrlFormOptions.forceValidation;
                        ctrlFormOptions.forceValidation = force;
                        try {
                            isValid = validateElement(controller, ctrlElement, ctrlFormOptions);
                            frmValid = frmValid && isValid;
                        } finally {
                            ctrlFormOptions.forceValidation = originalForceValue;
                        }
                    }
                }
            }, clonedOptions;
            if (frmElement === undefined || frmCtrl !== undefined && frmCtrl.autoValidateFormOptions.disabled) {
                return frmElement !== undefined;
            }
            //force the validation of controls
            clonedOptions = angular.copy(frmCtrl.autoValidateFormOptions);
            clonedOptions.forceValidation = true;
            // IE8 holds the child controls collection in the all property
            // Firefox in the elements and chrome as a child iterator
            angular.forEach(frmElement[0].all || frmElement[0].elements || frmElement[0], function(ctrlElement) {
                processElement(ctrlElement, true, clonedOptions);
            });
            // If you have a custom form control that should be validated i.e.
            // <my-custom-element>...</my-custom-element> it will not be part of the forms
            // HTMLFormControlsCollection and thus won't be included in the above element iteration although
            // it will be on the Angular FormController (if it has a name attribute).  So adding the directive
            // register-custom-form-control="" to the control root and autoValidate will include it in this
            // iteration.
            if (frmElement[0].customHTMLFormControlsCollection) {
                angular.forEach(frmElement[0].customHTMLFormControlsCollection, function(ctrlElement) {
                    // need to force the validation as the element might not be a known form input type
                    // so the normal validation process will ignore it.
                    processElement(ctrlElement, true, clonedOptions);
                });
            }
            return frmValid;
        }, setElementValidationError = function(element, errorMsgKey, errorMsg) {
            if (errorMsgKey) {
                validator.getErrorMessage(errorMsgKey, element).then(function(msg) {
                    validator.makeInvalid(element, msg);
                });
            } else {
                validator.makeInvalid(element, errorMsg);
            }
        };
        return {
            setElementValidationError: setElementValidationError,
            validateElement: validateElement,
            validateForm: validateForm,
            resetElement: resetElement,
            resetForm: resetForm
        };
    }
    ValidationManagerFn.$inject = [ "validator", "jcs-elementUtils" ];
    app.factory("jcs-elementUtils", ElementUtilsFn);
    app.factory("validationManager", ValidationManagerFn);
});
