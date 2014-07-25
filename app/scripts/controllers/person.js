'use strict';

/**
 * @ngdoc function
 * @name anzacMockupApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the anzacMockupApp
 */
angular.module('anzacMockupApp')
    .controller('PersonCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        console.log('yo yo');
    });