define(function(require, exports, module){ 
	var app = angular.module('app.factory',[]); 
	//require('angular-resource') ;
	app.factory('SelectListData', function () {
		return {
			weightUnitList:[//行李单
				{"name":"选择","value":""},
				{"name":"千克","value":"K"},
				{"name":"磅","value":"P"}
			],
			cabinList:[//舱位list集合
				{"name":"选择","value":""},
				{"name":"R-豪华头等舱","value":"R"},{"name":"F-头等舱","value":"F"},
				{"name":"J-豪华商务舱","value":"J"},{"name":"C-商务舱","value":"C"},
				{"name":"P-豪华经济舱","value":"P"},{"name":"Y-经济舱","value":"Y"}
			],
			geoLocTypeList:[//区域集合//geoSpecTypeList
				{"name":"选择","value":""},
				{"name":"A-大区","value":"A"},{"name":"C-城市","value":"C"},
				{"name":"N-国家","value":"N"},{"name":"P-机场","value":"P"},
				{"name":"S-州","value":"S"},{"name":"Z-区域","value":"Z"}
			],
			indicatorReissueRefundList:[//退/改
				{"name":"选择","value":""},{"name":"不可退款","value":"N"},
				{"name":"可退款","value":"Y"},{"name":"不可退款，下一次购票可同EMD单出","value":"R"}
			],
			formOfRefundList:[//退款形式
				{"name":"选择","value":""},{"name":"按原付款渠道退款","value":"1"},
				{"name":"按电子凭证退款","value":"2"}
			],
			geoSpecSectPortJourneyList:[
				{"name":"选择","value":""},{"name":"区域","value":"S"},
				{"name":"部分","value":"P"},{"name":"全程","value":"J"}
			],
			geoSpecExceptionStopUnitList:[
				{"name":"分","value":"N"},{"name":"小时","value":"H"},
				{"name":"天","value":"D"},{"name":"周","value":"W"},
				{"name":"月","value":"M"}
			],
			timeApplicationList:[
				{"name":"选择","value":""},{"name":"分别","value":"D"},
				{"name":"之间","value":"R"}
			]
		} ;
	}) ;

	app.factory('FormData',['DEFAULT_SERVICETYPE',function(DEFAULT_SERVICETYPE) {
		var contextPath = $.trim($("#contextPath").val()) ;
		var carrCode = $.trim($("#carrCode").val()) ;
		var action = $.trim($("#action").val()) ;
		console.log("[contextPath : "+contextPath+"],[carrCode : "+carrCode+"],[action:"+action+"]") ;
		return {
		   id:'',
		   status:'',
		   statusDes:'',
		   status:'',
		   contextPath:contextPath,
		   carrCode:carrCode,
		   serviceAndSubCode:'',
		   serviceType:DEFAULT_SERVICETYPE,//s7中包含信息//默认值为'F'//根据选择的s5决定是'F'/'M'
		   action:action,
		   sel1:{"showStr":"","value":""},
		   sel2:{"showStr":"","value":""},
		   sel3:{"showStr":"","value":""},
		   firstMaintenanceDate:'2015-09-09',//-----------页面第二部分开始--------------//
		   lastMaintenanceDate:'',
		   description:'我的描述信息',//描述
		   fareBasis:'',//运价基础
		   freeBaggageAllowancePieces:'',//免费行李件数
		   firstExcessOccurrence:'1',//收费行李件数起点
		   lastExcessOccurrence:'',//收费行李件数结束
		   freeBaggageAllowanceWeight:'',//免费重量
		   freeBaggageAllowanceUnit:'',//免费单位
		   noChargeNotAvailable:"",//'E'的时候'免费'//s7中包含信息
		   list196VO:[//备注例外行李
		   		//{"count":"1","code":"t01","selected":true}
		   ],
		   serviceFeeCurTableNo170:'',
		   list170VO:[//金额表//对应上面的收费
		   				{"saleGeographicPointType":"A","saleGeographicPoint":"1","specFeeAmount":"11","specFeeCurrency":"CNY"},
		   				{"saleGeographicPointType":"N","saleGeographicPoint":"YY","specFeeAmount":"22","specFeeCurrency":"CNY"}
					],//-------------页面第二部分结束---------------------------//
			mileageMinimum:'',//里程//新增字段
			mileageMaximum:'',//里程//新增字段
			specifiedServiceFeeApp:'',//适用于//新增字段
			specServiceFeeColSub:'',//包含，扣除//新增字段
			specServiceFeeNetSell:'',//净价/销售价//新增字段
			specSevFeeAndOrIndicator:'',//或、和//新增字段
			specifiedServiceFeeMileage:'',//里程//新增字段
			availability:'N',//必须检查可用性（查库存）
		 	sequenceNumber:'',//优先级序号//--------------------页面第三部分开始---------------------------//
		 	passengerTypeCode:'',//旅客类型
		 	minPassengerAge:'',//最小年龄--新增字段
			maxPassengerAge:'',//最大年龄--新增字段
		 	firstPassengerOccurrence:'',//个数范围    第几个到第几个【数字】//新增字段
		 	lastPassengerOccurrence:'',//个数范围    第几个到第几个【数字】//新增字段
		 	customerIndexScoreMinimum:'',//客户积分范围【数字】//新增
		 	customerIndexScoreMaxmum:'',//客户积分范围【数字】//新增
		 	frequentFlyerStatus:'',//常旅客状态
		 	accountCodeTableNo172:'',//大客户/特殊客户表（T172）//子表//新增
		 	list172VO:[
				{"accountCode":"001"}
			],
		 	ticketDesignatorTableNo173:'',//指定客票表（T173）//子表//新增
		 	list173TicketVO:[
				{"ticketDesignator":"avx"}
			],
			tktDesignatorTableNo173:"",//173
			list173TktVO:[
				//{"ticketDesignator":"001","selected":true}
			],
		 	tourCode:'',//旅行编码（关联客票）【字母或数字】//新增
		 	cabin:'',//服务等级
		 	upgradeToCabin:'',
		 	rbdTableNo198:'',//暂时没啥用,后台也不使用这个字段
			list198VO:[//订座属性表
				//{"mktOp":"O","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":false},
				//{"mktOp":"E","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":true}
			],
			upgradeToRbdTableNo198:'',//暂时没啥用，后台也不是该字段
			list198UpgradeVO:[//座位属性表，或则升舱属性表
				//{"cxr":"A","rbd1":"w","rbd2":"w","rbd3":"w","rbd4":"w","rbd5":"w","selected":true}
			],
			securityTableNo183:'',//发布安全表//暂时没啥用，后台也不是该字段
			list183VO:[//安全发布表
				{"travelAgency":"HH","carrierGds":"HK","dutyFunctionCode":"BZ","geographicSpecificationType":"S", "geographicSpecification":"CC","codeType":"","code":"","viewBookTkt":"XX"}
			],
			publicPrivateIndicator:'',//公有、私有//新增字段
			carrierFlightTableNo186:'',//航班信息表//暂时没啥用，后台也不是该字段
			list186VO:[
				//{"mktCarrier":"市场方","optCarrier":"承运方","fltNo1":"001","fltNo2":"002","selected":true}
			],
			taxApplication:'Y',//是否含税费//新增字段
			tariff:'',//税费
			rule:'',//规则
			cxrResFareTableNo171:"",//客票舱位等级表
			list171VO:[//客票舱位等级表
				//{"carrier":"HK","resFareClassCode":"AA","fareTypeCode":"","selected":true}
			],
			equipment:'',//机型
			equipmentTypeTableNo165:'',
			list165VO:[
				//{"equipmentCode":"hello","selected":true}
			] ,
			startTime:'',//开始时刻
			stopTime:'',//结束时刻
			timeApplication:'',//应用范围//新增字段
			dayOfWeek:'',//星期//新增字段
			dayOfWeekShow:{"w1":false,"w2":false,"w3":false,"w4":false,"w5":false,"w6":false,"w7":false},//前台数据，后台无对应的属性
			advancedPurchasePeriod:'',//提前购票时间//新增字段
			advancedPurchaseUnit:'H',//时间单位//新增字段
			advancedPurchaseTktIssue:'',//是否与机票同时出票//新增字段
			indicatorReissueRefund:'',//退、改//新增字段
			formOfRefund:'',//退款形式//新增字段
			indicatorComission:'Y',//(是否有)代理费//新增字段
			indicatorInterline:'Y',//是
			firstTravelYear:'',
			firstTravelMonth:'',
			firstTravelDay:'',
			lastTravelYear:'',
			lastTravelMonth:'',
			lastTravelDay:'',
			travelStartDate:'',//这个是中间数据，后台不存在对应的属性
			travelEndDate:'',//这个是中间数据，后台不存在对应的属性
			list178Loc1Id:'',//区域1表格id
			list178Loc1:[//区域1对应的表格
				//{"geoLocType":"N","geoLocSpec":"CC","appl":"N","selected":true}
			],
			list178Loc2Id:'',//区域2表格id
			list178Loc2:[//区域2对应的表格
			],
			list178Loc3Id:'',//区域3表格id
			list178Loc3:[//区域2对应的表格
			],
			geoSpecFromToWithin:'',//区域限制
			geoSpecSectPortJourney:'P',//航段限制//目前返回的是定死的字符串‘P’
			geoSpecLoc1Type:'',//区域1类型
			geoSpecLoc1:'',//区域1代码
			geoSpecLoc2Type:'',//区域2类型
			geoSpecLoc2:'',//区域2代码
			geoSpecLoc3Type:'',//区域3类型
			geoSpecLoc3:'',//区域3代码//下面的都是新增 的字段
			geoSpecSectPortJourney:'',//区域/部分/全程
			geoSpecTravelIndicator:'',//指定区域
			geoSpecExceptionStopTime:'',//经停时间//新增字段
			geoSpecExceptionStopUnit:'H',//经停单位
			geoSpecStopConnDes:''//经停类型(限输入1位字母)
		}
	}]);
 	 
 }) 
