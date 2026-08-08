package com.agrisahay.controller;

import com.agrisahay.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping({"/api/disease", "/api/v1/disease"})
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @PostMapping({"/analyze", ""})
    public ResponseEntity<?> analyzeDisease(@RequestBody(required = false) Map<String, String> request) {
        String crop = request != null && request.containsKey("crop") ? request.get("crop") : "paddy";
        String symptom = request != null && request.containsKey("symptom") ? request.get("symptom") : "";

        Map<String, Object> diagnosis = diseaseService.diagnoseCrop(crop, symptom);
        return ResponseEntity.ok(diagnosis);
    }
}
