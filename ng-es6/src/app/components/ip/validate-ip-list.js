class ValidateIpList {
  constructor() {
    this.restrict = 'A';
    this.require = 'ngModel';
  }

  link(scope, element, attrs, ctrl) {
    console.log('here');
    ctrl.$parsers.push((value) => {
      if(ctrl.$isEmpty(value)) {
        ctrl.$setValidity('validIpList', true);
        return value;
      }

      let ips = value.split(',');
      ips = map(ips, _.trim);
      let invalidIps = _.reject(ips, (x) => {
        return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))?$/.test(x);
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

}

export default ValidateIpList;

