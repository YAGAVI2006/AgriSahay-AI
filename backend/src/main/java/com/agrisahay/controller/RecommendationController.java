package com.agrisahay.controller;

import com.agrisahay.service.CropRecommendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping({"/api/recommendations", "/api/v1/crops"})
public class RecommendationController {

    @Autowired
    private CropRecommendService cropRecommendService;

    @PostMapping({"", "/recommend"})
    public ResponseEntity<?> recommendCrop(@RequestBody Map<String, Object> input) {
        String soil = (String) input.getOrDefault("soilType", "red");
        Double rainfall = input.get("rainfall") != null ? Double.parseDouble(input.get("rainfall").toString()) : 820.0;
        String season = (String) input.getOrDefault("season", "Kuruvai");
        String water = (String) input.getOrDefault("waterSource", "canal");

        Map<String, Object> result = cropRecommendService.recommendBestCrop(soil, rainfall, season, water);
        return ResponseEntity.ok(result);
    }
}
