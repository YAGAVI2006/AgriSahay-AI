// Geospatial Disease Outbreak Heatmap Service (Phase 3)

export const outbreakMapService = {
  getOutbreakReports: async (location) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const centerLat = location.latitude || 10.9601;
        const centerLng = location.longitude || 78.0766;

        resolve({
          alertLevel: 'Moderate Outbreak Risk (3 Reports in 15km Radius)',
          reports: [
            {
              id: 'outbreak-1',
              crop: 'Banana (வாழை)',
              disease: 'Sigatoka Yellow Leaf Spot',
              severity: 'High',
              distance: '3.2 km away (Kulithalai Road)',
              lat: centerLat + 0.012,
              lng: centerLng - 0.015,
              icon: '🍌',
              prevention: 'Spray Mineral Oil 1% + Propiconazole on lower leaves immediately.'
            },
            {
              id: 'outbreak-2',
              crop: 'Paddy (நெல்)',
              disease: 'Paddy Bacterial Leaf Blight',
              severity: 'Moderate',
              distance: '5.8 km away (Thanthoni)',
              lat: centerLat - 0.018,
              lng: centerLng + 0.022,
              icon: '🌾',
              prevention: 'Apply Streptocycline (6g/acre) + Copper Oxychloride (500g/acre).'
            },
            {
              id: 'outbreak-3',
              crop: 'Groundnut (நிலக்கடலை)',
              disease: 'Tikka Leaf Spot',
              severity: 'Low',
              distance: '8.4 km away (Manmangalam)',
              lat: centerLat + 0.025,
              lng: centerLng + 0.010,
              icon: '🥜',
              prevention: 'Foliar spray of Mancozeb 75% WP @ 2g/L water.'
            }
          ]
        });
      }, 400);
    });
  }
};
