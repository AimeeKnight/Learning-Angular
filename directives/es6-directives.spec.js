/*jshint es3: false */
describe('Directive: validate-ip', function() {
  var $scope
    , elem
    , form;

  beforeEach(module('ak.directives.validate-ip'));

  describe('validateIp', function() {
    var $compile;
    beforeEach(inject(function($rootScope, _$compile_) {
      $compile = _$compile_;

      $scope = $rootScope.$new();
      elem = angular.element('<form name="form">' +
        '<input type="text" name="ip" ng-model="test.ip" ng-list valid-ip>' +
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
      form.ip.$setViewValue('66.249.69.126');
      $scope.$digest();
      expect(form.ip.$valid).to.be.true;
    });

    it('should not accept an invalid ip', function() {
      form.ip.$setViewValue('abc123');
      $scope.$digest();
      expect(form.ip.$valid).to.be.false;
    });
  });

});
