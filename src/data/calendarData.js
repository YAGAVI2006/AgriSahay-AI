export const CROP_CALENDARS = {
  coriander: {
    cropName: "Coriander / Kothamalli (கொத்தமல்லி)",
    season: "Short 30-35 Days All-Season Crop",
    totalDuration: "30 - 35 Days",
    months: [
      {
        monthName: "Days 1 - 10 (Sowing & Germination)",
        stageTitle: "Stage 1: Seed Preparation & Bed Sowing",
        status: "Sowing / Sprouting",
        icon: "🌱",
        description: "Split coriander seeds into halves, soak for 12 hours, treat with Trichoderma viride and sow in raised beds.",
        tasks: [
          { id: 'cor-1', text: 'Select split coriander seeds (8-10 kg/acre)', completed: true },
          { id: 'cor-2', text: 'Treat seeds with Trichoderma viride (4g/kg seed) & Azospirillum', completed: true },
          { id: 'cor-3', text: 'Sow in line rows 15cm apart on raised beds and cover with fine sand/FYM', completed: true },
          { id: 'cor-4', text: 'Give light sprinkler mist irrigation morning and evening', completed: false }
        ],
        advisory: "Maintain light topsoil moisture for uniform germination in 6-8 days."
      },
      {
        monthName: "Days 11 - 25 (Vegetative Growth & Bio-Nutrition)",
        stageTitle: "Stage 2: Foliar Boost & Weeding",
        status: "Vegetative",
        icon: "🌿",
        description: "Rapid leaf expansion and bio-stimulant foliar spray.",
        tasks: [
          { id: 'cor-5', text: 'Hand weeding at 12th day post germination', completed: false },
          { id: 'cor-6', text: 'Foliar spray of Panchagavya 3% (30ml/L water) at 15th day to boost green leaf area', completed: false },
          { id: 'cor-7', text: 'Scout for aphids/cutworms; spray Neem Oil 3ml/L if required', completed: false }
        ],
        advisory: "Avoid heavy flooding; sprinkler or drip micro-irrigation is ideal."
      },
      {
        monthName: "Days 26 - 35 (Harvesting & Mandi Transport)",
        stageTitle: "Stage 3: Uprooting & Bundle Packing",
        status: "Harvesting",
        icon: "🧺",
        description: "Uproot tender green coriander plants with roots intact, wash, bundle and transport to market.",
        tasks: [
          { id: 'cor-8', text: 'Give light irrigation 3 hours before uprooting plants', completed: false },
          { id: 'cor-9', text: 'Uproot plants early morning (5:30 AM), wash roots in clean water & bundle in 100g bunches', completed: false },
          { id: 'cor-10', text: 'Transport to Karur Uzhavar Sandhai or Trichy Gandhi Market for fresh morning auction', completed: false }
        ],
        advisory: "Harvest before flower stalk emergence to ensure maximum leafy aroma & top price."
      }
    ]
  },

  mint: {
    cropName: "Mint / Pudina (புதினா)",
    season: "All-Season Multi-Cut Perennial",
    totalDuration: "45 Days Initial / Continuous Cuts",
    months: [
      {
        monthName: "Month 1 (Sucker Planting & Establishment)",
        stageTitle: "Stage 1: Root Sucker Planting & Irrigation",
        status: "Planting",
        icon: "🌱",
        description: "Planting root suckers 15cm x 15cm on raised beds with organic vermicompost.",
        tasks: [
          { id: 'mnt-1', text: 'Select healthy mint root suckers / stem cuttings', completed: true },
          { id: 'mnt-2', text: 'Apply Organic Vermicompost (500kg/acre) during land prep', completed: true },
          { id: 'mnt-3', text: 'Plant suckers spaced 15cm apart and irrigate immediately', completed: false }
        ],
        advisory: "Soil must remain moist for rapid root establishment."
      },
      {
        monthName: "Month 2 onwards (Harvest & Multi-Cutting)",
        stageTitle: "Stage 2: Ratoon Harvesting & Nitrogen Top Dressing",
        status: "Harvesting",
        icon: "✂️",
        description: "Harvest mature leafy stems leaving 2cm root stubble; top dress with Urea.",
        tasks: [
          { id: 'mnt-4', text: 'Harvest leafy shoots 5cm above ground level', completed: false },
          { id: 'mnt-5', text: 'Apply Urea (20kg/acre) + Vermicompost after each cutting', completed: false }
        ],
        advisory: "Subsequent cuts occur every 20-25 days continuously."
      }
    ]
  },

  paddy: {
    cropName: "Paddy / Rice (நெல்)",
    season: "Kuruvai / Samba / Thaladi Seasons",
    totalDuration: "115 - 135 Days",
    months: [
      {
        monthName: "June - July (Kuruvai / Aadi Sowing)",
        stageTitle: "Stage 1: Nursery Raising & Cauvery Land Prep",
        status: "Sowing / Nursery",
        icon: "🌱",
        description: "Prepare Mat Nursery (பாய் நாற்றாங்கால்) or wet nursery bed, seed treatment with Azospirillum & Phosphobacteria.",
        tasks: [
          { id: 'paddy-tn-1', text: 'Select certified short duration seed variety (e.g. ADT 45, ADT 53, ASD 16, TPS 5)', completed: true },
          { id: 'paddy-tn-2', text: 'Treat seeds with Pseudomonas fluorescens (10g/kg seed) & Azospirillum bio-fertilizer', completed: true },
          { id: 'paddy-tn-3', text: 'Sow mat nursery on 1/10th acre for 1 acre main field transplanting', completed: true },
          { id: 'paddy-tn-4', text: 'Apply Farm Yard Manure (FYM 5 tonnes/acre) & Green Manure during plowing', completed: false }
        ],
        advisory: "Maintain 2cm standing water in nursery bed. Spray NSKE 5% against thrips."
      },
      {
        monthName: "August (Avani)",
        stageTitle: "Stage 2: System of Rice Intensification (SRI) & Transplanting",
        status: "Transplanting",
        icon: "🌾",
        description: "Transplant 14-to-18 day young seedlings with single seedling per hill.",
        tasks: [
          { id: 'paddy-tn-5', text: 'Perform field puddling and leveling using cage wheel tractor', completed: false },
          { id: 'paddy-tn-6', text: 'Transplant single young seedling at 25cm x 25cm spacing (SRI technique)', completed: false },
          { id: 'paddy-tn-7', text: 'Apply basal dose: Super Phosphate (150kg/acre) + Potash (25kg/acre) + Zinc Sulphate (10kg)', completed: false }
        ],
        advisory: "Maintain alternate wetting and drying (AWD) to encourage deep root anchor."
      }
    ]
  },

  sugarcane: {
    cropName: "Sugarcane (கரும்பு)",
    season: "Perennial Season",
    totalDuration: "330 - 360 Days",
    months: [
      {
        monthName: "Month 1 (Planting)",
        stageTitle: "Stage 1: Sett Planting & Trench Irrigation",
        status: "Planting",
        icon: "🎋",
        description: "Planting two-eyed sugarcane setts treated with Carbendazim in deep trenches.",
        tasks: [
          { id: 'sug-1', text: 'Select Co 0212 / CoC 24 sugarcane setts', completed: true },
          { id: 'sug-2', text: 'Sett treatment with Carbendazim 2g/L water', completed: true }
        ],
        advisory: "Maintain trench moisture for 100% bud sprouting."
      }
    ]
  },

  banana: {
    cropName: "Banana (வாழை)",
    season: "Perennial Season",
    totalDuration: "330 - 360 Days",
    months: [
      {
        monthName: "Month 1-3",
        stageTitle: "Stage 1: Pit Preparation & Drip Fertigation",
        status: "Planting",
        icon: "🍌",
        description: "Digging 1.5ft x 1.5ft pits, sucker planting, drip lateral layout.",
        tasks: [
          { id: 'ban-1', text: 'Plant tissue culture Grand Naine / Poovan suckers spaced 6ft x 6ft', completed: true }
        ],
        advisory: "Maintain soil moisture. Drench roots with Trichoderma viride against Panama wilt."
      }
    ]
  },

  groundnut: {
    cropName: "Groundnut (நிலக்கடலை)",
    season: "Chithirai / Aadi / Margazhi Pattam",
    totalDuration: "105 - 110 Days",
    months: [
      {
        monthName: "Month 1 (Sowing)",
        stageTitle: "Sowing & Seed Treatment",
        status: "Sowing",
        icon: "🥜",
        description: "Seed treatment with Rhizobium & Trichoderma, sowing in red/sandy loam soil.",
        tasks: [
          { id: 'gnd-1', text: 'Sow TMV 7 groundnut seed kernel @ 55kg/acre', completed: true }
        ],
        advisory: "Gypsum calcium is essential for proper kernel formation."
      }
    ]
  }
};

export function getCalendarForCrop(cropId) {
  if (CROP_CALENDARS[cropId]) {
    return CROP_CALENDARS[cropId];
  }
  if (cropId === 'keerai' || cropId === 'fenugreek_greens' || cropId === 'moringa_greens') {
    return CROP_CALENDARS.coriander;
  }
  return CROP_CALENDARS.paddy;
}
