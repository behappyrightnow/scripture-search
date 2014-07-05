/// <reference path="../lib/angular.d.ts" />
declare var gita;
angular.module('scriptureSearchApp')
    .controller('scriptureCtrl', function($scope) {
        $scope.gita = gita;
        console.log("Setup controller");
        console.log($scope.gita);
    })
