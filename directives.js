// directives for dealing with angular file inputs
app.directive('fileModel', function ($parse) {
  return {
     restrict: 'A',
    link: function(scope, element, attrs) {
       var model = $parse(attrs.msysFileModel);
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
