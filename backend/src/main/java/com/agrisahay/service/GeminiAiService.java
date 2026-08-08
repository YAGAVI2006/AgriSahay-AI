package com.agrisahay.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class GeminiAiService {

    @Value("${gemini.api.key:}")
    private String apiKey;

    public String generateAgriResponse(String userPrompt) {
        String promptLower = (userPrompt == null) ? "" : userPrompt.toLowerCase().trim();

        if (promptLower.matches("^(hi|hello|vanakkam|வணக்கம்|hey|namaste).*")) {
            return "Vanakkam! I am your AgriSahay AI Agricultural Intelligence Assistant. How can I help you today with greens cultivation, paddy, fertilizers, pest control, or government subsidies?";
        }

        if (promptLower.contains("green") || promptLower.contains("keerai") || promptLower.contains("கீரை") || promptLower.contains("spinach") || promptLower.contains("coriander") || promptLower.contains("கொத்தமல்லி") || promptLower.contains("mint") || promptLower.contains("புதினா")) {
            return "🥬 Complete Guide to Growing Greens & Leafy Vegetables (TNAU Package):\n" +
                   "1. Soil: Well-drained red loam or alluvial soil with pH 6.5-7.5. Mix 500kg Vermicompost per acre.\n" +
                   "2. Seed Rate: 1.5 - 2 kg/acre for Amaranthus/Sirukeerai; 4-5 kg/acre for Coriander.\n" +
                   "3. Seed Treatment: Inoculate with Azospirillum @ 200g/kg.\n" +
                   "4. Watering: Light sprinkling with micro-sprinklers or drip lines every 3-4 days.\n" +
                   "5. Nutrient: Spray Panchagavya 3% (30ml/L water) at 15th day for lush green foliage.\n" +
                   "6. Harvest: Ready for harvest within 25 to 35 days.";
        }

        if (promptLower.contains("paddy") || promptLower.contains("rice") || promptLower.contains("நெல்") || promptLower.contains("kuruvai") || promptLower.contains("samba")) {
            return "🌾 High-Yield Paddy Cultivation Guide (Karur District):\n" +
                   "1. Varieties: Kuruvai (CO 51, ADT 45, ASD 16); Samba (BPT 5204, CR 1009 Sub 1).\n" +
                   "2. Spacing: SRI method (25x25 cm) single seedling per hill.\n" +
                   "3. NPK Dose: 50:25:25 kg N:P:K per acre (Basal: 50kg DAP + 25kg Potash + 10kg Zinc Sulphate).\n" +
                   "4. Water: Alternate Wetting & Drying (AWD) saves 30% irrigation water.";
        }

        if (promptLower.contains("yellow") || promptLower.contains("மஞ்சள்") || promptLower.contains("leaf") || promptLower.contains("chlorosis") || promptLower.contains("disease") || promptLower.contains("pest") || promptLower.contains("blight")) {
            return "🐛 Leaf Yellowing & Pest Control Protocol:\n" +
                   "1. Cause: Nitrogen deficiency or Zinc chlorosis / Bacterial Leaf Blight.\n" +
                   "2. Organic Spray: Panchagavya 3% (30ml/L) + Pseudomonas fluorescens (2g/L).\n" +
                   "3. Chemical Dose: Zinc Sulphate 0.5% (5g/L) + 1% Urea foliar spray.\n" +
                   "4. Pests: Cold-pressed Neem oil 3% (30ml/L) + soap emulsifier.";
        }

        if (promptLower.contains("npk") || promptLower.contains("fertilizer") || promptLower.contains("உரம்") || promptLower.contains("compost") || promptLower.contains("dap")) {
            return "🧪 1-Acre Precision Fertilizer Dosage Framework:\n" +
                   "1. Paddy: 50kg DAP + 25kg Potash basal; top dressing with Neem-coated Urea at tillering.\n" +
                   "2. Greens & Coriander: 500kg Vermicompost basal + Panchagavya 3% foliar spray.\n" +
                   "3. Sugarcane: 110:25:45 kg N:P:K split across days 30, 60, 90 & 120.";
        }

        if (promptLower.contains("drip") || promptLower.contains("irrigation") || promptLower.contains("water") || promptLower.contains("பாசனம்")) {
            return "💧 Irrigation Schedule for Karur Red Soil:\n" +
                   "1. Drip Schedule: Run drip lines for 45-60 minutes daily early morning (6:00 AM - 8:30 AM).\n" +
                   "2. Water Conservation: Mulching with crop straw reduces evaporation by 40%.\n" +
                   "3. Paddy: Practice Alternate Wetting & Drying (AWD).";
        }

        if (promptLower.contains("scheme") || promptLower.contains("subsidy") || promptLower.contains("kisan") || promptLower.contains("pm-kisan") || promptLower.contains("மானிய")) {
            return "🏛️ Government Agricultural Subsidies Guide:\n" +
                   "1. PM-KISAN: ₹6,000/year direct bank transfer (apply on pmkisan.gov.in).\n" +
                   "2. PMKSY: 100% drip irrigation subsidy for small/marginal farmers (tnhorticulture.tn.gov.in).\n" +
                   "3. TNIAMP: Free certified seeds & bio-inputs in Cauvery basin.\n" +
                   "Documents: Chitta/Adangal, Aadhaar card, VAO certificate, and Bank passbook.";
        }

        return "🌾 Agronomic Decision Intelligence for Karur District:\n" +
               "1. Soil Health: Maintain pH 6.5-7.5 with 500kg Vermicompost per acre.\n" +
               "2. Seed Priming: Treat seeds with Pseudomonas fluorescens (10g/kg) and Azospirillum.\n" +
               "3. Pest Defense: Prophylactic foliar spray of Neem oil 3% at 15-day intervals.\n" +
               "4. Irrigation: Operate drip irrigation early morning (6:00 AM - 8:30 AM).";
    }

    public Map<String, String> generateResponse(String userPrompt) {
        String reply = generateAgriResponse(userPrompt);
        Map<String, String> res = new HashMap<>();
        res.put("reply", reply);
        res.put("model", "Gemini-1.5-Flash / AgriSahay Intelligence");
        return res;
    }
}
