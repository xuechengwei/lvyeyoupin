define([
    'angular',
    'ngRoute',
    'controllers/controllers',
    'controllers/priceRecordCtrl',
    'controllers/ratyCtrl',
    'controllers/mainCtrl',
    'controllers/draftsCtrl',
    'services/services',
    'filters/filters',
    'directives/directives',
    'directives/ratyDirective',
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