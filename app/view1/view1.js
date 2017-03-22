'use strict';

angular.module('myApp.view1', ['ngRoute','myApp.formModel','myApp.service','ui.bootstrap','myApp.dialog'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope','$scope','FormModel','FormService','$formModal','$location',function($rootScope,$scope,FormModel,FormService,$formModal,$location) {

  $scope.model= {
    formData:null,
    isLoading:false
  }

  var getHandler = function (result) {
    if(result) {
      // form model to model the data coming from the api
        $scope.model.isLoading=false;
        var formModel = new FormModel();
      formModel.deSerialize(result.data);
      $scope.model.formData = formModel;
      console.log(formModel);

      var show = $formModal.open({
        templateUrl: 'view1/dialogForm.html',
        formModel: formModel,
        controller:"DialogCtrl",
        resolve: {
          options: function () {
            return formModel;
          }
        }
      });
      show.result.then(function (data) {
          console.log("hello",data);
          $location.path('view2/'+data.toString());
          if(data) {
              $rootScope.success= data.toString();
          }
      });
    }
  }
  $scope.getForm = function(){
      $scope.model.isLoading=true;
      FormService.getFormData().success(getHandler);
  };

}])


.controller('DialogCtrl', ['$scope','FormModel','FormService','$formModal','options','$modalInstance',function($scope,FormModel,FormService,$formModal,options,$modalInstance) {

  console.log(options);
  $scope.model= {
    formData:null,
    isLoading:false
  }
  $scope.model.formData = options;

  $scope.submitData = function (model) {
    console.log(model);
    var result = {
      "data":{

      }
    };
      model.formData.formFields.forEach(function (field) {
        if(field.selectedValue){
          result["data"][field.label]=field.selectedValue;
        }
      });
    console.log(result);
    FormService.submitFormData(result);
    $modalInstance.close('success');

  };
  $scope.toggleSelection = function (arr,data) {


      $scope.toggleCheck = function (arr,data) {

          if (arr.indexOf(data) === -1) {
              arr.push(data);
          } else {
              arr.splice(arr.indexOf(data), 1);
          }
      };
      $scope.toggleCheck(arr,data);
      
  }  
  $scope.closeHandler = function (data) {
    $modalInstance.close(data);
  };
  
  $scope.cancelHandler = function () {
    $modalInstance.dismiss();
  };
  $scope.dismissHandler = function () {
    $modalInstance.dismiss();
  };

}]);