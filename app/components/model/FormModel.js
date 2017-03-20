/**
 * Created by anand pratap singh on 3/20/2017.
 */

    'use strict';
var module = angular.module('myApp.formModel',[]);
    module.factory('FormModel',['FormFieldModel',
        function (FormFieldModel) {
            var FormModel = function () {
                this.id = "";
                this.displayName = "";
                this.formFields = [];
            };

            FormModel.prototype.deSerialize = function (data) {


                this.id = data.form_id;
                this.displayName = data.form_name;
                if(data.form_fields){
                    var self = this;
                    data.form_fields.forEach(function (form_field,index) {
                        var formFieldModel = new FormFieldModel();
                        formFieldModel.deSerialize(form_field);
                        self.formFields.push(formFieldModel);
                    });

                }

            };

            FormModel.prototype.serialize = function () {
                return {
                    "@self": this.getSelf(),
                    id: this.id,
                    name: this.displayName,
                    description: this.description,
                    icon: this.icon,
                    color: this.color,
                    scopes: this.scopes
                };
            };


            // Statics



            return FormModel;
        }]
    );