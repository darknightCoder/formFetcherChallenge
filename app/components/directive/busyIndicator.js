(function() {
    'use strict';
    angular.module('myApp')
        .directive('busyIndicatorInline', function() {
            return {
                scope: {
                    size: '@'
                },
                link: function(scope, element, attr) {
                    var indicatorSize = 'small';
                    if (scope.size === 'large') {
                        indicatorSize = ''; // None = large/normal
                    }

                    element.append('<div class="busy-indicator inline"><div class="busy-indicator-box"></div></div>');
                    element.children().first().addClass(indicatorSize);
                }
            };
        })
        .directive('busyIndicator', function() {
            return {
                scope: {
                    local: '='
                },
                link: function(scope, element, attr) {
                    var show = function() {
                        element.css('display', 'block');

                    };
                    var hide = function() {
                        element.css('display', 'none');
                    };
                    // For layout Manager
                    element.attr('name', 'busy_indicator');
                    element.addClass('omitHeight');
                    element.addClass('busy-indicator-backdrop');
                    element.append('<div class="busy-indicator"><div class="busy-indicator-box"></div></div>');
                    if (scope.local === true) {
                        show();
                    } else {
                        scope.$on('BusyIndicator.ACTIVE', show);
                        scope.$on('BusyIndicator.INACTIVE', hide);
                        hide();
                    }
                }
            };
        });
})();
