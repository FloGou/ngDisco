'use strict';
angular.module('ngDiscoApp').filter('truncate', function(){
  return function(input, size, c){
    return prelude.slice(0, size, input) + (c || '…');
  };
});