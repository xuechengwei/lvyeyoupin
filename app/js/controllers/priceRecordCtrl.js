define(['./controllers'], function (controllers) {
    controllers.controller('PriceRecordCtrl', ['$scope', function ($scope) {
        $scope.records = [
            {
                startAt: '2012-8-24',
                endAt: '2013-5-7',
                price: 6000
            },
            {
                startAt: '2013-5-8',
                endAt: '2013-5-10',
                price: 15000
            }
        ];

        $scope.removeRecord = function (index) {
            $scope.records.splice(index, 1);
        };

        $scope.updateRecord = function () {
            this.record.editMode = true;
        };

        $scope.addRecord = function (value) {
            var obj = {
                startAt: null,
                endAt: null,
                price: null,
                editMode: true
            }
            $scope.records.push(obj);
        };

        $scope.cancelEdit = function (value) {
            this.record.editMode = false;
        }

        $scope.saveRecord = function (a) {
            var index = this.$index;
            $scope.records[index] = this.record;
            this.record.editMode = false;

        }
    }])
})