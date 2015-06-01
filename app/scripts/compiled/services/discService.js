'use strict';
angular.module('ngDiscoApp').factory('discs', function($http, LxNotificationService, baseUrl){
  var myService, error, notify;
  myService = {
    discs: []
  };
  error = LxNotificationService.error;
  notify = LxNotificationService.notify;
  myService.createAlbum = function(album){
    return {
      titre: album && album.titre
        ? album.titre
        : chance.sentence({
          words: 2
        }),
      artiste: album && album.artiste
        ? album.artiste
        : chance.word(),
      date: album && album.date
        ? album.date
        : chance.date(),
      genre: album && album.genre
        ? album.genre
        : chance.pick(['pop', 'rock', 'electro', 'disco', 'funk']),
      description: album && album.description
        ? album.description
        : chance.paragraph(),
      duration: album && album.duration
        ? album.duration
        : chance.natural({
          min: 1,
          max: 2000
        }),
      cover: 'http://lorempixel.com/400/200?' + Math.random()
    };
  };
  myService.addOne = function(album){
    return $http.post(baseUrl, myService.createAlbum(album)).success(function(){
      notify('Disque ajouté', 'check');
    }).error(function(){
      error('Erreur de chargement des disques');
    });
  };
  myService.suppr = function(album){
    return $http['delete'](baseUrl + album.id).success(function(){
      notify('Disque supprimé', 'check');
    }).error(function(){
      error('Erreur de suppression');
    });
  };
  myService.edit = function(album){
    return $http.put(baseUrl + album.id, album.success(function(){
      notify('Disque modifié', 'check');
    }).error(function(){
      error('Erreur de chargement des disques');
    }));
  };
  myService.get = function(id){
    return $http.get(baseUrl + (id ? id : '')).error(function(){
      return error('Erreur de chargement des disques');
    });
  };
  return myService;
});