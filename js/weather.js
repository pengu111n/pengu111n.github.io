const API_KEY = "dcd620b9970b14c89eba45a370f0598b";

function onGeoOk(Position) {
  const lat = Position.coords.latitude;
  const lon = Position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main, data.main.temp);
      const temp = document.querySelector(".temp");
      const city = document.querySelector(".city");
      /***weather.innerText = data.weather[0].main;***/
      temp.innerText = `${Math.round(data.main.temp)}°`;
      city.innerText = data.name;
      const weatherText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
