document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8d48548c2fb6da26574b59d71cf64758';
    const cityInput = document.getElementById('city-input');    
    let searchButton = document.getElementById('search-button');
    const weatherInfoElement = document.getElementById('weather-info');
    const fetchWeatherData = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp - 273.15); 
                const description = data.weather[0].description;
                const cityName = data.name;
                const humidity = data.main.humidity;
                const pressure = data.main.pressure;
                const cloudCover = data.clouds.all;
                const dewPoint = data.main.temp - (data.main.humidity / 100) * 2.5;
                const maxUVIndex = data.uvi;

                const weatherHTML = `
                    
                    <p style="font-family: sans-serif;font-weight: bold">CURRENT WEATHER IN ${cityName.toUpperCase()}</p><br>
                    <p>Temperature: ${temperature}°C, ${description}</p><br>
                    <p>Humidity: ${humidity}%</p><br>
                    <p>Pressure: ${pressure} hPa</p><br>
                    <p>Cloud Cover: ${cloudCover}%</p><br>
                    <p>Dew Point: ${dewPoint.toFixed(2)}°C</p><br>
                    <p>Max UV Index: ${maxUVIndex}</p><br>
                `;
                weatherInfoElement.style.borderRadius = "5px";
                weatherInfoElement.style.padding = "13px";
                weatherInfoElement.style.textAlign = "left";
                weatherInfoElement.style.marginLeft = "30px";
                weatherInfoElement.style.width = "460px";
                weatherInfoElement.style.backgroundColor = "#EEEEEE";
                weatherInfoElement.innerHTML = weatherHTML;
                
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfoElement.innerHTML = '<p>Error fetching weather data</p>';
            });
    };

    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city !== '') {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name');
        }
    });
});