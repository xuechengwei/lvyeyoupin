define([
    'require',
    'angular',
    'app',
    'routes',
    'domReady'
], function (require, angular) {
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['lvyeApp']);
    })
})