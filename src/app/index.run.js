(function() {
  'use strict';

  angular
    .module('gulpMdb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
