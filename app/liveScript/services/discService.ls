'use strict';
angular.module 'ngDiscoApp' .factory 'discs', ($http, LxNotificationService, baseUrl) ->
  myService = {discs: []};

  error = LxNotificationService.error;
  notify = LxNotificationService.notify;

  myService.createAlbum = (album) ->
    titre      : if (album && album.titre      ) then album.titre       else chance.sentence words: 2,
    artiste    : if (album && album.artiste    ) then album.artiste     else chance.word!,
    date       : if (album && album.date       ) then album.date        else chance.date!,
    genre      : if (album && album.genre      ) then album.genre       else chance.pick ['pop', 'rock', 'electro', 'disco', 'funk'],
    description: if (album && album.description) then album.description else chance.paragraph!,
    duration   : if (album && album.duration)    then album.duration    else chance.natural {min: 1, max: 2000},
    cover      : 'http://lorempixel.com/400/200?' + Math.random!

  myService.addOne = (album) ->
    $http.post baseUrl, myService.createAlbum album .success(!->notify 'Disque ajouté', 'check').error !-> error 'Erreur de chargement des disques'

  myService.suppr = (album) ->
    $http.delete baseUrl + album.id .success(!->notify 'Disque supprimé', 'check').error !->error 'Erreur de suppression'

  myService.edit = (album) ->
    $http.put baseUrl+album.id, album.success(!-> notify 'Disque modifié', 'check').error !-> error 'Erreur de chargement des disques'

  myService.get = (id) -> $http.get baseUrl + (if id then id else '') .error -> error 'Erreur de chargement des disques'

  myService;