/* 
* @Author: xuechengwei
* @Date:   2014-03-10 15:04:38
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-10 15:08:27
*/

define(['./controllers'], function(controllers) {
    controllers.controller('ratyCtrl', ['$scope', function($scope){
        $scope.items = [
            {
                indexName: "AA指数"
            },
            {
                indexName: 'BB指数'
            },
            {
                indexName: 'CC指数'
            },
            {
                indexName: 'DD指数'
            }

        ]
    }])
})