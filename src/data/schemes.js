export const GOVERNMENT_SCHEMES = [
  {
    id: 'tniamp',
    title: 'TNIAMP (Tamil Nadu Irrigated Agriculture Modernization Project)',
    category: 'State Water & Crop Subsidy',
    level: 'Tamil Nadu Government',
    icon: '🌊',
    monetaryBenefit: '50% to 100% Subsidy on Seeds, Bio-Inputs & Drip Irrigation',
    states: ['Tamil Nadu', 'All'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'medium', 'large', 'woman', 'sc_st'],
    crops: ['paddy', 'banana', 'sugarcane', 'groundnut', 'turmeric', 'maize', 'coriander', 'mint', 'All'],
    shortDesc: 'State project modernizing Cauvery basin irrigation infrastructure, supplying certified seeds, green manure, drip kits, and farm machinery in Karur & TN districts.',
    eligibility: [
      'Farmers residing in notified river basin sub-watersheds (Cauvery, Amaravathi in Karur)',
      'Individual farmers, Water Users Associations (WUA), and Farmer Producer Organizations (FPOs)'
    ],
    documents: [
      'Chitta / Adangal land ownership extract',
      'Aadhaar Card',
      'Bank passbook copy with IFSC',
      'Small/Marginal Farmer Certificate from Village Administrative Officer (VAO)'
    ],
    applicationSteps: [
      'Apply at local Block Assistant Director of Agriculture (ADA) office in Karur, Kulithalai, or Aravakurichi.',
      'Register on Uzhavan App (உழவன் செயலி) under TNIAMP Subsidy Scheme.',
      'Field verification completed by Agricultural Officer (AO).',
      'Subsidy inputs or direct benefit transfer (DBT) credited directly.'
    ],
    officialLink: 'https://tniamp.tn.gov.in/'
  },
  {
    id: 'tn-agri-dept-schemes',
    title: 'Tamil Nadu Agriculture Department Subsidies & Kuruvai Package',
    category: 'State Agri Subsidy',
    level: 'Tamil Nadu Government',
    icon: '🌾',
    monetaryBenefit: 'Free Paddy Seed Kits + 70% Solar Pump Subsidy',
    states: ['Tamil Nadu', 'All'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'woman', 'sc_st', 'medium', 'large'],
    crops: ['paddy', 'sugarcane', 'banana', 'groundnut', 'cotton', 'turmeric', 'coriander', 'mint', 'All'],
    shortDesc: 'Chief Minister’s special package providing free fertilizer kits (DAP & Zinc), 70% off solar water pumps, and micro-irrigation grants.',
    eligibility: [
      'Small & Marginal farmers of Karur, Delta, and surrounding TN districts',
      '100% micro-irrigation subsidy for small/marginal farmers; 75% for other farmers'
    ],
    documents: [
      'Aadhaar Card',
      'VAO Certificate (Chitta/Adangal)',
      'Bank Account Passbook',
      'Ration Card / Family Card'
    ],
    applicationSteps: [
      'Download Uzhavan Mobile App (உழவன் செயலி) or visit nearest Agricultural Extension Center (AEC).',
      'Select "Agriculture Scheme Subsidies" and submit land details.',
      'VAO verifies landholding and issues coupon.',
      'Collect free seed/fertilizer kits from AEC depot.'
    ],
    officialLink: 'https://www.tnagrisnet.tn.gov.in/'
  },
  {
    id: 'pm-kisan',
    title: 'PM-KISAN Samman Nidhi Yojana',
    category: 'Income Support',
    level: 'Central Government',
    icon: '💰',
    monetaryBenefit: '₹6,000 / year (3 equal installments of ₹2,000)',
    states: ['All', 'Tamil Nadu'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'medium', 'large', 'woman', 'sc_st'],
    crops: ['All'],
    shortDesc: 'Direct income support of ₹6,000 per year transferred directly into the bank account of eligible farmer families.',
    eligibility: [
      'Farmer families holding cultivable land in their names',
      'Valid Aadhaar linked bank account & e-KYC verified',
      'Excludes institutional landholders and high-income tax payers'
    ],
    documents: [
      'Aadhaar Card',
      'Land ownership records (Chitta / Adangal / Patta)',
      'Active Bank Passbook with IFSC',
      'Mobile number linked with Aadhaar'
    ],
    applicationSteps: [
      'Visit official PM-KISAN portal (pmkisan.gov.in) or nearest CSC / e-Sevai Center in Karur.',
      'Click on "New Farmer Registration" and enter Aadhaar details & Tamil Nadu state.',
      'Fill in land detail parameters (Patta No, Survey No, Area).',
      'Upload copy of Chitta & bank passbook page.',
      'Submit form & note Registration Number.'
    ],
    officialLink: 'https://pmkisan.gov.in/'
  },
  {
    id: 'pmfby',
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY Crop Insurance)',
    category: 'Crop Insurance',
    level: 'Central & TN Joint',
    icon: '🛡️',
    monetaryBenefit: 'Up to 90% Premium Subsidy (Farmer pays 1.5%-2%)',
    states: ['All', 'Tamil Nadu'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'medium', 'large', 'woman', 'sc_st'],
    crops: ['paddy', 'sugarcane', 'banana', 'cotton', 'groundnut', 'maize', 'turmeric', 'coriander', 'mint', 'All'],
    shortDesc: 'Comprehensive crop insurance covering yield losses due to non-preventable natural risks (floods, monsoon deficit, unseasonal rain, pest outbreaks).',
    eligibility: [
      'All farmers growing notified crops (Kuruvai/Samba Paddy, Banana, Sugarcane, Cotton) in Karur district',
      'Tenant farmers and sharecroppers are also eligible'
    ],
    documents: [
      'Adangal / Crop Sowing Certificate from VAO',
      'Patta / Land Document copy',
      'Aadhaar Card & Bank Account details'
    ],
    applicationSteps: [
      'Register on pmfby.gov.in, primary agriculture bank, or e-Sevai center within notified cutoff date.',
      'Select Season (Kuruvai / Samba / Thaladi), State (Tamil Nadu), District (Karur).',
      'Enter total crop area cultivated and select insurance company provider.',
      'Pay low farmer share of premium (1.5%-2%) online or at bank counter.'
    ],
    officialLink: 'https://pmfby.gov.in/'
  },
  {
    id: 'kcc',
    title: 'Kisan Credit Card (KCC) & Interest Subvention',
    category: 'Credit & Loans',
    level: 'Central & Banking',
    icon: '💳',
    monetaryBenefit: 'Collateral-Free Loan up to ₹1.6 Lakh @ 4% Effective Interest Rate',
    states: ['All', 'Tamil Nadu'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'medium', 'large', 'woman', 'sc_st'],
    crops: ['All'],
    shortDesc: 'Provides timely low-interest credit for crop cultivation expenses, post-harvest needs, and farm maintenance.',
    eligibility: [
      'All farmers, tenant farmers, oral lessees, and sharecroppers',
      'Self Help Groups (SHGs) or Joint Liability Groups (JLGs) of farmers in Karur'
    ],
    documents: [
      'Duly filled KCC Application Form',
      'Identity Proof (Aadhaar, Voter ID, PAN)',
      'Landholding Chitta verified by VAO',
      'Crop cultivation declaration'
    ],
    applicationSteps: [
      'Obtain KCC application form from any PACS, Commercial, or Regional Rural Bank branch in Karur.',
      'Fill in land and crop cultivation details.',
      'Submit along with Chitta proof.',
      'Bank issues KCC card cum ATM within 14 working days.'
    ],
    officialLink: 'https://www.myscheme.gov.in/schemes/kcc'
  },
  {
    id: 'pmksy',
    title: 'Pradhan Mantri Krishi Sinchayee Yojana (TN Micro-Irrigation 100% Subsidy)',
    category: 'Irrigation Subsidy',
    level: 'Central & TN State',
    icon: '💧',
    monetaryBenefit: '100% Subsidy for Small/Marginal Farmers; 75% for Others',
    states: ['All', 'Tamil Nadu'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'woman', 'sc_st', 'medium', 'large'],
    crops: ['paddy', 'sugarcane', 'banana', 'coconut', 'groundnut', 'cotton', 'maize', 'turmeric', 'tomato', 'onion', 'coriander', 'mint', 'All'],
    shortDesc: 'Full 100% subsidy for installing Drip & Sprinkler irrigation systems for small/marginal farmers in Karur district.',
    eligibility: [
      'Farmers possessing land with assured water source (borewell/canal/well)',
      'Small and Marginal farmers in TN receive 100% subsidy; others 75%'
    ],
    documents: [
      'Land Patta / Chitta extract',
      'VAO Small Farmer Certificate',
      'Electricity connection bill or pump proof',
      'Bank passbook and Aadhaar card'
    ],
    applicationSteps: [
      'Apply online on TN Micro Irrigation portal (tnhorticulture.tn.gov.in) or Uzhavan App.',
      'Select empanelled Drip Irrigation manufacturer company.',
      'Field inspection conducted by Horticulture / Agriculture Officer.',
      'Subsidy system installed at farm site.'
    ],
    officialLink: 'https://tnhorticulture.tn.gov.in/'
  },
  {
    id: 'soil-health-card',
    title: 'Soil Health Card Scheme (SHC - மண் வள அட்டை)',
    category: 'Soil Care & Fertilizer',
    level: 'Central & TN State',
    icon: '🧪',
    monetaryBenefit: 'Free Soil Testing + Customized Soil Nutrient Recommendation',
    states: ['All', 'Tamil Nadu'],
    maxLandAcres: 999,
    farmerCategories: ['marginal', 'small', 'medium', 'large', 'woman', 'sc_st'],
    crops: ['All'],
    shortDesc: 'Provides free soil testing reporting 12 parameters (N, P, K, Organic Carbon, pH, Micronutrients) with corrective dosage for Karur soil types.',
    eligibility: [
      'Every landholding farmer in Karur and Tamil Nadu'
    ],
    documents: [
      'Land Survey / Patta details',
      'Soil sample collection tag with GPS location',
      'Aadhaar card'
    ],
    applicationSteps: [
      'Contact local Block Agriculture Officer or Krishi Vigyan Kendra (KVK) in Karur.',
      'Soil sample collected from your field by department team.',
      'Sample analyzed in lab and Soil Health Card printed with nutrient status.',
      'Download your card online from soilhealth.dac.gov.in or Uzhavan App.'
    ],
    officialLink: 'https://soilhealth.dac.gov.in/'
  }
];

export function recommendSchemes({ state, crop, landSizeAcres, category }) {
  const filtered = GOVERNMENT_SCHEMES.filter(scheme => {
    const stateMatch = scheme.states.includes('All') || scheme.states.includes(state) || !state;
    const cropMatch = scheme.crops.includes('All') || scheme.crops.includes(crop) || !crop;
    return stateMatch && cropMatch;
  });

  return filtered.length > 0 ? filtered : GOVERNMENT_SCHEMES;
}
