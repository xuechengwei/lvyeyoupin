define([
    'angular',
    'ngRoute',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
], function (angular) {
        return angular.module('lvyeApp', [
            'controllers',
            'services',
            'filters',
            'directives',
            'ngRoute'
        ]);
})