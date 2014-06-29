/// <reference path="../lib/angular.d.ts" />
angular.module('scripturesearch')
    .controller('scriptureCtrl', function($scope) {
        $scope.gita = gita;
        console.log("Setup controller");
        console.log($scope.gita);
    })
