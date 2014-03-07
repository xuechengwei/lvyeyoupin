define([
    'angular',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives',
    'directives/lyWizard',
    'directives/lyWizardStep'
    ], function (angular) {
        return angular.module('lvyeApp', ['controllers', 'services', 'filters',
            'directives', 'lyWizard', 'lyWizardStep']);
    }
)