import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeatherData } from './utils/api';
import weatherImage from './assets/weather.jpg'; 
import { FiRefreshCw } from 'react-icons/fi'; // Import Refresh Icon

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentCities, setRecentCities] = useState([]);

  // Search or Refresh Weather Data
  const handleSearch = async (cityName) => {
    setCity(cityName);
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherData(cityName);
      setWeather(data);
      setRecentCities((prev) => {
        const updated = [cityName, ...prev.filter((c) => c.toLowerCase() !== cityName.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center font-poppins flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${weatherImage})` }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen backdrop-blur-sm bg-black/50 p-4">

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 text-center">
         Weather Dashboard
       </h1>
        <SearchBar onSearch={handleSearch} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {weather && (
          <>
            <WeatherCard weather={weather} />

            {/* Refresh Button */}
            <button
              onClick={() => handleSearch(weather.name)}
              className="flex items-center gap-2 mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FiRefreshCw /> Refresh
            </button>
          </>
        )}

        {/* Recent Searches */}
        <div className="w-full max-w-md mt-10 bg-black/60 p-5 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Recent Searches:
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {recentCities.map((city, idx) => (
              <button
                key={idx}
                onClick={() => handleSearch(city)}
                className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-300"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
