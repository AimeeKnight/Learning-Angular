app.controller("MainController", function($scope){
  //$scope.understand = "I now understant how the scope works!";
  //$scope.inputValue = "";
  $scope.selectedPerson = 0;
  $scope.selectedGenre = null;
  $scope.people = [
    {
      id: 0,
      name: "Leon",
      music: [
        "Rock",
        "Metal",
        "Dubstep",
        "Electro"
      ],
      live: true
    },
    {
      id: 1,
      name: "Chris",
      music: [
        "Indie",
        "Drumstep",
        "Dubstep",
        "Electro"
      ],
      live: true
    },
    {
      id: 2,
      name: "Harry",
      music: [
        "Rock",
        "Metal",
        "Thrash Metal",
        "Heavy Metal"
      ],
      live: false
    },
    {
      id: 3,
      name: "Allyce",
      music: [
        "Pop",
        "RnB",
        "Hop Hop"
      ],
      live: true
    }
  ];
  $scope.newPerson = null;
  $scope.addNew = function(){
    if ($scope.newPerson != null && $scope != ""){
      $scope.people.push({
        id: $scope.people.length,
        name: $scope.newPerson,
        live: true,
        muscic: []
      });
    }
  };
});
