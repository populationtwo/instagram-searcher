angular.module( 'myApp', [] )
	.controller( 'searchController', function ($scope) {

		$scope.formData = {};

		$scope.submitForm = function () {
			console.log( 'submit' )
			console.log( $scope.formData.tagInput )
		}

	} )