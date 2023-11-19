document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '46d99cc235a6d26be5df8165a452de39';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    async function getWeather(city){
        try{
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            displayWeather(data);
        }
        catch(error){
            console.error('Error fetching weather data : ',error);
        }
    }

    function displayWeather(data){
        const weatherContainer = document.querySelector('.weather-container');
        weatherContainer.innerHTML = `  <h2>${data.name}, ${data.sys.country}</h2>
                                        <p><b>Temperature:</b> ${data.main.temp}°C</p>
                                        <p><b>Weather:</b> ${data.weather[0].description}</p> `;
    }

    const defaultCity = 'Lucknow';
    getWeather(defaultCity);
});
