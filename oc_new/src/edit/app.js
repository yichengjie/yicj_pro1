define(function(require, exports, module) {
	require('./services/services') ;
	require('./controllers/index') ;
	require('./directives/index') ;
	//lib中的指令
	require('../lib/module') ;
	var app = angular.module('app',['app.factory','app.controllers','app.directives','mgcrea.ngStrap'])
	.run(['bootstrap3ElementModifier', function (bootstrap3ElementModifier) {
		bootstrap3ElementModifier.enableValidationStateIcons(true);
	}]);;

	app.constant('NEW_ADD_STR', 'add');    //方法3定义全局变量 
	app.constant('UPDATE_STR', 'update');    //方法3定义全局变量 
	app.constant('DEFAULT_SERVICETYPE','F') ;//默认的serviceType
}) ;