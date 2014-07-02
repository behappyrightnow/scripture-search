/// <reference path="../lib/angular.d.ts" />
angular.module('scripturesearch')
    .directive('scriptureBuilder', function() {
        console.log("In scriptureBuilder directive");
        var templateUrl = 'template/scriptureEditor.html';
        return {
            restrict: 'A',
            templateUrl: templateUrl,
            scope: {
               scriptureSrc: '='
            },
            link: function (scope, element, attrs, ctrl, transclude) {
                console.log("In link function");
                scope.scripture = scope.scriptureSrc;
                scope.combinedStructure = JSON.stringify(scope.scripture);
            }
        }
    });
