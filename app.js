var app = angular.module('starter', ['ngRoute', 'starter.controllers'])

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/todo', {
				templateUrl: 'templates/todos.html',
				controller: 'TodoCtrl'
			}).
			otherwise({
				redirectTo: '/todo'
			});
	}]);