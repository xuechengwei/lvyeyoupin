define([
    'angular',
    'ngRoute',
    'controllers/controllers',
    'controllers/priceRecordCtrl',
    'controllers/ratyCtrl',
    'controllers/mainCtrl',
    'services/services',
    'filters/filters',
    'directives/directives',
    'directives/ratyDirective'
], function (angular) {
        return angular.module('lvyeApp', [
            'controllers',
            'services',
            'filters',
            'directives',
            'ngRoute'
        ]);
})