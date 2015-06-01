'use strict';

angular.module 'ngDiscoApp' .filter 'tags', ->
  (input, tags) ->
    if input
      input.filter (i) ->  !tags || _.contains tags, i.genre