// Smart Crop Recommendation Engine (Phase 2 with Leafy Greens & Culinary Herbs)

export const cropRecommendService = {
  getRecommendations: async ({ location, soilType, season, waterAvailability, landSizeAcres }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const soil = soilType || 'red';
        
        const recommendations = [
          {
            cropId: 'coriander',
            cropName: 'Coriander / Kothamalli (கொத்தமல்லி)',
            icon: '🌿',
            suitabilityScore: soil === 'sandy_loam' || soil === 'red' ? 98 : 92,
            growingDuration: '30 - 35 Days',
            waterRequirement: '250 mm (Low Sprinkler / Drip)',
            expectedYield: '2.5 - 3.2 Tonnes / Acre',
            aiExplanation: `Ultra-fast 35-day cash cycle for ${location.district || 'Karur'} markets. Extremely high local demand in Karur & Trichy vegetable mandis (₹35-₹50/kg).`
          },
          {
            cropId: 'mint',
            cropName: 'Mint / Pudina (புதினா)',
            icon: '🌱',
            suitabilityScore: soil === 'red' || soil === 'alluvial' ? 96 : 90,
            growingDuration: '40 - 45 Days (Multi-cut)',
            waterRequirement: '350 mm (Moderate Moisture)',
            expectedYield: '4.0 - 5.5 Tonnes / Acre',
            aiExplanation: `Multi-harvest perennial herb. First harvest in 40 days, followed by ratoon cuttings every 25 days. Generates continuous daily income.`
          },
          {
            cropId: 'keerai',
            cropName: 'Amaranthus Spinach / Arai & Siru Keerai (அரைக்கீரை / சிறுகீரை)',
            icon: '🥬',
            suitabilityScore: 97,
            growingDuration: '25 - 28 Days',
            waterRequirement: '200 mm (Low)',
            expectedYield: '3.5 - 4.2 Tonnes / Acre',
            aiExplanation: `Shortest 25-day crop cycle. Zero risk of heavy pest loss; excellent intercrop option between fruit trees & sugarcane rows.`
          },
          {
            cropId: 'paddy',
            cropName: 'Kuruvai / Samba Paddy (நெல்)',
            icon: '🌾',
            suitabilityScore: soil === 'alluvial' || soil === 'clay' ? 96 : 91,
            growingDuration: '115 - 125 Days',
            waterRequirement: '1,200 mm (High)',
            expectedYield: '2.8 - 3.4 Tonnes / Acre',
            aiExplanation: `Highly suitable for ${location.district || 'Karur'} Cauvery canal basin. High market demand in TN mandis and eligible for 100% Kuruvai special package inputs.`
          },
          {
            cropId: 'banana',
            cropName: 'Grand Naine / Poovan Banana (வாழை)',
            icon: '🍌',
            suitabilityScore: soil === 'red' || soil === 'alluvial' ? 94 : 88,
            growingDuration: '330 - 360 Days',
            waterRequirement: '1,800 mm (Drip Suitable)',
            expectedYield: '22 - 28 Tonnes / Acre',
            aiExplanation: `Excellent profit margin in Karur & Trichy fruit markets. Drip irrigation reduces water requirement by 45%.`
          },
          {
            cropId: 'groundnut',
            cropName: 'TMV 7 Groundnut (நிலக்கடலை)',
            icon: '🥜',
            suitabilityScore: soil === 'red' || soil === 'sandy_loam' ? 95 : 82,
            growingDuration: '105 - 110 Days',
            waterRequirement: '500 mm (Moderate)',
            expectedYield: '1.2 - 1.6 Tonnes / Acre',
            aiExplanation: `Ideal for ${soil.toUpperCase()} soil in Kulithalai & Aravakurichi taluks. Requires Gypsum application at 45th day.`
          }
        ];

        // Sort by suitability score descending
        recommendations.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
        resolve(recommendations);
      }, 350);
    });
  }
};
