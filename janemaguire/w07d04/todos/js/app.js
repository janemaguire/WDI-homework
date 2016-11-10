angular
	.module('todoApp', ['ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider','$urlRouterProvider'];

function MainRouter($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('archive', {
      url: '/',
      templateUrl: 'archive.html'
    });
  $urlRouterProvider.otherwise('/');
}
