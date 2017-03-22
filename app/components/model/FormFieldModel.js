/**
 * Created by pratapsa on 3/20/2017.
 */
/**
 * Created by anand pratap singh on 3/20/2017.
 */

'use strict';
angular.module('myApp.formFieldmodel',[]).factory('FormFieldModel',
    function () {
        var FormFieldModel = function () {
            this.autoselect = [];
            this.autofill = "";
            this.component = "";
            this.description = "";
            this.editable = false;
            this.label="";
            this.required=false;
            this.validation="";
            this.options = [];
        };

        FormFieldModel.prototype.deSerialize = function (formFields) {

            this.autoselect = formFields.autoselect;
            this.autofill = formFields.autofill;
            this.component = formFields.component;
            this.description = formFields.description;
            this.editable = formFields.editable;
            this.label = formFields.label;
            this.required = formFields.required;
            this.validation = formFields.validation;
            this.options = formFields.options;

        };

        FormFieldModel.prototype.serialize = function () {
            return {

                //to-do

            };
        };


        // Statics



        return FormFieldModel;
    }
);