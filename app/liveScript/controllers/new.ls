'use strict';

/**
 * @ngdoc function
 * @name ngDiscoApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the ngDiscoApp
 */
angular.module 'ngDiscoApp' .controller 'NewCtrl', ($location, discs) !->
  this.disc ={};
  this.action = (disc) ->
    <-! discs.addOne disc .success
    $location.path '/'
  this.abort = !->
    $location.path '/'