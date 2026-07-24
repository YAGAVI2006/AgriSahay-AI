import React, { useState, useEffect } from 'react';
import { Sprout, CheckCircle2, Sparkles, Droplets, Clock, TrendingUp, Filter, MapPin } from 'lucide-react';
import { cropRecommendService } from '../services/cropRecommendService';
import { SOIL_TYPES } from '../data/cropsData';

export default function CropRecommendPage({ farmerProfile }) {
  const [selectedSoil, setSelectedSoil] = useState(farmerProfile.soilType || 'red');
  const [selectedSeason, setSelectedSeason] = useState('Kuruvai / Aadi');
  const [waterAvailability, setWaterAvailability] = useState('Cauvery Canal + Drip');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    cropRecommendService.getRecommendations({
      location: { district: farmerProfile.district || 'Karur', state: farmerProfile.state || 'Tamil Nadu' },
      soilType: selectedSoil,
      season: selectedSeason,
      waterAvailability,
      landSizeAcres: farmerProfile.landSizeAcres || 4.5
    }).then(res => {
      setRecommendations(res);
      setLoading(false);
    });
  }, [farmerProfile, selectedSoil, selectedSeason, waterAvailability]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Title Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> AI Location & Soil Matcher
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌾 Smart Crop Recommendation Engine</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Recommends highest yielding & most profitable crops for {farmerProfile.village || 'Mayanur'}, {farmerProfile.district || 'Karur'} ({farmerProfile.state || 'Tamil Nadu'}).
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="card-glass" style={{ padding: '0.65rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-700)' }}>Filter Parameters:</span>
          
          <select 
            value={selectedSoil}
            onChange={(e) => setSelectedSoil(e.target.value)}
            style={{ padding: '0.35rem 0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.8rem', fontWeight: 600 }}
          >
            {SOIL_TYPES.map(sl => (
              <option key={sl.id} value={sl.id}>{sl.name}</option>
            ))}
          </select>

          <select 
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            style={{ padding: '0.35rem 0.65rem', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.8rem', fontWeight: 600 }}
          >
            <option value="Kuruvai / Aadi">Kuruvai Season (June - Sep)</option>
            <option value="Samba / Purattasi">Samba Season (Aug - Jan)</option>
            <option value="Thaladi / Thai">Thaladi Season (Oct - Feb)</option>
          </select>
        </div>
      </div>

      {/* Recommendations List Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {loading ? (
          <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--text-muted)' }}>Analyzing soil chemistry, Cauvery basin rainfall & temperature data...</p>
          </div>
        ) : (
          recommendations.map((rec, idx) => (
            <div 
              key={rec.cropId}
              className="card-glass"
              style={{
                borderLeft: idx === 0 ? '5px solid var(--primary-600)' : '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>
                    {rec.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-900)' }}>{rec.cropName}</h3>
                      {idx === 0 && <span className="badge badge-amber">#1 Top Choice</span>}
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Location: {farmerProfile.district || 'Karur'} District | Soil: {selectedSoil.toUpperCase()}</p>
                  </div>
                </div>

                {/* Suitability Score Gauge */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-600)', lineHeight: 1 }}>
                    {rec.suitabilityScore}%
                  </div>
                  <span className="badge badge-green">Suitability Score</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', margin: '1.25rem 0', background: 'var(--bg-main)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> Growing Duration
                  </span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{rec.growingDuration}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Droplets size={12} /> Water Requirement
                  </span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{rec.waterRequirement}</span>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <TrendingUp size={12} /> Expected Yield
                  </span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-700)' }}>{rec.expectedYield}</span>
                </div>
              </div>

              {/* AI Explanation Text */}
              <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#92400e' }}>
                <strong>🤖 AI Agronomist Reasoning:</strong> {rec.aiExplanation}
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
