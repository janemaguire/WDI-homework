angular.module('birdsApp')
    .controller('RegisterController', RegisterController)
    .controller('LoginController', LoginController);

RegisterController.$inject = ['$auth', '$state'];
function RegisterController($auth, $state) {
  const register = this;

  register.user = {};

  function submit() {
    $auth.signup(register.user)
    .then(() => {
      $state.go('login');
    });
  }
  register.submit = submit;
}

LoginController.$inject = ['$auth', '$state'];
function LoginController($auth, $state) {
  const login = this;

  function submit() {
    $auth.login(login.credentials)
      .then(() => {
        $state.go('birdsIndex');
      });
  }
  function authenticate(service) {
    $auth.authenticate(service, () => {
      $state.go('filmsIndex');
    });
  }

  login.authenticate = authenticate;
  login.submit = submit;
}
