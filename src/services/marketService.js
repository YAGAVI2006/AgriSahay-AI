// Smart Market Intelligence Service (Phase 2 Mandi Prices including Leafy Greens)

export const marketService = {
  getMarketIntelligence: async (location) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const district = location.district || 'Karur';
        
        resolve({
          bestMarket: `${district} Regulated Market Yard & Vegetable Mandi (கரூர் உழவர் சந்தை & காய்கறி மார்க்கெட்)`,
          aiRecommendation: "HIGH DEMAND — Coriander (கொத்தமல்லி) & Mint (புதினா) prices up by +12% due to local hotel & market demand. Paddy & Groundnut prices remain strong.",
          markets: [
            {
              id: 'm-1',
              name: 'Karur Regulated Market & Uzhavar Sandhai',
              location: 'Thanthoni, Karur',
              distance: '3.8 km',
              commodities: [
                { crop: 'Coriander / Kothamalli (1 kg)', pricePerQuintal: 3800, change: '+12.5%', trend: 'up' },
                { crop: 'Mint / Pudina (1 kg)', pricePerQuintal: 3200, change: '+8.4%', trend: 'up' },
                { crop: 'Amaranthus Keerai (100 Bundles)', pricePerQuintal: 1800, change: '+5.2%', trend: 'up' },
                { crop: 'Paddy (ADT 45 / Qtl)', pricePerQuintal: 2280, change: '+4.5%', trend: 'up' },
                { crop: 'Groundnut (Pods / Qtl)', pricePerQuintal: 6850, change: '+6.2%', trend: 'up' }
              ]
            },
            {
              id: 'm-2',
              name: 'Kulithalai Vegetable & Grain Market',
              location: 'Kulithalai, Karur',
              distance: '18.5 km',
              commodities: [
                { crop: 'Coriander Greens (1 kg)', pricePerQuintal: 3950, change: '+14.0%', trend: 'up' },
                { crop: 'Fenugreek Leaves (100 Bundles)', pricePerQuintal: 1650, change: '+4.0%', trend: 'up' },
                { crop: 'Banana (Grand Naine / Qtl)', pricePerQuintal: 18500, change: '+3.4%', trend: 'up' }
              ]
            },
            {
              id: 'm-3',
              name: 'Tiruchirappalli Gandhi Market',
              location: 'Trichy Main',
              distance: '45.0 km',
              commodities: [
                { crop: 'Mint Leaves (Pudina / Qtl)', pricePerQuintal: 3400, change: '+10.2%', trend: 'up' },
                { crop: 'Tomato (25kg Crate)', pricePerQuintal: 850, change: '+8.5%', trend: 'up' },
                { crop: 'Small Onion (Shallot / Qtl)', pricePerQuintal: 3400, change: '+4.2%', trend: 'up' }
              ]
            }
          ],
          priceTrendHistory: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4 (Current)'],
            paddyPrices: [2150, 2190, 2220, 2280],
            groundnutPrices: [6400, 6550, 6700, 6850],
            cottonPrices: [7200, 7300, 7350, 7420]
          }
        });
      }, 350);
    });
  }
};
