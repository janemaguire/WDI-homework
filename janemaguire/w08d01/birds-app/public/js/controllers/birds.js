angular.module('birdsApp')
    .controller('BirdsIndexController', BirdsIndexController)
    .controller('BirdsNewController', BirdsNewController)
    .controller('BirdsShowController', BirdsShowController)
    .controller('BirdsEditController', BirdsEditController);

BirdsIndexController.$inject = ['Bird'];
function BirdsIndexController(Bird){
  const birdsIndex = this;

  birdsIndex.all = Bird.query();
}

BirdsNewController.$inject = ['Bird', '$state'];
function BirdsNewController(Bird, $state) {
  const birdsNew = this;
  birdsNew.bird = {};

  function createBird() {
    Bird.save(birdsNew.bird, () => {
      $state.go('birdsIndex');
    });

  }
  birdsNew.create = createBird;
}

BirdsShowController.$inject = ['Bird', '$state'];
function BirdsShowController(Bird, $state) {
  const birdsShow = this;

  birdsShow.bird = Bird.get($state.params);

  function deleteBird() {
    birdsShow.bird.$remove(() => {
      $state.go('birdsIndex');
    });
  }

  birdsShow.delete = deleteBird;
}

BirdsEditController.$inject = ['Bird', '$state'];
function BirdsEditController(Bird, $state) {
  const birdsEdit = this;

  birdsEdit.bird = Bird.get($state.params);

  function updateBird() {
    birdsEdit.bird.$update(() => {
      $state.go('birdsShow', $state.params);
    });
  }
  birdsEdit.update = updateBird;
}
