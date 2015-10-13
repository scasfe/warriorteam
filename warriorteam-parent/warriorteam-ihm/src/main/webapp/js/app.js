'use strict';

var app = angular.module('warriorApp', ['ngRoute','warriorApp.directives' ,'warriorApp.controllers', 'warriorApp.services']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
                   
                   function($routeProvider, $locationProvider){
//						$locationProvider.html5mode(true).hasPrefix('!');
//						$httpProvider.interceptors.push('httpInterceptor');
						
						/** Redirections routes */
//						$routeProvider.when('/login', {templateUrl: 'templates/login.html', controller: 'loginCtrl'});
//						$routeProvider.when('/login/:username', {templateUrl: 'templates/login.html', controller: 'loginCtrl'});
//						
						$routeProvider.when('/accueil', {templateUrl: 'templates/accueil.html', controller: 'accueilCtrl'});
						$routeProvider.when('/login', {templateUrl: 'templates/login.html', controller: 'loginCtrl'});
						
						$routeProvider.otherwise({redirectTo: '/accueil'});
}]);