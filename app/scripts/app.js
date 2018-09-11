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
      })
      .state('red', {
        url: '/bricks/red',
        templateUrl: 'views/bricks.html',
        controller: 'RedBricksCtrl as brick'
      })
      .state('blue', {
        url: '/bricks/blue',
        templateUrl: 'views/bricks.html',
        controller: 'BlueBricksCtrl as brick'
      })
      .state('green', {
        url: '/bricks/green',
        templateUrl: 'views/bricks.html',
        controller: 'GreenBricksCtrl as brick'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('red.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('blue.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('green.cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      });
  }]);
