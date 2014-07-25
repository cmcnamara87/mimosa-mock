'use strict';

/**
 * @ngdoc overview
 * @name anzacMockupApp
 * @description
 * # anzacMockupApp
 *
 * Main module of the application.
 */
angular
    .module('anzacMockupApp', [
        'ngAnimate',
        'ui.router',
        'ngSanitize'
    ]).run(function($rootScope, ellwood) {
        $rootScope.ellwood = ellwood;
    }).config(function($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/person/1/bio');

        // Now set up the states
        $stateProvider
            .state('person', {
                abstract: true,
                url: '/person/:personId',
                templateUrl: 'views/person.html'
            })
            .state('person.bio', {
                url: '/bio',
                templateUrl: 'views/person.bio.html'
            })
            .state('person.photographs', {
                url: '/photographs',
                templateUrl: 'views/person.photographs.html'
            });
    });

/*
Bio tab:
  (Use Ellwood.json for data) 
  Display:
    name
    first photograph only
    dates (birth, marriage, death)
    bio
    children details

Photographs tab:
  (Use photographs data from Ellwood.json)
  Display photographs of Robert Ellwood with captions
  Upload new photo buttton button

Locations tab (was projects)
  Map that displays markers using placesWithPhotos.json data - display place name, photographs and captions in popups

Timeline tab:
  (Use timelinedata.json for data)
  TimelineJS

Photo upload page:
  File drop area
  Fields:
    Caption
    Place (place name will be entered as text e.g. "Queen St, Brisbane")

  After upload photo should appear under photos tab and if place was in known list of places (places.json) there should be a new marker on the locations map with the photo as a popup

Other requirements: needs to be able to run off Neil's laptop without net connection (i.e. use local copies of JS libraries, and can't use Google doc for timeline data)
Include non-functional buttons on other pages that look like people should be able to edit and add things e.g. add event to timeline, edit biography etc.
 */
