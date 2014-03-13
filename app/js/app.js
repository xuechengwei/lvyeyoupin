define([
    'angular',
    'ngRoute',
    'controllers/controllers',
    'controllers/mainCtrl',
    'controllers/priceRecordCtrl',
    'controllers/ratyCtrl',
    'controllers/draftsCtrl',
    'controllers/typeaheadCtrl',
    'services/services',
    'filters/filters',
    'directives/directives',
    'directives/ratyDirective',
    'directives/datePicker',
    'directives/positiveInteger',
    // 'directives/inlineEdit',
    'ngBootstrapUi'
], function (angular) {
        return angular.module('lvyeApp', [
            'controllers',
            'services',
            'filters',
            'directives',
            'ngRoute',
            'ui.bootstrap'
        ]);
})