/**
 * AgriSahay AI - Weather-Aware Actionable Agricultural Rule Engine
 * 
 * Sources:
 * - India Meteorological Department (IMD) Agromet Advisory Services
 * - TNAU Department of Agronomy: Agro-Meteorological Advisory Protocols
 * 
 * Translates quantitative meteorological observations into actionable farm management directives.
 */

export const weatherRuleEngine = {
  
  /**
   * Evaluate meteorological observations and return actionable farming directives
   */
  evaluateWeatherRules(weatherData, farmProfile = {}) {
    const {
      temp = 33,
      humidity = 64,
      rainProbability = 25,
      windSpeedKmh = 14,
      condition = 'Partly Sunny'
    } = weatherData;

    const primaryCrop = (farmProfile.primaryCrop || 'paddy').toLowerCase();
    const directives = [];

    // Rule 1: Precipitation & Spraying Window
    if (rainProbability >= 50) {
      directives.push({
        id: 'rule_rain_high',
        category: 'Spraying & Fertilization',
        categoryTa: 'மருந்து தெளிப்பு & உரமிடுதல்',
        severity: 'HIGH_ALERT',
        icon: '🌧️',
        directive: 'Delay foliar chemical/organic spraying and top-dressing urea for the next 48 hours to prevent wash-off loss; ensure field drainage channels are cleared to prevent water stagnation.',
        directiveTa: 'அடுத்த 48 மணி நேரத்தில் மழை வாய்ப்பு உள்ளதால் இலைவழி மருந்து தெளிப்பு மற்றும் யூரியா இடுவதைத் தவிர்க்கவும். வயல் வடிகால் வாய்க்கால்களை தூர்வாரவும்.',
        scientificRationale: 'IMD Agromet Rule: Foliar contact wash-off occurs if precipitation occurs within 4-6 hours of chemical/bio-formulation application.'
      });
    } else if (rainProbability < 25 && windSpeedKmh <= 15) {
      directives.push({
        id: 'rule_spray_optimal',
        category: 'Foliar Spray Window',
        categoryTa: 'மருந்து தெளிப்பு உகந்த நேரம்',
        severity: 'OPTIMAL',
        icon: '🌿',
        directive: 'Optimal weather window for bio-fertilizer and foliar micronutrient spraying (Panchagavya 3% / Zinc Sulphate). Schedule spraying during early morning (6:30 AM - 9:00 AM) or late afternoon.',
        directiveTa: 'பஞ்சகவ்யா மற்றும் நுண்ணூட்டச் சத்துக்கள் தெளிக்க உகந்த காலநிலை. அதிகாலை 6:30 முதல் 9:00 மணிக்குள் தெளிக்கவும்.',
        scientificRationale: 'Low wind speed (<15 km/h) minimizes chemical droplet drift; early morning stomatal conductance maximizes nutrient absorption.'
      });
    }

    // Rule 2: Temperature & Transpiration / Irrigation
    if (temp >= 35) {
      directives.push({
        id: 'rule_heat_stress',
        category: 'Irrigation & Heat Stress',
        categoryTa: 'பாசனம் & வெப்ப மேலாண்மை',
        severity: 'MEDIUM_ALERT',
        icon: '🌡️',
        directive: 'Elevated daytime temperatures detected. Increase drip irrigation runtime by 20% and schedule cycles strictly between 6:00 AM - 8:30 AM to reduce evapotranspiration losses. Apply paddy straw mulching.',
        directiveTa: 'அதிக வெப்பநிலை உள்ளதால் சொட்டு நீர் பாசன நேரத்தை 20% அதிகரிக்கவும். அதிகாலை 6:00 முதல் 8:30 மணிக்குள் பாசனம் செய்யவும்.',
        scientificRationale: 'Peak noon irrigation in high ambient temps (>35°C) leads to 40% evaporative loss and root-zone thermal shock.'
      });
    } else if (temp <= 22) {
      directives.push({
        id: 'rule_cold_dew',
        category: 'Cold & Dew Management',
        categoryTa: 'பனிப்பொழிவு மேலாண்மை',
        severity: 'INFO',
        icon: '❄️',
        directive: 'Cool morning temperatures and prolonged dew retention. Inspect paddy tillers for sheath rot and blast symptoms; delay morning transplanting until dew evaporates.',
        directiveTa: 'காலை பனிப்பொழிவு அதிகமாக இருப்பதால் இலை கருகல் அறிகுறிகளைக் கண்காணிக்கவும்.',
        scientificRationale: 'Leaf wetness duration >8 hours combined with temps <22°C creates prime sporulation conditions for fungal pathogens.'
      });
    }

    // Rule 3: Humidity & Fungal Pathogen Epidemic Risk
    if (humidity >= 75 && temp >= 24 && temp <= 30) {
      directives.push({
        id: 'rule_fungal_epidemic',
        category: 'Disease Epidemic Risk',
        categoryTa: 'பூஞ்சை நோய் அபாயம்',
        severity: 'HIGH_ALERT',
        icon: '⚠️',
        directive: 'High relative humidity (>75%) coupled with moderate temperatures creates critical risk for Rice Blast / Sigatoka / Powdery Mildew. Initiate prophylactic foliar spray of Pseudomonas fluorescens (10g/L).',
        directiveTa: 'அதிக ஈரப்பதம் இருப்பதால் நெல் குலை நோய் மற்றும் இலைப்புள்ளி நோய் பரவும் அபாயம் உள்ளது. சூடோமோனாஸ் 10 கிராம்/லிட்டர் தெளிக்கவும்.',
        scientificRationale: 'TNAU Plant Pathology Epidemic Forecast Model: RH >75% + temp 26-28°C triggers rapid conidial germination.'
      });
    }

    // Rule 4: High Wind Speed & Canopy Damage
    if (windSpeedKmh >= 20) {
      directives.push({
        id: 'rule_wind_drift',
        category: 'Wind & Mechanical Support',
        categoryTa: 'காற்று & முட்டுக்கொடுத்தல்',
        severity: 'MEDIUM_ALERT',
        icon: '💨',
        directive: 'Strong wind velocities detected. Suspend all knapsack / power spraying to avoid hazardous chemical drift. Provide bamboo propping for banana bunches and sugarcane earthing-up.',
        directiveTa: 'காற்று வேகம் அதிகமாக இருப்பதால் பூச்சிக்கொல்லி தெளிப்பதைத் தவிர்க்கவும். வாழை மரங்களுக்கு முட்டுக்கொடுக்கவும்.',
        scientificRationale: 'Wind speed >20 km/h increases droplet drift radius beyond 5 meters, causing non-target pesticide contamination and mechanical stem lodging.'
      });
    }

    return directives;
  }
};
