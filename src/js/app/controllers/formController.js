define(['angular'], function(angular){

	var module = angular.module('formModule', []);

	module.controller('FormController', ['$scope', '$routeParams', function($scope, $routeParams){

		var ctrl = this;

		var slideshowImages = ['../res/slideshow/Desert.jpg', '../res/slideshow/Jellyfish.jpg', '../res/slideshow/Penguins.jpg', '../res/slideshow/Tulips.jpg'];


	}]);

/*	module.directive('slickDirective', ['slick', function(slick){

	}]);*/
});

/* http://kenwheeler.github.io/slick/ */