angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider){
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController',
          resolve: {
            user: function ($routeParams, UserService) {
              return UserService.getUser($routeParams.id);
            }
          }
        });
    });