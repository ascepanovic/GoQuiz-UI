angular.module('Quiz', [
  'ngRoute',
  'mobile-angular-ui',
  'Quiz.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});