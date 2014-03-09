require.config({
    baseUrl: "js",
    paths: {
        angular: 'libs/angular/angular',
        jquery: 'libs/jquery/jquery',
        domReady: 'libs/domReady',
        twitter: 'libs/bootstrap/bootstrap',
        ngResource: 'libs/angular-resource/angular-resource',
        ngRoute: 'libs/angular-route/angular-route'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'twitter': {
            deps: ['jquery']
        },
        'bootstrapWizard': {
            deps: ['jquery', 'twitter'],
            exports: 'wizard'
        },
        'angular': {
            deps: ['jquery', 'twitter'],
            exports: 'angular'
        },
        'ngResource': {
            deps: ['angular']
        },
        'ngRoute': {
            deps: ['angular']
        }

    },
    deps: [
        './bootstrap'
    ]
})