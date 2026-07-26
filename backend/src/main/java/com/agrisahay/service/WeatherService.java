package com.agrisahay.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WeatherService {

    public Map<String, Object> getWeatherByDistrict(String district) {
        String distName = (district == null || district.isBlank()) ? "Karur" : district;

        Map<String, Object> data = new HashMap<>();
        data.put("district", distName);
        data.put("temp", 33);
        data.put("condition", "Tropical Warm & Sunny");
        data.put("humidity", 68);
        data.put("windSpeedKmH", 14);
        data.put("uvIndex", "8 (High)");
        data.put("icon", "☀️");

        List<Map<String, Object>> forecast = new ArrayList<>();
        String[] days = {"Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};
        int[] temps = {33, 34, 32, 30, 31, 33, 34};
        int[] rains = {15, 20, 65, 80, 40, 10, 5};

        for (int i = 0; i < days.length; i++) {
            Map<String, Object> day = new HashMap<>();
            day.put("day", days[i]);
            day.put("tempMax", temps[i]);
            day.put("rainChancePercent", rains[i]);
            day.put("icon", rains[i] > 50 ? "🌧️" : "☀️");
            forecast.add(day);
        }

        data.put("forecast7Days", forecast);
        data.put("advisory", "Moderate humidity in " + distName + ". Delay heavy paddy nitrogen top dressing if rain occurs on Wed.");

        return data;
    }
}
