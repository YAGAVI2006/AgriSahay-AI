// Sustainability & Carbon Footprint Service (Phase 3)

export const sustainabilityService = {
  getSustainabilityMetrics: async ({ landSizeAcres }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const land = parseFloat(landSizeAcres) || 4.5;

        resolve({
          sustainableScore: 88, // out of 100
          carbonFootprintKg: Math.round(land * 210), // kg CO2e per acre
          waterSavedLiters: Math.round(land * 145000), // Liters saved using Drip / AWD
          chemicalReductionPercent: 35, // reduced chemical pesticide use
          
          monthlyUsage: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            waterData: [450, 420, 380, 350, 310, 290], // KL
            fertilizerData: [120, 110, 95, 85, 80, 75] // kg
          },

          greenFarmingTips: [
            "Applying Bio-fertilizer Azospirillum & Phosphobacteria reduces synthetic Urea demand by 25%.",
            "Maintain Alternate Wetting and Drying (AWD) in Paddy to cut methane emissions by 40%.",
            "Incorporate green manure crops (Daincha / Sunnhemp) before puddling to fix 80kg Nitrogen naturally."
          ]
        });
      }, 400);
    });
  }
};
