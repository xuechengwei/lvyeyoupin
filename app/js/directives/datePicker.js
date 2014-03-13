/* 
* @Author: xuechengwei
* @Date:   2014-03-12 17:24:54
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-12 20:31:49
*/

define(['./directives', 'yui'], function(directives) {
    directives.directive('datePicker', function () {
        return {
            restrict: 'A',
            require: '?ngModel',

            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) {
                    return;
                };

                var config = {
                    modules: {
                        'trip-calendar': {
                            fullpath: 'js/libs/trip-calendar.js',
                            type    : 'js',
                            requires: ['trip-calendar-css']
                        },
                        'trip-calendar-css': {
                            fullpath: 'css/trip-calendar.css',
                            type    : 'css'
                        }
                    }
                }

                YUI(config).use('trip-calendar', function(Y) {
                    var oCal = new Y.TripCalendar({
                        triggerNode: '.date-picker',      //触发节点，支持批量设置
                        // isSelect: true,              //是否开启下拉列表选择日期，如果开启，日历个数限制为1
                        //minDate: new Date,
                        count: 2,                    //日历个数，默认为2
                        isHoliday: true              //是否显示节假日，默认为true
                    });
                    oCal.on('dateclick', function (e) {
                        updateModel(e.date)
                    })
                })
                var updateModel = function (dateStr) {
                    var ngModelName = elem.attr('ng-model');
                    console.log(scope)
                    scope[ngModelName] = dateStr;
                    scope.$apply();
                }
            }
        }
    })
})