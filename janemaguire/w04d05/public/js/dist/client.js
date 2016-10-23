'use strict';

console.log("JS loaded!");

$(function () {
  getSongs();

  $('form').on('submit', createSong);
});

var addSong = function addSong(song) {
  $('#songs').prepend('<li><strong>' + song.name + '</strong> <br> Written by <em>' + song.writers + '</em> <br> Highest chart position: ' + song.chart + '</li>');
};

var getSongs = function getSongs() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/songs"
  }).done(function (data) {
    console.log(data);
    $.each(data, function (index, song) {
      addSong(song);
    });
  });
};

var createSong = function createSong(e) {
  e.preventDefault();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:8000/songs',
    data: $('form').serialize()
  }).done(function (data) {
    addSong(data);
  });
};