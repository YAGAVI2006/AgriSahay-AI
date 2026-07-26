package com.agrisahay.controller;

import com.agrisahay.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/disease")
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @PostMapping("/analyze")
    public ResponseEntity<Map<String, Object>> analyzeDisease(@RequestBody(required = false) Map<String, String> request) {
        String cropId = (request != null) ? request.getOrDefault("cropTarget", "paddy") : "paddy";
        return ResponseEntity.ok(diseaseService.analyzeCropDisease(cropId));
    }
}
