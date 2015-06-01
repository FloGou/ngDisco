'use strict';
angular.module('ngDiscoApp').filter('pluck', function(){
  return function(input, value){
    if (input) {
      return input.map(function(it){
        return it[value];
      });
    }
  };
});