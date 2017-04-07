define(['angular', 'angularRoute', 'formCtrlPath'], function(angular){

	var module = angular.module('appRoute', ['ngRoute', 'formModule']);

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