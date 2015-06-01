'use strict'
angular.module 'ngDiscoApp' .controller 'EditCtrl', ($routeParams, $location, discs) !->
  ctrl = this;
  discs.get $routeParams.id .success (data)!-> ctrl.disc = data;

  this.action = (album) !->
    <-! discs.edit album .success
    $location.path '/'

  this.abort = !-> $location.path '/'