angular.module('birdsApp')
    .controller('BirdsIndexController', BirdsIndexController);

function BirdsIndexController(){
  const birdsIndex = this;
}

BirdsIndexController.$inject = ['Bird'];
function BirdsIndexController(Bird){
  const birdsIndex = this;

  birdsIndex.all = Bird.query();
}
