define(['angular','routesPath'],
	function(angular){
		'use strict';

		var appModule = angular.module('app', ['appRoute']);

		//manuelna inicijalizacija angulara 
		// name of our application module to be loaded into the injector as the second parameter - instead of data-ng-model="app" if it is automatic
		angular.bootstrap(document, ['app']);
	});