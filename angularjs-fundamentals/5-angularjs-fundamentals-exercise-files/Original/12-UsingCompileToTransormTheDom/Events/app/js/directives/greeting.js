'use strict';

eventsApp
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
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
            require: '^greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function() {
        return {
            restrict: 'A',
            require: '^greeting',
            link: function(scope, element, attrs, controller) {
                controller.addGreeting('नमस्ते');
            }
        }
    });
