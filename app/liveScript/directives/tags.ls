'use strict';

angular.module 'ngDiscoApp' .directive 'tags', ->
  templateUrl: 'views/tags.html',
  restrict: 'E',
  scope:
    filtered: '=',
    selected: '='