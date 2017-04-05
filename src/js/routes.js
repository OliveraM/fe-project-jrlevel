define(['angular', 'angularRoute'], function(angular){

	var module = angular.module('appRoute', ['ngRoute']);

	module.config(function ($routeProvider){

		/* set routes that match to templates and controllers */
		$routeProvider
		.when('/', {
			templateUrl: 'templates/form.tmpl.html',
			controller: 'FormController',
			controllerAs: 'FormCtrl'
		})
		.otherwise({redirectTo:'/'});

	});
});