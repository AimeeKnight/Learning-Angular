var myApp = angular.module('myApp', []);

myApp.controller('UserCtrl', ['$scope', function ($scope) {
  $scope.user = {};
  $scope.user.details = {
    "username": "aimeeknight",
    "id": "89101112"
  };
}]);

myApp.directive("customButton", function(){
  return {
    restrict: "A",
    replace: true,
    transclude: true,
    //templateUrl: 'templates/customButton.html',
    template: "<a href='' class='myawesomebutton' ng-transclude>" +
              "</a>",
    link: function(scope, element, attrs){
    }
  };
});
