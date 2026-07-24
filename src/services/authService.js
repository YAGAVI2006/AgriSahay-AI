// API-ready Auth Service (Localized for Karur, Tamil Nadu)

const PROFILE_STORAGE_KEY = 'agrisahay_profile';
const AUTH_TOKEN_KEY = 'agrisahay_auth_token';

export const DEFAULT_KARUR_PROFILE = {
  name: 'Shanmugam Periasamy',
  email: 'shanmugam@agrisahay.in',
  phone: '9443210987',
  village: 'Mayanur',
  taluk: 'Kulithalai',
  district: 'Karur',
  state: 'Tamil Nadu',
  landSizeAcres: 4.5,
  soilType: 'red',
  primaryCrop: 'paddy',
  irrigationType: 'canal',
  farmerCategory: 'small',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
};

export const authService = {
  login: async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = 'mock-jwt-token-' + Date.now();
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        const existingProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        const profile = existingProfile ? JSON.parse(existingProfile) : DEFAULT_KARUR_PROFILE;
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
        resolve({ token, profile });
      }, 500);
    });
  },

  register: async (farmerData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const token = 'mock-jwt-token-' + Date.now();
        localStorage.setItem(AUTH_TOKEN_KEY, token);
        const profile = {
          ...DEFAULT_KARUR_PROFILE,
          name: farmerData.name || 'New Karur Farmer',
          email: farmerData.email || 'farmer@agrisahay.in',
          phone: farmerData.phone || '9443210987',
          village: farmerData.village || 'Mayanur',
          taluk: farmerData.taluk || 'Kulithalai',
          district: farmerData.district || 'Karur',
          state: farmerData.state || 'Tamil Nadu',
          landSizeAcres: farmerData.landSizeAcres || 4.5,
          soilType: farmerData.soilType || 'red',
          primaryCrop: farmerData.primaryCrop || 'paddy',
          irrigationType: farmerData.irrigationType || 'canal'
        };
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
        resolve({ token, profile });
      }, 600);
    });
  },

  logout: async () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return Promise.resolve(true);
  },

  getCurrentProfile: () => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return DEFAULT_KARUR_PROFILE;
  },

  updateProfile: async (updatedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedData));
        resolve(updatedData);
      }, 400);
    });
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }
};
