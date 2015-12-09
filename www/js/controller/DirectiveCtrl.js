(function() {
  'use strict';

  angular.module('starter.controllers')
    .controller('DirectiveCtrl', DirectiveCtrl);

  function DirectiveCtrl() {
    var vm = this;
    vm.things = [1, 2, 3, 4, 5, 6];

    vm.title = '点击展开';
    vm.text = '这里是内容的内容';

    vm.expanders = [{
      title : 'Click me to expand',
      text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
      title : 'Click this',
      text : 'I am even better text than you have seen previously'
    }, {
      title : 'Test',
      text : 'test'
    }];
  }
})();