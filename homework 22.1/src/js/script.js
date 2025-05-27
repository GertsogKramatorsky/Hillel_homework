import "../sass/style.scss";

const inputEl = document.querySelector("input");
const cityButtonEl = document.getElementById("city-button");
const updateButtonEl = document.querySelector(".update");
const weatherWidgetEl = document.querySelector(".weather-widget");

function clearWeatherDisplay() {
    document.querySelector(".date").innerHTML = "";
    document.querySelector(".humidity").innerHTML = "";
    document.querySelector(".pressure").innerHTML = "";
    document.querySelector(".temperature").innerHTML = "";
    document.querySelector(".weather-main").innerHTML = "";
    document.querySelector(".error").innerHTML = "";
}
async function getWeather(city) {
    const apiKey = "3388c1e2cd16a980410ff4c2515e5390";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    clearWeatherDisplay();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.querySelector(".date").innerHTML = new Date().toLocaleString();
        document.querySelector(
            ".humidity"
        ).innerHTML = `Humidity: ${data.main.humidity}`;
        document.querySelector(
            ".pressure"
        ).innerHTML = `Pressure: ${data.main.pressure}`;
        document.querySelector(
            ".temperature"
        ).innerHTML = `Temperature: ${data.main.temp} °C`;
        document.querySelector(
            ".weather-main"
        ).innerHTML = `${data.weather[0].main}`;
    } catch (error) {
        console.error("Помилка отримання погоди:", error);
        document.querySelector(".error").innerHTML =
            "Не вдалося завантажити погоду. Перевірте назву міста.";
    }
}

cityButtonEl.addEventListener("click", () => {
    let city = inputEl.value.trim();
    if (city) {
        getWeather(city);
    }
});

updateButtonEl.addEventListener("click", () => {
    let city = inputEl.value.trim();
    if (city) {
        getWeather(city);
    }
});

inputEl.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const city = inputEl.value.trim();
        if (city) {
            getWeather(city);
        }
    }
});
