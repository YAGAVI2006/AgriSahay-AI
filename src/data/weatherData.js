export const WEATHER_DATABASE = {
  "Karur": {
    district: "Karur",
    state: "Tamil Nadu",
    temp: 33,
    feelsLike: 37,
    condition: "Tropical Warm & Mostly Sunny",
    icon: "☀️",
    humidity: 68,
    windSpeed: "12 km/h SE",
    rainProbability: 25,
    uvIndex: 8,
    soilMoisture: "Optimal (65%)",
    alerts: [
      {
        id: 'w-alert-karur-1',
        severity: "info",
        title: "🌊 Cauvery Canal Water Release Update",
        message: "Mayanur barrage canal discharge is steady. Maintain controlled 3cm water depth in Kuruvai Paddy fields."
      },
      {
        id: 'w-alert-karur-2',
        severity: "warning",
        title: "🍌 High Temperature Advisory for Banana & Sugarcane",
        message: "Afternoon temperature reaching 35°C. Provide early morning drip irrigation to prevent Banana leaf scorching and pseudostem wilting."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 34, tempMin: 25, condition: "Mostly Sunny", rain: 25, icon: "☀️" },
      { day: "Fri", tempMax: 35, tempMin: 26, condition: "Partly Cloudy", rain: 30, icon: "⛅" },
      { day: "Sat", tempMax: 33, tempMin: 24, condition: "Evening Rain", rain: 50, icon: "🌦️" },
      { day: "Sun", tempMax: 32, tempMin: 24, condition: "Scattered Showers", rain: 60, icon: "🌧️" },
      { day: "Mon", tempMax: 34, tempMin: 25, condition: "Sunny", rain: 15, icon: "☀️" },
      { day: "Tue", tempMax: 35, tempMin: 26, condition: "Clear Sky", rain: 10, icon: "☀️" },
      { day: "Wed", tempMax: 34, tempMin: 25, condition: "Warm & Breezy", rain: 20, icon: "🌤️" }
    ],
    farmingAdvice: [
      "Schedule drip irrigation for Banana and Sugarcane between 6:00 AM – 9:00 AM.",
      "Check Groundnut fields in Kulithalai & Manmangalam for Tikka leaf spot post light rains.",
      "Apply Potash (MOP) to Paddy fields during panicle initiation to boost drought resistance."
    ]
  },
  "Tiruchirappalli": {
    district: "Tiruchirappalli",
    state: "Tamil Nadu",
    temp: 34,
    feelsLike: 38,
    condition: "Warm & Sunny",
    icon: "☀️",
    humidity: 65,
    windSpeed: "14 km/h E",
    rainProbability: 20,
    uvIndex: 8,
    soilMoisture: "Adequate (60%)",
    alerts: [],
    forecast7Days: [
      { day: "Today", tempMax: 35, tempMin: 26, condition: "Sunny", rain: 20, icon: "☀️" },
      { day: "Fri", tempMax: 34, tempMin: 25, condition: "Partly Cloudy", rain: 35, icon: "⛅" },
      { day: "Sat", tempMax: 33, tempMin: 24, condition: "Light Rain", rain: 45, icon: "🌦️" },
      { day: "Sun", tempMax: 32, tempMin: 24, condition: "Cloudy", rain: 40, icon: "☁️" },
      { day: "Mon", tempMax: 35, tempMin: 26, condition: "Clear", rain: 10, icon: "☀️" },
      { day: "Tue", tempMax: 36, tempMin: 27, condition: "Hot", rain: 5, icon: "☀️" },
      { day: "Wed", tempMax: 34, tempMin: 25, condition: "Breezy", rain: 15, icon: "🌤️" }
    ],
    farmingAdvice: [
      "Keep banana plants propped up with bamboo poles against wind gusts.",
      "Scout paddy nurseries for thrips infestation."
    ]
  },
  "Namakkal": {
    district: "Namakkal",
    state: "Tamil Nadu",
    temp: 33,
    feelsLike: 36,
    condition: "Partly Cloudy",
    icon: "⛅",
    humidity: 66,
    windSpeed: "11 km/h SE",
    rainProbability: 30,
    uvIndex: 7,
    soilMoisture: "Optimal (63%)",
    alerts: [],
    forecast7Days: [
      { day: "Today", tempMax: 34, tempMin: 25, condition: "Partly Cloudy", rain: 30, icon: "⛅" },
      { day: "Fri", tempMax: 33, tempMin: 24, condition: "Passing Showers", rain: 40, icon: "🌦️" },
      { day: "Sat", tempMax: 32, tempMin: 23, condition: "Light Rain", rain: 50, icon: "🌧️" },
      { day: "Sun", tempMax: 34, tempMin: 25, condition: "Sunny", rain: 15, icon: "☀️" },
      { day: "Mon", tempMax: 35, tempMin: 26, condition: "Clear", rain: 10, icon: "☀️" },
      { day: "Tue", tempMax: 35, tempMin: 26, condition: "Warm", rain: 5, icon: "☀️" },
      { day: "Wed", tempMax: 33, tempMin: 24, condition: "Cloudy", rain: 20, icon: "⛅" }
    ],
    farmingAdvice: [
      "Ensure proper ventilation in poultry & sugarcane intercrops.",
      "Apply bio-fertilizers in groundnut plots."
    ]
  },
  "Dindigul": {
    district: "Dindigul",
    state: "Tamil Nadu",
    temp: 32,
    feelsLike: 35,
    condition: "Pleasant & Breezy",
    icon: "🌤️",
    humidity: 70,
    windSpeed: "13 km/h S",
    rainProbability: 35,
    uvIndex: 7,
    soilMoisture: "Good (68%)",
    alerts: [],
    forecast7Days: [
      { day: "Today", tempMax: 33, tempMin: 24, condition: "Breezy", rain: 35, icon: "🌤️" },
      { day: "Fri", tempMax: 32, tempMin: 23, condition: "Light Drizzle", rain: 45, icon: "🌦️" },
      { day: "Sat", tempMax: 31, tempMin: 22, condition: "Moderate Rain", rain: 60, icon: "🌧️" },
      { day: "Sun", tempMax: 33, tempMin: 24, condition: "Partly Cloudy", rain: 20, icon: "⛅" },
      { day: "Mon", tempMax: 34, tempMin: 25, condition: "Sunny", rain: 10, icon: "☀️" },
      { day: "Tue", tempMax: 34, tempMin: 25, condition: "Clear", rain: 5, icon: "☀️" },
      { day: "Wed", tempMax: 32, tempMin: 23, condition: "Cloudy", rain: 25, icon: "⛅" }
    ],
    farmingAdvice: [
      "Ideal weather for vegetable transplanting on raised beds.",
      "Scout tomato crops for early leaf spot symptoms."
    ]
  }
};

export function getWeatherData(districtName) {
  if (WEATHER_DATABASE[districtName]) {
    return WEATHER_DATABASE[districtName];
  }
  // Default to Karur, Tamil Nadu for any village or unlisted Tamil Nadu location
  return {
    district: districtName || "Karur",
    state: "Tamil Nadu",
    temp: 33,
    feelsLike: 37,
    condition: "Tropical Warm & Mostly Sunny",
    icon: "☀️",
    humidity: 68,
    windSpeed: "12 km/h SE",
    rainProbability: 25,
    uvIndex: 8,
    soilMoisture: "Optimal (65%)",
    alerts: [
      {
        id: 'w-alert-def-1',
        severity: "info",
        title: "🌾 Favorable Conditions for Field Operations in Tamil Nadu",
        message: "Weather in Cauvery basin is conducive for weeding, fertigation, and routine crop scouting."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 34, tempMin: 25, condition: "Mostly Sunny", rain: 25, icon: "☀️" },
      { day: "Fri", tempMax: 35, tempMin: 26, condition: "Partly Cloudy", rain: 30, icon: "⛅" },
      { day: "Sat", tempMax: 33, tempMin: 24, condition: "Evening Rain", rain: 50, icon: "🌦️" },
      { day: "Sun", tempMax: 32, tempMin: 24, condition: "Scattered Showers", rain: 60, icon: "🌧️" },
      { day: "Mon", tempMax: 34, tempMin: 25, condition: "Sunny", rain: 15, icon: "☀️" },
      { day: "Tue", tempMax: 35, tempMin: 26, condition: "Clear Sky", rain: 10, icon: "☀️" },
      { day: "Wed", tempMax: 34, tempMin: 25, condition: "Warm & Breezy", rain: 20, icon: "🌤️" }
    ],
    farmingAdvice: [
      "Schedule drip irrigation for Banana and Sugarcane during early morning.",
      "Check Groundnut fields for leaf spot post light rains.",
      "Apply Potash (MOP) during panicle emergence to enhance drought resilience."
    ]
  };
}
