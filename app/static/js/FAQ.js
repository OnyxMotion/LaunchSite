'use strict';

angular.module('LaunchSite')
  .controller('FAQCtrl', function FAQCtrl($analytics) {

        $analytics.pageTrack('/#/FAQ');
});