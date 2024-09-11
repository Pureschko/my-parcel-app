import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css

const WBS = [52.457131, 13.54007]; // WBS coordinates
const map = Leaflet.map('map').setView(WBS, 13); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates

Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map
// My locations
const myLocations = [
  {
    name: 'WBS CODING SCHOOL',
    location: [52.457131, 13.54007],
    description: 'The best coding school in the world'
  },
  {
    name: 'Odessa',
    location: [46.584355819224164, 30.799610539493692],
    description: 'The best city on earth, but a little dirty'
  },
  {
    name: 'Essen',
    location: [51.45088214640804, 7.0874418850429635],
    description: 'The most famous gate in Berlin'
  },
  {
    name: 'Bucurecti',
    location: [44.43859804906488, 26.10652216988957],
    description: 'My friends live here'
  }
];
// Add markers to the map with a popup
myLocations.forEach(location => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);