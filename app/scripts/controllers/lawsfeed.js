'use strict';

app.controller('LawsFeedCtrl', function ($scope, LawsFeed) {
  $scope.desc = 'Laws Feed';

  $scope.laws = LawsFeed.all;
});
