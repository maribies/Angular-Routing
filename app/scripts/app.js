'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */
angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/instructions.html'
      });
  }]);
