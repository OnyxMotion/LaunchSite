
  'use strict';

angular.module('LaunchSite')
  .controller('PreSignupCtrl', function PreSignupCtrl($scope) {
    $scope.user = null;
    $scope.master = null;
    $scope.signup = true;
    console.log ($scope.signup);

    $scope.save = function(){
        
        $scope.signup = false;
       	console.log ($scope.signup);
        $scope.master = angular.copy($scope.user);
        //console.log= "hello"
       
    };


});