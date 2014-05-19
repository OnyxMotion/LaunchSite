'use strict';

angular.module('LaunchSite')
  .controller('AboutCtrl', function AboutCtrl($analytics) {

        $analytics.pageTrack('/#/about');
});