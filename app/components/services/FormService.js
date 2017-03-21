
    'use strict';

    var module = angular.module('myApp.service', []);

    module.factory('FormService', ['$rootScope', '$http',
        function ($rootScope, $http) {

            return {
                getFormData: function () {
                    return $http({
                        method: 'GET',
                        url: 'https://randomform.herokuapp.com'
                    })
                },
                submitFormData: function (formData) {
                    return $http({
                        method: 'POST',
                        url: 'https://randomform.herokuapp.com/submit',
                        data:formData
                    })
                }
            }
        }
    ]);

