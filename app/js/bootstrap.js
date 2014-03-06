define(['angular', 'domReady', 'app'], function (angular, domReady) {
    domReady(function () {
        angular.bootstrap(document, ['youpinApp']);
        // $('html').addClass('ng-app: youpinApp');
    })
})