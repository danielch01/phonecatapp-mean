angular.module('PhoneCat')
.config(function($stateProvider){

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'layouts/home.template.html'
	})
	.state('phones', {
		url: '/api/phones',
		templateUrl: 'layouts/phones.template.html',
		controller: 'PhoneCtrl'
	}).state({
		name: 'phone-detail',
		url: '/api/phones/{phoneId}',
		templateUrl: 'layouts/phone-detail.template.html',
		controller: function($http, $stateParams, $scope){
			function findPhone(phone){
				return phone.id === $stateParams.phoneId;
			}

			$http.get('/api/phones').then(function(resp){
				$scope.phone = resp.data.find(findPhone);
			})

			$scope.$on('$stateChangeSuccess', function(){
				window.scrollTo(0,0);
			});
		}
	}).state({
		name: 'otherwise',
		url: '/otherwise'
	})
	
});