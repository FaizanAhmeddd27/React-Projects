import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const fetchData = async () => {
        if (!city.trim()) {
            setError("Please enter a city name before fetching data.");
            return;
        }

        const apiKey = "a5270da910d950a7b6e28a46344a6b4b";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            let response = await fetch(url);
            let data = await response.json();
            
            

            if (data.cod === "401") {
                setError("Invalid API key! Please check your key.");
            } else if (data.cod === "404") {
                setError("City not found. Please enter a valid city name.");
            } else {
                setWeather(data);
                setError(''); 
            }
        } catch (error) {
            setError("Error fetching data. Please try again later.");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            fetchData(); 
        }
    };
    

    return (
        <div className='weather-container'>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={handleCityChange} 
                placeholder='Enter City Name'
                onKeyDown={handleKeyDown}
            />
            <button onClick={fetchData}>Get Weather</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
