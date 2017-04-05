require.config({

	paths: {
		'angular': '../../bower_components/angular/angular',
		'angularRoute': '../../bower_components/angular-route/angular-route',
		'routesPath': './routes',
		'formCtrlPath' : 'app/controllers/formController'
	},

	shim: {
		'angular':{
			exports: 'angular'
		},
		'angularRoute' : ['angular']
	},

	//kick start app.js in the same folder
	//krece od deps i sve sto se tu nalazi on odma izvrasava
	deps: ['./app']
});