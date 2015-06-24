(function() {
  'use strict';

  angular
    .module('gulpMdb')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;

    vm.impressumUrl = "http://csharp-paradise.de";
  }
})();
