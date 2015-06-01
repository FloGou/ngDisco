'use strict';
angular.module('ngDiscoApp').directive('tags', function(){
  return {
    templateUrl: 'views/tags.html',
    restrict: 'E',
    scope: {
      filtered: '=',
      selected: '='
    }
  };
});