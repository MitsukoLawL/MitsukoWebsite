'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('myJSON.json')
      .then(function(res) {

        $scope.data = res.data;

        $scope.myCarousel = res.data['myCarousel'];
        $scope.introduction = res.data['Introduction'];
        $scope.presentation = res.data['Presentation'];
        $scope.experience = res.data['Experience'];
        $scope.projet = res.data['Projet'];
        $scope.loisirs = res.data['Loisirs'];
        $scope.galerie = res.data['Galerie'];
        $scope.lien = res.data['Lien'];
        $scope.footer = res.data['Footer'];
      });
  });
