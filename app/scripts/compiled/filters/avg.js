'use strict';
angular.module('ngDiscoApp').filter('avg', function(sumFilter){
  return function(input){
    if (input && input.length) {
      return sumFilter(input) / input.length;
    } else {
      return 0;
    }
  };
});