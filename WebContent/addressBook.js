angular.module('addressBookApp', [])
.controller('addressesCtrl', function($scope, $http) {
    $http.get('http://localhost:8080/all').
        then(function(response) {
             $scope.addresses = response.data.addresses;
        });
});