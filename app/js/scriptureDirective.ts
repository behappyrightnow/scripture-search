/// <reference path="../lib/angular.d.ts" />
angular.module('scripturesearch')
    .directive('scriptureSearchbox', function() {
        console.log("In directive");
        var templateUrl = 'template/scriptureSearch.html';
        return {
            restrict: 'A',
            templateUrl: templateUrl,
            scope: {
               scriptureSrc: '='
            },
            link: function (scope, element, attrs, ctrl, transclude) {
                console.log("In link function");
                scope.scripture = scope.scriptureSrc.scripture;
            }
        }
    });
