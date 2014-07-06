/// <reference path="../lib/angular.d.ts" />
angular.module('scriptureSearchApp')
    .directive('scriptureSearchbox', function() {
        console.log("In directive");
        var templateUrl = 'views/scriptureSearch.html';
        return {
            restrict: 'A',
            templateUrl: templateUrl,
            scope: {
               scriptureSrc: '='
            },
            link: function (scope, element, attrs, ctrl, transclude) {
                console.log("In link function");
                scope.limit = 50;
                scope.scripture = scope.scriptureSrc.scripture;
                scope.chapters = scope.scriptureSrc.chapterInfo;
                scope.init = function() {
                    for (var i=0;i<scope.scripture.length;i++) {
                        scope.scripture[i].index = i;
                        scope.scripture[i].chapterIndex = scope.chapterOf(i);
                        scope.scripture[i].more = false;
                    }
                }
                scope.expandLimit = function() {
                    scope.limit += 50;
                }
                scope.chapterOf = function(index) {
                    var chapters = scope.scriptureSrc.chapterInfo;
                    var chapterMatched = -1;
                    for (var i=0;i<chapters.length && chapterMatched === -1;i++) {
                        if (index >= chapters[i].startLine && index <= chapters[i].endLine) {
                            chapterMatched = i;
                        }
                    }
                    return chapterMatched;
                }
                scope.beginningOfChapter = function(index) {
                    var chapters = scope.scriptureSrc.chapterInfo;
                    var beginning = -1;
                    for (var i=0;i<chapters.length && beginning === -1;i++) {
                        if (chapters[i].startLine === index) {
                            beginning = i;
                        }
                    }
                    return beginning;
                }
                scope.showLinesAfter = function(index) {
                    console.log("showing lines after "+index);
                    scope.scripture[index].more = true;
                }
                scope.getLinesAfter = function(index) {
                    var answer = new Array();
                    for (var i = 0; i<4;i++) {
                        answer.push(index+i+1);
                    }
                    return answer;
                }
                scope.init();
            }
        }
    });
