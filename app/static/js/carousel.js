'use strict';

angular.module('LaunchSite')
  .controller('CarouselCtrl', function CarouselCtrl($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 0 + slides.length;
    slides.push({
      image: 'images/hero/useCase' + newWidth + '.jpg',
      text: ['Find that slam dunk feeling','Practice drills to perfection','See your game in replay over days, weeks and months.','Get your kids on the court', 'Show off some style.'][slides.length % 5] 
    });
  };
  for (var i=0; i<5; i++) {
    $scope.addSlide();
  }
});