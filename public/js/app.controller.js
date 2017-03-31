angular.module('PhoneCat')
.controller('PhoneCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/api/phones').then(function(data){
		$scope.phonelist = data.data;
	}, function(err){
		console.log("Error occurred");
	});
}]);