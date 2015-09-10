// Set configuration
seajs.config({
	base : '/angular_demo/oc_new/seajs-modules',
	alias : {
		'jquery' : 'jquery/jquery/1.10.1/jquery-1.8.2.js',
		'angular':'angular/angularjs/1.4.3/angular.js',
		'angular-route':'angular/angularjs/1.4.3/angular-route.js',
		'ui-router':'angular/angularjs/1.4.3/angular-ui-router.js',
		'angular-resource':'angular/angularjs/1.4.3/angular-resource.js',
		'seajs-text': 'seajs/seajs/2.1.1/seajs-text-debug.js',
		'underscore':'underscore/1.7.0/underscore.js',
		'moment':'angular/angularjs/1.4.3/moment.js',
		'datetimepicker':'angular/angularjs/1.4.3/datetimepicker.js'
	},
	preload: ['seajs-text'],
	debug: true
});

seajs.use('/angular_demo/oc_new/app/edit/bootstrap',function(app){
	app.init() ;
});
