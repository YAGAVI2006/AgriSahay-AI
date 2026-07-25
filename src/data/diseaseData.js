export const ALL_CROP_DISEASES = {
  coriander: {
    cropName: 'Coriander / Kothamalli (கொத்தமல்லி)',
    cropIcon: '🌿',
    identifiedPlant: 'Coriander Plant (கொத்தமல்லி செடி)',
    botanicalName: 'Coriandrum sativum',
    cropType: 'Spices & Culinary Leafy Greens',
    diseaseName: 'Coriander Stem Gall / Leaf Blight (கொத்தமல்லி தண்டு வீக்கம் / இலை கருகல்)',
    scientificName: 'Protomyces macrosporus',
    confidenceScore: 97.2,
    severity: 'High in Damp Moisture',
    affectedPart: 'Stems, Leaf Petioles & Leaves',
    symptoms: [
      'Tumor-like gall swellings on stems and leaf petioles',
      'Water-soaked dark spots on tender green coriander foliage',
      'Wilted stalks and reduced aromatic leaf yield'
    ],
    organicTreatment: [
      'Seed treatment with Pseudomonas fluorescens (10g/kg seed)',
      'Spray Cow Urine (10%) + Neem Seed Kernel Extract (5%) at 10-day intervals'
    ],
    chemicalTreatment: [
      'Spray Copper Oxychloride 50% WP @ 2g/L or Carbendazim @ 1g/L water',
      'Treat seeds with Thiram @ 3g/kg before sowing'
    ],
    preventionTips: [
      'Sow coriander on raised beds to ensure rapid water drainage',
      'Rotate crop with pulses or maize',
      'Avoid high density crowding of coriander seedlings'
    ]
  },

  mint: {
    cropName: 'Mint / Pudina (புதினா)',
    cropIcon: '🌱',
    identifiedPlant: 'Mint Plant (புதினா செடி)',
    botanicalName: 'Mentha arvensis',
    cropType: 'Culinary Herb & Leafy Green',
    diseaseName: 'Mint Leaf Rust & Powdery Mildew (புதினா துரு நோய்)',
    scientificName: 'Puccinia menthae',
    confidenceScore: 96.8,
    severity: 'Moderate (Foliar Canopy Damage)',
    affectedPart: 'Under Surface of Mint Leaves',
    symptoms: [
      'Orange-yellow dusty rust pustules on lower leaf surface',
      'Lower leaves turn brown, dry up and drop prematurely',
      'Stunted stem growth and reduced aromatic mint oil'
    ],
    organicTreatment: [
      'Spray Panchagavya 3% or Neem Oil 5ml/L water at 7-day intervals',
      'Apply Bio-fungicide Trichoderma viride @ 5g/L'
    ],
    chemicalTreatment: [
      'Sulfur 80% WP @ 2g/L or Mancozeb 75% WP @ 2g/L water',
      'Avoid spraying chemicals within 7 days of harvest'
    ],
    preventionTips: [
      'Use sprinkler/drip irrigation early in the morning so foliage dries quickly',
      'Trim mint stalks every 25 days to avoid dense overcrowding'
    ]
  },

  keerai: {
    cropName: 'Amaranthus Spinach / Keerai (அரைக்கீரை / சிறுகீரை)',
    cropIcon: '🥬',
    identifiedPlant: 'Amaranthus Keerai (கீரை பயிர்)',
    botanicalName: 'Amaranthus tricolor',
    cropType: 'Leafy Green Vegetable',
    diseaseName: 'Amaranthus White Rust & Leaf Blight (கீரை வெண் புள்ளி நோய்)',
    scientificName: 'Albugo candida',
    confidenceScore: 96.5,
    severity: 'Moderate',
    affectedPart: 'Leaf Blades',
    symptoms: [
      'White to cream colored shiny pustules on lower leaf surface',
      'Yellow chlorotic patches on upper leaf surface',
      'Distorted leaf blades making leaves unmarketable'
    ],
    organicTreatment: [
      'Spray Neem Oil 3% or Cow dung extract (10%)',
      'Apply Pseudomonas fluorescens 10g/L water'
    ],
    chemicalTreatment: [
      'Copper Oxychloride @ 2g/L or Mancozeb @ 2g/L water'
    ],
    preventionTips: [
      'Avoid overhead watering in evening hours',
      'Maintain 25-day quick harvest cycle'
    ]
  },

  fenugreek_greens: {
    cropName: 'Fenugreek Leaves / Venthaya Keerai (வெந்தயக் கீரை)',
    cropIcon: '☘️',
    identifiedPlant: 'Fenugreek Plant (வெந்தயக் கீரை செடி)',
    botanicalName: 'Trigonella foenum-graecum',
    cropType: 'Micro Greens',
    diseaseName: 'Fenugreek Powdery Mildew (சாம்பல் நோய்)',
    scientificName: 'Erysiphe polygoni',
    confidenceScore: 95.9,
    severity: 'Moderate',
    affectedPart: 'Upper Leaf Surface',
    symptoms: ['White powdery flour-like growth on tender leaves', 'Leaves turn yellow and dry up.'],
    organicTreatment: ['Foliar spray of Sour Milk/Butter Milk 5% or Neem Oil 3ml/L.'],
    chemicalTreatment: ['Wettable Sulfur 80% WP @ 2g/L.'],
    preventionTips: ['Ensure proper sunlight exposure and well-drained raised beds.']
  },

  moringa_greens: {
    cropName: 'Moringa / Drumstick Leaves (முருங்கைக்கீரை)',
    cropIcon: '🍃',
    identifiedPlant: 'Moringa Tree (முருங்கை மரம்)',
    botanicalName: 'Moringa oleifera',
    cropType: 'Perennial Greens',
    diseaseName: 'Moringa Leaf Spot & Dieback (முருங்கை இலைப்புள்ளி நோய்)',
    scientificName: 'Cercospora moringae',
    confidenceScore: 96.1,
    severity: 'Low to Moderate',
    affectedPart: 'Tender Leaves & Leaflets',
    symptoms: ['Brown circular spots with greyish centers on leaflets', 'Premature leaflet shedding.'],
    organicTreatment: ['Spray Panchagavya 3% or Neem Seed Kernel Extract (5%).'],
    chemicalTreatment: ['Mancozeb 75% WP @ 2g/L.'],
    preventionTips: ['Prune dried branches post monsoon harvest.']
  },

  paddy: {
    cropName: 'Paddy / Rice (நெல்)',
    cropIcon: '🌾',
    identifiedPlant: 'Paddy / Rice Plant (நெல் பயிர்)',
    botanicalName: 'Oryza sativa',
    cropType: 'Cereal Crop',
    diseaseName: 'Paddy Bacterial Leaf Blight (நெல் பாக்டீரியா இலை கருகல் நோய்)',
    scientificName: 'Xanthomonas oryzae pv. oryzae',
    confidenceScore: 96.8,
    severity: 'Severe (High Risk in Humidity)',
    affectedPart: 'Leaf Blades & Margins',
    symptoms: [
      'Wavy, water-soaked yellowish streaks starting from leaf margins',
      'Leaves turn white to grey and dry out rapidly',
      'Milky bacterial ooze drops visible on cut leaf tips under morning dew'
    ],
    organicTreatment: [
      'Apply Fresh Cow Dung Extract (20% concentration) filtered foliar spray',
      'Drain stagnant paddy water for 3-4 days to lower canopy humidity',
      'Apply Bio-control Pseudomonas fluorescens @ 10g/L water'
    ],
    chemicalTreatment: [
      'Streptocycline (6g) + Copper Oxychloride 50% WP (500g) in 200L water per acre',
      'Avoid excess Nitrogen urea fertilizer application during disease spread'
    ],
    preventionTips: [
      'Plant BLB resistant varieties like ADT 45, ADT 53, Improved Samba Mahsuri',
      'Avoid clipping leaf tips during seedling transplanting',
      'Keep paddy bunds free of weed hosts'
    ]
  },

  sugarcane: {
    cropName: 'Sugarcane (கரும்பு)',
    cropIcon: '🎋',
    identifiedPlant: 'Sugarcane Plant (கரும்பு பயிர்)',
    botanicalName: 'Saccharum officinarum',
    cropType: 'Commercial Cash Crop',
    diseaseName: 'Sugarcane Red Rot (கரும்பு செவ்வழுகல் நோய்)',
    scientificName: 'Colletotrichum falcatum',
    confidenceScore: 95.4,
    severity: 'Critical (Cane Internal Damage)',
    affectedPart: 'Internal Stalk & Midrib',
    symptoms: [
      'Third or fourth leaf yellowing and drying from margins',
      'Internal stalk tissue turns dull red with white transverse bands',
      'Sour alcoholic smell when cane is split open'
    ],
    organicTreatment: ['Uproot and burn infected cane clumps.', 'Soil application of Trichoderma viride with FYM.'],
    chemicalTreatment: ['Sett treatment with Carbendazim 50% WP @ 2g/L before planting.'],
    preventionTips: ['Plant resistant Co 0212 / CoC 24 sugarcane varieties.']
  },

  banana: {
    cropName: 'Banana (வாழை)',
    cropIcon: '🍌',
    identifiedPlant: 'Banana Plant (வாழை மரம்)',
    botanicalName: 'Musa acuminata',
    cropType: 'Fruit Crop',
    diseaseName: 'Sigatoka Yellow Leaf Spot (வாழை இலை கருகல் நோய்)',
    scientificName: 'Mycosphaerella fijiensis',
    confidenceScore: 96.6,
    severity: 'High (Foliar Loss)',
    affectedPart: 'Older Lower Leaves',
    symptoms: [
      'Small pale yellow streaks parallel to leaf veins',
      'Streaks enlarge into dark brown spots with yellow halos',
      'Premature leaf destruction causing small banana bunches'
    ],
    organicTreatment: ['Prune lower yellow infected leaves.', 'Spray Mineral Oil 1% formulation.'],
    chemicalTreatment: ['Propiconazole 25% EC (Tilt) @ 1ml/L with spreader sticker.'],
    preventionTips: ['Ensure good field drainage and prune unwanted suckers.']
  },

  coconut: {
    cropName: 'Coconut (தென்னை)',
    cropIcon: '🥥',
    identifiedPlant: 'Coconut Palm (தென்னை மரம்)',
    botanicalName: 'Cocos nucifera',
    cropType: 'Perennial Plantation Crop',
    diseaseName: 'Coconut Bud Rot & Tanjore Wilt (தென்னை குருத்தழுகல் / தஞ்சாவூர் வாடல்)',
    scientificName: 'Phytophthora palmivora',
    confidenceScore: 94.8,
    severity: 'High',
    affectedPart: 'Heart Palm Shoot & Roots',
    symptoms: ['Yellowing and drooping of spear leaf', 'Foul smelling rotting of internal central bud'],
    organicTreatment: ['Apply Neem Cake 5kg/tree + Pseudomonas fluorescens 50g/tree.'],
    chemicalTreatment: ['Place Copper Oxychloride sachet (50g) in leaf axil near spear.'],
    preventionTips: ['Provide proper basin drainage before monsoons.']
  },

  groundnut: {
    cropName: 'Groundnut (நிலக்கடலை)',
    cropIcon: '🥜',
    identifiedPlant: 'Groundnut Plant (நிலக்கடலை செடி)',
    botanicalName: 'Arachis hypogaea',
    cropType: 'Oilseed Crop',
    diseaseName: 'Tikka Leaf Spot (நிலக்கடலை டிக்கா இலைப்புள்ளி நோய்)',
    scientificName: 'Cercospora arachidicola',
    confidenceScore: 95.7,
    severity: 'Moderate',
    affectedPart: 'Leaf Blades',
    symptoms: ['Circular dark brown spots with yellow chlorotic halos', 'Defoliation of lower leaves.'],
    organicTreatment: ['Foliar spray of Panchagavya 3% or Neem seed kernel extract 5%.'],
    chemicalTreatment: ['Mancozeb 75% WP @ 2g/L or Carbendazim @ 1g/L water.'],
    preventionTips: ['Apply Gypsum (160kg/acre) on 45th day for firm pods.']
  },

  cotton: {
    cropName: 'Cotton (பருத்தி)',
    cropIcon: '☁️',
    identifiedPlant: 'Cotton Plant (பருத்தி செடி)',
    botanicalName: 'Gossypium hirsutum',
    cropType: 'Fiber Crop',
    diseaseName: 'Cotton Leaf Curl Virus (பருத்தி இலை சுருட்டு நோய்)',
    scientificName: 'Begomovirus',
    confidenceScore: 93.8,
    severity: 'Moderate',
    affectedPart: 'Young Leaves',
    symptoms: ['Upward and downward leaf margin curling', 'Thickening of leaf veins on lower surface'],
    organicTreatment: ['Yellow sticky traps (15/acre) to trap Whitefly vectors.', 'Neem oil 3ml/L spray.'],
    chemicalTreatment: ['Afidopyropen 50 g/L @ 2ml/L or Imidacloprid 0.5ml/L.'],
    preventionTips: ['Sow tolerant Bt Cotton hybrids.']
  },

  maize: {
    cropName: 'Maize / Corn (மக்காச்சோளம்)',
    cropIcon: '🌽',
    identifiedPlant: 'Maize Plant (மக்காச்சோளம் பயிர்)',
    botanicalName: 'Zea mays',
    cropType: 'Grain Crop',
    diseaseName: 'Maize Maydis Leaf Blight & Fall Armyworm (இலை கருகல் / படைப்புழு)',
    scientificName: 'Helminthosporium maydis',
    confidenceScore: 95.2,
    severity: 'High',
    affectedPart: 'Leaves & Whorl',
    symptoms: ['Elongated rectangular straw colored leaf spots', 'Shot-hole feeding damage in leaf whorls'],
    organicTreatment: ['Apply Neem Cake + Metarhizium anisopliae bio-insecticide.'],
    chemicalTreatment: ['Chlorantraniliprole 18.5% SC @ 0.4ml/L in leaf whorl.'],
    preventionTips: ['Sow early post monsoon.']
  },

  turmeric: {
    cropName: 'Turmeric (மஞ்சள்)',
    cropIcon: '🟡',
    identifiedPlant: 'Turmeric Plant (மஞ்சள் பயிர்)',
    botanicalName: 'Curcuma longa',
    cropType: 'Spices Rhizome Crop',
    diseaseName: 'Turmeric Leaf Spot & Rhizome Rot (மஞ்சள் இலைப்புள்ளி / கிழங்கழுகல்)',
    scientificName: 'Taphrina maculans',
    confidenceScore: 96.0,
    severity: 'Moderate to High',
    affectedPart: 'Leaves & Rhizome',
    symptoms: ['Reddish brown rectangular spots on upper leaf surface', 'Soft rotting rhizomes with foul smell'],
    organicTreatment: ['Soil drenching Trichoderma viride @ 2.5kg/acre.'],
    chemicalTreatment: ['Mancozeb 2g/L or Copper Oxychloride 2.5g/L.'],
    preventionTips: ['Plant on raised ridges to avoid water stagnation.']
  },

  tomato: {
    cropName: 'Tomato (தக்காளி)',
    cropIcon: '🍅',
    identifiedPlant: 'Tomato Plant (தக்காளி செடி)',
    botanicalName: 'Solanum lycopersicum',
    cropType: 'Vegetable Crop',
    diseaseName: 'Tomato Early Blight (தக்காளி ஆரம்பகால கருகல்)',
    scientificName: 'Alternaria solani',
    confidenceScore: 96.9,
    severity: 'High',
    affectedPart: 'Lower Leaves & Stems',
    symptoms: ['Concentric bullseye rings on leaves', 'Yellow halos around brown spots'],
    organicTreatment: ['Neem oil 5ml/L spray + Trichoderma viride 5g/L.'],
    chemicalTreatment: ['Mancozeb 75% WP @ 2g/L or Chlorothalonil 2g/L.'],
    preventionTips: ['Prune lower infected leaves up to 1 foot above ground.']
  },

  onion: {
    cropName: 'Small Onion / Shallot (சின்ன வெங்காயம்)',
    cropIcon: '🧅',
    identifiedPlant: 'Small Onion (வெங்காய செடி)',
    botanicalName: 'Allium cepa var. aggregatum',
    cropType: 'Vegetable Bulb Crop',
    diseaseName: 'Onion Purple Blotch (வெங்காயம் ஊதா கருகல் நோய்)',
    scientificName: 'Alternaria porri',
    confidenceScore: 95.8,
    severity: 'High in Humidity',
    affectedPart: 'Tubular Leaves',
    symptoms: ['Small water-soaked lesions turning purple with yellow halos', 'Leaves break and fall over'],
    organicTreatment: ['Spray Cow dung extract 10% + Neem seed kernel extract 5%.'],
    chemicalTreatment: ['Mancozeb 2g/L or Difenoconazole 1ml/L water.'],
    preventionTips: ['Avoid excess nitrogen fertilizer.']
  }
};

export const SAMPLE_DISEASE_GALLERY = [
  {
    id: 'sample-coriander',
    cropName: 'Coriander / Kothamalli (கொத்தமல்லி)',
    cropIcon: '🌿',
    identifiedPlant: 'Coriander Plant (கொத்தமல்லி செடி)',
    botanicalName: 'Coriandrum sativum',
    cropType: 'Spices & Leafy Greens',
    diseaseName: 'Coriander Stem Gall / Leaf Blight (கொத்தமல்லி தண்டு வீக்கம் / இலை கருகல்)',
    scientificName: 'Protomyces macrosporus',
    imageUrl: 'https://images.unsplash.com/photo-1588879460618-9249e7d947d1?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 97.2,
    severity: 'High in Damp Soil',
    affectedPart: 'Stems & Leaf Blades',
    symptoms: [
      'Tumor-like gall swellings on stems, leaf petioles and flower pedicels',
      'Water-soaked dark lesions on tender green coriander leaves',
      'Wilted stalks and reduced leafy biomass'
    ],
    organicTreatment: [
      'Seed treatment with Pseudomonas fluorescens (10g/kg seed)',
      'Spray Cow Urine (10%) + Neem Seed Kernel Extract (5%)'
    ],
    chemicalTreatment: [
      'Spray Copper Oxychloride @ 2g/L or Carbendazim @ 1g/L water',
      'Treat seeds with Thiram @ 3g/kg before sowing'
    ],
    preventionTips: [
      'Sow coriander on raised beds to ensure rapid water drainage',
      'Rotate crop with non-umbelliferous crops like pulses or maize'
    ]
  },
  {
    id: 'sample-mint',
    cropName: 'Mint / Pudina (புதினா)',
    cropIcon: '🌱',
    identifiedPlant: 'Mint Plant (புதினா செடி)',
    botanicalName: 'Mentha arvensis',
    cropType: 'Culinary Herb & Leafy Green',
    diseaseName: 'Mint Leaf Rust & Powdery Mildew (புதினா துரு நோய்)',
    scientificName: 'Puccinia menthae',
    imageUrl: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 96.8,
    severity: 'Moderate (Foliar Damage)',
    affectedPart: 'Under Surface of Mint Leaves',
    symptoms: [
      'Orange-yellow dusty pustules on lower side of mint leaves',
      'Lower leaves turn brown, dry up and drop prematurely',
      'Stunted stem growth and reduced aromatic oil smell'
    ],
    organicTreatment: [
      'Spray Panchagavya 3% or Neem Oil 5ml/L water at 7-day intervals',
      'Apply Bio-fungicide Trichoderma viride @ 5g/L'
    ],
    chemicalTreatment: [
      'Sulfur 80% WP @ 2g/L or Mancozeb 75% WP @ 2g/L water'
    ],
    preventionTips: [
      'Use sprinkler/drip irrigation early in the morning so foliage dries quickly',
      'Trim mint stalks every 25 days'
    ]
  },
  {
    id: 'sample-paddy',
    cropName: 'Paddy / Rice (நெல்)',
    cropIcon: '🌾',
    identifiedPlant: 'Paddy / Rice Plant (நெல் பயிர்)',
    botanicalName: 'Oryza sativa',
    cropType: 'Cereal Crop',
    diseaseName: 'Bacterial Leaf Blight (பாக்டீரியா இலை கருகல் நோய்)',
    scientificName: 'Xanthomonas oryzae pv. oryzae',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 96.8,
    severity: 'Severe (High Risk in Humidity)',
    affectedPart: 'Leaf Blades & Margins',
    symptoms: [
      'Wavy, water-soaked yellowish streaks starting from leaf margins',
      'Leaves turn white to grey and dry out rapidly'
    ],
    organicTreatment: [
      'Apply Fresh Cow Dung Extract (20% concentration) filtered spray',
      'Apply Bio-control Pseudomonas fluorescens @ 10g/L water'
    ],
    chemicalTreatment: [
      'Streptocycline (6g) + Copper Oxychloride 50% WP (500g) in 200L water per acre'
    ],
    preventionTips: [
      'Plant BLB resistant varieties like ADT 45, ADT 53'
    ]
  },
  {
    id: 'sample-banana',
    cropName: 'Banana (வாழை)',
    cropIcon: '🍌',
    identifiedPlant: 'Banana Plant (வாழை மரம்)',
    botanicalName: 'Musa acuminata',
    cropType: 'Horticultural Fruit Crop',
    diseaseName: 'Sigatoka Yellow Leaf Spot (வாழை இலை கருகல் நோய்)',
    scientificName: 'Mycosphaerella fijiensis',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 96.6,
    severity: 'High (Foliar Loss)',
    affectedPart: 'Older Lower Leaves',
    symptoms: [
      'Small pale yellowish streaks parallel to banana leaf veins',
      'Streaks enlarge into dark brown spots with bright yellow halos'
    ],
    organicTreatment: [
      'Prune and burn severely infected lower yellow leaves',
      'Foliar spray of Mineral Oil formulation (10ml/L water)'
    ],
    chemicalTreatment: [
      'Propiconazole 25% EC (Tilt) @ 1ml/L water with sticker'
    ],
    preventionTips: [
      'Ensure proper field drainage and regular sucker removal'
    ]
  },
  {
    id: 'sample-tomato',
    cropName: 'Tomato (தக்காளி)',
    cropIcon: '🍅',
    identifiedPlant: 'Tomato Plant (தக்காளி செடி)',
    botanicalName: 'Solanum lycopersicum',
    cropType: 'Vegetable Crop',
    diseaseName: 'Tomato Early Blight (தக்காளி ஆரம்பகால கருகல்)',
    scientificName: 'Alternaria solani',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 96.9,
    severity: 'High',
    affectedPart: 'Leaves & Fruit Stem',
    symptoms: [
      'Concentric dark rings (bullseye pattern) on lower foliage',
      'Yellow halo surrounding brownish leaf spots'
    ],
    organicTreatment: [
      'Spray Neem Oil solution (5ml/L water) every 7 days',
      'Apply Trichoderma viride 5g/L'
    ],
    chemicalTreatment: [
      'Mancozeb 75% WP @ 2g per liter of water'
    ],
    preventionTips: [
      'Maintain 2-foot plant spacing for proper airflow'
    ]
  },
  {
    id: 'sample-groundnut',
    cropName: 'Groundnut (நிலக்கடலை)',
    cropIcon: '🥜',
    identifiedPlant: 'Groundnut Plant (நிலக்கடலை செடி)',
    botanicalName: 'Arachis hypogaea',
    cropType: 'Oilseed Crop',
    diseaseName: 'Tikka Leaf Spot (நிலக்கடலை டிக்கா இலைப்புள்ளி நோய்)',
    scientificName: 'Cercospora arachidicola',
    imageUrl: 'https://images.unsplash.com/photo-1599818610589-a2a1975e533e?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 95.7,
    severity: 'Moderate',
    affectedPart: 'Leaf Surface',
    symptoms: [
      'Circular dark brown spots with yellow chlorotic halos on leaves',
      'Defoliation of lower leaves reducing pod filling yield'
    ],
    organicTreatment: [
      'Spray Neem seed kernel extract (NSKE 5%)',
      'Foliar spray of Panchagavya 3%'
    ],
    chemicalTreatment: [
      'Spray Mancozeb 75% WP @ 2g/L or Carbendazim @ 1g/L water'
    ],
    preventionTips: [
      'Apply Gypsum (160kg/acre) on 45th day for pod firmness'
    ]
  }
];
