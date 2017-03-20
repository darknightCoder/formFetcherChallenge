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
            this.component = "";
            this.description = "";
            this.editable = false;
            this.label="";
            this.required=false;
            this.validation="";
            this.options = [];
        };

        FormFieldModel.prototype.deSerialize = function (formFields) {


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



        return FormFieldModel;
    }
);