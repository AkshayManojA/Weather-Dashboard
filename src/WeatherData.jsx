import React from 'react'

const WeatherData = ({data}) => {
    console.log(data)
  return (
   
    <div className="weather-result weather-card">
      <h2 id="cityName"></h2>
      <p>Temperature: <span id="temperature">{(data.main.temp).toFixed(2)}</span>°C</p>

      <p>Weather: <span id="weather">{data.weather[0].description}</span></p>

      <p>Humidity: <span id="humidity">{data.main.humidity}</span>%</p>

      <p>Wind Speed: <span id="wind">{data.wind.speed}</span> m/s</p>
    </div>
  )
}

export default WeatherData