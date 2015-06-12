'use strict';

/**
 * @ngdoc filter
 * @name masonryGridGeneratorApp.filter:round
 * @function
 * @description
 * # round
 * Filter in the masonryGridGeneratorApp.
 */
angular.module('masonryGridGeneratorApp')
    .filter('round', function() {
        return function(input, convert) {
        	if (convert) {
        		return (Math.ceil(input * 20) / 20).toFixed(2);
        	} else {
        		return input;
        	}            
        };
    });
