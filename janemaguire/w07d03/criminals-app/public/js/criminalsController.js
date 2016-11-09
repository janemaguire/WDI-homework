angular.module('criminalsApp')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  
  const criminals = this;
  criminals.all = [];
  criminals.addCriminal = addCriminal;

  criminals.removeCriminal = removeCriminal;
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

  function removeCriminal(id, $index) {
    $http.delete(`/criminals/${id}`)
    .then(() => {
      criminals.all.splice($index, 1);
    });
  }
  getCriminals();
}
