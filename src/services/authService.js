// Spring Boot API-ready Auth Service (Localized for Karur, Tamil Nadu)

const API_BASE_URL = 'http://localhost:8080/api/v1';
const PROFILE_STORAGE_KEY = 'agrisahay_profile';
const AUTH_TOKEN_KEY = 'agrisahay_auth_token';

export const DEFAULT_KARUR_PROFILE = {
  name: 'Yagavi S',
  email: 'yagavi@agrisahay.in',
  phone: '9443218920',
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
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(AUTH_TOKEN_KEY, data.token);
        const profile = { ...DEFAULT_KARUR_PROFILE, name: data.user.name || 'Yagavi S', email: data.user.email };
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
        return { token: data.token, profile };
      }
    } catch (e) {
      console.log('Using Spring Boot fallback auth');
    }

    const token = 'jwt-token-' + Date.now();
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    const existingProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    const profile = existingProfile ? JSON.parse(existingProfile) : DEFAULT_KARUR_PROFILE;
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    return { token, profile };
  },

  register: async (farmerData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(farmerData)
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(AUTH_TOKEN_KEY, data.token);
        const profile = { ...DEFAULT_KARUR_PROFILE, ...farmerData };
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
        return { token: data.token, profile };
      }
    } catch (e) {
      console.log('Using Spring Boot fallback auth');
    }

    const token = 'jwt-token-' + Date.now();
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    const profile = { ...DEFAULT_KARUR_PROFILE, ...farmerData };
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    return { token, profile };
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
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedData));
    return Promise.resolve(updatedData);
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
  }
};
