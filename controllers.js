var app = angular.module('starter.controllers', [])

app.controller("TodoCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.todos = [
		{title: "Scrub floor"},
		{title: "Vacuum house"},
		{title: "Eat dinner"}
	];
	$scope.newTodo = {title: ""};
	$scope.click = function () {
		$scope.todos.push($scope.newTodo)
		$scope.newTodo = {title: ""}
	};
	$scope.delete = function (todo) {
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
	};
	$scope.createdAt = new Date();
}]);