angular
  .module('birdsApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);

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
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });

  $urlRouterProvider.otherwise('/birds');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';

  $authProvider.facebook({
    clientId: '592951794244851'
  });
}
