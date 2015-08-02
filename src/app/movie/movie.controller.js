(function() {
  'use strict';

  angular
    .module('gulpMdb')
    .controller('MovieController', MovieController)
    .controller('MovieDetailController', MovieDetailController);

  /** @ngInject */
  function MovieController($scope, $routeParams, $location, $resource) {

    $scope.filteredMovies = [];
    $scope.pageSize = 10;
    $scope.currentPage = 1;

    var movieService = $resource('/assets/data/movies.json');
    $scope.movieData = movieService.get(function(){
      setPageFromRouteParams();
    });

    function updateDisplayedItems() {
      var begin = (($scope.currentPage - 1) * $scope.pageSize),
        end = begin + $scope.pageSize;
      $scope.filteredMovies = $scope.movieData.movies.slice(begin, end);
    }

    function setPageFromRouteParams() {
      if ($routeParams.page) {
        $scope.currentPage = $routeParams.page;
      }
      updateDisplayedItems();
    }

    $scope.pageChanged = function() {
      //console.log('page changed to ' + $scope.currentPage);
      $location.path('/movie/' + $scope.currentPage);
    };


  }

  /** @ngInject */
  function MovieDetailController($scope, $routeParams) {
    $scope.params = $routeParams;
  }
})();
