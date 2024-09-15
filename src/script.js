// Define an array of cities and their corresponding timezones
let cities = [
  ["los-angeles-date", "los-angeles-time", "America/Los_Angeles"],
  ["paris-date", "paris-time", "Europe/Paris"],
  ["tokyo-date", "tokyo-time", "Asia/Tokyo"],
  ["sydney-date", "sydney-time", "Australia/Sydney"],
];

let citiesContainer = document.querySelector("#cities");

let selectElement = document.querySelector("#timezone");

// Function to update time for a specific city
function updateTime(city) {
  let cityDate = city[0];
  let cityTime = city[1]; // City name (for selecting the HTML element)
  let cityTimezone = city[2]; // Timezone for moment.js

  // Select the HTML element and update its content with the current time
  document.querySelector(`#${cityDate}`).innerHTML = moment()
    .tz(cityTimezone)
    .format("LL");
  document.querySelector(`#${cityTime}`).innerHTML = moment()
    .tz(cityTimezone)
    .format("LTS");
}

// Function to update time for all cities in a loop
function updateAllTimes() {
  // Standard for loop to go through each city in the cities array
  for (let i = 0; i < cities.length; i++) {
    console.log(`Updating time for ${cities[i][0]}`); // Debugging statement
    updateTime(cities[i]); // Call updateTime for each city
  }
}

function updateSelectedCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current-location") {
    // Get the guessed timezone from moment.js
    let timezone = moment.tz.guess();
    // Extract the city name from the guessed timezone
    let cityName = timezone.split("/")[1].replace("_", " ");

    citiesContainer.innerHTML = `
      <div class="city" id="current-location">
            <div class="info-left">
              <h2>${cityName}</h2>
              <div class="date" id="current-location-date">August 15th 2022</div>
            </div>

            <div class="time" id="current-location-time">1:48:15 AM</div>
      </div>
    `;
    updateTime(["current-location-date", "current-location-time", timezone]);
  }

  if (cityTimeZone === "london") {
    citiesContainer.innerHTML = `
      <div class="city" id="london">
            <div class="info-left">
              <h2>London 🇬🇧</h2>
              <div class="date" id="london-date">August 15th 2022</div>
            </div>

            <div class="time" id="london-time">1:48:15 AM</div>
      </div>
    `;

    updateTime(["london-date", "london-time", "Europe/London"]);
  }

  if (cityTimeZone === "new-york") {
    citiesContainer.innerHTML = `
      <div class="city" id="new-york">
            <div class="info-left">
              <h2>New York 🇺🇸</h2>
              <div class="date" id="new-york-date">August 15th 2022</div>
            </div>

            <div class="time" id="new-york-time">1:48:15 AM</div>
      </div>
    `;
    updateTime(["new-york-date", "new-york-time", "America/New_York"]);
  }
}

updateAllTimes();

setInterval(updateAllTimes, 1000);

selectElement.addEventListener("change", updateSelectedCity);
