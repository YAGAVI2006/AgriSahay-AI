export const WEATHER_BY_LOCATION = {
  "Ludhiana": {
    district: "Ludhiana",
    state: "Punjab",
    temp: 31,
    feelsLike: 34,
    condition: "Partly Cloudy with Scattered Showers",
    icon: "⛅",
    humidity: 72,
    windSpeed: "14 km/h NW",
    rainProbability: 65,
    uvIndex: 6,
    soilMoisture: "Optimum (68%)",
    alerts: [
      {
        severity: "warning",
        title: "⛈️ High Rainfall Alert in Next 36 Hours",
        message: "Heavy rain (45-60mm) expected on Saturday. Postpone urea/fertilizer top-dressing and clear drainage ditches in Paddy/Wheat fields immediately."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 32, tempMin: 24, condition: "Scattered Rain", rain: 65, icon: "🌧️" },
      { day: "Fri", tempMax: 30, tempMin: 23, condition: "Heavy Thundershowers", rain: 80, icon: "⛈️" },
      { day: "Sat", tempMax: 29, tempMin: 22, condition: "Moderate Rain", rain: 70, icon: "🌧️" },
      { day: "Sun", tempMax: 33, tempMin: 24, condition: "Partly Cloudy", rain: 20, icon: "⛅" },
      { day: "Mon", tempMax: 34, tempMin: 25, condition: "Sunny", rain: 10, icon: "☀️" },
      { day: "Tue", tempMax: 35, tempMin: 26, condition: "Clear Sky", rain: 5, icon: "☀️" },
      { day: "Wed", tempMax: 33, tempMin: 25, condition: "Humid & Breezy", rain: 30, icon: "🌤️" }
    ],
    farmingAdvice: [
      "Keep paddy field water level at 2-3 cm; avoid deep submergence before heavy rain.",
      "Check cotton crop for whitefly infestation post-humidity rise.",
      "Do not apply pesticide spray when wind speed exceeds 15 km/h."
    ]
  },
  "Varanasi": {
    district: "Varanasi",
    state: "Uttar Pradesh",
    temp: 33,
    feelsLike: 38,
    condition: "Humid & Mostly Cloudy",
    icon: "☁️",
    humidity: 78,
    windSpeed: "10 km/h E",
    rainProbability: 40,
    uvIndex: 7,
    soilMoisture: "High (74%)",
    alerts: [
      {
        severity: "info",
        title: "🌡️ High Humidity Advisory",
        message: "Relative humidity touching 78%. Favorable environment for Paddy Bacterial Blight and Tomato Early Blight. Inspect lower foliage."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 34, tempMin: 26, condition: "Passing Showers", rain: 40, icon: "🌦️" },
      { day: "Fri", tempMax: 33, tempMin: 25, condition: "Thunderstorms", rain: 75, icon: "⛈️" },
      { day: "Sat", tempMax: 31, tempMin: 24, condition: "Moderate Rain", rain: 60, icon: "🌧️" },
      { day: "Sun", tempMax: 32, tempMin: 25, condition: "Cloudy", rain: 30, icon: "☁️" },
      { day: "Mon", tempMax: 35, tempMin: 27, condition: "Sunny", rain: 15, icon: "☀️" },
      { day: "Tue", tempMax: 36, tempMin: 28, condition: "Hot & Humid", rain: 10, icon: "☀️" },
      { day: "Wed", tempMax: 34, tempMin: 26, condition: "Light Rain", rain: 35, icon: "🌦️" }
    ],
    farmingAdvice: [
      "Ensure proper field channel drainage to prevent water stagnation in vegetable beds.",
      "Apply Trichoderma viride bio-fungicide in soil around tomato and vegetable root zones.",
      "Monitor sugarcane crop for top borer pest."
    ]
  },
  "Nashik": {
    district: "Nashik",
    state: "Maharashtra",
    temp: 28,
    feelsLike: 29,
    condition: "Light Drizzle & Pleasant",
    icon: "🌦️",
    humidity: 82,
    windSpeed: "18 km/h SW",
    rainProbability: 55,
    uvIndex: 5,
    soilMoisture: "Optimal (70%)",
    alerts: [
      {
        severity: "warning",
        title: "🍇 Grape & Tomato Downy Mildew Alert",
        message: "High leaf wetness duration over 8 hours increases downy mildew and leaf spot risk. Apply protective bio-copper spray."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 28, tempMin: 21, condition: "Light Drizzle", rain: 55, icon: "🌦️" },
      { day: "Fri", tempMax: 27, tempMin: 20, condition: "Intermittent Rain", rain: 65, icon: "🌧️" },
      { day: "Sat", tempMax: 28, tempMin: 21, condition: "Overcast", rain: 40, icon: "☁️" },
      { day: "Sun", tempMax: 29, tempMin: 22, condition: "Breaks of Sun", rain: 20, icon: "⛅" },
      { day: "Mon", tempMax: 30, tempMin: 22, condition: "Partly Cloudy", rain: 15, icon: "🌤️" },
      { day: "Tue", tempMax: 31, tempMin: 23, condition: "Sunny", rain: 5, icon: "☀️" },
      { day: "Wed", tempMax: 29, tempMin: 22, condition: "Cloudy", rain: 30, icon: "☁️" }
    ],
    farmingAdvice: [
      "Prune extra foliage in onion and grape vineyards for improved aeration.",
      "Harvest mature tomatoes early to avoid post-rain fruit cracking.",
      "Ensure drip lines are flushed to clear silt buildup."
    ]
  },
  "Guntur": {
    district: "Guntur",
    state: "Andhra Pradesh",
    temp: 34,
    feelsLike: 40,
    condition: "Warm & Humid",
    icon: "☀️",
    humidity: 75,
    windSpeed: "12 km/h SE",
    rainProbability: 25,
    uvIndex: 8,
    soilMoisture: "Moderate (55%)",
    alerts: [
      {
        severity: "info",
        title: "🌶️ Chilli & Paddy Thrips Alert",
        message: "Rising temperatures combined with moderate humidity favor thrips and mite population on chilli and paddy. Spray neem seed extract 5%."
      }
    ],
    forecast7Days: [
      { day: "Today", tempMax: 35, tempMin: 27, condition: "Partly Sunny", rain: 25, icon: "🌤️" },
      { day: "Fri", tempMax: 34, tempMin: 26, condition: "Evening Rain", rain: 45, icon: "🌦️" },
      { day: "Sat", tempMax: 33, tempMin: 26, condition: "Scattered Rain", rain: 50, icon: "🌧️" },
      { day: "Sun", tempMax: 35, tempMin: 27, condition: "Sunny", rain: 10, icon: "☀️" },
      { day: "Mon", tempMax: 36, tempMin: 28, condition: "Hot", rain: 5, icon: "☀️" },
      { day: "Tue", tempMax: 36, tempMin: 28, condition: "Humid & Clear", rain: 10, icon: "☀️" },
      { day: "Wed", tempMax: 35, tempMin: 27, condition: "Cloudy", rain: 20, icon: "⛅" }
    ],
    farmingAdvice: [
      "Provide light irrigation to chilli crops during early morning hours.",
      "Incorporate green manure crops like Sunnhemp/Daincha to boost soil nitrogen.",
      "Monitor cotton fields for bollworm moth traps."
    ]
  }
};

export function getWeatherData(districtName) {
  if (WEATHER_BY_LOCATION[districtName]) {
    return WEATHER_BY_LOCATION[districtName];
  }
  // Default fallback for any custom village/district
  return {
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
}
