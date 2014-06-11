// Declare app level module which depends on filters, and services
angular.module('LaunchSite', ['angulartics','angulartics.google.analytics', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
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


                    .when('/holla', {
        templateUrl: 'views/contactus.html', 
        controller: 'PreSignupCtrl'})


                    .when('/FAQ', {
        templateUrl: 'views/FAQ.html', 
        controller: 'PreSignupCtrl'})


        .when('/parents', {
        templateUrl: 'views/parents.html', 
        controller: 'PreSignupCtrl'})


        .when('/varsity', {
        templateUrl: 'views/varsity.html', 
        controller: 'PreSignupCtrl'})

                .when('/varsity', {
        templateUrl: 'views/varsity.html', 
        controller: 'PreSignupCtrl'})

                        .when('/golf', {
        templateUrl: 'views/golf.html', 
        controller: 'PreSignupCtrl'})

       .when('/technology', {
        templateUrl: 'views/technology.html', 
        controller: 'PreSignupCtrl'})

                               .when('/baseball', {
        templateUrl: 'views/baseball.html', 
        controller: 'PreSignupCtrl'})


                                .when('/basketball', {
        templateUrl: 'views/basketball.html', 
        controller: 'PreSignupCtrl'})



                        .when('/badminton', {
        templateUrl: 'views/badminton.html', 
        controller: 'PreSignupCtrl'})


                               .when('/tennis', {
        templateUrl: 'views/tennis.html', 
        controller: 'PreSignupCtrl'})


                                .when('/football', {
        templateUrl: 'views/football.html', 
        controller: 'PreSignupCtrl'})



      .otherwise({redirectTo: '/'});


  }]);
