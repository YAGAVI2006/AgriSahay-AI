package com.agrisahay.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DiseaseService {

    public Map<String, Object> analyzeCropDisease(String cropId) {
        String cropKey = (cropId == null || cropId.isBlank()) ? "paddy" : cropId.toLowerCase();

        Map<String, Object> result = new HashMap<>();
        result.put("confidenceScore", 96.8);

        switch (cropKey) {
            case "coriander":
                result.put("cropName", "Coriander / Kothamalli (கொத்தமல்லி)");
                result.put("cropIcon", "🌿");
                result.put("identifiedPlant", "Coriander Plant (கொத்தமல்லி செடி)");
                result.put("botanicalName", "Coriandrum sativum");
                result.put("diseaseName", "Coriander Stem Gall / Leaf Blight");
                result.put("scientificName", "Protomyces macrosporus");
                result.put("severity", "High in Damp Soil");
                result.put("organicTreatment", List.of("Seed treatment with Pseudomonas fluorescens (10g/kg seed)", "Spray Cow Urine 10% + Neem Seed Kernel Extract 5%"));
                result.put("chemicalTreatment", List.of("Copper Oxychloride 50% WP @ 2g/L water"));
                break;

            case "mint":
                result.put("cropName", "Mint / Pudina (புதினா)");
                result.put("cropIcon", "🌱");
                result.put("identifiedPlant", "Mint Plant (புதினா செடி)");
                result.put("botanicalName", "Mentha arvensis");
                result.put("diseaseName", "Mint Leaf Rust & Powdery Mildew");
                result.put("scientificName", "Puccinia menthae");
                result.put("severity", "Moderate Foliar Damage");
                result.put("organicTreatment", List.of("Spray Panchagavya 3% at 7-day intervals", "Apply Bio-fungicide Trichoderma viride @ 5g/L"));
                result.put("chemicalTreatment", List.of("Wettable Sulfur 80% WP @ 2g/L water"));
                break;

            default:
                result.put("cropName", "Paddy / Rice (நெல்)");
                result.put("cropIcon", "🌾");
                result.put("identifiedPlant", "Paddy Plant (நெல் பயிர்)");
                result.put("botanicalName", "Oryza sativa");
                result.put("diseaseName", "Paddy Bacterial Leaf Blight");
                result.put("scientificName", "Xanthomonas oryzae pv. oryzae");
                result.put("severity", "Severe High Humidity Risk");
                result.put("organicTreatment", List.of("Apply Fresh Cow Dung Extract (20%) filtered spray", "Apply Bio-control Pseudomonas fluorescens @ 10g/L"));
                result.put("chemicalTreatment", List.of("Streptocycline (6g) + Copper Oxychloride 50% WP (500g) per acre"));
                break;
        }

        return result;
    }
}
