app.controller("mainController", function($scope, $http){

  $scope.apiKey = "b287ea76a8b9dd3199037c029f6b067b";
  $scope.results = [];
  $scope.filterText = null;
  $scope.genreFilter = null;
  $scope.availableGenres = [];
  $scope.orderFields = ["Air Date", "Rating"];
  $scope.orderDirections = ["Descending", "Ascending"];
  $scope.orderField = "Air Date";
  $scope.orderReverse = false;
  $scope.init = function() {
    var today = new Date();
    var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
    $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
      angular.forEach(data, function(value, index){
        var date = value.date;
        angular.forEach(value.episodes, function(tvshow, index){
          tvshow.date = date;
          $scope.results.push(tvshow);
          angular.forEach(tvshow.show.genres, function(genre, index){
            var exists = false;
            angular.forEach($scope.availableGeneres, function(avGenre, index){
              if (avGenre = genre){
                exists = true;
              }
            });
            if (exists == false){
              $scope.availableGenres.push(genre);
            }
          });
        });
      });
    }).error(function(error){

    });
  };
  $scope.setGenreFilter = function(genre){
    $scope.genreFilter = genre;
  };
  $scope.customOrder = function(tvshow){
    switch($scope.orderField){
      case "Air Date":
        return tvshow.episode.first_aired;
        break;
      case "Rating":
        return tvshow.episode.ratings.percentage;
        break;
    }
  };
});

app.filter('isGenre', function(){
  return function(input, genre){
    if (typeof genre == 'undefined' || genre == null){
      return input
    } else {
      var out = [];
      for (var i = 0; i < input.length; i++){
        for (var j = 0; j < input[i].show.genres.length; j++){
          if (input[i].show.genres[j] == genre){
            out.push(input[i]);
          }
        }
      }
      return out;
    }
  };
});
