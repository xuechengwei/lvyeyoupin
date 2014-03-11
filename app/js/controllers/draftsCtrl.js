/* 
* @Author: xuechengwei
* @Date:   2014-03-10 19:07:05
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-10 19:18:28
*/

define(['./controllers'], function(controllers) {
    controllers.controller('draftsCtrl', ['$scope', function($scope){
        $scope.drafts = [
            {
                title: "（印尼）巴厘岛——那片蔚蓝将我深深包围",
                createAt: 1394454633000
            },
            {
                title: "冰雪初泮波士顿 湖面泛舟待有时",
                createAt: 1394478833000
            },
            {
                title: "回家过年———杂技大世界 江湖文化城",
                createAt: 1394441543000
            }
        ]

        $scope.remove = function (index) {
            $scope.drafts.splice(index, 1);
        }
    }])
})