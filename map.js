var map = L.map('map').setView([50.4, 30.52], 3);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoicm9tYW4wMSIsImEiOiJja2FjZGlyeTQxZnJhMzZxd2l0d3E1eXFjIn0.nbSZ1mtMKkfd29tl5vFDow'
  }).addTo(map);

async function weather(lat, long) {
  const key = '816244795976363d695ba3d0d36842aa';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
  const result = await response.json();
  console.log(`Погодка в ${result.name}: ${result.weather[0].main, result.weather[0].description} `);
  const weather = result['weather'][0];

  var myIcon = L.icon({
    iconUrl: `http://openweathermap.org/img/w/${weather.icon}.png`,
    iconSize: [50, 50],
    iconAnchor: [25, 25],

    });

  L.marker([lat, long], {
    title: weather.description,
    icon: myIcon
    }).addTo(map);
  }


weather(50.71, -60.005);
weather(49.14, 28);
weather(30.8, 10.97);
weather(10.6, 81.11);
weather(-20.9, 20.26);
weather(11.99, 99.43);
weather(60.2, 90.44);
weather(40.71, -74.005);
weather(44.33, -88.33);
weather(11.99, 3.43);