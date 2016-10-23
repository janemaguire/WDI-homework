"use strict";

console.log("JS loaded!");

$(function () {

  var getSongs = function getSongs() {
    $.ajax({
      method: 'GET',
      url: "http://localhost:8000/songs"
    }).done(function (data) {
      console.log(data);
    });
  };

  getSongs();
});