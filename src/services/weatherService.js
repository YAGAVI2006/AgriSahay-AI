import { WEATHER_DATABASE } from '../data/weatherData';

export const weatherService = {
  getWeatherByDistrict: async (districtName) => {
    // Phase 2: return axios.get(`/api/v1/weather?district=${districtName}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = WEATHER_DATABASE[districtName] || {
          district: districtName || "Ludhiana",
          state: "Punjab",
          temp: 30,
          feelsLike: 33,
          condition: "Partly Cloudy with Good Breeze",
          icon: "⛅",
          humidity: 68,
          windSpeed: "12 km/h N",
          rainProbability: 35,
          uvIndex: 6,
          soilMoisture: "Adequate (64%)",
          alerts: [
            {
              id: 'w-alert-gen',
              severity: "info",
              title: "🌾 Regular Farm Operations Favorable",
              message: "Weather is conducive for weeding, gentle irrigation, and routine crop scouting."
            }
          ],
          forecast7Days: [
            { day: "Today", tempMax: 31, tempMin: 23, condition: "Partly Cloudy", rain: 35, icon: "⛅" },
            { day: "Fri", tempMax: 32, tempMin: 24, condition: "Passing Rain", rain: 45, icon: "🌦️" },
            { day: "Sat", tempMax: 30, tempMin: 22, condition: "Thunderstorms", rain: 65, icon: "⛈️" },
            { day: "Sun", tempMax: 33, tempMin: 24, condition: "Sunny", rain: 15, icon: "☀️" },
            { day: "Mon", tempMax: 34, tempMin: 25, condition: "Clear", rain: 10, icon: "☀️" },
            { day: "Tue", tempMax: 35, tempMin: 26, condition: "Warm", rain: 5, icon: "☀️" },
            { day: "Wed", tempMax: 33, tempMin: 24, condition: "Cloudy", rain: 25, icon: "⛅" }
          ],
          farmingAdvice: [
            "Schedule irrigation in early morning to minimize evapotranspiration losses.",
            "Scout crop undersides for early pest presence.",
            "Maintain clean bunds around the field."
          ]
        };
        resolve(data);
      }, 300);
    });
  }
};
