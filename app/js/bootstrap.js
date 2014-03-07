define(['angular', 'domReady', 'app'], function (angular, domReady) {
    domReady(function () {
        angular.bootstrap(document, ['lvyeApp']);
    })
})