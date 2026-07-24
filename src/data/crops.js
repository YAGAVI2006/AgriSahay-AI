export const STATES_AND_DISTRICTS = {
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Bhatinda", "Patiala"],
  "Uttar Pradesh": ["Varanasi", "Lucknow", "Kanpur", "Gorakhpur", "Agra", "Meerut"],
  "Maharashtra": ["Nashik", "Pune", "Nagpur", "Aurangabad", "Ahmednagar", "Solapur"],
  "Andhra Pradesh": ["Guntur", "Krishna", "Godavari", "Kurnool", "Anantapur"],
  "Haryana": ["Karnal", "Hisar", "Ambala", "Rohtak", "Sirsa"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Ujjain", "Jabalpur", "Hoshangabad"],
  "Gujarat": ["Rajkot", "Surat", "Ahmedabad", "Vadodara", "Junagadh"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Ganganagar", "Udaipur"],
  "Karnataka": ["Belagavi", "Mandya", "Mysuru", "Dharwad", "Shimoga"],
  "Tamil Nadu": ["Thanjavur", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  "Bihar": ["Patna", "Muzaffarpur", "Gaya", "Bhagalpur", "Darbhanga"],
  "West Bengal": ["Burdwan", "Hooghly", "Murshidabad", "Nadia", "Bankura"]
};

export const SOIL_TYPES = [
  { id: 'alluvial', name: 'Alluvial Soil (Deficient in N, Rich in Potash)', color: '#D97706' },
  { id: 'black', name: 'Black Cotton Soil (Regur - High Moisture)', color: '#374151' },
  { id: 'red', name: 'Red & Yellow Soil (Iron Rich, Well Drained)', color: '#DC2626' },
  { id: 'clay', name: 'Clayey Soil (High Water Retention)', color: '#78350F' },
  { id: 'sandy', name: 'Sandy Loam (Fast Draining)', color: '#CA8A04' },
  { id: 'loam', name: 'Fertile Loam (Ideal Mix)', color: '#166534' }
];

export const CROP_LIST = [
  { id: 'paddy', name: 'Paddy / Rice (धान)', icon: '🌾', season: 'Kharif', durationDays: 120 },
  { id: 'wheat', name: 'Wheat (गेहूं)', icon: '🌾', season: 'Rabi', durationDays: 135 },
  { id: 'cotton', name: 'Cotton (कपास)', icon: '☁️', season: 'Kharif', durationDays: 160 },
  { id: 'sugarcane', name: 'Sugarcane (गन्ना)', icon: '🎋', season: 'Perennial', durationDays: 330 },
  { id: 'maize', name: 'Maize / Corn (मक्का)', icon: '🌽', season: 'Kharif/Rabi', durationDays: 100 },
  { id: 'mustard', name: 'Mustard (सरसों)', icon: '🌼', season: 'Rabi', durationDays: 110 },
  { id: 'tomato', name: 'Tomato (टमाटर)', icon: '🍅', season: 'All Season', durationDays: 90 },
  { id: 'potato', name: 'Potato (आलू)', icon: '🥔', season: 'Rabi', durationDays: 105 }
];

export const FARMER_CATEGORIES = [
  { id: 'marginal', name: 'Marginal Farmer (< 2.5 Acres / 1 Hectare)' },
  { id: 'small', name: 'Small Farmer (2.5 - 5 Acres / 1-2 Hectares)' },
  { id: 'medium', name: 'Medium Farmer (5 - 10 Acres)' },
  { id: 'large', name: 'Large Farmer (> 10 Acres)' },
  { id: 'woman', name: 'Woman Farmer / Self-Help Group' },
  { id: 'sc_st', name: 'SC / ST Category Farmer' }
];
