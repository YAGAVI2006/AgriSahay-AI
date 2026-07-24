// Satellite Crop Monitoring & NDVI Geospatial Hub (Phase 3)

export const satelliteService = {
  getSatelliteData: async (location) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const district = location.district || 'Karur';
        
        resolve({
          satelliteProvider: 'Sentinel-2 Multispectral Satellite (ESA)',
          lastOverpassDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          ndviScore: 0.84, // Normalised Difference Vegetation Index
          vegetationHealth: 'Vibrant & Dense Canopy (Optimal NDVI)',
          waterStressLevel: 'Low Moisture Stress (0.15)',
          canopyCoveragePercent: 88,
          
          weeklyNdviTimeline: [
            { week: 'Week 1', ndvi: 0.42, status: 'Germination & Emergence' },
            { week: 'Week 2', ndvi: 0.58, status: 'Early Vegetative' },
            { week: 'Week 3', ndvi: 0.71, status: 'Tillering Phase' },
            { week: 'Week 4 (Current)', ndvi: 0.84, status: 'Peak Healthy Canopy' }
          ],

          aiSatelliteObservations: [
            "Satellite multispectral bands indicate high chlorophyll absorbance across 94% of plot area.",
            "Minor canopy moisture dip detected on Eastern boundary due to high sun exposure; micro-irrigation recommended.",
            "No weed infestation detected in plot center."
          ]
        });
      }, 400);
    });
  }
};
