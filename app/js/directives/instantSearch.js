/* 
* @Author: xuechengwei
* @Date:   2014-03-11 15:21:56
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-11 16:21:32
*/

define(['./directives'], function(directives) {
    directives.directive('instantSearch', function () {
        return {
            restrict: 'E',
            scope: {
                searchUrl: '@',
                displayField: '@',
                query: '@',
                results: '&'
            },
            replace: true,
            controller: function ($scope, $http, $timeout) {
                var tempFilterText = '',
                    filterTextTimeout;

                $scope.places = [
                    {
                        placeName: "北京"
                    },
                    {
                        placeName: "上海"
                    },
                    {
                        placeName: "天津"
                    },
                    {
                        placeName: "大同"
                    },
                    {
                        placeName: "石家庄"
                    },
                    {
                        placeName: "哈尔滨"
                    },
                    {
                        placeName: "呼和浩特"
                    }
                ]

                $scope.$watch('act.depart_place', function (val) {
                    if (filterTextTimeout) {
                        $timeout.cancel(filterTextTimeout)
                    }
                    tempFilterText = val;
                    filterTextTimeout = $timeout(function () {
                        $scope.filterText = tempFilterText;
                    }, 1500)

                    // $http({
                    //     method: 'JSONP',
                    //     url: $scope.searchUrl,
                    //     params: {
                    //         ''
                    //     }
                    // }).success(function (data) {
                    //     $scope.results.docs = data.response.docs;
                    // }).error(function() {
                        
                    // });
                })
                // $scope.setSearchValue = function (val) {
                    
                // }

            },
            template: '<div class="instant-search">' +
                '<input class="form-control short-input" ng-model="act.depart_place" name="depart_place" />' +
                '<div class="place-wrapper">' +
                '<span ng-repeat="place in places | filter:filterText">' +
                '<p class="item">{{place.placeName}}</p>' +
                '</span>' +
                '</div>' +
                '</div>',
            link: function (scope, elem, attrs) {
                console.log(scope, elem, attrs)
                elem.bind('click', function () {
                    console.log(elem)
                })
            }
        }
    })
})