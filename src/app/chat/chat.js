(function() {
  'use strict';

  angular.module('gulpMdb')
    .config(function(signalrProvider) {
      signalrProvider.setTransports(['webSockets', 'serverSentEvents']);
    });

  angular
    .module('gulpMdb')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController($scope, signalr) {

    var connection = signalr.createConnection('chatHub');
    //var connection = hub.connection;
    connection.url = 'http://dashboarddata.azurewebsites.net/signalr';

    var startConnection = function() {

      signalr.receive(connection, 'hello', function(data) {
        console.log(data);
      });

      signalr.receive(connection, 'send', function(ts, user, msg) {
        console.log(msg);
      });

      signalr.startHubConnection(connection); //Start the connection
    };
    startConnection();

    $scope.join = function(){
      signalr.send(connection, 'hello', {username: 'John Doe'});
    };

  }
})();
