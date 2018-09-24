angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page3',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('karla', {
    url: '/page4',
    templateUrl: 'templates/karla.html',
    controller: 'karlaCtrl'
  })

  .state('peter', {
    url: '/page5',
    templateUrl: 'templates/peter.html',
    controller: 'peterCtrl'
  })

  .state('pamela', {
    url: '/page6',
    templateUrl: 'templates/pamela.html',
    controller: 'pamelaCtrl'
  })

  .state('rocco', {
    url: '/page7',
    templateUrl: 'templates/rocco.html',
    controller: 'roccoCtrl'
  })

  .state('harvey', {
    url: '/page8',
    templateUrl: 'templates/harvey.html',
    controller: 'harveyCtrl'
  })

  .state('jericho', {
    url: '/page9',
    templateUrl: 'templates/jericho.html',
    controller: 'jerichoCtrl'
  })

  .state('reyvie', {
    url: '/page10',
    templateUrl: 'templates/reyvie.html',
    controller: 'reyvieCtrl'
  })

  .state('kenneth', {
    url: '/page11',
    templateUrl: 'templates/kenneth.html',
    controller: 'kennethCtrl'
  })

  .state('berting', {
    url: '/page12',
    templateUrl: 'templates/berting.html',
    controller: 'bertingCtrl'
  })

  .state('paul', {
    url: '/page13',
    templateUrl: 'templates/paul.html',
    controller: 'paulCtrl'
  })

$urlRouterProvider.otherwise('/page3')


});