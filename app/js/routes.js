define(['app'], function (app) {
    return app.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/step1/', {
                templateUrl: '../views/baseinfo.html'
            }).when('/step1/:draftId', {
                templateUrl: '../views/baseinfo.html/',
                controller: 'MainCtrl'
            }).when('/step2/:draftId', {
                templateUrl: '../views/schedule.html',
                controller: 'MainCtrl'
            }).when('/step2/', {
                templateUrl: '../views/schedule.html'
            }).when('/step3/:draftId', {
                templateUrl: '../views/feeinfo.html',
                controller: 'MainCtrl'
            }).when('/step3/', {
                templateUrl: '../views/feeinfo.html'
            }).when('/step4/:draftId', {
                templateUrl: '../views/otherinfo.html',
                controller: 'MainCtrl'
            }).when('/step4/', {
                templateUrl: '../views/otherinfo.html'
            }).when('/drafts', {
                templateUrl: '../views/drafts.html'
            })
        }
    ])
})