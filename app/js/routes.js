define(['app'], function (app) {
    return app.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '../views/baseinfo.html',
            }).when('/step2', {
                templateUrl: '../views/schedule.html',
            }).when('/step3', {
                templateUrl: '../views/feeinfo.html',
            }).when('/step4', {
                templateUrl: '../views/otherinfo.html',
            })
        }
    ])
})