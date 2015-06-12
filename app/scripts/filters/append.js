'use strict';

/**
 * @ngdoc filter
 * @name masonryGridGeneratorApp.filter:append
 * @function
 * @description
 * # append
 * Filter in the masonryGridGeneratorApp.
 */
angular.module('masonryGridGeneratorApp')
    .filter('append', function() {
        return function(input, convert) {
        	if (convert) {
        		return input + '%';
        	} else {
        		return input + 'px';
        	}
        };
    });
