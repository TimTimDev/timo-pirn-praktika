// #1

var lat;
var lng;
var date = "today";

// Function that fetches sunrise/sunset data from API
function fetchInfo(){
    const url = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=' + date;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var sunrise = data.results.sunrise;
            var sunset = data.results.sunset;
            var dayLength = data.results.day_length;
            sunriseSpan.innerHTML = "Sunrise: " + sunrise;
            sunsetSpan.innerHTML ="Sunset: " + sunset;
            dayLengthSpan.innerHTML ="Day Length: " + dayLength;
        });
}

function getInputValue(){
    lat = document.getElementById("latitude").value;
    lng = document.getElementById("longitude").value;
    date = document.getElementById("date").value;
    mymap.panTo(new L.LatLng(lat, lng));
    console.log(lat, lng, date);
    fetchInfo();
}

// #2

var displayArea = document.getElementById("display-time");
var sunriseSpan = document.getElementById("sunrise");
var sunsetSpan = document.getElementById("sunset");
var dayLengthSpan = document.getElementById("day-length");


// #3

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmFuYW5uZXJzIiwiYSI6ImNrbnEzczI3YzFzdGQydnBlYXRwb29xcjkifQ.hd6Im2DCxQmw63KTkxQTqw',
    crs: L.CRS.EPSG4326,
}).addTo(mymap);

var popup = L.popup();

//Map onclick function which displays coordinates on map and also shows sunrise/sunset times
mymap.on('click', function(e){
    popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);

    var coord = e.latlng;
    lat = coord.lat;
    lng = coord.lng;
    console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);

    fetchInfo();
    });
