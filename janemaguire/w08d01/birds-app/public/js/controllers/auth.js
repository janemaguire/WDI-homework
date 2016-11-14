angular.module('birdsApp')
    .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$auth', '$state'];
function RegisterController($auth, $state) {
  const register = this;

  register.user = {};

}
