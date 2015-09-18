define(function (require, exports, module) {
	var controllers = require('./controllers') ;
	//最外层controller
	controllers.controller('EditController',['$scope','FormData','NEW_ADD_STR','UPDATE_STR','$http','validationManager',function($scope,FormData,NEW_ADD_STR,UPDATE_STR,$http,validationManager){
	  	$scope.NEW_ADD_STR = NEW_ADD_STR ;//新增action字符串标记
		$scope.UPDATE_STR = UPDATE_STR ;//更新action字符串标记
		$scope.contextPath = FormData.contextPath ;
		$scope.data = FormData ;


		$scope.orgData = angular.copy(FormData) ;
		//下面这部分是模拟测试数据之后会修改完善
		//当选择免费或则收费时触发的事件
		//表单提交
		$scope.submitForm = function(type) {
			console.info('保存保单数据 :type : ' + type) ;

			var formElement = angular.element('#ocForm') ;
			if(type=='reset'){
				validationManager.resetForm(formElement) ;
				FormData = angular.copy($scope.orgData) ;
				$scope.data = FormData ;

			}else{
				var flag = validationManager.validateForm(formElement) ;
				console.info('form valid flag : ' + flag) ;
				var flag2 = $scope.ocForm.fareBasis.$valid ;
				console.info('基础运价 flag2 : ' + flag2) ;
				var flag3 = $scope.ocForm.lastMaintenanceDate.$valid ;
				console.info('截止日期 flag3 : ' + flag3) ;
				console.info("form valid flag : " + flag) ;
				/*if(flag){
					console.log('准备提交表单数据') ;
				}else{
					validationManager.validateForm(formElement) ;
				}*/
			}

		};
		/*********这一部分属于页面所有的静态的select框开始部分**************/
		$scope.specifiedServiceFeeAppList=[//适用于
			{"name":"选择","value":""},{"name":"每一个票价组成部分算一次服务费用","value":"1"},
			{"name":"每一个票价组成部分算一半的服务费用","value":"2"},{"name":"每用一次服务算一次服务费用【F/T/M】","value":"3"},
			{"name":"匹配的部分航程算一次服务费用","value":"4"},{"name":"服务收费对应每张售票","value":"5"}
		] ;
		$scope.noChargeNotAvailableList=[
			{"name":"收费","value":""},{"name":"不适用","value":"X"},
			{"name":"免费，不出EMD单","value":"F"},{"name":"免费，出EMD单","value":"E"},
			{"name":"免费，不出EMD单，不要求预定","value":"G"},{"name":"免费，出EMD单，不要求预定","value":"H"},
			{"name":"免费，行李规则遵循市场方航空公司规则","value":"D"},{"name":"免费，行李规则遵循承运方航空公司规则","value":"O"}
		] ;
		$scope.specServiceFeeColSubList=[////SPEC_SERVICE_FEE_COL_SUB//包含/扣除
			{"name":"选择","value":""},
			{"name":"包含","value":"I"},{"name":"扣除","value":""}
		] ;
		$scope.specServiceFeeNetSellList=[//净价/销售价
			{"name":"销售价","value":""},{"name":"净价","value":"N"}
		] ;
		//舱位list集合
		$scope.cabinList = [
			{"name":"选择","value":""},
			{"name":"R-豪华头等舱","value":"R"},{"name":"F-头等舱","value":"F"},
			{"name":"J-豪华商务舱","value":"J"},{"name":"C-商务舱","value":"C"},
			{"name":"P-豪华经济舱","value":"P"},{"name":"Y-经济舱","value":"Y"}] ;
		//退/改
		$scope.indicatorReissueRefundList = [
			{"name":"选择","value":""},{"name":"不可退款","value":"N"},
			{"name":"可退款","value":"Y"},{"name":"不可退款，下一次购票可同EMD单出","value":"R"}
		] ;

		//退款形式
		$scope.formOfRefundList = [
			{"name":"选择","value":""},{"name":"按原付款渠道退款","value":"1"},
			{"name":"按电子凭证退款","value":"2"}
		] ;

		$scope.geoSpecSectPortJourneyList = [
			{"name":"选择","value":""},{"name":"区域","value":"S"},
			{"name":"部分","value":"P"},{"name":"全程","value":"J"}
		] ;

		$scope.geoSpecExceptionStopUnitList = [{"name":"选择","value":""},
			{"name":"分","value":"N"},{"name":"小时","value":"H"},
			{"name":"天","value":"D"},{"name":"周","value":"W"},
			{"name":"月","value":"M"}
		] ;

		$scope.timeApplicationList = [
			{"name":"选择","value":""},{"name":"分别","value":"D"},
			{"name":"之间","value":"R"}
		] ;



		$scope.selectedIcon = '';
		$scope.selectedIcons = ['Globe', 'Heart'];
		$scope.icons = [
			{"value": "Gear", "label": "Gear"},
			{"value": "Globe", "label": "Globe"},
			{"value": "Heart", "label": "Heart"},
			{"value": "Camera", "label": "Camera"}
		];

		$scope.selectedMonth = 0;
		$scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		//行李重量单位集合
		/*********这一部分属于页面所有的静态的select框结束部分**************/
    }]) ;
	
}) ;