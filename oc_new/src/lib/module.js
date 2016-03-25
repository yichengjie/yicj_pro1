define(function(require, exports, module){
  //工具类
  require("./helpers/compiler") ;
  require("./helpers/date-formatter") ;
  require("./helpers/date-parser") ;
  require("./helpers/debounce") ;
  require("./helpers/dimensions") ;
  require("./helpers/parse-options") ;
  require("./helpers/raf") ;
  //下面是使用的组件
  require("./datepicker/datepicker") ;
  require("./timepicker/timepicker") ;
  require("./tooltip/tooltip") ;
  require("./valid/index") ;

  angular.module('mgcrea.ngStrap', [
    'mgcrea.ngStrap.datepicker',
    'mgcrea.ngStrap.timepicker',
    'mgcrea.ngStrap.tooltip',
    'jcs-autoValidate'
  ]);

}) ;

