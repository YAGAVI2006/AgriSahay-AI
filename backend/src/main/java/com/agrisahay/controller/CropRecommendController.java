package com.agrisahay.controller;

import com.agrisahay.service.CropRecommendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/crops")
public class CropRecommendController {

    @Autowired
    private CropRecommendService cropRecommendService;

    @PostMapping("/recommend")
    public ResponseEntity<List<Map<String, Object>>> getRecommendations(@RequestBody(required = false) Map<String, Object> request) {
        if (request == null) request = Map.of();
        return ResponseEntity.ok(cropRecommendService.getRecommendations(request));
    }
}
