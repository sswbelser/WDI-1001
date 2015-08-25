var app = angular.module('starter', ['ngRoute', 'starter.controllers'])

app.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/todos.html',
				controller: 'TodoCtrl'
			})
			.when('/about', {
				templateUrl: 'templates/about.html'
			})
			.when('/lists', {
				templateUrl: 'templates/lists.html'
			})
			.otherwise({
				redirectTo: '/todo'
			});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}]);