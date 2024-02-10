
const apiKey = '8d48548c2fb6da26574b59d71cf64758';
const cities = [
    { name: 'Andhra Pradesh'},
    { name: 'Arunachal Pradesh'},
    { name: 'Assam'},
    { name: 'Bihar'},
    { name: 'Chandigarh'},
    { name: 'Chhattisgarh'},
    { name: 'Delhi'},
    { name: 'Goa'},
    { name: 'Haryana'},
    { name: 'Himachal Pradesh'},
    { name: 'Jharkhand'},
    { name: 'Karnataka'},
    { name: 'Kerala'},
    { name: 'Madhya Pradesh'},
    { name: 'Maharashtra'},
    { name: 'Meghalaya'},
    { name: 'Nagaland'},
    { name: 'Odisha'},
    { name: 'Punjab'},
    { name: 'Rajasthan'},
    { name: 'Sikkim'},
    { name: 'Tamil Nadu'},
    { name: 'Tripura'},
    { name: 'Uttar Pradesh'},
    { name: 'Uttarakhand'},
    { name: 'West Bengal'}
];
async function fetchTemperature(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.main.temp;
}


async function populateTable() {
const dataBody = document.getElementById('dataBody');
const cityInput = document.getElementById('city-input');


if (cityInput.value.trim() === '') {
for (let i = 0; i < cities.length; i += 2) {
const city1 = cities[i];
const city2 = cities[i + 1];
const temperature1 = await fetchTemperature(city1);
const temperature2 = await fetchTemperature(city2);

const row = document.createElement('tr');
row.innerHTML = `<td>${city1.name}</td><td>${(temperature1 - 273.15).toFixed(2)}°C</td><td>${city2.name}</td><td>${(temperature2 - 273.15).toFixed(2)}°C</td>`;
dataBody.appendChild(row);
}
}
}


populateTable();