import axios from 'axios';

const API_KEY = '44721058ab128396df1e2656f81bf161';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
