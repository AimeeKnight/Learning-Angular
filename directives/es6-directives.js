/* jshint esnext: true */
(function() {
  class ValidateIpList {
    constructor(UTILITIES) {
      this.restrict = 'A';
      this.require = 'ngModel';
      ValidateIpList.UTILITIES = ValidateIpList.UTILITIES ? ValidateIpList.UTILITIES : UTILITIES;
    }

    link(scope, element, attrs, ctrl) {
      ctrl.$parsers.push((value) => {
        if(ctrl.$isEmpty(value)) {
          ctrl.$setValidity('validIpList', true);
          return value;
        }

        let ips = value.split(',');
        ips = _.map(ips, _.trim);
        let invalidIps = _.reject(ips, (x) => {
          return ValidateIpList.UTILITIES.ipRegex.test(x);
        });

        if (invalidIps && invalidIps.length > 0) {
          ctrl.$setValidity('validIpList', false);
          return undefined;
        } else {
          ctrl.$setValidity('validIpList', true);
          return ips.join();
        }
      });
    }

    static directiveFactory(UTILITIES) {
      return new ValidateIpList(UTILITIES);
    }

  }

  ValidateIpList.directiveFactory.$inject = ['UTILITIES'];

  angular.module('fd.directives.validate-ip-list', ['fd.constants.utils'])
    .directive('validIpList', ValidateIpList.directiveFactory);
})();

