package com.agrisahay.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping({"/api/dashboard", "/api/v1/dashboard"})
public class DashboardController {

    @GetMapping({"", "/summary"})
    public ResponseEntity<?> getDashboardSummary(@RequestParam(defaultValue = "Karur") String district) {
        Map<String, Object> summary = Map.of(
            "currentCrop", "Paddy (Kuruvai)",
            "temperature", 33,
            "soilMoisture", "64% - Adequate",
            "expectedYield", "28.5 Qtl/Acre",
            "farmHealthScore", 92,
            "todayAdvisory", List.of(
                "Rain expected in 48 hours across Kulithalai block. Delay heavy Nitrogen top dressing for Paddy.",
                "Coriander & Tomato mandi prices increased by +4.2% at Karur Uzhavar Sandhai today.",
                "Inspect lower paddy tillers for early Bacterial Leaf Blight symptoms following morning dew."
            ),
            "quickActions", List.of(
                Map.of("id", "recommend", "title", "Crop Recommendation"),
                Map.of("id", "disease", "title", "Diagnose Disease"),
                Map.of("id", "weather", "title", "Check Weather"),
                Map.of("id", "assistant", "title", "Ask AgriBot")
            )
        );
        return ResponseEntity.ok(summary);
    }
}
