'use strict';

describe('eventThumbnail', function() {
  var el;

  beforeEach(module('eventsApp'));
  beforeEach(module('partials/directives/eventThumbnail.html'));

  beforeEach(inject(function($compile, $rootScope) {
    // set up scope
    var scope = $rootScope;
    scope.event = {name: 'Event Name', date: '223', time: '334', location: {address: '1234', city: '1414', province: '1515'}}

    // create and compile directive
    el = angular.element('<event-thumbnail event="event" />');
    $compile(el)(scope);
    scope.$digest();
  }))

  it('should bind the data', function() {
    expect(el.text()).toContain('Event Name');
  })
});