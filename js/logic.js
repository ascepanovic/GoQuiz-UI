//angluar related logic here
app.controller('ControllerQuestions', function($scope, $http) {
    $http.get("http://localhost:4555/api/questions")
    .success(function(response) {
      $scope.questions = response;
})
});
