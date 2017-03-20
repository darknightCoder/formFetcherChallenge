'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.formModel','myApp.service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','FormModel','FormService',function($scope,FormModel,FormService) {

  $scope.model= {
    formData:null
  }
  var getHandler = function (result) {
    if(result) {
      // form model to model the data coming from the api
      var formModel = new FormModel();
      formModel.deSerialize(result.data);
      $scope.model.formData = formModel;
      console.log(formModel);

      console.log(result);
    }
  }
  FormService.getFormData().success(getHandler);
}]);