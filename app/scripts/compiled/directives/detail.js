'use strict';
angular.module('ngDiscoApp').directive('detail', function(){
  return {
    templateUrl: 'views/detail.html',
    restrict: 'E',
    scope: {
      disc: '='
    }
  };
});