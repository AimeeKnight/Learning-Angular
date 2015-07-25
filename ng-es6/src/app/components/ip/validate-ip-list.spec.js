/*jshint es3: false */
describe('Directive: validate-ip', function() {
  var path = require('path');
  var conf = require('./gulp/conf');
  var _ = require('lodash');
  var $scope
    , elem
    , form;

  beforeEach(module('directiveDemo'));

  describe('validateIp', function() {
    var $compile;
    beforeEach(inject(function($rootScope, _$compile_) {
      $compile = _$compile_;

      $scope = $rootScope.$new();
      elem = angular.element('<form name="form">' +
        '<input type="text" name="ip" ng-model="test.ip" ng-list valid-ip-list>' +
        '</form>');
      $compile(elem)($scope);
      form = $scope.form;
    }));

    it('should validate empty values', function() {
      form.ip.$setViewValue('');
      $scope.$digest();
      expect(form.ip.$valid).to.be.true;
    });

    it('should accept a single valid ip', function() {
      form.ip.$setViewValue('66.235.69.135');
      $scope.$digest();
      expect(form.ip.$valid).to.be.true;
    });

    it('should accept multiple valid ips regardless of spacing and cidr', function() {
      form.ip.$setViewValue('66.235.69.135, 66.245.69.145,66.255.69.155/24');
      $scope.$digest();
      expect(form.ip.$valid).to.be.true;
    });

    it('should not accept an invalid ip', function() {
      form.ip.$setViewValue('66.235.69.135,abc123');
      $scope.$digest();
      expect(form.ip.$valid).to.be.false;
    });
  });

});
