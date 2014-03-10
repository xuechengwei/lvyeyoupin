define(["./controllers"], function (controllers) {
    controllers.controller("WizardCtrl", ["$scope","$q", "$timeout", function($scope, $q, $timeout){
        $scope.forms = {};

        $scope.saveFrom = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve();
            }, 5000);
        };

        $scope.completeWizard = function () {
            alert("Completed");
        };
    }]);
});