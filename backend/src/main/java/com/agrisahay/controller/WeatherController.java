package com.agrisahay.controller;

import com.agrisahay.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping({"/api/weather", "/api/v1/weather"})
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping({"", "/current"})
    public ResponseEntity<?> getCurrentWeather(@RequestParam(defaultValue = "Karur") String district) {
        return ResponseEntity.ok(weatherService.getWeatherForDistrict(district));
    }

    @GetMapping("/forecast")
    public ResponseEntity<?> getWeatherForecast(@RequestParam(defaultValue = "Karur") String district) {
        return ResponseEntity.ok(weatherService.getWeatherForDistrict(district));
    }
}
