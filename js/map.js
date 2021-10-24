function initMap() {
  var uluru = {lat: -34.5705754, lng: -58.4660388};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    mapTypeControl: false,
    fullscreenControl: false,
    scaleControl: false,
    center: {lat: -34.5704252, lng: -58.4562408}
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}