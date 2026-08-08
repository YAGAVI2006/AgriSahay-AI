package com.agrisahay.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping({"/api/crops", "/api/v1/crops"})
public class CropController {

    private final List<Map<String, Object>> CROPS = List.of(
        Map.of("id", "paddy", "name", "Paddy (நெல்)", "season", "Kuruvai / Samba", "duration", "110-130 Days", "waterReq", "High (1,200 mm)", "yieldAcre", "28 - 32 Qtl", "mandiPrice", "₹2,280/qtl"),
        Map.of("id", "sugarcane", "name", "Sugarcane (கரும்பு)", "season", "Special / Annual", "duration", "300-360 Days", "waterReq", "Very High (1,800 mm)", "yieldAcre", "45 - 55 Tons", "mandiPrice", "₹3,150/ton"),
        Map.of("id", "banana", "name", "Banana (வாழை)", "season", "Perennial", "duration", "300-330 Days", "waterReq", "High (1,500 mm)", "yieldAcre", "25 - 30 Tons", "mandiPrice", "₹1,850/qtl"),
        Map.of("id", "coriander", "name", "Coriander (கொத்தமல்லி)", "season", "Short Rotation", "duration", "35-45 Days", "waterReq", "Low (350 mm)", "yieldAcre", "12 - 15 Qtl", "mandiPrice", "₹4,850/qtl"),
        Map.of("id", "mint", "name", "Mint (புதினா)", "season", "Perennial Herb", "duration", "30-40 Days", "waterReq", "Moderate (400 mm)", "yieldAcre", "15 - 18 Qtl", "mandiPrice", "₹5,200/qtl"),
        Map.of("id", "turmeric", "name", "Turmeric (மஞ்சள்)", "season", "Annual", "duration", "240-270 Days", "waterReq", "Moderate (1,000 mm)", "yieldAcre", "22 - 26 Qtl", "mandiPrice", "₹14,500/qtl"),
        Map.of("id", "groundnut", "name", "Groundnut (நிலக்கடலை)", "season", "Kharif / Rabi", "duration", "105-120 Days", "waterReq", "Low (500 mm)", "yieldAcre", "18 - 22 Qtl", "mandiPrice", "₹6,400/qtl"),
        Map.of("id", "cotton", "name", "Cotton (பருத்தி)", "season", "Kharif", "duration", "150-180 Days", "waterReq", "Moderate (700 mm)", "yieldAcre", "10 - 14 Qtl", "mandiPrice", "₹7,200/qtl"),
        Map.of("id", "tomato", "name", "Tomato (தக்காளி)", "season", "Tri-annual", "duration", "90-110 Days", "waterReq", "Moderate (600 mm)", "yieldAcre", "18 - 24 Tons", "mandiPrice", "₹2,400/qtl")
    );

    @GetMapping("")
    public ResponseEntity<?> getAllCrops() {
        return ResponseEntity.ok(CROPS);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCropById(@PathVariable String id) {
        return ResponseEntity.ok(
            CROPS.stream()
                .filter(c -> c.get("id").toString().equalsIgnoreCase(id))
                .findFirst()
                .orElse(CROPS.get(0))
        );
    }
}
