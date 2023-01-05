const API_KEY = "930c9f8d035adb6eaf38cd659c750b69"
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("위치를 찾을 수 없네요. 날씨 정보를 알려드릴 수 없어요. 😥")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)