// Declare app level module which depends on filters, and services
angular.module('LaunchSite', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html', 
        controller: 'HomeController'})


      .when('/preorder', {
        templateUrl: 'views/preorder.html', 
        controller: 'PreSignupCtrl'})

      .when('/privacy', {
        templateUrl: 'views/privacy.html', 
        controller: 'PreSignupCtrl'})


            .when('/about', {
        templateUrl: 'views/about.html', 
        controller: 'PreSignupCtrl'})

            .when('/terms', {
        templateUrl: 'views/terms.html', 
        controller: 'PreSignupCtrl'})


                    .when('/contactus', {
        templateUrl: 'views/contact.html', 
        controller: 'PreSignupCtrl'})


      .otherwise({redirectTo: '/'});


  }]);
