angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  const criminals = this;
  criminals.all = [];
  criminals.addCriminal = addCriminal;

  function addCriminal() {
    $http.post('criminals', criminals.newCriminal)
      .then((res) => {
        criminals.all.push(res.data);
        // criminals.newCriminal = {};
        console.log(criminals.newCriminal);
      });
  }

  function getCriminals() {
    $http.get('/criminals')
      .then((res) => {
        criminals.all = res.data;
      });
  }
  getCriminals();
}
