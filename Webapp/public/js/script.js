var x = document.getElementById("demo");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    document.getElementById("demo").value = "Mnit Incubation Center, Jaipur"
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
}

function showPosition(position) {
  x.value = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


