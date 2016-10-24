"use strict";

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes

$(function () {
  var $mapDiv = $('#map');
  // console.log(`mapdiv: ${$mapDiv[0]}`);
  var map = new google.maps.Map($mapDiv[0], {
    center: { lat: 51, lng: -0.1 },
    zoom: 14
  });

  navigator.geolocation.getCurrentPosition(function (position) {
    var latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    map.panTo(latLng);

    var marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map: map
    });
  });

  $.get("http://localhost:3000/api/restaurants").done(function (data) {
    console.log(data.restaurants);
  });
});