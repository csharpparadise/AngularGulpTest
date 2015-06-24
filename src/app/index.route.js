(function() {
  'use strict';

  angular
    .module('gulpMdb')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }

})();
