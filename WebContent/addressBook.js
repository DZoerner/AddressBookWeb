var app;

app= angular.module('addressBookApp', ['ngRoute']);

app.config(function($routeProvider) {
	  $routeProvider
	    .when('/', { templateUrl: 'addresses.html' })
	    .when('/address.html', { templateUrl: 'address.html' })
	    .otherwise({ redirectTo: '/' });
	});

app.controller('addressesCtrl', function($scope, $http) {
    $http.get('http://localhost:8080/').
        then(function(response) {
             $scope.addresses = response.data.addresses;
        });
});
