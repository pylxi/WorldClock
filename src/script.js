// Define an array of cities and their corresponding timezones
let cities = [
  ["los-angeles-date", "los-angeles-time", "America/Los_Angeles"],
  ["paris-date", "paris-time", "Europe/Paris"],
  ["tokyo-date", "tokyo-time", "Asia/Tokyo"],
  ["sydney-date", "sydney-time", "Australia/Sydney"],
];

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

updateAllTimes();

setInterval(updateAllTimes, 1000);
