document.addEventListener("DOMContentLoaded", function (event) {
    getWeather("London");
});

function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=30de99d12bc5906411ce85c94ebcdae0").then(response => response.json()).then(weather => {
            console.log(weather);
            document.querySelector(".city").innerText = weather.name;
            document.querySelector(".tempValue").innerHTML = Math.round(weather.main.temp);
            document.querySelector(".hi-low").innerHTML = Math.round(weather.main.temp_max) + "/" + Math.round(weather.main.temp_min);

            document.querySelector(".weather").innerHTML = weather.weather[0].description;
        }).catch(err => console.log(err));

}