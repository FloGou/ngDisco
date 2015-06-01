'use strict';

angular.module 'ngDiscoApp' .directive 'detail', ->
  templateUrl: 'views/detail.html',
  restrict: 'E',
  scope:  disc: '='