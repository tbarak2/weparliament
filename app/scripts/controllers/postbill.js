'use strict';

app.controller('PostBillCtrl', function ($scope, $location, Bill, Category) {
  $scope.bill = {};
  $scope.categories = Category.all;

  $scope.submitBill = function () {
    Bill.create($scope.bill).then(function (ref) {
      $location.path('/main');
    });
  };
});
