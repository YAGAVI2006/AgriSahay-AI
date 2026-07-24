// Smart Irrigation Planner Service (Phase 2)

export const irrigationService = {
  getIrrigationPlan: async ({ crop, soilType, weatherTemp, landSizeAcres }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const land = parseFloat(landSizeAcres) || 4.5;
        
        resolve({
          dailyWaterRequirementLiters: Math.round(land * 4200),
          irrigationFrequency: 'Every 3 Days (Cauvery Canal / Drip)',
          nextIrrigationDate: 'Tomorrow Morning (06:00 AM)',
          waterSavingSuggestions: [
            'Adopt Drip Irrigation (சொட்டு நீர் பாசனம்) under 100% TN Micro-Irrigation Scheme for 45% water saving.',
            'Maintain Alternate Wetting and Drying (AWD) in Paddy fields to encourage root oxygenation.',
            'Apply straw mulching around Banana pseudostem to reduce soil evaporation losses by 30%.',
            'Schedule irrigation in early morning hours (6 AM - 9 AM) to minimize evapotranspiration.'
          ],
          schedule7Days: [
            { day: 'Today', status: 'Optimal Soil Moisture', action: 'No Irrigation Needed' },
            { day: 'Tomorrow', status: 'Soil Moisture Dropping', action: 'Irrigate 3 Hours (Drip 4200 L/Acre)' },
            { day: 'Sat', status: 'Moderate Moisture', action: 'No Irrigation Needed' },
            { day: 'Sun', status: 'Expected Rain 60%', action: 'Delay Irrigation due to rain' },
            { day: 'Mon', status: 'Post Rain Moisture', action: 'Inspect Drainage Channels' },
            { day: 'Tue', status: 'Adequate Moisture', action: 'No Irrigation Needed' },
            { day: 'Wed', status: 'Dry Topsoil', action: 'Irrigate 3 Hours (Drip)' }
          ]
        });
      }, 400);
    });
  }
};
