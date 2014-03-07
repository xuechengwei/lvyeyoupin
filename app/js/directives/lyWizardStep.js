define(['directives/directives'], function (directives) {
    directives.directive('lyWizardStep', function () {
        return {
            restrict: 'A',
            require: ['^lyWizard', '?form', '?lySubmit'],
            link: function (scope, element, attributes, controllers) {
                var wizardController = controllers[0],
                    formController = controllers.length > 1 ? controllers[1] : null,
                    submitController = controllers.length > 2 ? controllers[2] : null,
                    step = wizardController.addStep({
                        'element': element,
                        'attributes': attributes,
                        'formController': formController,
                        'submitController': submitController
                    });

            }
        }
    })
})