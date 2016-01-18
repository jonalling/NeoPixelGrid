/*global angular */
'use strict';

NeoPixel.filter('true_false', function() {
    return function(text, length, end) {
        if (text) {
            return '1';
        }
        return '0';
    }
})

NeoPixel.controller('NeoPixelCtrl', function($scope, $http, $window) {

$scope.className = 'filled';

$scope.changeFill = function() {
	if ($scope.className === 'filled') {
		$scope.className = 'not-filled';
	} else {
		$scope.className = 'filled';
	}
};

}); // end controller
