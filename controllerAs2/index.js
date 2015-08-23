var app = angular.module("app",[]) ;







app.factory('FormData', function() {
    var contextPath = "oc" ;
    var carrCode = "HW" ;
    var action = "add";
    console.log("[contextPath : "+contextPath+"],[carrCode : "+carrCode+"],[action:"+action+"]") ;
    return {
        contextPath:contextPath,
        carrCode:carrCode,
        serviceAndSubCode:'',
        serviceType:"F",//s7中包含信息//默认值为'F'//根据选择的s5决定是'F'/'M'
        action:action,
        sel1:{"showStr":"","value":""},
        sel2:{"showStr":"","value":""},
        sel3:{"showStr":"","value":""},
        firstMaintenanceDate:'2015-08-21',//-----------页面第二部分开始--------------//
        lastMaintenanceDate:'2015-08-21',
        description:'',//描述
        fareBasis:'',//运价基础
        noChargeNotAvailable:"",//'E'的时候'免费'//s7中包含信息
        list170VO:[//金额表//对应上面的收费
            {"saleGeographicPointType":"A","saleGeographicPoint":"1","specFeeAmount":"11","specFeeCurrency":"CNY","selected":false},
            {"saleGeographicPointType":"N","saleGeographicPoint":"YY","specFeeAmount":"22","specFeeCurrency":"CNY","selected":true}
        ],//-------------页面第二部分结束---------------------------//
        sequenceNumber:'',//优先级序号//--------------------页面第三部分开始---------------------------//
        passengerTypeCode:'',//旅客类型
        frequentFlyerStatus:'',//常旅客状态
        cabin:'',//服务等级
        rbdTableNo198:'',//暂时没啥用,后台也不使用这个字段
        list198VO:[//订座属性表
            //{"mktOp":"O","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":false},
            //{"mktOp":"E","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":true}
        ],
        upgradeToRbdTableNo198:'',//暂时没啥用，后台也不是该字段
        list198UpgradeVO:[//座位属性表，或则升舱属性表
            {"cxr":"A","rbd1":"w","rbd2":"w","rbd3":"w","rbd4":"w","rbd5":"w","selected":true}
        ],
        securityTableNo183:'',//发布安全表//暂时没啥用，后台也不是该字段
        list183VO:[//安全发布表
            {"geographicSpecificationType":"S","geographicSpecification":"CC","codeType":"","code":"","selected":true}
        ],
        carrierFlightTableNo186:'',//航班信息表//暂时没啥用，后台也不是该字段
        list186VO:[
            {"mktCarrier":"市场方","optCarrier":"承运方","fltNo1":"001","fltNo2":"002","selected":true}
        ],
        equipment:'',//机型
        startTime:'',//开始时刻
        stopTime:'',//结束时刻
        list178Loc1Id:'',//区域1表格id
        list178Loc1:[//区域1对应的表格
            {"geoLocType":"N","geoLocSpec":"CC","appl":"N","selected":true}
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
        geoSpecLoc3:''//区域3代码
    }
});

app.controller('IndexController',function($scope,FormData){

     $scope.data =  {
         name:'yicj',
     } ;
    $scope.flag1 = true ;
    $scope.flag2 = true ;
    var cc = {} ;
    angular.extend(cc,FormData) ;
    cc.contextPath = 'hello world' ;

    cc.ttt = 'xxx' ;

    //console.info('cc contextPath : ' + cc.contextPath) ;
    //console.info('FormData contextPath : ' + FormData.contextPath) ;
    //console.info(cc.list170VO) ;
    //delete cc.list170VO ;
    //console.info(cc.list170VO) ;
    //console.info(FormData) ;

    for(var p in cc){
        //console.info(p  + ' --- ' + FormData[p]) ;
        var flag =  FormData.hasOwnProperty(p);
        if(flag){
            cc[p]  = FormData[p] ;
        }
    }

    console.info(cc) ;




});

app.directive('hello', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:{
            geoType:'='
        },
        controller:function($scope){
            $scope.myName = "hello hello " ;
        },
        controllerAs:'helloCtrl',
        template:'<div><h1>hello world <br/></h1><span ng-transclude=""></span></div>',
        transclude:true,
        link: function(scope, elem, attrs,helloCtrl) {
            elem.bind('click',function(){
                console.info(scope.geoType) ;
            }) ;

        }
    };
});



