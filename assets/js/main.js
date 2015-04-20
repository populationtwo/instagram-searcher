angular.module( 'myApp', [] )
	.controller( 'searchController', function ($scope, $http) {

		$scope.message = null;

		var searchByTag = function (tag) {

			//config
			var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';
			var clientId = '416e81a93f0d4cb689ded7e74749bc86';
			var config = {
				'params': {
					'client_id': clientId,
					'callback' : 'JSON_CALLBACK',
					'count'    : 16
				}
			}
			//console.log( 'json request' );
			$http.jsonp( url, config )
				.success( function (results) {
					var dataLength = results.data.length;
					var resultData = results.data;
					if (dataLength > 0) {
						console.log( resultData );
						$scope.instaImages = resultData;
						$scope.message = "We found " + dataLength + " results for " + tag;
					} else {
						$scope.message = "No results.";
					}
				} )
				.error( function () {
					$scope.message = "Not found.";
				} );

		};

		$scope.formData = {};

		$scope.submitForm = function () {
			console.log( 'submit' );
			console.log( $scope.formData.tagInput );
			var tag = $scope.formData.tagInput;
			searchByTag( tag );
			$scope.message = "Searching Instagram for photos tagged with " + tag;
		};

		$scope.clear = function () {
			console.log( 'clear' );
			$scope.formData = {};
			$scope.instaImage = {};
			$scope.message = null;
			$scope.instaForm.$submitted = false;
		}
	} );

//TODO: Add ng animation.