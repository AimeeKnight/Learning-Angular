'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if(form.$valid) {
                eventData.save(event)
                    .$promise.then(
                        function(response) { console.log('success', response)},
                        function(response) { console.log('failure', response)}
                    );
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };

    }
);