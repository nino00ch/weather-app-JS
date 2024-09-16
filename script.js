// function getWeather() {
//   const apiKey = "08afd23f1adf05e42efcb8028015cfb4";
//   const city = documents.getElementById("city").value;
// }
// let valueSearch = document.getElementById("valueSearch");
// let city = document.getElementsByClassName("city");
// let temp = document.getElementsByClassName("temp");
// let description = document.querySelector("description");
// let humidity = document.getElementsByClassName("humidity");
// let wind = document.getElementsByClassName("wind");
// let search = document.querySelector("search");
// search.addEventListener("valueSearch"(event)=> {
//     event.parentDefault();
//     if
// });
const apiKey = "08afd23f1adf05e42efcb8028015cfb4";

const searchButton = document.querySelector("button");
const searchInput = document.getElementById("valueSearch");
const weatherIcon = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const descriptionElement = document.querySelector(".description p");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

// Function to fetch weather data
function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update weather details on the page
      updateWeather(data);
    })
    .catch((error) => {
      alert("City not found. Please try again.");
      console.error("Error:", error);
    });
}

// Function to update the UI with the fetched weather data
function updateWeather(data) {
  if (data.cod === 200) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // Update weather details
    cityElement.textContent = name;
    tempElement.textContent = `${Math.round(temp)}°C`;
    descriptionElement.textContent = description;
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = `${speed} km/h`;

    // Update weather icon
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  } else {
    alert("Weather data not available.");
  }
}

// Event listener for the search button
searchButton.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});
