// Comprehensive Plant-Specific AI Fertilizer Engine for all 15 Tamil Nadu Crops & Greens

export const FERTILIZER_DATABASE_BY_PLANT = {
  coriander: {
    plantName: 'Coriander / Kothamalli (கொத்தமல்லி)',
    icon: '🌿',
    growthCycle: '30 - 35 Days Short Crop',
    recommendations: [
      {
        type: 'Organic Vermicompost (மண்புழு உரம்)',
        quantityKg: 500,
        unit: 'kg / Acre',
        schedule: 'Basal Application during bed preparation',
        purpose: 'Improves soil structure, moisture retention & provides organic Nitrogen for rapid leaf germination.'
      },
      {
        type: 'Panchagavya Organic Foliar Spray (பஞ்சகவ்யா 3%)',
        quantityKg: 6,
        unit: 'Liters / Acre (30ml per 1L water)',
        schedule: '15th Day post-emergence',
        purpose: 'Boosts lush green leaf area, enhances aromatic coriander flavor & increases leafy yield by +40%.'
      },
      {
        type: 'Azospirillum & Phosphobacteria Bio-fertilizers',
        quantityKg: 2,
        unit: 'kg / Acre',
        schedule: 'Seed treatment (25g/kg seed) before sowing',
        purpose: 'Fixes atmospheric Nitrogen and solubilizes soil Phosphorus naturally.'
      }
    ],
    safetyTips: [
      'Avoid high dose chemical Nitrogen (Urea) to prevent leaf scorching.',
      'Spray Panchagavya in early morning (6 AM - 8 AM) or evening hours.'
    ]
  },

  mint: {
    plantName: 'Mint / Pudina (புதினா)',
    icon: '🌱',
    growthCycle: '45 Days Initial / Multi-cut Perennial',
    recommendations: [
      {
        type: 'Neem-Coated Urea (நீம் பூசப்பட்ட யூரியா)',
        quantityKg: 20,
        unit: 'kg / Acre',
        schedule: 'Top dressing after every leaf harvest cutting',
        purpose: 'Stimulates rapid fresh shoot flushing and vibrant green leaf regeneration.'
      },
      {
        type: 'Organic Vermicompost (மண்புழு உரம்)',
        quantityKg: 400,
        unit: 'kg / Acre',
        schedule: 'Apply after every cutting around root zone',
        purpose: 'Replenishes soil organic carbon and promotes healthy sucker growth.'
      },
      {
        type: 'Micronutrient Spray (Zinc + Iron Sulphate 0.5%)',
        quantityKg: 1,
        unit: 'kg / Acre',
        schedule: '20th day after cutting',
        purpose: 'Prevents leaf chlorosis and yellowing between veins.'
      }
    ],
    safetyTips: [
      'Irrigate field immediately after Urea top dressing.',
      'Maintain moist soil conditions without waterlogging.'
    ]
  },

  keerai: {
    plantName: 'Amaranthus Spinach / Keerai (அரைக்கீரை / சிறுகீரை)',
    icon: '🥬',
    growthCycle: '25 - 28 Days Fast Greens',
    recommendations: [
      {
        type: 'Well-Rotted Farmyard Manure (FYM / தொழுவுரம்)',
        quantityKg: 1000,
        unit: 'kg / Acre',
        schedule: 'Basal incorporation before seed sowing',
        purpose: 'Provides balanced organic plant nutrients without chemical residues.'
      },
      {
        type: 'Jeevamrutham / Panchagavya Spray (ஜீவாமிர்தம் / பஞ்சகவ்யா)',
        quantityKg: 10,
        unit: 'Liters / Acre',
        schedule: '12th and 20th day foliar spray',
        purpose: 'Ensures glossy, chemical-free, high quality green leaves ready for market.'
      }
    ],
    safetyTips: [
      'Do not apply chemical pesticides or fertilizers on leafy greens near harvest time.'
    ]
  },

  fenugreek_greens: {
    plantName: 'Fenugreek Leaves / Venthaya Keerai (வெந்தயக் கீரை)',
    icon: '☘️',
    growthCycle: '20 - 25 Days Micro Greens',
    recommendations: [
      {
        type: 'Enriched Compost & Bio-Fertilizer Mix',
        quantityKg: 300,
        unit: 'kg / Acre',
        schedule: 'Basal seed bed incorporation',
        purpose: 'Ensures uniform rapid seed sprouting in 3 days and tender stem growth.'
      },
      {
        type: 'Foliar Spray of Cow Urine (10% solution)',
        quantityKg: 5,
        unit: 'Liters / Acre',
        schedule: '14th day post-sowing',
        purpose: 'Acts as natural bio-booster for chlorophyll and natural pest repellent.'
      }
    ],
    safetyTips: ['Irrigate with light fine mist spray.']
  },

  moringa_greens: {
    plantName: 'Moringa / Drumstick Leaves (முருங்கைக்கீரை)',
    icon: '🍃',
    growthCycle: 'Perennial Tree Greens',
    recommendations: [
      {
        type: 'Farmyard Manure (FYM) + Neem Cake',
        quantityKg: 10,
        unit: 'kg / Tree annually',
        schedule: 'Apply during monsoon onset (June/July)',
        purpose: 'Protects root zone from nematodes and provides steady organic nutrition.'
      },
      {
        type: 'NPK 17:17:17 + Potash (MOP)',
        quantityKg: 150,
        unit: 'g / Tree split dose',
        schedule: 'Post leaf pruning cutting',
        purpose: 'Triggers dense branching and tender vitamin-rich green leaf clusters.'
      }
    ],
    safetyTips: ['Prune tree canopy height at 6 feet for easy leaf harvesting.']
  },

  paddy: {
    plantName: 'Paddy / Rice (நெல்)',
    icon: '🌾',
    growthCycle: '120 Days Cereal Crop',
    recommendations: [
      {
        type: 'Single Super Phosphate (SSP) / DAP + Zinc Sulphate',
        quantityKg: 50,
        unit: 'kg / Acre',
        schedule: 'Basal application during last puddling',
        purpose: 'Promotes deep root anchorage and prevents Khaira zinc deficiency.'
      },
      {
        type: 'Neem-Coated Urea + Muriate of Potash (MOP)',
        quantityKg: 40,
        unit: 'kg / Acre',
        schedule: 'Split doses (21st day tillering + 45th day panicle emergence)',
        purpose: 'Increases fertile tillers per hill and grain filling weight.'
      }
    ],
    safetyTips: ['Drain excess standing water before broadcasting Urea top dressing.']
  },

  sugarcane: {
    plantName: 'Sugarcane (கரும்பு)',
    icon: '🎋',
    growthCycle: '330 Days Commercial Cash Crop',
    recommendations: [
      {
        type: 'Pressmud Compost + DAP',
        quantityKg: 100,
        unit: 'kg / Acre',
        schedule: 'Basal application in planting trenches',
        purpose: 'Promotes early eye bud sprouting and deep rooting.'
      },
      {
        type: 'Neem-Coated Urea + MOP Potash',
        quantityKg: 75,
        unit: 'kg / Acre',
        schedule: 'Split into 45th, 90th and 135th day earthing-up stages',
        purpose: 'Increases cane thickness, height and sugar Brix content.'
      }
    ],
    safetyTips: ['Earth up soil around cane roots after applying second Urea dose.']
  },

  banana: {
    plantName: 'Banana (வாழை)',
    icon: '🍌',
    growthCycle: '360 Days Fruit Crop',
    recommendations: [
      {
        type: 'Urea (110g) + DAP (70g) + Potash (330g) per plant',
        quantityKg: 120,
        unit: 'kg / Acre total split dose',
        schedule: 'Split into 5 doses (3rd, 5th, 7th, 9th month)',
        purpose: 'Maximizes bunch weight, finger length and sweetness.'
      }
    ],
    safetyTips: ['Apply fertilizer in a ring 1.5 feet away from pseudostem.']
  },

  coconut: {
    plantName: 'Coconut (தென்னை)',
    icon: '🥥',
    growthCycle: 'Perennial Palm Tree',
    recommendations: [
      {
        type: 'Compost FYM (50kg) + Neem Cake (5kg) per Palm',
        quantityKg: 50,
        unit: 'kg / Tree annually',
        schedule: 'Biannual application in circular basin (June & Dec)',
        purpose: 'Suppresses root wilt fungus and enhances button nut retention.'
      },
      {
        type: 'NPK 560g N : 320g P : 1200g K per Palm',
        quantityKg: 2.1,
        unit: 'kg / Tree annually',
        schedule: 'Apply in two equal splits post monsoon',
        purpose: 'Boosts copra content and coconut water volume.'
      }
    ],
    safetyTips: ['Apply in 6-foot radius basin around palm trunk and irrigate.']
  },

  groundnut: {
    plantName: 'Groundnut (நிலக்கடலை)',
    icon: '🥜',
    growthCycle: '105 Days Oilseed Crop',
    recommendations: [
      {
        type: 'DAP (25kg) + Potash (20kg) + Single Super Phosphate',
        quantityKg: 45,
        unit: 'kg / Acre',
        schedule: 'Basal application during field ploughing',
        purpose: 'Ensures sturdy seedling emergence and root nodule nitrogen fixation.'
      },
      {
        type: 'Gypsum (ஜிப்சம் - Calcium & Sulphur)',
        quantityKg: 160,
        unit: 'kg / Acre',
        schedule: 'Apply on 45th day near pod zone during earthing-up',
        purpose: 'Essential for shell development and 98% pod filling without pops.'
      }
    ],
    safetyTips: ['Do not disturb soil post peg insertion stage (55th day).']
  },

  cotton: {
    plantName: 'Cotton (பருத்தி)',
    icon: '☁️',
    growthCycle: '160 Days Fiber Crop',
    recommendations: [
      {
        type: 'NPK 60:30:30 kg / Acre + DAP',
        quantityKg: 60,
        unit: 'kg / Acre',
        schedule: 'Split doses at sowing, 45th day and 75th day boll formation',
        purpose: 'Enhances staple lint length and boll weight.'
      }
    ],
    safetyTips: ['Avoid over-fertilizing Nitrogen which induces excessive vegetative leaf growth.']
  },

  maize: {
    plantName: 'Maize / Corn (மக்காச்சோளம்)',
    icon: '🌽',
    growthCycle: '100 Days Grain Crop',
    recommendations: [
      {
        type: 'DAP (50kg) + Urea (35kg) + Potash (25kg)',
        quantityKg: 110,
        unit: 'kg / Acre',
        schedule: 'Basal at sowing + 30th day knee-high stage',
        purpose: 'Increases cob length and kernel grain filling density.'
      }
    ],
    safetyTips: ['Apply Urea when soil has adequate moisture.']
  },

  turmeric: {
    plantName: 'Turmeric (மஞ்சள்)',
    icon: '🟡',
    growthCycle: '270 Days Rhizome Crop',
    recommendations: [
      {
        type: 'Farmyard Manure (10 Tonnes) + Neem Cake (200kg) + NPK',
        quantityKg: 150,
        unit: 'kg / Acre',
        schedule: 'Split doses at 30, 60, 90 and 120 days post planting',
        purpose: 'Increases curcumin percentage and rhizome weight.'
      }
    ],
    safetyTips: ['Earth up raised beds after each fertilizer application.']
  },

  tomato: {
    plantName: 'Tomato (தக்காளி)',
    icon: '🍅',
    growthCycle: '90 Days Vegetable Crop',
    recommendations: [
      {
        type: 'DAP (18:46:0) + Potash (MOP)',
        quantityKg: 50,
        unit: 'kg / Acre',
        schedule: 'Basal application during bed ridges formation',
        purpose: 'Builds strong root structure and thick stem sturdy growth.'
      },
      {
        type: 'NPK 19:19:19 + Calcium Nitrate',
        quantityKg: 5,
        unit: 'kg / Acre (via Drip Fertigation)',
        schedule: '30th to 50th day (Flowering & Fruit set)',
        purpose: 'Prevents Blossom End Rot and promotes firm, glossy red tomatoes.'
      }
    ],
    safetyTips: ['Apply Calcium Nitrate separately from Sulphate fertilizers.']
  },

  onion: {
    plantName: 'Small Onion / Shallot (சின்ன வெங்காயம்)',
    icon: '🧅',
    growthCycle: '95 Days Vegetable Crop',
    recommendations: [
      {
        type: 'DAP (40kg) + Potash (30kg) + Sulphur (10kg)',
        quantityKg: 80,
        unit: 'kg / Acre',
        schedule: 'Basal application before transplanting bulbs',
        purpose: 'Enhances bulb pungency, firmness and extends storage shelf-life.'
      }
    ],
    safetyTips: ['Stop irrigation 10 days prior to bulb harvesting.']
  }
};

export const fertilizerService = {
  getFertilizerDosing: async ({ crop, soilType, growthStage, landSizeAcres }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cropKey = crop ? crop.toLowerCase() : 'coriander';
        const land = parseFloat(landSizeAcres) || 4.5;
        
        const matched = FERTILIZER_DATABASE_BY_PLANT[cropKey] || FERTILIZER_DATABASE_BY_PLANT['coriander'];

        // Scale quantities based on land size
        const scaledRecs = matched.recommendations.map(r => ({
          ...r,
          quantityKg: Math.round(r.quantityKg * (land / 4.5)) || r.quantityKg
        }));

        resolve({
          plantName: matched.plantName,
          icon: matched.icon,
          growthCycle: matched.growthCycle,
          recommendations: scaledRecs,
          safetyTips: matched.safetyTips
        });
      }, 300);
    });
  }
};
