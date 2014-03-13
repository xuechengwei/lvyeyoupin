/* 
* @Author: xuechengwei
* @Date:   2014-03-10 14:24:18
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-13 11:08:56
*/

define(['./controllers'], function(controllers) {
    controllers.controller('MainCtrl', ['$scope','$routeParams', '$route', function($scope, $routeParams, $route){
        $scope.$route = $route;
        $scope.draftId = $routeParams.draftId;

        $scope.saveState = function () {
            // save
        }
        if ($scope.draftId == undefined) {
            return;
        };

        // $scope.currentStep = {}
        $scope.draft = {
            subject: "商品标题",
            features: "推荐理由",
            scheduleSubject: "第一天标题",
            include: "费用包含"

        }
    }])
})