angular.module('PhoneCat')
.config(function($stateProvider, $locationProvider, $urlRouterProvider){
	//$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state({
		name: 'phones',
		url: '/api/phones',
		templateUrl: 'layouts/phones.template.ejs',
		controller: 'PhoneCtrl'
	}).state('otherwise', {
		url: '/'
	});
	
});