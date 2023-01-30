// Creating an Array for saved Locations
const saveBtn = document.querySelector('.saveBtn');
const searchBtn = document.querySelector('.searchBtn');

// Map function
function initMap() {

    // Base map location and settings
    var location = {
        lat: 40.000, 
        lng: -79.000
    }

    var options = {
        center: location,
        zoom: 9
    }

    var geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

    // Geolocation
    if(navigator.geolocation) {
        console.log('geolocation is here!');

        navigator.geolocation.getCurrentPosition((loc) => {
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude;

            map = new google.maps.Map(document.getElementById('map'), options);
        },

        // Throws error if user denies geolocation
        (err) => {
            console.log('User clicked no')

            map = new google.maps.Map(document.getElementById('map'), options);
        });

        // Throws error if geolocation not supported
    } else {
        console.log('geolocation is not supported');
        map = new google.maps.Map(document.getElementById('map'), options);

    };

    
};

initMap();

// Button Functions

// Saves user data to cards
saveBtn.addEventListener('click', function() {
    console.log('ive been clicked')

    var addressInput = document.getElementById('addressInput').value;
    var locationName = document.getElementById('locationName').value;
    var locationType = document.getElementById('locationType').value;


    document.getElementById('savedContainer').innerHTML += `
    <div class="card">
    <h2>${locationName}</h2>
    <div class="card-body">
      <h4>${addressInput}</h4>
      <p>${locationType}</p>
    </div>
  </div>`

  geocodeAddress(geocoder, map, infowindow);
}, { passive: false });

searchBtn.addEventListener('click', function() {
    geocodeAddress(geocoder, map, infowindow);
});

// Address Geocoder Requirements
const geocoder = new google.maps.Geocoder();
const infowindow = new google.maps.InfoWindow();

// Address to Coords function
function geocodeAddress(geocoder, map, infowindow) {
    const addressInput = document.getElementById("addressInput").value;
  
    if (!addressInput) {
        console.log('Please put in an address!');
    } else {
        geocoder
      .geocode({ address: addressInput })
      .then(({ results }) => {
        if (results[0]) {
          map.setZoom(11);
          map.setCenter(results[0].geometry.location);
  
          const marker = new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
  
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
        })
        .catch((e) => window.alert("Geocoder failed due to: " + e));
    };
  }