/* 
* @Author: xuechengwei
* @Date:   2014-03-11 14:07:51
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-11 14:57:34
*/

define(['./directives'], function(directives) {
    directives.directive('positiveInteger', function () {
        var INTEGER_REGEXP = /^\d+$/;
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    if (viewValue == "") {
                        ctrl.$setValidity('positiveInteger', true);
                        return viewValue;
                    } else {
                        if (INTEGER_REGEXP.test(viewValue)) {
                            ctrl.$setValidity('positiveInteger', true);
                            return viewValue;
                        } else {
                            ctrl.$setValidity('positiveInteger', false);
                            return undefined;
                        }
                    }
                })
            }
        }
    })
})