'use strict';
angular.module('ngDiscoApp').controller('EditCtrl', function($routeParams, $location, discs){
  var ctrl;
  ctrl = this;
  discs.get($routeParams.id).success(function(data){
    ctrl.disc = data;
  });
  this.action = function(album){
    discs.edit(album).success(function(){
      $location.path('/');
    });
  };
  this.abort = function(){
    $location.path('/');
  };
});