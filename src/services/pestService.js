// AI Pest Risk Prediction Engine (Phase 3)

export const pestService = {
  getPestRiskPrediction: async ({ crop, weather, location }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cropName = crop ? crop.toUpperCase() : 'PADDY';
        
        resolve({
          riskLevel: 'Moderate Risk (Yellow Alert)',
          confidenceScore: 94.2,
          likelyPests: [
            {
              name: 'Yellow Stem Borer (தண்டு துளைப்பான்)',
              scientific: 'Scirpophaga incertulas',
              riskScore: 78,
              severity: 'High',
              symptoms: 'Dead hearts in vegetative stage and white ears at panicle stage.',
              organicControl: 'Set up Pheromone Traps @ 8/acre + release Trichogramma egg parasitoids (20,000/acre).',
              chemicalControl: 'Cartap Hydrochloride 4G @ 10kg/acre or Chlorantraniliprole 18.5% SC @ 60ml/acre.'
            },
            {
              name: 'Paddy Leaf Folder (இலை சுருட்டு புழு)',
              scientific: 'Cnaphalocrocis medinalis',
              riskScore: 65,
              severity: 'Moderate',
              symptoms: 'Leaves folded longitudinally with white transparent scraped patches.',
              organicControl: 'Pass a 20-meter thorny rope across crop canopy to dislodge larvae.',
              chemicalControl: 'Flubendiamide 20% WG @ 50g/acre or Azadirachtin 10,000 PPM @ 2ml/L.'
            }
          ],
          preventiveTips: [
            'Install Light Traps near field borders between 7:00 PM – 9:00 PM to catch adult moths.',
            'Avoid excessive Nitrogen urea top dressing which creates lush foliage attractive to stem borer moths.',
            'Maintain T-shaped bird perches @ 20/acre to encourage natural predator birds.'
          ]
        });
      }, 400);
    });
  }
};
