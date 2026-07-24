export const SAMPLE_DISEASE_GALLERY = [
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
    confidenceScore: 97.4,
    severity: 'Moderate (Foliar Damage)',
    affectedPart: 'Under Surface of Mint Leaves & Stems',
    symptoms: [
      'Orange-yellow dusty pustules on lower side of mint leaves',
      'Lower leaves turn brown, dry up and drop prematurely',
      'Stunted stem growth and reduced aromatic oil smell'
    ],
    organicTreatment: [
      'Spray Panchagavya 3% or Neem Oil 5ml/L water at 7-day intervals',
      'Apply Bio-fungicide Trichoderma viride @ 5g/L',
      'Harvest mature mint stalks early to prevent rust spore multiplication'
    ],
    chemicalTreatment: [
      'Sulfur 80% WP @ 2g/L or Mancozeb 75% WP @ 2g/L water',
      'Avoid spraying chemicals within 7 days of harvest'
    ],
    preventionTips: [
      'Use sprinkler/drip irrigation early in the morning so foliage dries quickly',
      'Avoid overcrowding mint suckers; trim every 25 days',
      'Apply organic vermicompost 2 tonnes/acre after each harvest'
    ]
  },
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
    confidenceScore: 96.8,
    severity: 'High in Damp Soil',
    affectedPart: 'Stems, Leaf Petioles & Flowers',
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
      'Rotate crop with non-umbelliferous crops like pulses or maize',
      'Use certified disease-free coriander seed varieties'
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
    confidenceScore: 95.8,
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
    confidenceScore: 96.2,
    severity: 'High (Foliar Canopy Loss)',
    affectedPart: 'Older Lower Leaves',
    symptoms: [
      'Small pale yellowish streaks parallel to banana leaf veins',
      'Streaks enlarge into dark brown or black reddish spots with bright yellow halos',
      'Premature leaf destruction causing small, unmarketable banana bunches'
    ],
    organicTreatment: [
      'Prune and burn severely infected lower yellow leaves',
      'Foliar spray of Mineral Oil formulation (10ml/L water)',
      'Apply Soil bio-drenching of Trichoderma harzianum @ 2.5 kg/acre'
    ],
    chemicalTreatment: [
      'Propiconazole 25% EC (Tilt) @ 1ml/L water with sticker (Spreader)',
      'Carbendazim 50% WP @ 1g/L alternating with Mancozeb 2g/L'
    ],
    preventionTips: [
      'Ensure proper field drainage to prevent moisture stagnation',
      'Maintain recommended 6ft x 6ft spacing for air circulation',
      'Remove unwanted suckers regularly to keep canopy ventilated'
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
    confidenceScore: 96.4,
    severity: 'High (Moderate Spread)',
    affectedPart: 'Leaves & Fruit Stem',
    symptoms: [
      'Concentric dark rings (bullseye pattern) on lower foliage',
      'Yellow halo surrounding brownish leaf spots',
      'Premature leaf drop starting from the bottom of the plant'
    ],
    organicTreatment: [
      'Spray Neem Oil solution (5ml/L water) every 7 days',
      'Apply Copper-based bio-fungicide (Trichoderma viride 5g/L)',
      'Prune lower infected leaves up to 12 inches from ground'
    ],
    chemicalTreatment: [
      'Mancozeb 75% WP @ 2g per liter of water',
      'Chlorothalonil 75% WP @ 2g/L or Azoxystrobin 23% SC @ 1ml/L'
    ],
    preventionTips: [
      'Maintain 2-foot plant spacing for proper airflow',
      'Use drip irrigation instead of overhead watering to keep leaves dry',
      'Rotate crop with non-solanaceous crops like maize or legumes'
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
    confidenceScore: 93.9,
    severity: 'Moderate',
    affectedPart: 'Leaf Surface',
    symptoms: [
      'Circular dark brown spots with yellow chlorotic halos on leaves',
      'Defoliation of lower leaves reducing pod filling yield',
      'Lesions appearing on stems and petioles'
    ],
    organicTreatment: [
      'Spray Neem seed kernel extract (NSKE 5%)',
      'Foliar spray of Panchagavya 3% at 15-day intervals'
    ],
    chemicalTreatment: [
      'Spray Mancozeb 75% WP @ 2g/L or Carbendazim @ 1g/L water',
      'Tebuconazole 25.9% EC @ 1ml/L'
    ],
    preventionTips: [
      'Treat seeds with Trichoderma viride (4g/kg seed) before sowing',
      'Apply recommended Gypsum (160kg/acre) for pod firmness',
      'Burn crop residues post harvest'
    ]
  }
];
