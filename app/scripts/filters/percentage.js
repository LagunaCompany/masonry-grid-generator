'use strict';

/**
 * @ngdoc filter
 * @name masonryGridGeneratorApp.filter:percentage
 * @function
 * @description
 * # percentage
 * Filter in the masonryGridGeneratorApp.
 */
angular.module('masonryGridGeneratorApp')
    .filter('percentage', function() {
        return function(contentWidth, contextWidth, convert) {
            if (convert) {
            	return (contentWidth / contextWidth * 100);
            } else {
            	return contentWidth;
            }            
        };
    });