var map = L.map('map').setView([50.4, 30.52], 6);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoidHNjaGVybnlzaCIsImEiOiJja3E2bzUwczQwamI2MnVtbXI1aHV1YXhkIn0.6qD6XkfJTzKQHLy34ZSiAw'
  }).addTo(map);

async function weather(lat, long) {
  const key = '816244795976363d695ba3d0d36842aa';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
  const result = await response.json();
  console.log(`Погодка в ${result.name}: ${result.weather[0].main, result.weather[0].description} `);
  const weather = result['weather'][0];

  var myIcon = L.icon({
    iconUrl: `http://openweathermap.org/img/w/${weather.icon}.png`,
    iconSize: [100, 100],
    iconAnchor: [25, 25],

    });

  L.marker([lat, long], {
    title: weather.description,
    icon: myIcon
    }).addTo(map);
  }


weather(52.31, 13.24);
weather(48.51, 2.20);
weather(49.13, 28.28);
weather(53.53, 27.34);
weather(52.13, 21);
weather(44.25, 26.06);
weather(47.29, 19.02);
weather(50.27, 30.31);
weather(55.45, 37.36);
weather(48.12, 16.22);
weather(41.53, 12.30);