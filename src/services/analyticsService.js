// Advanced Analytics Service (Phase 3)

export const analyticsService = {
  getAnalyticsOverview: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          cropPerformance: [
            { crop: 'Paddy', yieldTonnes: 3.2, revenue: 72960, satisfaction: '96%' },
            { crop: 'Coriander / Kothamalli', yieldTonnes: 2.8, revenue: 106400, satisfaction: '98%' },
            { crop: 'Banana', yieldTonnes: 24.5, revenue: 441000, satisfaction: '94%' },
            { crop: 'Groundnut', yieldTonnes: 1.4, revenue: 95900, satisfaction: '92%' }
          ],
          diseaseScansSummary: {
            totalScans: 148,
            detectedDiseases: [
              { name: 'Bacterial Leaf Blight', count: 52 },
              { name: 'Sigatoka Leaf Spot', count: 38 },
              { name: 'Tomato Early Blight', count: 28 },
              { name: 'Tikka Spot', count: 30 }
            ]
          },
          schemeApplications: {
            totalSubmitted: 42,
            approved: 38,
            pending: 4,
            sanctionedAmount: '₹14.8 Lakhs'
          }
        });
      }, 400);
    });
  }
};
