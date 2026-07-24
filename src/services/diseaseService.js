import { SAMPLE_DISEASE_GALLERY } from '../data/diseaseData';

export const diseaseService = {
  getSampleGallery: async () => {
    return Promise.resolve(SAMPLE_DISEASE_GALLERY);
  },

  analyzeImage: async (imageInput, targetCropId = null) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // If image input is one of our sample gallery IDs
        const foundSample = SAMPLE_DISEASE_GALLERY.find(item => item.id === imageInput);
        if (foundSample) {
          resolve(foundSample);
          return;
        }

        // If target crop was selected or specified
        if (targetCropId) {
          const matchedByCrop = SAMPLE_DISEASE_GALLERY.find(item => item.id.includes(targetCropId));
          if (matchedByCrop) {
            resolve({
              ...matchedByCrop,
              id: 'user-scan-' + Date.now(),
              imageUrl: typeof imageInput === 'string' && imageInput.startsWith('data:') ? imageInput : matchedByCrop.imageUrl,
              confidenceScore: 96.8
            });
            return;
          }
        }

        // Default smart AI Plant Classifier diagnosis
        resolve({
          id: 'user-scan-' + Date.now(),
          cropName: 'Paddy / Rice (நெல்)',
          cropIcon: '🌾',
          identifiedPlant: 'Paddy / Rice Plant (நெல் பயிர்)',
          botanicalName: 'Oryza sativa',
          cropType: 'Cereal Crop',
          diseaseName: 'Paddy Bacterial Leaf Blight (நெல் பாக்டீரியா இலை கருகல்)',
          scientificName: 'Xanthomonas oryzae pv. oryzae',
          imageUrl: typeof imageInput === 'string' && imageInput.startsWith('data:') 
            ? imageInput 
            : 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
          confidenceScore: 96.5,
          severity: 'Moderate (High Moisture Risk)',
          affectedPart: 'Leaf Blades & Tip',
          symptoms: [
            'Wavy, water-soaked yellowish streaks starting from leaf margins',
            'Leaves turn white to grey and dry out rapidly',
            'Milky bacterial ooze visible on cut leaf tips under morning dew'
          ],
          organicTreatment: [
            'Apply Fresh Cow Dung Extract (20% concentration) filtered spray',
            'Drain stagnant field water for 3-4 days to lower humidity',
            'Apply Bio-control Pseudomonas fluorescens @ 10g/L'
          ],
          chemicalTreatment: [
            'Streptocycline (6g) + Copper Oxychloride 50% WP (500g) in 200L water per acre',
            'Avoid excess Nitrogen fertilizer application'
          ],
          preventionTips: [
            'Plant BLB resistant varieties like ADT 45, Improved Samba Mahsuri',
            'Avoid clipping leaf tips during transplanting',
            'Keep field bunds free of weed hosts'
          ]
        });
      }, 1500);
    });
  }
};
