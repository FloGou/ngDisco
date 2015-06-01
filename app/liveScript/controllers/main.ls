'use strict';

angular.module 'ngDiscoApp' .controller 'MainCtrl', ($http, LxNotificationService, discs) !->
  ctrl = this;
  ctrl.albums=[]
  getAlbums = !->
    (data) <-! discs.get!.success
    ctrl.albums = data;
    ctrl.tag = _.uniq ctrl.albums.map (.genre)
    ctrl.height = 1000;

  ctrl.add = !-> discs.createAlbum!

  ctrl.suppr =  (disc) !->
    <-! discs.suppr disc .success
    getAlbums!

  ctrl.go = (disc) !-> ctrl.detail = disc;

  getAlbums!