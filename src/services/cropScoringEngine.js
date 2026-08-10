/**
 * AgriSahay AI - Scientifically Explainable Multi-Criteria Crop Suitability Engine
 * 
 * Mathematical Formulation:
 * Total Suitability Score (S) = (0.30 * S_soil) + (0.25 * S_season) + (0.20 * S_water) + (0.15 * S_npk) + (0.10 * S_climate)
 * 
 * Component Weights:
 * 1. Soil Compatibility (30%): Evaluates Soil Type match + pH distance penalty:
 *    S_soil = (Soil_Type_Match ? 85 : 30) + 15 * max(0, 1 - (|pH - pH_ideal| / 1.5))
 * 
 * 2. Season Compatibility (25%): Strict agro-climatic seasonal index from TNAU calendar:
 *    S_season = 100 * Season_Coefficient(crop, selectedSeason)
 * 
 * 3. Water Availability (20%): Evaluates irrigation source capacity vs crop water requirement:
 *    S_water = 100 * WaterSourceSuitability(crop, waterSource)
 * 
 * 4. NPK Suitability (15%): Multi-nutrient normalized ratio matching:
 *    S_npk = 100 * (1 - ( |N - N_opt|/(2*N_opt) + |P - P_opt|/(2*P_opt) + |K - K_opt|/(2*K_opt) ) / 3 )
 * 
 * 5. Climate & Location (10%): Historical Karur basin temperature & humidity envelope alignment:
 *    S_climate = 100 * max(0.5, 1 - (|Temp_avg - Temp_opt| / 15))
 */

import { CROPS_AGRONOMIC_DATASET } from '../data/agriculturalDataset';

export const WEIGHT_DISTRIBUTION = {
  soil: { weight: 0.30, label: "Soil Compatibility", labelTa: "மண் பொருத்தம்", maxScore: 30 },
  season: { weight: 0.25, label: "Season Compatibility", labelTa: "பருவ பொருத்தம்", maxScore: 25 },
  water: { weight: 0.20, label: "Water Availability", labelTa: "நீர் இருப்பு", maxScore: 20 },
  npk: { weight: 0.15, label: "NPK Suitability", labelTa: "NPK சத்து அளவு", maxScore: 15 },
  climate: { weight: 0.10, label: "Climate & Location", labelTa: "காலநிலை / இடம்", maxScore: 10 }
};

export const cropScoringEngine = {
  
  /**
   * Evaluate a single crop against farm parameters
   */
  evaluateCrop(crop, farmParams) {
    const {
      soilType = 'red',
      soilPh = 6.8,
      season = 'Kuruvai',
      waterSource = 'canal',
      nitrogen = 50,
      phosphorus = 25,
      potassium = 25,
      temperature = 32
    } = farmParams;

    // 1. Soil Compatibility Sub-score (Max 100 points, weighted at 30%)
    const soilMatch = crop.suitableSoils.includes(soilType);
    const baseSoil = soilMatch ? 85 : 35;
    const phIdeal = crop.optimalPh.ideal;
    const phDelta = Math.abs(soilPh - phIdeal);
    const phFactor = Math.max(0, 1 - (phDelta / 1.5)) * 15;
    const rawSoilScore = Math.min(100, Math.max(20, Math.round(baseSoil + phFactor)));
    const weightedSoilScore = Number((rawSoilScore * 0.30).toFixed(1));

    // 2. Season Compatibility Sub-score (Max 100 points, weighted at 25%)
    const seasonIndex = crop.optimalSeasonIndex[season] || (crop.seasons.includes(season) ? 0.90 : 0.40);
    const rawSeasonScore = Math.round(seasonIndex * 100);
    const weightedSeasonScore = Number((rawSeasonScore * 0.25).toFixed(1));

    // 3. Water Availability Sub-score (Max 100 points, weighted at 20%)
    const waterIndex = crop.waterSourceSuitability[waterSource] || 0.70;
    const rawWaterScore = Math.round(waterIndex * 100);
    const weightedWaterScore = Number((rawWaterScore * 0.20).toFixed(1));

    // 4. NPK Suitability Sub-score (Max 100 points, weighted at 15%)
    const reqN = crop.npkRequirementsPerAcre.n;
    const reqP = crop.npkRequirementsPerAcre.p;
    const reqK = crop.npkRequirementsPerAcre.k;

    const devN = Math.min(1.0, Math.abs(nitrogen - reqN) / Math.max(1, reqN * 1.5));
    const devP = Math.min(1.0, Math.abs(phosphorus - reqP) / Math.max(1, reqP * 1.5));
    const devK = Math.min(1.0, Math.abs(potassium - reqK) / Math.max(1, reqK * 1.5));
    const avgDeviation = (devN + devP + devK) / 3;

    const rawNpkScore = Math.round(Math.max(30, (1 - avgDeviation) * 100));
    const weightedNpkScore = Number((rawNpkScore * 0.15).toFixed(1));

    // 5. Climate & Location Sub-score (Max 100 points, weighted at 10%)
    const optTemp = crop.optimalTempRange.ideal;
    const tempDelta = Math.abs(temperature - optTemp);
    const climateFactor = Math.max(0.4, 1 - (tempDelta / 15));
    const rawClimateScore = Math.round(climateFactor * 100);
    const weightedClimateScore = Number((rawClimateScore * 0.10).toFixed(1));

    // Total Final Suitability Percentage
    const totalScore = Number((
      weightedSoilScore + 
      weightedSeasonScore + 
      weightedWaterScore + 
      weightedNpkScore + 
      weightedClimateScore
    ).toFixed(1));

    // Explainable Agronomic Reasoning Formulation
    const limitingFactors = [];
    if (rawSoilScore < 70) limitingFactors.push(`Soil pH (${soilPh}) or soil type (${soilType}) deviation from ideal pH ${phIdeal}`);
    if (rawSeasonScore < 70) limitingFactors.push(`Selected season (${season}) is sub-optimal for vegetative cycle`);
    if (rawWaterScore < 70) limitingFactors.push(`Water source (${waterSource}) provides insufficient head for ${crop.waterRequirementMm}mm crop need`);
    if (rawNpkScore < 70) limitingFactors.push(`Soil test NPK (${nitrogen}:${phosphorus}:${potassium}) deviates from crop demand (${reqN}:${reqP}:${reqK})`);

    const reasoning = limitingFactors.length === 0
      ? `High agronomic synergy: ${crop.name} matches ${soilType} soil (pH ${soilPh}), aligns with ${season} season and ${waterSource} irrigation capacity.`
      : `Recommended with adjustments: ${limitingFactors.join('; ')}.`;

    // Projected Revenue Formulation (Yield * Mandi Price * Farm Size)
    const farmAcres = Number(farmParams.farmSizeAcres || 1);
    const estRevenuePerAcre = Math.round(crop.baseYieldQtlPerAcre * crop.mandiPricePerQtl);
    const totalEstRevenue = Math.round(estRevenuePerAcre * farmAcres);

    return {
      cropId: crop.id,
      cropName: crop.name,
      cropNameTa: crop.nameTa,
      scientificName: crop.scientificName,
      totalScore,
      breakdown: {
        soil: { raw: rawSoilScore, weighted: weightedSoilScore, max: 30, weightPct: '30%' },
        season: { raw: rawSeasonScore, weighted: weightedSeasonScore, max: 25, weightPct: '25%' },
        water: { raw: rawWaterScore, weighted: weightedWaterScore, max: 20, weightPct: '20%' },
        npk: { raw: rawNpkScore, weighted: weightedNpkScore, max: 15, weightPct: '15%' },
        climate: { raw: rawClimateScore, weighted: weightedClimateScore, max: 10, weightPct: '10%' }
      },
      citation: crop.citation,
      expectedYieldPerAcre: `${crop.baseYieldQtlPerAcre} Qtl/Acre`,
      waterRequirement: `${crop.waterRequirementMm} mm`,
      estimatedRevenuePerAcre: `₹${estRevenuePerAcre.toLocaleString('en-IN')}`,
      totalEstimatedRevenue: `₹${totalEstRevenue.toLocaleString('en-IN')}`,
      recommendedVarieties: crop.tnauRecommendedVarieties,
      reasoning
    };
  },

  /**
   * Evaluate all crops and return sorted rank list with scientific explainability
   */
  rankAllCrops(farmParams) {
    const results = CROPS_AGRONOMIC_DATASET.map(crop => this.evaluateCrop(crop, farmParams));
    results.sort((a, b) => b.totalScore - a.totalScore);
    return results;
  }
};
