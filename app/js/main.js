require.config({
    baseUrl: "js",
    paths: {
        angular: 'libs/angular/angular',
        jquery: 'libs/jquery/jquery',
        domReady: 'libs/domReady',
        twitter: 'libs/bootstrap/bootstrap',
        ngResource: 'libs/angular-resource/angular-resource',
        ngRoute: 'libs/angular-route/angular-route',
        raty: 'libs/jquery.raty.min',
        ngBootstrapUi: 'libs/angular-bootstrap/ui-bootstrap-tpls.min',
        yui: 'libs/yui-min'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'raty': {
            deps: ['jquery'],
            exports: 'raty'
        },
        'twitter': {
            deps: ['jquery']
        },
        'angular': {
            deps: ['jquery', 'twitter'],
            exports: 'angular'
        },
        'ngBootstrapUi': {
            deps: ['angular']
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngRoute': {
            deps: ['angular']
        },
        'yui': {
            exports: 'yui'
        }
    },
    deps: [
        './bootstrap'
    ]
})