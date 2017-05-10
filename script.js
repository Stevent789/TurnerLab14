(function() {
var app = angular.module('myApp', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider.when('/cat', {
			templateUrl: 'views/cat.html'
		})
		.when('/dog', {
			templateUrl: 'views/dog.html',
		})
		.otherwise({
			template: 'Cat or Dog?'
		})
	});
})();
