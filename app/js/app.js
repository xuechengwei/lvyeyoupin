define([
    'angular',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
    ], function (angular) {
        return angular.module('youpinApp', ['controllers', 'services',
            'filters', 'directives']);
    }
)