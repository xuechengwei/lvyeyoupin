/* 
* @Author: xuechengwei
* @Date:   2014-03-10 14:32:36
* @Last Modified by:   xuechengwei
* @Last Modified time: 2014-03-10 16:53:27
*/

define(['./directives', 'jquery', 'raty'], function(directives, jquery) {
    directives.directive('raty', function () {
        return {
            restrict: 'E',
            template: '<div class="raty" targetid=".hint">' +
                    '<div id="star{{$index}}"></div>'+
                    '<div id="hint{{$index}}"></div>'+
                    '</div>',
            replace: true,
            // complie: function (scope, elem, ) {
            //     // body...
            // }
            link: function (scope, elem, attrs) {
                console.log(attrs.targetid)
                jquery(elem).raty({
                    target: attrs.targetid,
                    score: attrs.score,
                    number: attrs.number,
                    path: 'img/'
                })
            }

        }
    })
})