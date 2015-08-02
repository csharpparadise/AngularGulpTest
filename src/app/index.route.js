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
        templateUrl: 'app/about/index.html',
        controller: 'AboutController',
        controllerAs: 'ctrl'
      })
      .when('/movie/:page?',{
        templateUrl: 'app/movie/index.html',
        controller: 'MovieController',
        controllerAs: 'ctrl'
      })
      .when('/movie/:movieId/:movieName',{
        templateUrl: 'app/movie/detail.html',
        controller: 'MovieDetailController',
        controllerAs: 'ctrl'
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }
})();
