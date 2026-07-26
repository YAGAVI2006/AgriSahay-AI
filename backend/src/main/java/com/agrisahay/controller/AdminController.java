package com.agrisahay.controller;

import com.agrisahay.model.FarmerProfile;
import com.agrisahay.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping("/metrics")
    public ResponseEntity<Map<String, Object>> getAdminMetrics() {
        Map<String, Object> metrics = new HashMap<>();
        metrics.put("totalRegisteredFarmers", 1248);
        metrics.put("verifiedLandAcreage", 4820.5);
        metrics.put("activeSubsidiesApproved", 860);
        metrics.put("totalDiseaseScansProcessed", 3420);
        metrics.put("district", "Karur District, Tamil Nadu");

        List<Map<String, Object>> talukBreakdown = List.of(
            Map.of("taluk", "Kulithalai", "farmers", 380, "acreage", 1520.0),
            Map.of("taluk", "Manmangalam", "farmers", 290, "acreage", 1160.0),
            Map.of("taluk", "Aravakurichi", "farmers", 240, "acreage", 960.0),
            Map.of("taluk", "Kadavur", "farmers", 185, "acreage", 740.0),
            Map.of("taluk", "Krishnarayapuram", "farmers", 153, "acreage", 440.5)
        );
        metrics.put("talukBreakdown", talukBreakdown);

        return ResponseEntity.ok(metrics);
    }

    @GetMapping("/farmers")
    public ResponseEntity<List<FarmerProfile>> getFarmerDirectory() {
        List<FarmerProfile> profiles = profileRepository.findAll();
        if (profiles.isEmpty()) {
            profiles = List.of(
                new FarmerProfile()
            );
            profileRepository.saveAll(profiles);
        }
        return ResponseEntity.ok(profiles);
    }
}
