var todoApp=angular.module('todoApp',[]);

todoApp.controller('TodoController', ['$scope', function($scope){
	var todos=[];

	todos.push({done: false, task:'Aprender Angula JS'});
	todos.push({done: false, task:'Aprender Ionic JS'});
	todos.push({done: true, task:'Adorar JavaScript'});

	$scope.todos= todos;

	$scope.addTodo = function (){
		todos.push({done:true, task: $scope.inputText});
		$scope.inputText='';
	};

}]);
