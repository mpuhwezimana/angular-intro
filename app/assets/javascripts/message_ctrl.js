(function() {
  "use strict";

  angular.module("app").controller("messageCtrl", function($scope) {

    $scope.tasks = ["take out the trash", "walk the dog", "play soccer", "wash the clothes"];



    window.$scope = $scope;
  });
})();