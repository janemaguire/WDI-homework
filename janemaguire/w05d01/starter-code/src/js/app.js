// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes

$(() => {
  let $mapDiv = $('#map');
  // console.log(`mapdiv: ${$mapDiv[0]}`);
  let map = new google.maps.Map($mapDiv[0], {
    center: { lat: 51, lng: -0.1 },
    zoom: 14
  });

  navigator.geolocation.getCurrentPosition((position) => {
    let latLng = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    map.panTo(latLng);

    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      draggable: true,
      map
    });

  });

  $.get("http://localhost:3000/api/restaurants").done(data => {
    console.log(data.restaurants);
  });

});
