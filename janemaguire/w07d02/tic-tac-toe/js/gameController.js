angular.module('TicTacToe')
  .controller('GameController', GameController);

function GameController() {
  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];

  function mrClick($index) {
    this.cells[$index] = 'X';
  }

  this.mrClick = mrClick;
}
