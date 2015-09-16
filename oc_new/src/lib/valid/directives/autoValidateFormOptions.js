define(function(require, exports, module){
  var app = require("../jcs-auto-validate") ;
  function parseBooleanAttributeValue(val, defaultValue) {
    if ((val === undefined || val === null) && defaultValue !== undefined) {
      return defaultValue;
    } else {
      return val !== 'false';
    }
  }

  function parseOptions(ctrl, validator, attrs) {
    var opts = ctrl.autoValidateFormOptions = ctrl.autoValidateFormOptions || angular.copy(validator.defaultFormValidationOptions);
    opts.formController = ctrl;
    opts.forceValidation = false;
    opts.disabled = !validator.isEnabled() || parseBooleanAttributeValue(attrs.disableDynamicValidation, opts.disabled);
    opts.validateNonVisibleControls = parseBooleanAttributeValue(attrs.validateNonVisibleControls, opts.validateNonVisibleControls);
    opts.validateOnFormSubmit = parseBooleanAttributeValue(attrs.validateOnFormSubmit, opts.validateOnFormSubmit);
    opts.removeExternalValidationErrorsOnSubmit = attrs.removeExternalValidationErrorsOnSubmit === undefined ?
      opts.removeExternalValidationErrorsOnSubmit :
      parseBooleanAttributeValue(attrs.removeExternalValidationErrorsOnSubmit, opts.removeExternalValidationErrorsOnSubmit);

    // the library might be globally disabled but enabled on a particular form so check the
    // disableDynamicValidation attribute is on the form
    if (validator.isEnabled() === false && attrs.disableDynamicValidation === 'false') {
      opts.disabled = false;
    }
  }

  app.directive('form', [
    'validator',
    function (validator) {
      return {
        restrict: 'E',
        require: 'form',
        priority: 9999,
        compile: function () {
          return {
            pre: function (scope, element, attrs, ctrl) {
              parseOptions(ctrl, validator, attrs);
            }
          };
        }
      };
    }
  ]);

  app.directive('ngForm', [
    'validator',
    function (validator) {
      return {
        restrict: 'EA',
        require: 'form',
        priority: 9999,
        compile: function () {
          return {
            pre: function (scope, element, attrs, ctrl) {
              parseOptions(ctrl, validator, attrs);
            }
          };
        }
      };
    }
  ]);
}) ;
