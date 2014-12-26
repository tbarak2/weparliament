'use district';

app.controller('NavCtrl', function ($scope, Category) {
  $scope.categories = Category.all;
});
