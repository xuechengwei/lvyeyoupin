require.config({
    // baseUrl: "libs/",
    paths: {
        angular: 'libs/angular/angular',
        jquery: 'libs/jquery/jquery',
        domReady: 'libs/domReady',
        twitter: 'libs/bootstrap/bootstrap',
        bootstrapWizard: 'libs/bootstrap-wizard/jquery.bootstrap.wizard',
        angularResource: 'libs/angular-resource/angular-resource'
    },
    shim: {
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
        'angularResource': {
            deps: ['angular']
        }

    }
})

require([
    'jquery',
    'angular',
    'domReady',
    'twitter',
    'bootstrapWizard',
    'app',
    'bootstrap',
    'controllers/priceRecordCtrl',
    'controllers/wizardCtrl'
    ], function (angular, app, domReady) {
        'use strict';
        console.log('bootstraped')
    }
)
