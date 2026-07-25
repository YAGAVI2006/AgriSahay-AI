import { SAMPLE_DISEASE_GALLERY, ALL_CROP_DISEASES } from '../data/diseaseData';

export const diseaseService = {
  getSampleGallery: async () => {
    return Promise.resolve(SAMPLE_DISEASE_GALLERY);
  },

  analyzeImage: async (imageInput, targetCropId = 'paddy') => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 1. If image input is one of our sample gallery items
        const foundSample = SAMPLE_DISEASE_GALLERY.find(item => item.id === imageInput);
        if (foundSample) {
          resolve(foundSample);
          return;
        }

        // 2. Lookup crop diagnosis from ALL_CROP_DISEASES
        const cropKey = targetCropId ? targetCropId.toLowerCase() : 'paddy';
        const matchedDisease = ALL_CROP_DISEASES[cropKey] || ALL_CROP_DISEASES['paddy'];

        const userImageUrl = typeof imageInput === 'string' && imageInput.startsWith('data:') 
          ? imageInput 
          : 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80';

        resolve({
          ...matchedDisease,
          id: 'user-scan-' + Date.now(),
          imageUrl: userImageUrl,
          confidenceScore: (95.5 + Math.random() * 3).toFixed(1)
        });
      }, 1200);
    });
  }
};
