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
    })
    .state('birdsNew', {
      url: '/birds/new',
      templateUrl: '/templates/birdsNew.html',
      controller: 'BirdsNewController as birdsNew'
    })
    .state('birdsShow', {
      url: '/birds/:id',
      templateUrl: '/templates/birdsShow.html',
      controller: 'BirdsShowController as birdsShow'
    })
    .state('birdsEdit', {
      url: '/birds/:id/edit',
      templateUrl: '/templates/birdsEdit.html',
      controller: 'BirdsEditController as birdsEdit'
    });

  $urlRouterProvider.otherwise('/birds');
}
