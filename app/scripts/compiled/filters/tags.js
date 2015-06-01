'use strict';
angular.module('ngDiscoApp').filter('tags', function(){
  return function(input, tags){
    if (input) {
      return input.filter(function(i){
        return !tags || _.contains(tags, i.genre);
      });
    }
  };
});