// Location Service for Phase 2 - Geolocation API & Manual Selection

const LOCATION_STORAGE_KEY = 'agrisahay_location';

export const DEFAULT_LOCATION_DATA = {
  latitude: 10.9601,
  longitude: 78.0766,
  state: 'Tamil Nadu',
  district: 'Karur',
  taluk: 'Kulithalai',
  village: 'Mayanur',
  isGps: false,
  timestamp: new Date().toISOString()
};

export const locationService = {
  getCurrentLocation: async () => {
    const saved = localStorage.getItem(LOCATION_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEFAULT_LOCATION_DATA;
  },

  detectGpsLocation: async () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Simulated Reverse Geocoding for Karur TN region coordinates
          const gpsLocation = {
            latitude: lat,
            longitude: lng,
            state: 'Tamil Nadu',
            district: 'Karur',
            taluk: 'Kulithalai',
            village: 'Mayanur (GPS Detected)',
            isGps: true,
            timestamp: new Date().toISOString()
          };

          localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(gpsLocation));
          resolve(gpsLocation);
        },
        (error) => {
          reject(error);
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    });
  },

  updateManualLocation: async (locationData) => {
    return new Promise((resolve) => {
      const updated = {
        ...locationData,
        isGps: false,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(updated));
      resolve(updated);
    });
  }
};
