angular
  .module('birdsApp', ['ngResource', 'ui.router'])
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('birdsIndex', {
    url: '/birds',
    templateUrl: '/templates/birdsIndex.html',
    controller: 'BirdsIndexController as birdsIndex'
  });

  $urlRouterProvider.otherwise('/birds');
}
