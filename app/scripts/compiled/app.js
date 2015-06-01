'use strict';
/**
 * @ngdoc overview
 * @name ngDiscoApp
 * @description
 * # ngDiscoApp
 *
 * Main module of the application.
 */
var appModule;
appModule = angular.module('ngDiscoApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'lumx', 'angular.filter', 'angularMoment']);
appModule.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'mainCtrl'
  });
  $routeProvider.when('/new', {
    templateUrl: 'views/form.html',
    controller: 'NewCtrl',
    controllerAs: 'ctrl'
  });
  $routeProvider.when('/edit/:id', {
    templateUrl: 'views/form.html',
    controller: 'EditCtrl',
    controllerAs: 'ctrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
appModule.config(function($httpProvider){
  $httpProvider.interceptors.push(function($q, $rootScope){
    $rootScope.pending = 0;
    return {
      'request': function(config){
        $rootScope.pending++;
        return config;
      },
      'response': function(response){
        $rootScope.pending--;
        return response;
      },
      'responseError': function(rejection){
        $rootScope.pending--;
        return $q.reject(rejection);
      }
    };
  });
});