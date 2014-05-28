 angular.module('LaunchSite')
    .controller('HomeController', ['$scope', function ($scope) {
 
     $scope.signup = true;
 
   	    $scope.save = function(){ 
         
         $scope.signup = false;
       	console.log ($scope.signup);
         $scope.master = angular.copy($scope.user);

         $analytics.eventTrack('MailSubscribeHomePage', {  category: 'MailSubscribe', label: 'HomePage' });
        //console.log= "hello"
        
    };

    $scope.$on('$viewContentLoaded', function() {
        console.log("yo", $("#body section"));
        $("#body").onepage_scroll({
            sectionContainer: "section"
        });
    });
            

}]);
