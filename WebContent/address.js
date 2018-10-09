var app;

app= angular.module('addressBookApp', ['ngRoute']);

app.config(function($locationProvider) { $locationProvider.html5Mode(true); }); 

app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	    .when('/', { templateUrl: 'addresses.html' })
	    .when('/address.html?id=:id', { controller: 'addressCtrl' })
	    .otherwise({ redirectTo: '/' });
	}]);


app.controller('addressCtrl', ['$location', '$http', '$scope', function($location, $http, $scope) {
    $http.get('http://localhost:8080/?id=' + $location.search().id).
        then(function(response) {
             $scope.address = response.data;
        });
}]);
