import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white/20 text-white p-4 sm:p-5 md:p-6 lg:p-8 rounded shadow-md text-center w-60 sm:w-64 md:w-72 lg:w-80">
      <h2 className="text-2xl font-semibold">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-xl">{weather.main.temp} °C</p>
      <p>{weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;