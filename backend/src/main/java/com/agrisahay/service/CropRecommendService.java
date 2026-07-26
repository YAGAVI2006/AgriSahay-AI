package com.agrisahay.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CropRecommendService {

    public List<Map<String, Object>> getRecommendations(Map<String, Object> request) {
        String soilType = (String) request.getOrDefault("soilType", "Red Soil");
        String season = (String) request.getOrDefault("season", "Kuruvai / Aadi");
        Double landSize = Double.parseDouble(request.getOrDefault("landSizeAcres", "4.5").toString());

        List<Map<String, Object>> list = new ArrayList<>();

        // Paddy Recommendation
        Map<String, Object> paddy = new HashMap<>();
        paddy.put("cropId", "paddy");
        paddy.put("cropName", "Paddy / Rice (நெல்)");
        paddy.put("cropIcon", "🌾");
        paddy.put("suitabilityScorePercent", 96);
        paddy.put("durationDays", "120 Days");
        paddy.put("waterRequirement", "High (Cauvery Canal / Drip)");
        paddy.put("expectedYieldTonnesPerAcre", 3.2 * landSize);
        paddy.put("expectedRevenueRs", 72960.0 * (landSize / 4.5));
        paddy.put("aiExplanation", "Ideal for Karur red soil & canal irrigation during Kuruvai season. High regional market demand.");
        list.add(paddy);

        // Coriander Recommendation
        Map<String, Object> coriander = new HashMap<>();
        coriander.put("cropId", "coriander");
        coriander.put("cropName", "Coriander / Kothamalli (கொத்தமல்லி)");
        coriander.put("cropIcon", "🌿");
        coriander.put("suitabilityScorePercent", 94);
        coriander.put("durationDays", "35 Days Short Crop");
        coriander.put("waterRequirement", "Moderate (Sprinkler Mist)");
        coriander.put("expectedYieldTonnesPerAcre", 1.8 * landSize);
        coriander.put("expectedRevenueRs", 68400.0 * (landSize / 4.5));
        coriander.put("aiExplanation", "Short 35-day duration crop with high cash return at Karur Uzhavar Sandhai.");
        list.add(coriander);

        // Mint Recommendation
        Map<String, Object> mint = new HashMap<>();
        mint.put("cropId", "mint");
        mint.put("cropName", "Mint / Pudina (புதினா)");
        mint.put("cropIcon", "🌱");
        mint.put("suitabilityScorePercent", 91);
        mint.put("durationDays", "45 Days Multi-cut");
        mint.put("waterRequirement", "Moderate Drip");
        mint.put("expectedYieldTonnesPerAcre", 2.1 * landSize);
        mint.put("expectedRevenueRs", 67200.0 * (landSize / 4.5));
        mint.put("aiExplanation", "Multi-harvest ratoon leafy green perennial crop suitable for moist red loamy beds.");
        list.add(mint);

        return list;
    }
}
