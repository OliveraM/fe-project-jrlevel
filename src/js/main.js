require.config({

	paths: {
		'jqueryPath' : '../../bower_components/jquery/dist/jquery',
		'angular': '../../bower_components/angular/angular',
		'angularRoute': '../../bower_components/angular-route/angular-route',
		'routesPath': './routes',
		'formCtrlPath' : 'app/controllers/formController',
		'slickPath' : '../../bower_components/angular-slick/dist/slick',
		'slickCarouselPath' : '../../bower_components/slick-carousel/slick/slick'
	},

	shim: {
		'angular':{
			exports: 'angular'
		},
		'angularRoute' : ['angular'],
		'slickPath' : ['jqueryPath', 'angular']
	},

	//kick start app.js in the same folder
	//krece od deps i sve sto se tu nalazi on odma izvrasava
	deps: ['./app']
});