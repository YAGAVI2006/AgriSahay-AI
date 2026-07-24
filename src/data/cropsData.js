export const DEFAULT_LOCATION = {
  state: "Tamil Nadu",
  district: "Karur",
  village: "Mayanur",
  taluk: "Kulithalai"
};

export const KARUR_TALUKS = [
  "Karur",
  "Manmangalam",
  "Kulithalai",
  "Aravakurichi",
  "Krishnarayapuram",
  "Kadavur"
];

export const STATES_AND_DISTRICTS = {
  "Tamil Nadu": ["Karur", "Tiruchirappalli", "Dindigul", "Namakkal", "Erode", "Thanjavur", "Salem", "Madurai"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Bhatinda"],
  "Uttar Pradesh": ["Varanasi", "Lucknow", "Kanpur", "Gorakhpur"],
  "Maharashtra": ["Nashik", "Pune", "Nagpur", "Aurangabad"],
  "Andhra Pradesh": ["Guntur", "Krishna", "Godavari", "Kurnool"]
};

export const SOIL_TYPES = [
  { id: 'red', name: 'Red Soil (செம்மண் - Well Drained, Rich in Iron)', color: '#DC2626' },
  { id: 'black', name: 'Black Soil (கரிசல் மண் - Regur, High Water Retention)', color: '#374151' },
  { id: 'alluvial', name: 'Alluvial Soil (வண்டல் மண் - Fertile Cauvery Basin)', color: '#D97706' },
  { id: 'clay', name: 'Clay Soil (களிமண் - Moisture Retentive)', color: '#78350F' },
  { id: 'sandy_loam', name: 'Sandy Loam (மணல் சார்ந்த வண்டல் - Ideal for Greens, Roots & Groundnut)', color: '#CA8A04' }
];

export const CROP_LIST = [
  { id: 'coriander', name: 'Coriander / Kothamalli (கொத்தமல்லி)', icon: '🌿', season: 'All Season / Short 30-40 Days', durationDays: 35 },
  { id: 'mint', name: 'Mint / Pudina (புதினா)', icon: '🌱', season: 'All Season / Perennial Sucker', durationDays: 45 },
  { id: 'keerai', name: 'Amaranthus Spinach / Keerai (அரைக்கீரை / சிறுகீரை)', icon: '🥬', season: 'Short Cycle 25-30 Days', durationDays: 28 },
  { id: 'fenugreek_greens', name: 'Fenugreek Leaves / Venthaya Keerai (வெந்தயக் கீரை)', icon: '☘️', season: 'Short 20-25 Days', durationDays: 22 },
  { id: 'moringa_greens', name: 'Moringa / Drumstick Leaves (முருங்கைக்கீரை)', icon: '🍃', season: 'Perennial Tree Greens', durationDays: 365 },
  { id: 'paddy', name: 'Paddy / Rice (நெல்)', icon: '🌾', season: 'Kuruvai / Samba / Thaladi', durationDays: 120 },
  { id: 'sugarcane', name: 'Sugarcane (கரும்பு)', icon: '🎋', season: 'Perennial', durationDays: 330 },
  { id: 'banana', name: 'Banana (வாழை)', icon: '🍌', season: 'Perennial', durationDays: 360 },
  { id: 'coconut', name: 'Coconut (தென்னை)', icon: '🥥', season: 'Perennial', durationDays: 365 },
  { id: 'groundnut', name: 'Groundnut (நிலக்கடலை)', icon: '🥜', season: 'Chithirai / Aadi', durationDays: 105 },
  { id: 'cotton', name: 'Cotton (பருத்தி)', icon: '☁️', season: 'Kharif / Aadi', durationDays: 160 },
  { id: 'maize', name: 'Maize / Corn (மக்காச்சோளம்)', icon: '🌽', season: 'Kharif / Rabi', durationDays: 100 },
  { id: 'turmeric', name: 'Turmeric (மஞ்சள்)', icon: '🟡', season: 'Vaikasi Sowing', durationDays: 270 },
  { id: 'tomato', name: 'Tomato (தக்காளி)', icon: '🍅', season: 'All Season', durationDays: 90 },
  { id: 'onion', name: 'Onion (வெங்காயம்)', icon: '🧅', season: 'Purattasi / Margazhi', durationDays: 95 }
];

export const IRRIGATION_TYPES = [
  { id: 'drip', name: 'Drip Micro-Irrigation (சொட்டு நீர் பாசனம்)' },
  { id: 'sprinkler', name: 'Sprinkler System (தெளிப்பு நீர் பாசனம்)' },
  { id: 'canal', name: 'Cauvery Canal Irrigation (காவிரி வாய்க்கால் பாசனம்)' },
  { id: 'tube_well', name: 'Borewell / Tube Well (ஆழ்துளை கிணறு பாசனம்)' },
  { id: 'rainfed', name: 'Monsoon Rainfed (மானாவாரி)' }
];

export const FARMER_CATEGORIES = [
  { id: 'marginal', name: 'Marginal Farmer (< 2.5 Acres / 1 Hectare)' },
  { id: 'small', name: 'Small Farmer (2.5 - 5 Acres / 1-2 Hectares)' },
  { id: 'medium', name: 'Medium Farmer (5 - 10 Acres)' },
  { id: 'large', name: 'Large Farmer (> 10 Acres)' },
  { id: 'woman', name: 'Woman Farmer / Self-Help Group' },
  { id: 'sc_st', name: 'SC / ST Category Farmer' }
];
