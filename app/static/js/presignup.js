
  'use strict';

angular.module('LaunchSite')
  .controller('PreSignupCtrl', function PreSignupCtrl($scope) {
    $scope.signup = true;

    $scope.save = function(){
        
        $scope.signup = false;
       	console.log ($scope.signup);
        $scope.master = angular.copy($scope.user);
        //console.log= "hello"
       
    };

    //     $scope.$on('$viewContentLoaded', function() {
    //     console.log("yo", $("#body section"));
    //     $("#body").onepage_scroll({
    //         sectionContainer: "section"
    //     });
    // });


});