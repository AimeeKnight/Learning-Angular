'use strict';

eventsApp
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            priority: -1,
            transclude: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: function($scope) {
                var greetings = ['hello'];
                $scope.sayHello = function() {
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting) {
                    greetings.push(greeting);
                }
            }
        };
    })
    .directive('finnish', function() {
        return {
            restrict: 'A',
            priority: -1,
            terminal: true,
            require: '^greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function() {
        return {
            restrict: 'A',
            priority: -2,
            require: '^greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('नमस्ते');
            }
        }
    });
