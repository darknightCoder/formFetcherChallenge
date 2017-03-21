/**
 * Created by pratapsa on 3/21/2017.
 */


    var module = angular.module('myApp.dialog', ['ui.bootstrap']);

    module.factory('$formModal', ['$modal', '$timeout',
        function ($modal, $timeout) {

            var $formModal = {};

            function autoFocus(modalDomEl) {
                //modalDomEl.focus();

                var firstFocusableEl = modalDomEl.find("a, button, :input, [tabindex]").first();
                var lastFocusableEl = modalDomEl.find("a, button, :input, [tabindex]").last();
                // Prevents the user from tabbing out of this dialog.
                firstFocusableEl.bind('keydown', function (e) {
                    if (e.which === 9 && e.shiftKey) {
                        e.preventDefault();
                        lastFocusableEl.focus();
                    }
                });
                lastFocusableEl.bind('keydown', function (e) {
                    if (e.which === 9 && !e.shiftKey) {
                        e.preventDefault();
                        firstFocusableEl.focus();
                    }
                });
            }

            $formModal.open = function (modalOptions) {
                console.log(modalOptions);
                var modalInstance = $modal.open(modalOptions);

                return modalInstance;
            };

            return $formModal;
        }
    ]);
