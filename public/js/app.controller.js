angular.module('PhoneCat')
.controller('PhoneCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/api/phones').then(function(resp){
		$scope.phonelist = resp.data;
	});
}]);