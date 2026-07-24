// Interactive Leaflet Map GIS Service (Phase 2)

export const mapService = {
  getNearbyAgriMarkers: async (location) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const centerLat = location.latitude || 10.9601;
        const centerLng = location.longitude || 78.0766;

        resolve([
          {
            id: 'gis-1',
            name: 'Karur Farm Plot (Your Land)',
            category: 'farm',
            lat: centerLat,
            lng: centerLng,
            icon: '👨‍🌾',
            desc: `Primary Plot (${location.village || 'Mayanur'}, ${location.district || 'Karur'})`
          },
          {
            id: 'gis-2',
            name: 'Block Agriculture Extension Office',
            category: 'office',
            lat: centerLat + 0.015,
            lng: centerLng - 0.012,
            icon: '🏛️',
            desc: 'Subsidized seed depot, Uzhavan registration & soil testing sample collection'
          },
          {
            id: 'gis-3',
            name: 'Karur Regulated Agriculture Mandi Market',
            category: 'market',
            lat: centerLat - 0.022,
            lng: centerLng + 0.018,
            icon: '📈',
            desc: 'Government regulated auction market for Paddy, Groundnut, Cotton & Banana'
          },
          {
            id: 'gis-4',
            name: 'TNAU Primary Agriculture Cooperative (PACS)',
            category: 'fertilizer',
            lat: centerLat + 0.008,
            lng: centerLng + 0.025,
            icon: '🧪',
            desc: 'Neem-coated Urea, DAP, Potash & Bio-fungicides distribution center'
          },
          {
            id: 'gis-5',
            name: 'Cold Storage & Warehousing Corporation',
            category: 'warehouse',
            lat: centerLat - 0.018,
            lng: centerLng - 0.020,
            icon: '🏬',
            desc: 'Temperature controlled storage for Turmeric, Onion & Grains'
          }
        ]);
      }, 350);
    });
  }
};
