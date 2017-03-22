'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:data', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$routeParams','$rootScope',function($scope,$routeParams,$rootScope) {
   $scope.model = {};

    $scope.model.success=$rootScope.success;
}]);