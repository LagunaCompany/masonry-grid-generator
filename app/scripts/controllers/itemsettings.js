'use strict';

/**
 * @ngdoc function
 * @name masonryGridGeneratorApp.controller:ItemsettingsCtrl
 * @description
 * # ItemsettingsCtrl
 * Controller of the masonryGridGeneratorApp
 */
angular.module('masonryGridGeneratorApp')
    .controller('ItemsettingsCtrl', function($scope) {

        $scope.itemSettings = [];

        $scope.getAspectRatio = function(width, height){
        	return height / width * 100;
        };

        $scope.addItemSettings = function(){
		  	$scope.itemSettings.push({
		  		width: 990,
		  		height: 990
		  	});
		};

		$scope.removeItemSettings = function(index){
		  	$scope.itemSettings.splice(index, 1);
		};

		// Provide a default item
		$scope.addItemSettings();

    });
