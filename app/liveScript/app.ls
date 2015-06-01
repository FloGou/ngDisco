'use strict';

/**
 * @ngdoc overview
 * @name ngDiscoApp
 * @description
 * # ngDiscoApp
 *
 * Main module of the application.
 */
appModule = angular.module 'ngDiscoApp', <[ ngAnimate ngCookies ngResource ngRoute ngSanitize ngTouch lumx angular.filter angularMoment ]>

appModule.config ($routeProvider) !->
  $routeProvider.when '/',
    templateUrl : 'views/main.html',
    controller  : 'MainCtrl',
    controllerAs: 'mainCtrl'
  $routeProvider.when '/new',
    templateUrl : 'views/form.html',
    controller  : 'NewCtrl',
    controllerAs: 'ctrl'
  $routeProvider.when '/edit/:id',
    templateUrl : 'views/form.html',
    controller  : 'EditCtrl',
    controllerAs: 'ctrl'
  $routeProvider.otherwise redirectTo: '/'

appModule.config ($httpProvider) !->
  $httpProvider.interceptors.push ($q, $rootScope) ->
    $rootScope.pending = 0

    'request': (config) ->
      $rootScope.pending++
      config
    'response': (response)->
      $rootScope.pending--
      response
    'responseError': (rejection) ->
      $rootScope.pending--
      $q.reject rejection