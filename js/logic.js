//angluar related logic here
app.controller('ControllerQuestions', function($scope, $http) {
  $scope.list = [];
    $http.get("http://localhost:4555/api/questions")
    .success(function(response) {
      $scope.questions = response;
      $scope.serverMsg = "";

    })

  //sending data to server via socket
  $scope.submit = function() {
       if ($scope.text) {
         //send it via socket to server
         makeSocketRequest($scope.text);
         $scope.text = '';
       }
  }


  //socket related logic - probabbly not the best way to go with
  function makeSocketRequest(clientMsg){
    url = 'ws://localhost:4555/ws';
    c = new WebSocket(url);

    c.onmessage = function(msg){
      console.log(msg)

      $scope.$apply(function () {
        $scope.serverMsg = "Server:"+msg.data;
        $scope.list.push("Server got: "+msg.data);

      });
    }

    c.onopen = function(){
       c.send(clientMsg)
    }

  }


});
