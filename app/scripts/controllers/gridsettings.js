'use strict';

/**
 * @ngdoc function
 * @name masonryGridGeneratorApp.controller:GridsettingsCtrl
 * @description
 * # GridsettingsCtrl
 * Controller of the masonryGridGeneratorApp
 */
angular.module('masonryGridGeneratorApp')
    .controller('GridsettingsCtrl', function($scope) {

        // Default grid settings based on Topshop's mock-ups
        $scope.grid = {
            columnCount: 40,
            isFullWidth: false,
            isPercentageBased: false,
            itemDimensions: {
                columnWidth: 55,
                gutter: 0
            },
            designWidth: 990,
            maxWidth: 1600,
            minWidth: 990,
            items: []
        };

        // Available column width/gutter combinations
        $scope.gutterCombos = [];

        /* Simple maths to calculate what percentage of
            contextDimension a contentDimension occupies */
        $scope.calculatePercentage = function(contentDimension, contextDimension) {
            return contentDimension / contextDimension * 100;
        };

        /* Calculates gutter width by
            multiplying the number of columns by column width,
            deducting from the overall width
            and dividing the remaining the space by the number of columns minus one */
        $scope.calculateGutter = function(columnCount, columnWidth) {
            return ($scope.grid.designWidth - (columnCount * columnWidth)) / (columnCount - 1);
        };

        /* Calculate mathematically valid column width/gutter combinations,
            skipping non-integer values to keep the maths simple. */
        $scope.getGutterCombos = function(columnCount) {

            // Remove existing combos in $scope
            $scope.gutterCombos = [];

            /* Calculate column width and init a var to hold
                newly calculated combos */
            var columnWidth = $scope.grid.designWidth / columnCount,
                gutterCombos = [];

            // If columnWidth isn't an integer, round it down
            if(columnWidth !== parseInt(columnWidth, 10)){
                columnWidth = Math.floor(columnWidth);
            }

            /* This loop decrements column width by one
                and checks if there's a valid gutter to match.
                This should give valid/usable combos. */
            while(columnWidth > 0){

                var gutter = $scope.calculateGutter(columnCount, columnWidth);

                /* If the columnWidth starts becoming less than the gutter,
                    realistically those combinations are unlikely to be used,
                    so exit the loop now. */
                if (columnWidth < gutter){
                    break;
                }

                // If gutter is a whole number...
                if(gutter === parseInt(gutter, 10)){
                    
                    // Save this width/gutter combo
                    gutterCombos.push({
                        columnWidth: columnWidth,
                        gutter: gutter
                    });
                }

                columnWidth--;

            }

            // Update $scope with newly-acquired combos
            $scope.gutterCombos = gutterCombos;

        };

        $scope.columnCountChangeHandler = function() {
            $scope.grid.items = [];
            $scope.getGutterCombos($scope.grid.columnCount);
        };

        $scope.gutterComboHandler = function(){
            $scope.updateItemWidths();
        };

        $scope.getItemWidth = function(columnCount){            
            return (columnCount * $scope.grid.itemDimensions.columnWidth) + ((columnCount - 1) * $scope.grid.itemDimensions.gutter);            
        };

        // Create a list of how wide each column in the layout is
        $scope.updateItemWidths = function(){

            var i = 1;

            $scope.grid.items = [];

            /* If there aren't any item dimensions to work with,
                return now */
            if ($scope.grid.itemDimensions === null){
                return false;
            }

            // Count from 1 to the number of columns required
            while(i <= $scope.grid.columnCount){

                var width = $scope.getItemWidth(i);

                // Save this item width
                $scope.grid.items.push({
                    width: width
                });

                i++;

            }

        };

        // If $scope has at least one item, return true
        $scope.hasItems = function(){
            return $scope.grid.items.length > 0 ? true : false;
        };

        // Call scope method. If method returns true, return value1, else return value2
        $scope.testMethod = function(method, value1, value2){
            if($scope.hasOwnProperty(method) && typeof $scope[method] === 'function'){
                return $scope[method]() ? value1 : value2;
            } else {
                return 'false';
            }
        };

        $scope.columnCountChangeHandler();

    });
