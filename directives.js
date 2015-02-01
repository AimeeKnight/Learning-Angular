// directives for dealing with angular file inputs
app.directive('fileModel', function ($parse) {
  return {
     restrict: 'A',
    link: function(scope, element, attrs) {
       var model = $parse(attrs.fileModel);
       var modelSetter = model.assign;
       element.bind('change', function(){
         scope.$apply(function(){
           modelSetter(scope, element[0].files[0]);
         });
       });
     }
   };
 });

app.directive('requiredFile',function() {
   return {
     require:'ngModel',
     restrict: 'A',
     link:function(scope, element ,attrs, ngModel) {
       element.bind('change',function() {
         scope.$apply(function() {
           ngModel.$setViewValue(element.val());
           ngModel.$render();
         });
       });
     }
   };
 });

// directive for email validation
app.directive('validEmail', function() {
   return {
     require: 'ngModel',
     link: function(scope, elem, attrs, ctrl) {

       var extractEmail = function (email) {
         var bracketRegex = /(.+)<(.*)>$/
           , bracketMatches = bracketRegex.exec(email);

         // only extract email if it's wrapped in angle brackets, and it has a valid display name
         if (typeof email === 'string' && bracketMatches !== null && bracketMatches[1].indexOf('@') === -1 && bracketMatches[1] !== ' ') {
           email = bracketMatches[2];
         }
         return email.trim();
       };

       var isValidEmail = function(email) {
         var EMAIL_REGEXP = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-z
         return EMAIL_REGEXP.test(email);
       };

       ctrl.$parsers.push(function(value) {
         if (ctrl.$isEmpty(value)) {
           ctrl.$setValidity('validEmail', true);
           return value;
         }
         var email = extractEmail(value);
         if ((isValidEmail(email) === false || value.split(',').length > 1)) {
           ctrl.$setValidity('validEmail', false);
           return undefined;
         } else {
           ctrl.$setValidity('validEmail', true);
           return value;
         }
       });
     }
   };
 });

app.directive('validatePasswordMatch', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {

        // watch the main password field for changes
        attrs.$observe('validatePasswordMatch', function (value) {
          if (value !== ctrl.$viewValue && value !== '') {
            ctrl.$setValidity('matchingPasswords', false);
          } else {
            ctrl.$setValidity('matchingPasswords', true);
          }
        });

        // watch the password confirmation  field for changes
        ctrl.$parsers.push(function(value) {
          console.log(attrs.validatePasswordMatch);
          //console.log(ctrl);
          // set an empty input as invalid via matchingPasswords property so that
          // the password check will only have one validation
          if(ctrl.$isEmpty(value)) {
            ctrl.$setValidity('matchingPasswords', false);
            return value;
          }

          if (value !== attrs.validatePasswordMatch && attrs.validatePasswordMatch !== '') {
            ctrl.$setValidity('matchingPasswords', false);
            return value;
          } else {
            ctrl.$setValidity('matchingPasswords', true);
            return undefined;
          }
        });

      }
    };
  });
