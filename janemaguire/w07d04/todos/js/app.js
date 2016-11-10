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
      url: '/archive',
      templateUrl: 'archive.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    });
  $urlRouterProvider.otherwise('/');
}
