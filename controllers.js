var app = angular.module('starter.controllers', [])

app.controller("TodoCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.todos = [
		{title: 'Practice angular', kind: 'Work', created_at: 1440392214138, completed: false},
		{title: 'Buy real food', kind: 'Health', created_at: 1440291414138, completed: true},
		{title: 'Hit the gym', kind: 'Health', created_at: 1440182814138, completed: false}
	];
	$scope.kinds = ['Work', 'Health', 'Fun'];
	$scope.newTodo = {};
	$scope.createToDo = function (){
		var newToDo = {
			title: $scope.newFormData.title, 
			kind: $scope.newFormData.newKind, 
			created_at: Date.now()
		};
		$scope.todos.push(newToDo);
		$scope.newFormData.title = "";
	}
	$scope.deleteToDo = function (todo){
		var i = $scope.todos.indexOf(todo);
		$scope.todos.splice(i,1);
	}
	$scope.completeToDo = function (todo){
		if (todo.completed == true) {
			todo.completed = false
		} else if (todo.completed == false) {
			todo.completed = true;
		}
	}
}]);

app.controller("ListCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
	console.log("Lists works");
}]);