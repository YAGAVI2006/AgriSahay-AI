import React, { useState } from 'react';
import { 
  Sprout, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Droplet, 
  DollarSign, 
  Award, 
  RefreshCw,
  ArrowRight,
  Info
} from 'lucide-react';
import { cropRecommendService } from '../services/cropRecommendService';
import { SOIL_TYPES, SEASONS } from '../data/cropsData';

export default function CropRecommendationView({ farmerProfile = {}, selectedLanguage = 'en' }) {
  const isTa = selectedLanguage === 'ta';

  const [formData, setFormData] = useState({
    district: farmerProfile?.district || 'Karur',
    soilType: farmerProfile?.soilType || 'red',
    season: 'Kuruvai',
    waterAvailability: 'canal',
    farmSizeAcres: farmerProfile?.landSizeAcres || 4.5,
    previousCrop: 'Paddy',
    nitrogen: 140,
    phosphorus: 45,
    potassium: 120
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalculating(true);

    cropRecommendService.getRecommendation(formData).then(res => {
      setRecommendationResult(res);
      setIsCalculating(false);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header */}
      <div>
        <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
          <Sparkles size={12} /> {isTa ? 'AI பயிர் பொருத்தம்' : 'AI Crop Suitability Model'}
        </div>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 800 }}>
          {isTa ? '🌾 AI பயிர் பரிந்துரை & மகசூல் வருவாய் திட்டமிடல்' : '🌾 AI Crop Recommendation & Revenue Optimization'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {isTa ? 'மண் வகை, பருவம் மற்றும் நீர்ப்பாசனத்தின் அடிப்படையில் அதிக லாபம் ஈட்டும் பயிரைக் கண்டறியவும்.' : 'Calculate highest-yielding and most profitable crops based on soil, season & water availability.'}
        </p>
      </div>

      {/* Grid: Form on Left, Output Card on Right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
        
        {/* Left: Clean Form */}
        <div className="card-saas">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.65rem' }}>
            {isTa ? 'பண்ணை அளவுருக்கள் உள்ளீடு' : 'Farm Parameters & Soil Profile'}
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'மாவட்டம்' : 'District'}
                </label>
                <input 
                  type="text" 
                  value={formData.district} 
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="input-clean"
                />
              </div>

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
                  <option value="red">Red Loam Soil (செம்மண்)</option>
                  <option value="clay">Clay Loam (களிமண்)</option>
                  <option value="alluvial">Alluvial Basin (வண்டல் மண்)</option>
                  <option value="black">Black Cotton Soil (கரிசல் மண்)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'பருவம்' : 'Season'}
                </label>
                <select 
                  value={formData.season} 
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  className="select-clean"
                  style={{ width: '100%' }}
                >
                  <option value="Kuruvai">Kuruvai (Summer-Monsoon)</option>
                  <option value="Samba">Samba (Late Monsoon)</option>
                  <option value="Navarai">Navarai (Winter)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                  {isTa ? 'பாசன ஆதாரம்' : 'Water Availability'}
                </label>
                <select 
                  value={formData.waterAvailability} 
                  onChange={(e) => setFormData({ ...formData, waterAvailability: e.target.value })}
                  className="select-clean"
                  style={{ width: '100%' }}
                >
                  <option value="canal">Canal Irrigation (Amaravathi / Cauvery)</option>
                  <option value="borewell">Deep Borewell + Drip</option>
                  <option value="well">Open Well</option>
                  <option value="rainfed">Rainfed</option>
                </select>
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
                  {isTa ? 'முந்தைய பயிர்' : 'Previous Crop'}
                </label>
                <input 
                  type="text" 
                  value={formData.previousCrop} 
                  onChange={(e) => setFormData({ ...formData, previousCrop: e.target.value })}
                  className="input-clean"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center', width: '100%' }}>
              {isCalculating ? (
                <>
                  <RefreshCw className="animate-spin" size={16} />
                  <span>{isTa ? 'கணக்கிடுகிறது...' : 'Calculating Crop Suitability...'}</span>
                </>
              ) : (
                <>
                  <Sprout size={16} />
                  <span>{isTa ? 'பரிந்துரையைப் பெறுங்கள்' : 'Run Crop Suitability Algorithm'}</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Right: Output Card */}
        <div className="card-saas" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {recommendationResult ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.85rem' }}>
                <div>
                  <span className="badge badge-green" style={{ marginBottom: '0.25rem' }}>
                    #1 {isTa ? 'சிறந்த பரிந்துரை' : 'Top Recommendation'}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-800)', margin: 0 }}>
                    {recommendationResult.crop || 'Paddy (Kuruvai)'}
                  </h3>
                </div>

                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-sm)', padding: '0.4rem 0.75rem', textAlign: 'right' }}>
                  <span style={{ fontSize: '0.65rem', color: '#047857', fontWeight: 800, display: 'block', textTransform: 'uppercase' }}>Suitability</span>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#065F46' }}>{recommendationResult.suitabilityScore || 94}%</span>
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{isTa ? 'எதிர்பார்க்கப்படும் மகசூல்' : 'Expected Yield'}</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {recommendationResult.expectedYield || '28 Qtl/Acre'}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{isTa ? 'நீர் தேவை' : 'Water Need'}</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#2563EB', marginTop: '0.2rem' }}>
                    {recommendationResult.waterRequirement || '1,200 mm'}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-slate)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{isTa ? 'வருவாய்' : 'Est. Revenue'}</div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#059669', marginTop: '0.2rem' }}>
                    {recommendationResult.estimatedRevenue || '₹68,400/Ac'}
                  </div>
                </div>
              </div>

              {/* Agronomic Reasoning */}
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {isTa ? 'பரிந்துரைக்கான காரணம்' : 'Agronomic Reasoning'}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5, background: 'var(--bg-slate)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary-600)' }}>
                  {recommendationResult.reason || 'Optimal soil pH, seasonal temperature curve and canal irrigation availability in Karur district support vigorous vegetative growth and high grain fill.'}
                </div>
              </div>

            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '320px', textAlign: 'center', color: 'var(--text-muted)', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sprout size={24} />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                {isTa ? 'பரிந்துரை முடிவுகள் இங்கே தோன்றும்' : 'Ready to Run Suitability Algorithm'}
              </div>
              <div style={{ fontSize: '0.8rem', maxWidth: '280px' }}>
                {isTa ? 'இடதுபுற படிவத்தை பூர்த்தி செய்து பொத்தானை அழுத்தவும்.' : 'Submit your farm parameters on the left to calculate top suited crops, expected yield, and estimated revenue.'}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
