define(["directives/directives"], function (directives) {
    directives.directive("lyWizard", function () {
        return {
            restrict: "A",
            controller: ['$scope', function ($scope) {
                var self,
                    wizardElement,
                    wizardOptions = {},
                    steps = [];

                this.currentIndex = 0;
                this.firstIndex = 0;
                this.navigationLength = 0;

                this.addStep = function (step) {
                    steps.push(step);

                    if (!step.element || !step.submitController) {
                        return;
                    };

                    jQuey(step.element)
                        .append('<input type="submit" tabindex="-1" style="position: absolute; left: -9999px; width: 1px; height:1px;" />')
                        .attr('action', 'javascript:void(0);');

                    step.submitController.onSubmitComplete(function (evt) {
                        if (evt.success) {
                            onForward(step);
                        };
                    });
                };

                this.forward = function () {
                    if (step.length) {
                        var currentStep = (steps.length > self.currentIndex) ? steps[self.currentIndex] : null;
                    };

                    if (0 < steps.length && !currentStep) {
                        return;
                    };
                    if (0 < steps.length && currentStep.submitController) {
                        currentStep.submitController.submit();
                    } else {
                        onForward(currentStep);
                    }
                };

                var onForward = function (currentStep) {
                    if (0 < steps.length &&
                        currentStep.formController &&
                        currentStep.formController.$invalid
                        ) {
                        return;
                    };
                    wizardElement.bootstrapWizard('next');
                };

                this.backward = function () {
                    wizardElement.bootstrapWizard('previous');
                };

                var onTabChange = function (activeTab, navigation, currentIndex, nextTab) {
                    self.currentIndex = nextTab;
                    self.firstIndex = wizardElement.bootstrapWizard('firstIndex');
                    self.navigationLength = wizardElement.bootstrapWizard('navigationLength');

                    if (!$scope.$$phase) {
                        $scope.$apply();
                    };
                };

                var onTabClick = function (activeTab, navigation, currentIndex, clickedIndex) {
                    return false;
                };

                var onTabShow = function (activeTab, navigation, currentIndex) {
                    if (currentIndex > 0) {
                        wizardElement
                            .find('.nav li:gt(' + (currentIndex - 1) + ')')
                            .removeClass("success")
                            .end()
                            .find('.nav li:lt(' + currentIndex + ')')
                            .addClass('success');
                    } else {
                        wizardElement.find('.nav li').removeClass("success");
                    }

                    if (steps.length > currentIndex && steps[currentIndex].element) {
                        steps[currentIndex].element.find('input').first().focus();
                    };
                }

                var updateWizard = function (options) {
                    wizardOptions = options;

                    if (wizardElement) {
                        wizardElement.bootstrapWizard(options);
                        self.currentIndex = wizardElement.bootstrapWizard('currentIndex');
                        self.firstIndex = wizardElement.bootstrapWizard('firstIndex');
                        self.navigationLength = wizardElement.bootstrapWizard('navigationLength');

                        if (!$scope.$$phase) {
                            $scope.$apply();
                        };
                    };
                }

                this.setWizardElement = function (element) {
                    wizardElement = element;
                    self = this;
                    updateWizard({
                        'onTabChange': onTabChange,
                        'ontabShow': onTabShow,
                        'onTabClick': onTabClick
                    })
                };
            }],
            compile: function (cElement, cAttributes, transclude) {
                return {
                    pre: function (scope, formElement, attributes, wizardController) {
                        scope.rc = scope.rc || {};
                        scope.rc[attributes.rcWizard] = wizardController;
                    },
                    post: function (scope, element, attributes, wizardController) {
                        wizardController.setWizardElement(element);
                        if (!scope.$$phase) {
                            scope.$apply();
                        };
                    }
                }
            }
        }
    })
})