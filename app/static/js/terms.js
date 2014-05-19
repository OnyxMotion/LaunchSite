'use strict';

angular.module('LaunchSite')
  .controller('TermsCtrl', function TermsCtrl($analytics) {

        $analytics.pageTrack('/#/terms');
});