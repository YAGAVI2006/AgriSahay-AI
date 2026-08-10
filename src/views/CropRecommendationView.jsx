import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Droplet, 
  RefreshCw, 
  Award, 
  Info, 
  Layers, 
  Calculator, 
  BookOpen 
} from 'lucide-react';
import { cropScoringEngine, WEIGHT_DISTRIBUTION } from '../services/cropScoringEngine';

export default function CropRecommendationView({ farmerProfile = {}, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';

  const [formData, setFormData] = useState({
    district: farmerProfile?.district || 'Karur',
    soilType: farmerProfile?.soilType || 'red',
    soilPh: 6.8,
    season: 'Kuruvai',
    waterSource: 'canal',
    farmSizeAcres: farmerProfile?.landSizeAcres || 4.5,
    nitrogen: 50,
    phosphorus: 25,
    potassium: 25,
    temperature: 32
  });

  const [rankedCrops, setRankedCrops] = useState([]);
  const [selectedCropResult, setSelectedCropResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSuitability = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const results = cropScoringEngine.rankAllCrops(formData);
      setRankedCrops(results);
      if (results.length > 0) {
        setSelectedCropResult(results[0]);
      }
      setIsCalculating(false);
    }, 300);
  };

  useEffect(() => {
    calculateSuitability();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateSuitability();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div>
        <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
          <Sparkles size={12} /> {isTa ? 'அறிவியல் பூர்வ பல-காரணி பயிர் பொருத்தம்' : 'Explainable Multi-Criteria Crop Suitability Engine'}
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>
          🌾 {isTa ? 'விளக்கக்கூடிய AI பயிர் பொருத்தம் & மகசூல் தேர்வு' : 'Scientifically Explainable Crop Selection & Revenue Optimization'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {isTa ? 'மண் (30%), பருவம் (25%), நீர் (20%), NPK (15%), காலநிலை (10%) எடையிடப்பட்ட கணித மாதிரி.' : 'Multi-criteria mathematical scoring model: Soil (30%) + Season (25%) + Water (20%) + NPK (15%) + Climate (10%).'}
        </p>
      </div>

      {/* Grid: Form on Left, Output on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
        
        {/* Left Column: Farm Parameters Form */}
        <div className="card-saas">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calculator size={18} color="var(--primary-600)" />
            {isTa ? 'பண்ணை அளவுருக்கள் & மண் ஆய்வு' : 'Farm Soil & Micro-Climate Parameters'}
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'மண் வகை' : 'Soil Type'}
                </label>
                <select 
                  value={formData.soilType} 
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="select-clean"
                  style={{ width: '100%' }}
                >
                  <option value="red">Red Loam (செம்மண்)</option>
                  <option value="alluvial">Alluvial Basin (வண்டல் மண்)</option>
                  <option value="clay">Clay Loam (களிமண்)</option>
                  <option value="black">Black Cotton (கரிசல் மண்)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'மண்ணின் pH அளவு' : 'Soil pH Level'}
                </label>
                <input 
                  type="number" 
                  step="0.1" 
                  min="4.5" 
                  max="9.5"
                  value={formData.soilPh} 
                  onChange={(e) => setFormData({ ...formData, soilPh: parseFloat(e.target.value) || 7.0 })}
                  className="input-clean"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'பருவம்' : 'Agro-Climate Season'}
                </label>
                <select 
                  value={formData.season} 
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  className="select-clean"
                  style={{ width: '100%' }}
                >
                  <option value="Kuruvai">Kuruvai (Summer-Monsoon)</option>
                  <option value="Samba">Samba (Late Monsoon / Thaladi)</option>
                  <option value="Navarai">Navarai (Winter)</option>
                  <option value="Year-Round">Year-Round (ஆண்டு முழுவதும்)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'பாசன வசதி' : 'Water Availability'}
                </label>
                <select 
                  value={formData.waterSource} 
                  onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
                  className="select-clean"
                  style={{ width: '100%' }}
                >
                  <option value="canal">Canal (Amaravathi / Cauvery Basin)</option>
                  <option value="borewell">Deep Borewell + Drip Fertigation</option>
                  <option value="well">Open Irrigation Well</option>
                  <option value="rainfed">Rainfed (மானாவாரி)</option>
                </select>
              </div>
            </div>

            {/* Soil NPK Input Row */}
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                {isTa ? 'மண் பரிசோதனை N-P-K அளவு (கிலோ/ஏக்கர்)' : 'Soil Test N-P-K Values (kg/acre)'}
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Nitrogen (N)</span>
                  <input 
                    type="number" 
                    value={formData.nitrogen} 
                    onChange={(e) => setFormData({ ...formData, nitrogen: parseInt(e.target.value) || 0 })}
                    className="input-clean"
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Phosphorus (P)</span>
                  <input 
                    type="number" 
                    value={formData.phosphorus} 
                    onChange={(e) => setFormData({ ...formData, phosphorus: parseInt(e.target.value) || 0 })}
                    className="input-clean"
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Potassium (K)</span>
                  <input 
                    type="number" 
                    value={formData.potassium} 
                    onChange={(e) => setFormData({ ...formData, potassium: parseInt(e.target.value) || 0 })}
                    className="input-clean"
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'நில அளவு (ஏக்கர்)' : 'Farm Size (Acres)'}
                </label>
                <input 
                  type="number" 
                  step="0.5" 
                  value={formData.farmSizeAcres} 
                  onChange={(e) => setFormData({ ...formData, farmSizeAcres: parseFloat(e.target.value) || 1 })}
                  className="input-clean"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'வெப்பநிலை (°C)' : 'Average Temp (°C)'}
                </label>
                <input 
                  type="number" 
                  value={formData.temperature} 
                  onChange={(e) => setFormData({ ...formData, temperature: parseInt(e.target.value) || 30 })}
                  className="input-clean"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center', width: '100%' }}>
              {isCalculating ? (
                <>
                  <RefreshCw className="animate-spin" size={16} />
                  <span>{isTa ? 'மதிப்பீடு கணக்கிடுகிறது...' : 'Computing Mathematical Suitability...'}</span>
                </>
              ) : (
                <>
                  <Calculator size={16} />
                  <span>{isTa ? 'பொருத்தத்தைக் கணக்கிடு' : 'Calculate Explainable Suitability'}</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right Column: Explainable Suitability Result Card */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {selectedCropResult && (
            <>
              {/* Header Title & Score */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem' }}>
                <div>
                  <span className="badge badge-green" style={{ marginBottom: '0.25rem' }}>
                    #1 Top Match • {selectedCropResult.scientificName}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--primary-800)', margin: 0 }}>
                    {isTa ? selectedCropResult.cropNameTa : selectedCropResult.cropName}
                  </h3>
                </div>

                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.85rem', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', color: '#047857', fontWeight: 800, display: 'block', textTransform: 'uppercase' }}>Total Suitability</span>
                  <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#065F46' }}>{selectedCropResult.totalScore}%</span>
                </div>
              </div>

              {/* Exact Weighted Scoring Breakdown */}
              <div style={{ background: 'var(--bg-slate)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={15} color="var(--primary-600)" />
                  {isTa ? 'கணித மாதிரி கூறு மதிப்பெண்கள் (Mathematical Sub-Scores):' : 'Mathematical Component Sub-Scores (Sum = 100%):'}
                </div>

                {/* Direct Point Breakdown Pills */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '0.4rem', marginBottom: '0.85rem' }}>
                  <div style={{ background: '#FFFFFF', padding: '0.45rem', borderRadius: '6px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>Soil (30%)</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: 'var(--primary-700)' }}>{selectedCropResult.breakdown.soil.weighted}/30</span>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '0.45rem', borderRadius: '6px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>Season (25%)</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#0284c7' }}>{selectedCropResult.breakdown.season.weighted}/25</span>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '0.45rem', borderRadius: '6px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>Water (20%)</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#2563EB' }}>{selectedCropResult.breakdown.water.weighted}/20</span>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '0.45rem', borderRadius: '6px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>NPK (15%)</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#d97706' }}>{selectedCropResult.breakdown.npk.weighted}/15</span>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '0.45rem', borderRadius: '6px', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', fontWeight: 700 }}>Climate (10%)</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#7c3aed' }}>{selectedCropResult.breakdown.climate.weighted}/10</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.8rem' }}>
                  
                  {/* Soil 30% */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600 }}>• Soil Compatibility (30% weight):</span>
                      <span style={{ fontWeight: 800, color: 'var(--primary-700)' }}>
                        {selectedCropResult.breakdown.soil.weighted} / 30.0 pts ({selectedCropResult.breakdown.soil.raw}%)
                      </span>
                    </div>
                    <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${(selectedCropResult.breakdown.soil.weighted / 30) * 100}%`, height: '100%', background: 'var(--primary-600)' }} />
                    </div>
                  </div>

                  {/* Season 25% */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600 }}>• Season Compatibility (25% weight):</span>
                      <span style={{ fontWeight: 800, color: '#0284c7' }}>
                        {selectedCropResult.breakdown.season.weighted} / 25.0 pts ({selectedCropResult.breakdown.season.raw}%)
                      </span>
                    </div>
                    <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${(selectedCropResult.breakdown.season.weighted / 25) * 100}%`, height: '100%', background: '#0284c7' }} />
                    </div>
                  </div>

                  {/* Water 20% */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600 }}>• Water Availability (20% weight):</span>
                      <span style={{ fontWeight: 800, color: '#2563EB' }}>
                        {selectedCropResult.breakdown.water.weighted} / 20.0 pts ({selectedCropResult.breakdown.water.raw}%)
                      </span>
                    </div>
                    <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${(selectedCropResult.breakdown.water.weighted / 20) * 100}%`, height: '100%', background: '#2563EB' }} />
                    </div>
                  </div>

                  {/* NPK 15% */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600 }}>• NPK Suitability (15% weight):</span>
                      <span style={{ fontWeight: 800, color: '#d97706' }}>
                        {selectedCropResult.breakdown.npk.weighted} / 15.0 pts ({selectedCropResult.breakdown.npk.raw}%)
                      </span>
                    </div>
                    <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${(selectedCropResult.breakdown.npk.weighted / 15) * 100}%`, height: '100%', background: '#d97706' }} />
                    </div>
                  </div>

                  {/* Climate 10% */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ fontWeight: 600 }}>• Climate & Location (10% weight):</span>
                      <span style={{ fontWeight: 800, color: '#7c3aed' }}>
                        {selectedCropResult.breakdown.climate.weighted} / 10.0 pts ({selectedCropResult.breakdown.climate.raw}%)
                      </span>
                    </div>
                    <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${(selectedCropResult.breakdown.climate.weighted / 10) * 100}%`, height: '100%', background: '#7c3aed' }} />
                    </div>
                  </div>

                </div>

                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '0.75rem', borderTop: '1px dashed var(--border-light)', paddingTop: '0.4rem', fontFamily: 'monospace' }}>
                  Score = ({selectedCropResult.breakdown.soil.weighted}) + ({selectedCropResult.breakdown.season.weighted}) + ({selectedCropResult.breakdown.water.weighted}) + ({selectedCropResult.breakdown.npk.weighted}) + ({selectedCropResult.breakdown.climate.weighted}) = {selectedCropResult.totalScore}%
                </div>
              </div>

              {/* Economic & Yield Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Expected Yield</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {selectedCropResult.expectedYieldPerAcre}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Water Need</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2563EB', marginTop: '0.2rem' }}>
                    {selectedCropResult.waterRequirement}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>Est. Total Revenue</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#059669', marginTop: '0.2rem' }}>
                    {selectedCropResult.totalEstimatedRevenue}
                  </div>
                </div>
              </div>

              {/* Agronomic Reasoning & Citation */}
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Agronomic Explanation & Research Citation:
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-body)', lineHeight: 1.5, background: 'var(--bg-slate)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-600)' }}>
                  <p>{selectedCropResult.reasoning}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    📖 <strong>Source Citation:</strong> {selectedCropResult.citation}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--primary-700)', marginTop: '0.25rem' }}>
                    🌱 <strong>TNAU Recommended Varieties:</strong> {selectedCropResult.recommendedVarieties.join(', ')}
                  </p>
                </div>
              </div>

              {/* Ranking of Other Suited Crops */}
              {rankedCrops.length > 1 && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Alternative Suited Crops in Ranking:
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {rankedCrops.slice(1, 4).map((rc, idx) => (
                      <button
                        key={rc.cropId}
                        onClick={() => setSelectedCropResult(rc)}
                        style={{
                          background: 'var(--bg-slate)',
                          border: '1px solid var(--border-light)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.4rem 0.65rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem'
                        }}
                      >
                        <span style={{ fontWeight: 700 }}>#{idx + 2} {rc.cropName.split(' ')[0]}</span>
                        <span style={{ color: 'var(--primary-600)', fontWeight: 800 }}>{rc.totalScore}%</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </>
          )}
        </div>

      </div>

    </div>
  );
}
