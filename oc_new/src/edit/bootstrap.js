define(function(require, exports, module) {
	require("./app") ;
	module.exports = { 
 		init: function(){ 
			angular.element(document).ready(function() {
			    angular.bootstrap(document, ['app']);
			});
 		} 
 	} ;
});