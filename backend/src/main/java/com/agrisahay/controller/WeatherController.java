package com.agrisahay.controller;

import com.agrisahay.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/weather")
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getWeather(@RequestParam(required = false, defaultValue = "Karur") String district) {
        return ResponseEntity.ok(weatherService.getWeatherByDistrict(district));
    }
}
