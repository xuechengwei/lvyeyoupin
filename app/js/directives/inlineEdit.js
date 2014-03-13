/* 
* @Author: xuechengwei
* @Date:   2014-03-12 10:14:44
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-12 15:50:16
*/

// <tr ng-repeat="record in records" inline-edit="record" index="$index" ng-class="{active: $even}" >
                            
//                         </tr>

define(['./directives'], function(directives) {
    directives.directive('inlineEdit', function ($timeout) {
        var editorTemplate = '<td>{{index+1}}</td>' +
                            '<td>' +
                                '<span ng-hide="view.editMode">{{view.editableValue.startAt}}</span>' +
                                '<input ng-show="view.editMode" ng-model="view.editableValue.startAt">' +
                            '</td>' +
                            '<td>' +
                                '<span ng-hide="view.editMode">{{view.editableValue.endAt}}</span>' +
                                '<input ng-show="view.editMode" ng-model="view.editableValue.endAt">' +
                            '</td>' +
                            '<td>' +
                                '<span ng-hide="view.editMode">{{view.editableValue.price}}</span>' +
                                '<input ng-show="view.editMode" ng-model="view.editableValue.price">' +
                            '</td>' +
                            '<td>' +
                                '<a ng-hide="view.editMode" ng-click="enableEditor()">修改</a>' +
                                '<a ng-hide="view.editMode" ng-click="deleteRecord()">删除</a>' +
                                '<a ng-show="view.editMode" ng-click="save()">保存</a>' +
                                '<a ng-show="view.editMode" ng-click="disableEditor()">取消</a>' +
                            '</td>';

        return {
            restrict: "A",
            template: editorTemplate,
            scope: {
                value: "=inlineEdit",
                index: "=index"
            },
            controller: function($scope) {
                $scope.view = {
                    editableValue: $scope.value,
                    editMode: false
                };

                $scope.enableEditor = function() {
                    $scope.view.editMode = true;
                    $scope.view.editableValue = $scope.value;
                };

                $scope.disableEditor = function() {
                    $scope.view.editMode = false;
                };

                $scope.save = function() {
                    $scope.value = $scope.view.editableValue;
                    $scope.disableEditor();
                };

                $scope.deleteRecord = function () {
                    console.log($scope)
                }
            }
        };
    })
})