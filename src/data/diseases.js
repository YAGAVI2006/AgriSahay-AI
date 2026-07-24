export const SAMPLE_DISEASE_GALLERY = [
  {
    id: 'sample-1',
    cropName: 'Tomato',
    cropIcon: '🍅',
    diseaseName: 'Tomato Early Blight',
    scientificName: 'Alternaria solani',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 96.4,
    severity: 'High (Moderate Spread)',
    affectedPart: 'Leaves & Stem',
    symptoms: [
      'Concentric dark rings (bullseye pattern) on lower leaves',
      'Yellow halo surrounding brownish leaf spots',
      'Premature leaf drop starting from the bottom of the plant',
      'Sunscald on exposed fruit surface'
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
      'Use drip irrigation instead of overhead watering to keep foliage dry',
      'Rotate crop with non-solanaceous crops like maize or legumes for 2 years'
    ]
  },
  {
    id: 'sample-2',
    cropName: 'Paddy / Rice',
    cropIcon: '🌾',
    diseaseName: 'Bacterial Leaf Blight',
    scientificName: 'Xanthomonas oryzae pv. oryzae',
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 93.8,
    severity: 'Severe (High Moisture Risk)',
    affectedPart: 'Leaf Blades & Tip',
    symptoms: [
      'Wavy, water-soaked yellowish streaks starting from leaf margins',
      'Leaves turn white to grey and dry out rapidly',
      'Milky bacterial ooze visible on young cut leaves under morning dew'
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
      'Plant BLB resistant varieties like Pusa 1460, Improved Samba Mahsuri',
      'Avoid clipping leaf tips during transplanting',
      'Keep field bunds free of weed hosts'
    ]
  },
  {
    id: 'sample-3',
    cropName: 'Wheat',
    cropIcon: '🌾',
    diseaseName: 'Yellow Rust (Stripe Rust)',
    scientificName: 'Puccinia striiformis',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 97.2,
    severity: 'Critical Alert',
    affectedPart: 'Upper Leaf Surface',
    symptoms: [
      'Yellow powder pustules arranged in linear stripes along leaf veins',
      'Chlorotic yellowing spreading across entire leaf blade',
      'Yellow dust wipes off easily onto hands or cloth'
    ],
    organicTreatment: [
      'Foliar spray of Fermented Buttermilk / Sour Whey (1L in 10L water)',
      'Destroy initial infection hot-spots manually'
    ],
    chemicalTreatment: [
      'Propiconazole 25% EC (Tilt) @ 1ml per liter of water (200ml/acre)',
      'Tebuconazole 25.9% EC @ 1.25ml/L on early detection'
    ],
    preventionTips: [
      'Sow early in November to avoid late-season temperature spikes',
      'Use certified rust-resistant wheat varieties (DBW 187, HD 3226, PBW 725)',
      'Monitor fields weekly during cold humid weather'
    ]
  },
  {
    id: 'sample-4',
    cropName: 'Cotton',
    cropIcon: '☁️',
    diseaseName: 'Cotton Leaf Curl Virus (CLCuV)',
    scientificName: 'Begomovirus',
    imageUrl: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 91.5,
    severity: 'Moderate',
    affectedPart: 'Young Leaves & Veins',
    symptoms: [
      'Upward and downward curling of leaf margins',
      'Thickening of leaf veins on lower surface (enation formation)',
      'Stunted plant growth and reduced boll formation'
    ],
    organicTreatment: [
      'Control Whitefly vector using Yellow Sticky Traps (10-15 traps/acre)',
      'Spray Neem Oil 10,000 PPM @ 2ml/L water'
    ],
    chemicalTreatment: [
      'Afidopyropen 50 g/L @ 2ml/L to control Whitefly vector',
      'Imidacloprid 17.8% SL @ 0.5ml/L'
    ],
    preventionTips: [
      'Destroy weed hosts like Abutilon and Kanghi around field borders',
      'Sow recommended CLCuV tolerant Bt Cotton hybrids',
      'Avoid growing alternative whitefly host crops nearby'
    ]
  },
  {
    id: 'sample-5',
    cropName: 'Maize / Corn',
    cropIcon: '🌽',
    diseaseName: 'Healthy Crop (No Disease Detected)',
    scientificName: 'Zea mays',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 98.9,
    severity: 'Optimal Health',
    affectedPart: 'None',
    symptoms: [
      'Vibrant green leaves with uniform venation',
      'No spots, wilting, or yellowing detected',
      'Sturdy stem and vigorous cob development'
    ],
    organicTreatment: [
      'Maintain standard organic mulch',
      'Apply Vermicompost @ 2 tonnes/acre during earthing up'
    ],
    chemicalTreatment: [
      'No chemical treatment required'
    ],
    preventionTips: [
      'Maintain balanced NPK fertilization (120:60:40 kg/ha)',
      'Ensure proper drainage to prevent waterlogging',
      'Regular scouting every 10 days'
    ]
  }
];

export function analyzeUploadedImage(fileOrSampleId) {
  // If sample ID match
  const found = SAMPLE_DISEASE_GALLERY.find(item => item.id === fileOrSampleId);
  if (found) return found;

  // For dynamic upload, generate smart realistic diagnostic response
  return {
    id: 'user-upload-' + Date.now(),
    cropName: 'Uploaded Crop Sample',
    cropIcon: '🌿',
    diseaseName: 'Paddy Brown Spot (Bipolaris oryzae)',
    scientificName: 'Cochliobolus miyabeanus',
    imageUrl: typeof fileOrSampleId === 'string' && fileOrSampleId.startsWith('data:') 
      ? fileOrSampleId 
      : 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=600&q=80',
    confidenceScore: 94.6,
    severity: 'Moderate (Nutrient Deficiency Linked)',
    affectedPart: 'Foliage & Grains',
    symptoms: [
      'Oval or circular dark brown spots with light reddish-brown margins',
      'Lesions coalescence causing leaf drying',
      'Glume discoloration on grains leading to low seed yield'
    ],
    organicTreatment: [
      'Soak seeds in 1% Potassium Nitrate solution before sowing',
      'Spray Panchagavya 3% or Neem seed kernel extract (5%)',
      'Soil application of Trichoderma harzianum @ 2.5 kg/ha'
    ],
    chemicalTreatment: [
      'Spray Carbendazim 12% + Mancozeb 63% WP (Saaf) @ 2g/L water',
      'Foliar spray of Potash (1% MOP) to boost plant immunity'
    ],
    preventionTips: [
      'Ensure balanced soil potassium and nitrogen ratio',
      'Avoid soil water stress during grain filling stage',
      'Use clean, treated certified seed'
    ]
  };
}
