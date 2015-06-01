'use strict';
angular.module('ngDiscoApp').controller('MainCtrl', function($http, LxNotificationService, discs){
  var ctrl, getAlbums;
  ctrl = this;
  ctrl.albums = [];
  getAlbums = function(){
    discs.get().success(function(data){
      ctrl.albums = data;
      ctrl.tag = _.uniq(ctrl.albums.map(function(it){
        return it.genre;
      }));
      ctrl.height = 1000;
    });
  };
  ctrl.add = function(){
    discs.createAlbum();
  };
  ctrl.suppr = function(disc){
    discs.suppr(disc).success(function(){
      getAlbums();
    });
  };
  ctrl.go = function(disc){
    ctrl.detail = disc;
  };
  getAlbums();
});