(function() {
  'use strict';

  angular.module('starter.directives')
    .directive('hello', hello)

  function hello() {
    return {
      restrict: 'E',
      template: '<div>Hi there<span ng-transclude></span></div>',
      replace: true,
      transclude: true
    };
  }
})();