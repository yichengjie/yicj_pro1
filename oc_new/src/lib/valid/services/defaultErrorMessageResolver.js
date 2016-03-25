define(function(require, exports, module){
  var app = require("../jcs-auto-validate") ;
  /**
   * Replaces string placeholders with corresponding template string
   */
  if (!('format' in String.prototype)) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] !== undefined ? args[number] : match;
      });
    };
  }

  angular.autoValidate = angular.autoValidate || {
    errorMessages: {}
  };

  angular.autoValidate.errorMessages['en-us'] = angular.autoValidate.errorMessages['en-gb'] = {
    "defaultMsg": "请为 {0} 增加错误信息",
    "email": "请输入合法的电子邮箱地址",
    "minlength": "请输入至少 {0} 字符",
    "maxlength": "最多只允许输入 {0} 字符",
    "min": "请输入 {0} 允许的最小数值",
    "max": "请输入 {0} 允许的最大数值",
    "required": "这个字段是必须的",
    "date": "请输入合法日期",
    "pattern": "请确认输入信息符合规则 {0}",
    "number": "请输入一个合法数字",
    "url": "请输入正确的网址",
    "alphanumeric":"请输入字母或数字",
    "integer":"请输入正整数"
  };

  function DefaultErrorMessageResolverFn($q, $http) {
    var currentCulture = 'en-gb',

      i18nFileRootPath = 'js/angular-auto-validate/dist/lang',

      cultureRetrievalPromise,

      loadRemoteCulture = function (culture) {
        cultureRetrievalPromise = $http.get('{0}/jcs-auto-validate_{1}.json'.format(i18nFileRootPath, culture.toLowerCase()));
        return cultureRetrievalPromise;
      },

      /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#setI18nFileRootPath
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Set the root path to the il8n files on the server
       *
       * @param {String} rootPath - The root path on the server to the il8n file - this defaults
       * to 'js/angular-auto-validate/lang/'
       */
      setI18nFileRootPath = function (rootPath) {
        i18nFileRootPath = rootPath;
      },

      /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#setCulture
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Set the culture for the error messages by loading an the correct culture resource file.
       *
       * @param {String} culture - The new culture in the format of 'en-gb' etc.
       * @param {Function} cultureLoadingFn - A optional function to load the culture resolve which should
       * return a promise which is resolved with the culture errorMessage object.  If a function is not specified
       * the culture file is loaded from the **i18nFileRootPath**.
       * @returns {Promise} - A promise which is resolved with the loaded culture error messages object.
       */
      setCulture = function (culture, cultureLoadingFn) {
        var defer = $q.defer();
        cultureLoadingFn = cultureLoadingFn || loadRemoteCulture;
        currentCulture = culture.toLowerCase();
        if (angular.autoValidate.errorMessages[currentCulture] === undefined) {
          cultureRetrievalPromise = cultureLoadingFn(culture);
          cultureRetrievalPromise.then(function (response) {
            cultureRetrievalPromise = undefined;
            angular.autoValidate.errorMessages[currentCulture] = response.data;
            defer.resolve(angular.autoValidate.errorMessages[currentCulture]);
          }, function (err) {
            angular.autoValidate.errorMessages[currentCulture] = {
              defaultMsg: 'Loading culture failed!'
            };
            cultureRetrievalPromise = null;
            defer.reject(err);
          });
        } else {
          defer.resolve(angular.autoValidate.errorMessages[currentCulture]);
        }

        return defer.promise;
      },

      getErrorMessages = function (culture) {
        var defer = $q.defer();
        culture = culture === undefined ? currentCulture : culture.toLowerCase();
        if (cultureRetrievalPromise !== undefined) {
          cultureRetrievalPromise.then(function () {
            defer.resolve(angular.autoValidate.errorMessages[culture]);
          }, function (err) {
            defer.reject(err);
          });
        } else {
          defer.resolve(angular.autoValidate.errorMessages[culture]);
        }
        return defer.promise;
      },

      getMessageTypeOverride = function (errorType, el) {
        var overrideKey;

        if (el) {
          // try and find an attribute which overrides the given error type in the form of errorType-err-type="someMsgKey"
          errorType += '-err-type';


          overrideKey = el.attr('ng-' + errorType);
          if (overrideKey === undefined) {
            overrideKey = el.attr('data-ng-' + errorType) || el.attr(errorType);
          }

          if (overrideKey) {
            overrideKey = overrideKey.replace(/[\W]/g, '');
          }
        }

        return overrideKey;
      },

      /**
       * @ngdoc function
       * @name defaultErrorMessageResolver#resolve
       * @methodOf defaultErrorMessageResolver
       *
       * @description
       * Resolves a validate error type into a user validation error message
       *
       * @param {String} errorType - The type of validation error that has occurred.
       * @param {Element} el - The input element that is the source of the validation error.
       * @returns {Promise} A promise that is resolved when the validation message has been produced.
       */
      resolve = function (errorType, el) {
        var defer = $q.defer(),
          errMsg,
          parameters = [],
          parameter,
          messageTypeOverride;

        if (cultureRetrievalPromise !== undefined) {
          cultureRetrievalPromise.then(function () {
            resolve(errorType, el).then(function (msg) {
              defer.resolve(msg);
            });
          });
        } else {
          errMsg = angular.autoValidate.errorMessages[currentCulture][errorType];
          messageTypeOverride = getMessageTypeOverride(errorType, el);
          if (messageTypeOverride) {
            errMsg = angular.autoValidate.errorMessages[currentCulture][messageTypeOverride];
          }

          if (errMsg === undefined) {
            errMsg = angular.autoValidate.errorMessages[currentCulture].defaultMsg.format(errorType);
          }

          if (el && el.attr) {
            try {
              parameter = el.attr('ng-' + errorType);
              if (parameter === undefined) {
                parameter = el.attr('data-ng-' + errorType) || el.attr(errorType);
              }

              parameters.push(parameter || '');

              errMsg = errMsg.format(parameters);
            } catch (e) {}
          }

          defer.resolve(errMsg);
        }

        return defer.promise;
      };

    return {
      setI18nFileRootPath: setI18nFileRootPath,
      setCulture: setCulture,
      getErrorMessages: getErrorMessages,
      resolve: resolve
    };
  }

  DefaultErrorMessageResolverFn.$inject = [
    '$q',
    '$http'
  ];

  app.factory('defaultErrorMessageResolver', DefaultErrorMessageResolverFn);
}) ;
