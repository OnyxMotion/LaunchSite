angular.module('LaunchSite')
  .controller('HomeController', ['$scope', function ($scope) {

    $scope.signup = true;

  	    $scope.save = function(){
        
        $scope.signup = false;
       	console.log ($scope.signup);
        $scope.master = angular.copy($scope.user);
        //console.log= "hello"
       
    };

  }]);
