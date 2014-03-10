define(['./controllers'], function (controllers) {
    controllers.controller('priceRecordCtrl', ['$scope', function ($scope) {
        $scope.prices = [
            {
                startDate: '2014-5-1',
                endDate: '2014-8-12',
                price: 6000
            },
            {
                startDate: '2015-3-24',
                endDate: '2015-6-1',
                price: 15000
            }
        ]
    }])
})