/* jshint esnext: true */
(function() {
  class ValidateIp {
    constructor(UTILITIES) {
      this.restrict = 'A';
      this.require = 'ngModel';
      ValidateIp.UTILITIES = ValidateIp.UTILITIES ? ValidateIp.UTILITIES : UTILITIES;
    }

    link(scope, element, attrs, ctrl) {
      ctrl.$parsers.push((value) => {
        if(ctrl.$isEmpty(value)) {
          ctrl.$setValidity('validIp', true);
          return value;
        }

        let ips = value.split(',');
        ips = _.map(ips, _.trim);
        ips = _.filter(ips, (x) => {
          return ValidateIp.UTILITIES.ipRegex.test(x);
        });

        if (ips && ips.length > 0) {
          ctrl.$setValidity('validIp', true);
          return ips.join();
        } else {
          ctrl.$setValidity('validIp', false);
          return undefined;
        }
      });
    }

    static directiveFactory(UTILITIES) {
      return new ValidateIp(UTILITIES);
    }

  }

  ValidateIp.directiveFactory.$inject = ['UTILITIES'];

  angular.module('ak.directives.validate-ip', ['ak.constants.utils'])
    .directive('validIp', ValidateIp.directiveFactory);
})();
