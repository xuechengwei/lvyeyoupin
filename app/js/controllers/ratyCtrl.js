/* 
* @Author: xuechengwei
* @Date:   2014-03-10 15:04:38
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-11 17:15:19
*/

define(['./controllers'], function(controllers) {
    controllers.controller('RatyCtrl', ['$scope', function($scope){
        $scope.myRate = 0;

         $scope.submit = function() {
             console.log($scope.percent) ; //null
         }

         $scope.rate = 1;
         $scope.max = 5;
         $scope.isReadonly = false;
         $scope.percent = 20;

          $scope.hoveringOver = function(value,object) {
            console.log('hoveringOver', value);
            $scope.overStar = value;
            $scope.percent = (100 * $scope.overStar) / $scope.max;
          };
           $scope.hoveringLeave = function(rate) {
             console.log('hoveringLeave',  $scope.rate);
           $scope.percent = (100 * $scope.rate) / $scope.max;
          };
    }])
    controllers.controller('RatyCtrl1', ['$scope', function($scope){
        $scope.myRate = 0;

         $scope.submit = function() {
             console.log($scope.percent) ; //null
         }

         $scope.rate = 1;
         $scope.max = 5;
         $scope.isReadonly = false;
         $scope.percent = 20;

          $scope.hoveringOver = function(value,object) {
            console.log('hoveringOver', value);
            $scope.overStar = value;
            $scope.percent = (100 * $scope.overStar) / $scope.max;
          };
           $scope.hoveringLeave = function(rate) {
             console.log('hoveringLeave',  $scope.rate);
           $scope.percent = (100 * $scope.rate) / $scope.max;
          };
    }])
    controllers.controller('RatyCtrl2', ['$scope', function($scope){
        $scope.myRate = 0;

         $scope.submit = function() {
             console.log($scope.percent) ; //null
         }

         $scope.rate = 1;
         $scope.max = 5;
         $scope.isReadonly = false;
         $scope.percent = 20;

          $scope.hoveringOver = function(value,object) {
            console.log('hoveringOver', value);
            $scope.overStar = value;
            $scope.percent = (100 * $scope.overStar) / $scope.max;
          };
           $scope.hoveringLeave = function(rate) {
             console.log('hoveringLeave',  $scope.rate);
           $scope.percent = (100 * $scope.rate) / $scope.max;
          };
    }])
    controllers.controller('RatyCtrl3', ['$scope', function($scope){
        $scope.myRate = 0;

         $scope.submit = function() {
             console.log($scope.percent) ; //null
         }

         $scope.rate = 1;
         $scope.max = 5;
         $scope.isReadonly = false;
         $scope.percent = 20;

          $scope.hoveringOver = function(value,object) {
            console.log('hoveringOver', value);
            $scope.overStar = value;
            $scope.percent = (100 * $scope.overStar) / $scope.max;
          };
           $scope.hoveringLeave = function(rate) {
             console.log('hoveringLeave',  $scope.rate);
           $scope.percent = (100 * $scope.rate) / $scope.max;
          };
    }])
})