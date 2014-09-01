'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }

    }
});