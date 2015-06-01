'use strict';
/**
 * @ngdoc filter
 * @name ngDiscoApp.filter:reduce
 * @function
 * @description
 * # reduce
 * Filter in the ngDiscoApp.
 */
angular.module('ngDiscoApp').filter('reduce', function(){
  return function(input, func, start){
    return input.reduce(func != null
      ? func
      : {
        func: function(prev, curr){
          return prev + curr.duration;
        }
      }, start != null
      ? start
      : {
        start: 0
      });
  };
});