import React, { useState, useEffect } from 'react';
import { Sprout, AlertTriangle, ShieldCheck, CheckCircle2, Info, Sparkles, Filter, Calculator } from 'lucide-react';
import { fertilizerService } from '../services/fertilizerService';
import { CROP_LIST } from '../data/cropsData';

export default function FertilizerPage({ farmerProfile }) {
  const [selectedPlant, setSelectedPlant] = useState('coriander');
  const [selectedStage, setSelectedStage] = useState('all');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fertilizerService.getFertilizerDosing({
      crop: selectedPlant,
      soilType: farmerProfile.soilType,
      growthStage: selectedStage,
      landSizeAcres: farmerProfile.landSizeAcres || 4.5
    }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, [selectedPlant, selectedStage, farmerProfile]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Header Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div className="badge badge-green" style={{ marginBottom: '0.35rem' }}>
            <Sparkles size={12} /> Plant-Specific AI Fertilizer Engine
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>🌱 AI Fertilizer Guide & Dosage Calculator</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Select any plant or crop below to get instant exact fertilizer types, NPK ratios, application schedule & organic dosages.
          </p>
        </div>

        <div style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-100)', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-800)' }}>
          📐 Land Size: {farmerProfile.landSizeAcres || 4.5} Acres ({farmerProfile.district || 'Karur'})
        </div>
      </div>

      {/* 🌟 INTERACTIVE PLANT SELECTOR BAR */}
      <div className="card-glass" style={{ border: '2px solid var(--primary-500)', background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--primary-600)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sprout size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              Step 1: Select Your Plant / Crop
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Choose any plant to generate tailored NPK, Organic Compost & Bio-Fertilizer dosages!
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', alignItems: 'center' }}>
          {/* Plant Dropdown */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.35rem' }}>
              Select Plant / Crop Species:
            </label>
            <select 
              value={selectedPlant}
              onChange={(e) => setSelectedPlant(e.target.value)}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-900)' }}
            >
              {CROP_LIST.map(c => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Growth Stage Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.35rem' }}>
              Growth Stage:
            </label>
            <select 
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-light)', background: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}
            >
              <option value="all">All Stages (Full Crop Cycle)</option>
              <option value="basal">Basal Stage (Sowing / Planting)</option>
              <option value="tillering">Vegetative Stage (15-25 Days)</option>
              <option value="flowering">Flowering Stage (40-60 Days)</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="card-glass" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Calculating NPK & organic fertilizer dosages for {selectedPlant.toUpperCase()}...</p>
        </div>
      ) : (
        <>
          {/* Target Plant Banner */}
          <div className="card-glass" style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                AI Fertilizer Plan Generated For:
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '2px 0 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{data.icon}</span> {data.plantName}
              </h3>
              <p style={{ fontSize: '0.825rem', opacity: 0.85, margin: '2px 0 0 0' }}>
                Growth Cycle: {data.growthCycle} | Land Area: {farmerProfile.landSizeAcres || 4.5} Acres
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>
                100% Tailored Dose
              </span>
            </div>
          </div>

          {/* Fertilizer Dosage Cards Stream */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
            {data.recommendations.map((rec, i) => (
              <div key={i} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid var(--primary-600)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span className="badge badge-green">Recommended Fertilizer #{i+1}</span>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-700)' }}>
                      {rec.quantityKg} {rec.unit || 'kg'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-900)', marginBottom: '0.5rem' }}>
                    {rec.type}
                  </h3>

                  <div style={{ background: 'var(--bg-main)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '0.65rem 0.85rem', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Application Schedule</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d97706' }}>{rec.schedule}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                    <strong>Agronomic Purpose:</strong> {rec.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Tips & Handling */}
          <div className="card-glass" style={{ borderLeft: '4px solid #ea580c' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#c2410c', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertTriangle size={20} color="#ea580c" /> Safety & Eco-Friendly Handling Protocols
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {data.safetyTips.map((tip, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', lineHeight: 1.4 }}>
                  <Info size={16} color="#ea580c" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
