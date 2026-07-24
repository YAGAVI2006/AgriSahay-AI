import { GOVERNMENT_SCHEMES, recommendSchemes } from '../data/schemes';

export const schemeService = {
  getAllSchemes: async () => {
    return Promise.resolve(GOVERNMENT_SCHEMES);
  },

  getRecommendedSchemes: async (filterParams) => {
    // Phase 2: return axios.post('/api/v1/schemes/match', filterParams);
    return new Promise((resolve) => {
      setTimeout(() => {
        const matches = recommendSchemes(filterParams);
        resolve(matches);
      }, 350);
    });
  }
};
