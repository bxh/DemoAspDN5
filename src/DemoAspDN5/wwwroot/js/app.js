'use strict';

angular.module('todoApp', [])
	.controller('todoCtrl', [
		'$scope', '$http', function($scope, $http) {
			$scope.tasks = [];

			$http.get('http://localhost:50947/api/tasks')
				.success(function(tasks) {
					$scope.tasks = tasks;
				});
		}
	]);