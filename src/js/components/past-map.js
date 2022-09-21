const contactMap = document.getElementById("map_canvas");

function initialize() {
  let myLatlng = new google.maps.LatLng(-34.397, 150.644);
  let myOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  let map = new google.maps.Map(contactMap, myOptions);
}

initialize();
