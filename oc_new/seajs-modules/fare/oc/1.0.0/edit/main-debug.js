define("fare/oc/1.0.0/edit/main-debug", [ "./router-debug", "./services/services-debug", "angular-resource-debug", "./directives/index-debug", "./directives/headerDirective-debug", "./directives/directives-debug", "../tpls/edit/header-debug.html", "./controllers/index-debug", "./controllers/eidtController-debug", "./controllers/controllers-debug", "./controllers/headController-debug", "./filters/filters-debug" ], function(require, exports, module) {
    require("./router-debug");
    module.exports = {
        init: function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, [ "app" ]);
            });
        }
    };
});

define("fare/oc/1.0.0/edit/router-debug", [ "fare/oc/1.0.0/edit/services/services-debug", "angular-resource-debug", "fare/oc/1.0.0/edit/directives/index-debug", "fare/oc/1.0.0/edit/directives/headerDirective-debug", "fare/oc/1.0.0/edit/directives/directives-debug", "fare/oc/1.0.0/edit/controllers/index-debug", "fare/oc/1.0.0/edit/controllers/eidtController-debug", "fare/oc/1.0.0/edit/controllers/controllers-debug", "fare/oc/1.0.0/edit/controllers/headController-debug", "fare/oc/1.0.0/edit/filters/filters-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/services/services-debug");
    require("fare/oc/1.0.0/edit/directives/index-debug");
    require("fare/oc/1.0.0/edit/controllers/index-debug");
    require("fare/oc/1.0.0/edit/filters/filters-debug");
    //把需要的模块全部加载到testApp中
    var app = angular.module("app", [ "app.factory", "app.controllers", "app.directives", "app.filter" ]);
    app.constant("NEW_ADD_STR", "add");
    //方法3定义全局变量 
    app.constant("UPDATE_STR", "update");
    //方法3定义全局变量 
    app.constant("DEFAULT_SERVICETYPE", "F");
});

define("fare/oc/1.0.0/edit/services/services-debug", [ "angular-resource-debug" ], function(require, exports, module) {
    var app = angular.module("app.factory", []);
    require("angular-resource-debug");
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
            firstMaintenanceDate: "",
            //-----------页面第二部分开始--------------//
            lastMaintenanceDate: "",
            description: "",
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
            list170VO: [],
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
            list172VO: [],
            ticketDesignatorTableNo173: "",
            //指定客票表（T173）//子表//新增
            list173TicketVO: [],
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
            list183VO: [],
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

define("fare/oc/1.0.0/edit/directives/index-debug", [ "fare/oc/1.0.0/edit/directives/headerDirective-debug", "fare/oc/1.0.0/edit/directives/directives-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/directives/headerDirective-debug");
});

define("fare/oc/1.0.0/edit/directives/headerDirective-debug", [ "fare/oc/1.0.0/edit/directives/directives-debug" ], function(require, exports, module) {
    var directives = require("fare/oc/1.0.0/edit/directives/directives-debug");
    var headerHtml = require("fare/oc/1.0.0/tpls/edit/header-debug.html");
    directives.directive("headerDrct", function() {
        return {
            restrict: "AE",
            replace: "true",
            scope: true,
            template: headerHtml,
            link: function(scope, elem, attrs) {}
        };
    });
});

define("fare/oc/1.0.0/edit/directives/directives-debug", [], function(require, exports, module) {
    var directives = angular.module("app.directives", []);
    return directives;
});

define("fare/oc/1.0.0/tpls/edit/header-debug.html", [], '<div class="main_box helper_padding_0" ng-controller = "HeaderCtrl">\n	<div class="header_control query_section">\n		<!-- title index -->\n		<div class="helper_float_left query_section_row edit_header">\n			<h1 class="helper_margin_right_10px helper_margin_top_10px" ng-bind = "headerTipStr"></h1>\n			<span class="helper_color_blue_2 ">服务类型</span>\n			<span class="helper_color_blue_2 ">|</span>\n			<span class="helper_color_blue_2 ">费用</span>\n			<span class="helper_color_blue_2 ">|</span>\n			<span class="helper_color_blue_2 ">规则</span>\n		</div>\n		<!-- title index -->\n		<!-- 功能按钮start -->\n		<div class="helper_float_right operation_btnlist">\n			<div class="helper_float_left helper_margin_0_2px margin_top_5px" >\n				<div class="btn_page btn_cancel">\n					<div class="btn_left"></div>\n					<div class="btn_content" id="back" ng-click = "backPage();">返回</div>\n					<div class="btn_right"></div>\n				</div>\n			</div>\n			<div class="helper_float_left helper_margin_0_2px margin_top_5px">\n				<div class="btn_page btn_cancel">\n					<div class="btn_left"></div>\n					<div class="btn_content" id="s7_save">保存</div>\n					<div class="btn_right"></div>\n				</div>\n			</div>\n			<div class="helper_float_left helper_margin_0_2px margin_top_5px">\n				<div class="btn_page btn_save">\n					<div class="btn_left"></div>\n					<div class="btn_content" id="s7_saveAndPublish" >保存并发布</div>\n					<div class="btn_right"></div>\n				</div>\n			</div>\n			<div class="clearfix"></div>\n		</div>\n		<!-- 功能按钮end -->\n		<div class="clearfix"></div>\n	</div>\n</div>');

//主要用来加载各个控制器（所有的控制器都将在这个文件中被加载）,除此之外再不用做其他，
//因为我们可以有很多个控制器文件，按照具体需要进行添加。
define("fare/oc/1.0.0/edit/controllers/index-debug", [ "fare/oc/1.0.0/edit/controllers/eidtController-debug", "fare/oc/1.0.0/edit/controllers/controllers-debug", "fare/oc/1.0.0/edit/controllers/headController-debug" ], function(require, exports, module) {
    require("fare/oc/1.0.0/edit/controllers/eidtController-debug");
    require("fare/oc/1.0.0/edit/controllers/headController-debug");
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
        var s7Id = $("#s7Id").val();
        $scope.data.id = s7Id;
    } ]);
});

define("fare/oc/1.0.0/edit/controllers/controllers-debug", [], function(require, exports, module) {
    var controllers = angular.module("app.controllers", []);
    return controllers;
});

define("fare/oc/1.0.0/edit/controllers/headController-debug", [ "fare/oc/1.0.0/edit/controllers/controllers-debug" ], function(require, exports, module) {
    var controllers = require("fare/oc/1.0.0/edit/controllers/controllers-debug");
    //headerController
    controllers.controller("HeaderCtrl", [ "$scope", "FormData", "NEW_ADD_STR", function($scope, FormData, NEW_ADD_STR) {
        $scope.NEW_ADD_STR = NEW_ADD_STR;
        $scope.contextPath = FormData.contextPath;
        $scope.backPage = function() {
            window.location.href = $scope.contextPath + "/oc/ocView";
        };
        var action = FormData.action || "";
        if (action == $scope.NEW_ADD_STR) {
            $scope.headerTipStr = "新建服务费用";
        } else {
            //表示为修改页面跳转过来的
            $scope.headerTipStr = "更新服务费用";
        }
    } ]);
});

define("fare/oc/1.0.0/edit/filters/filters-debug", [], function(require, exports, module) {
    var app = angular.module("app.filter", []);
    //过滤choose1
    app.filter("serviceGroupFilter", function() {
        var myFunc = function(data, inputStr) {
            inputStr = inputStr || "";
            var retData = [];
            if (inputStr.length > 0) {
                inputStr = inputStr.toLowerCase();
                angular.forEach(data, function(e) {
                    if (e.serviceGroupDescription.toLowerCase().indexOf(inputStr) != -1) {
                        retData.push(e);
                    }
                });
            } else {
                retData = data;
            }
            return retData;
        };
        return myFunc;
    });
    //subGroupDescription
    app.filter("subGroupFilter", function() {
        var myFunc = function(data, inputStr) {
            inputStr = inputStr || "";
            var retData = [];
            if (inputStr.length > 0) {
                inputStr = inputStr.toLowerCase();
                angular.forEach(data, function(e) {
                    if (e.subGroupDescription.toLowerCase().indexOf(inputStr) != -1) {
                        retData.push(e);
                    }
                });
            } else {
                retData = data;
            }
            return retData;
        };
        return myFunc;
    });
    //lastGroupList
    app.filter("lastGroupFilter", function() {
        var myFunc = function(data, inputStr) {
            inputStr = inputStr || "";
            var retData = [];
            if (inputStr.length > 0) {
                inputStr = inputStr.toLowerCase();
                angular.forEach(data, function(e) {
                    var tmpStr = "[" + e.serviceSubCode + "]" + e.commercialName;
                    if (tmpStr.toLowerCase().indexOf(inputStr) != -1) {
                        retData.push(e);
                    }
                });
            } else {
                retData = data;
            }
            return retData;
        };
        return myFunc;
    });
});
