'use strict';
/**
 * @ngdoc function
 * @name ngDiscoApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the ngDiscoApp
 */
angular.module('ngDiscoApp').controller('NewCtrl', function($location, discs){
  this.disc = {};
  this.action = function(disc){
    return discs.addOne(disc).success(function(){
      $location.path('/');
    });
  };
  this.abort = function(){
    $location.path('/');
  };
});