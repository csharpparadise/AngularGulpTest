(function() {
  'use strict';

  angular
    .module('gulpMdb')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $interval) {
    var maximum = 100;
    $scope.labels = [];
    $scope.series = ['Aktuelle Aufträge', 'in Bearbeitung', 'gesperrt'];
    $scope.data = [
      [], [], []
    ];
    $scope.options = {
      animation: false,
      showScale: true,
      scaleSteps: 10,
      showTooltips: false,
      pointDot: false,
      datasetStrokeWidth: 1.5,
      datasetFill: false, scaleShowVerticalLines: false
    };

    function getRandomValue(data) {
      var l = data.length,
        previous = l ? data[l - 1] : 50;
      var y = previous + Math.random() * 10 - 5;
      return y < 0 ? 0 : y > 100 ? 100 : y;
    }

    // Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function() {
      getLiveChartData(0, true);
      getLiveChartData(1);
      getLiveChartData(2);
    }, 40);

    function getLiveChartData(index, withLabels) {
      if ($scope.data[index].length) {
         if (withLabels) $scope.labels = $scope.labels.slice(1);
        $scope.data[index] = $scope.data[index].slice(1);
      }

      while ($scope.data[index].length < maximum) {
        if (withLabels) $scope.labels.push('');
        $scope.data[index].push(getRandomValue($scope.data[index]));
      }
    }

  }
})();
