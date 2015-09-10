define(function (require, exports, module) {
	var controllers = require('./controllers') ;
	//最外层controller
	controllers.controller('EditController',['$scope','FormData','NEW_ADD_STR','UPDATE_STR','$http',function($scope,FormData,NEW_ADD_STR,UPDATE_STR,$http){
	  	$scope.NEW_ADD_STR = NEW_ADD_STR ;//新增action字符串标记
		$scope.UPDATE_STR = UPDATE_STR ;//更新action字符串标记
		$scope.contextPath = FormData.contextPath ;
		$scope.data = FormData ;
		console.info($scope.data) ;
		//下面这部分是模拟测试数据之后会修改完善
		//当选择免费或则收费时触发的事件

		//表单提交
		$scope.submitForm = function(type) {
			console.info('保存保单数据 :type : ' + type) ;
			var flag =$scope.ocForm.$valid ;
			console.info('flag : ' + flag) ;

		};

		/*********这一部分属于页面所有的静态的select框开始部分**************/
		//行李重量单位集合
		$scope.weightUnitList = [
			{"name":"选择","value":""},
			{"name":"千克","value":"K"},
			{"name":"磅","value":"P"}] ;
		//适用于
		$scope.specifiedServiceFeeAppList = [
			{"name":"选择","value":""},{"name":"每一个票价组成部分算一次服务费用","value":"1"},
			{"name":"每一个票价组成部分算一半的服务费用","value":"2"},{"name":"每用一次服务算一次服务费用【F/T/M】","value":"3"},
			{"name":"匹配的部分航程算一次服务费用","value":"4"},{"name":"服务收费对应每张售票","value":"5"}
		] ;
		//SPEC_SERVICE_FEE_COL_SUB//包含/扣除
		$scope.specServiceFeeColSubList = [
			{"name":"选择","value":""},
			{"name":"包含","value":"I"},{"name":"扣除","value":""}
		] ;

		//免费/收费
		$scope.noChargeNotAvailableList = [
			{"name":"收费","value":""},{"name":"不适用","value":"X"},
			{"name":"免费，不出EMD单","value":"F"},{"name":"免费，出EMD单","value":"E"},
			{"name":"免费，不出EMD单，不要求预定","value":"G"},{"name":"免费，出EMD单，不要求预定","value":"H"},
			{"name":"免费，行李规则遵循市场方航空公司规则","value":"D"},{"name":"免费，行李规则遵循承运方航空公司规则","value":"O"}
		] ;

		//净价/销售价
		$scope.specServiceFeeNetSellList = [
			{"name":"销售价","value":""},{"name":"净价","value":"N"}
		] ;
		/*********这一部分属于页面所有的静态的select框结束部分**************/

    }]) ; 
	
}) ;