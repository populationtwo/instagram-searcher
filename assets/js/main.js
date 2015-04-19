angular.module( 'myApp', [] )
	.controller( 'searchController', function ($scope, $http) {


		var searchByTag = function (tag) {

			//config
			var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';
			var clientId = '416e81a93f0d4cb689ded7e74749bc86';
			var config = {
				'params': {
					'client_id': clientId,
					'callback' : 'JSON_CALLBACK',
					'count'    : 20
				}
			}
			//console.log( 'json request' );
			$http.jsonp( url, config )
				.success( function (results) {
					console.log( 'success' );
					$scope.instaImages = results.data
				} )
				.error( function () {
					console.log( 'error' );
				} );

		};

		$scope.formData = {};

		$scope.submitForm = function () {
			console.log( 'submit' )
			console.log( $scope.formData.tagInput );
			searchByTag();

		}

	} );


//CLIENT INFO
//CLIENT ID	416e81a93f0d4cb689ded7e74749bc86
//CLIENT SECRET	8a96f9c5962e435c87f34acf5c4ce4cd
