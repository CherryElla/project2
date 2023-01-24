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

    // Uses Google Place ID for search bar
    autocomplete = new google.map.places.Autocomplete(document.getElementById('searchInput'), 
    {   
        // Restrictions
        componentRestrictions: {'country': ['us']},
        fields: ["geometry", "name"],
        types: ['establishment']
    })

    // Listener for search bar
    google.maps.event.addListener(autocomplete, "place_changed", function() {

        // Connects to map
        const place = autocomplete.getPlace();
        new google.maps.Marker({
            position: place.geometry.location,
            title: place.name,
            map: map
        })
    })
};

initMap();